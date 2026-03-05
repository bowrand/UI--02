"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import useSWR from "swr";
import Image from "next/image";
import {
  FiPlus, FiTrash2, FiEdit2, FiX, FiCheck, FiRefreshCw,
  FiUpload, FiGrid, FiList, FiCpu,
} from "react-icons/fi";
import { Job, CarouselWork, WebContent } from "@/lib/contentStore";

const fetcher = (url: string) => fetch(url).then(r => r.json());

type ModalJob  = Job & { _isNew?: boolean };
type ModalWork = CarouselWork & { _isNew?: boolean };

const blankJob  = (): Omit<Job, "id">          => ({ title: "", vehicle: "", location: "", icon: "", before: "", after: "", images: ["","","","",""] });
const blankWork = (): Omit<CarouselWork, "id"> => ({ src: "", alt: "", note: "", width: 400, height: 300 });

const generateAlt = (note: string) =>
  `Professional mobile mechanic service in Calgary – ${note}. On-site automotive repair by MrMech.`;

// ── tiny reusable input ──────────────────────────────────────────
function Input({ value, onChange, placeholder, className = "" }: {
  value: string; onChange: (v: string) => void; placeholder?: string; className?: string;
}) {
  return (
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className={`h-8 px-2.5 bg-[#F5F5F7] border border-black/[0.07] rounded-lg text-[12px] text-black outline-none focus:border-black/25 focus:bg-white transition-all ${className}`}
    />
  );
}

export default function ContentManager() {
  const { data, error, mutate } = useSWR<WebContent>("/api/content", fetcher, { refreshInterval: 0 });

  const [tab,        setTab]        = useState<"jobs" | "works">("jobs");
  const [viewMode,   setViewMode]   = useState<"list" | "grid">("list");
  const [saving,     setSaving]     = useState(false);
  const [uploading,  setUploading]  = useState(false);
  const [editJob,    setEditJob]    = useState<ModalJob  | null>(null);
  const [editWork,   setEditWork]   = useState<ModalWork | null>(null);
  const [dragOver,   setDragOver]   = useState(-1);
  const [jobOrder,   setJobOrder]   = useState<string[]>([]);
  const [workOrder,  setWorkOrder]  = useState<string[]>([]);
  const dragFrom     = useRef(-1);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const workFileRef  = useRef<HTMLInputElement>(null);
  const uploadSlot   = useRef(0);

  // Load saved order from localStorage
  useEffect(() => {
    try {
      const jo = localStorage.getItem("mm_jobs_order");
      const wo = localStorage.getItem("mm_works_order");
      if (jo) setJobOrder(JSON.parse(jo));
      if (wo) setWorkOrder(JSON.parse(wo));
    } catch { /* ignore */ }
  }, []);

  // Apply ordering to data
  const orderedJobs = useMemo<Job[]>(() => {
    if (!data?.repairs) return [];
    if (!jobOrder.length) return data.repairs;
    const map = Object.fromEntries(data.repairs.map(j => [String(j.id), j]));
    const ordered = jobOrder.map(id => map[id]).filter(Boolean) as Job[];
    const rest = data.repairs.filter(j => !jobOrder.includes(String(j.id)));
    return [...ordered, ...rest];
  }, [data?.repairs, jobOrder]);

  const orderedWorks = useMemo<CarouselWork[]>(() => {
    if (!data?.recentWorks) return [];
    if (!workOrder.length) return data.recentWorks;
    const map = Object.fromEntries(data.recentWorks.map(w => [String(w.id), w]));
    const ordered = workOrder.map(id => map[id]).filter(Boolean) as CarouselWork[];
    const rest = data.recentWorks.filter(w => !workOrder.includes(String(w.id)));
    return [...ordered, ...rest];
  }, [data?.recentWorks, workOrder]);

  // ── Drag helpers ──────────────────────────────────────────────
  function makeDragHandlers<T extends { id: string | number }>(
    items: T[],
    onReorder: (next: T[]) => void
  ) {
    return (idx: number) => ({
      draggable: true as const,
      onDragStart: () => { dragFrom.current = idx; },
      onDragOver:  (e: React.DragEvent) => { e.preventDefault(); setDragOver(idx); },
      onDragLeave: () => setDragOver(-1),
      onDrop:      () => {
        setDragOver(-1);
        const from = dragFrom.current;
        if (from === idx || from < 0) return;
        const next = [...items];
        const [moved] = next.splice(from, 1);
        next.splice(idx, 0, moved);
        onReorder(next);
        dragFrom.current = -1;
      },
    });
  }

  const jobDrag  = makeDragHandlers(orderedJobs,  (next) => {
    const ids = next.map(j => String(j.id));
    setJobOrder(ids);
    localStorage.setItem("mm_jobs_order", JSON.stringify(ids));
  });
  const workDrag = makeDragHandlers(orderedWorks, (next) => {
    const ids = next.map(w => String(w.id));
    setWorkOrder(ids);
    localStorage.setItem("mm_works_order", JSON.stringify(ids));
  });

  // ── CRUD – Jobs ───────────────────────────────────────────────
  const saveJob = async () => {
    if (!editJob || !data) return;
    setSaving(true);
    try {
      if (editJob._isNew) {
        const { _isNew, id, ...body } = editJob;
        const res  = await fetch("/api/jobs", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
        const newJ = await res.json();
        mutate({ ...data, repairs: [newJ, ...data.repairs] }, false);
      } else {
        const { _isNew, ...body } = editJob;
        const res  = await fetch(`/api/jobs/${editJob.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
        const upd  = await res.json();
        mutate({ ...data, repairs: data.repairs.map(j => j.id === upd.id ? upd : j) }, false);
      }
      setEditJob(null);
    } catch { alert("Error saving job"); }
    finally { setSaving(false); }
  };

  const deleteJob = async (id: string | number) => {
    if (!data || !confirm("Remove this job?")) return;
    await fetch(`/api/jobs/${id}`, { method: "DELETE" });
    mutate({ ...data, repairs: data.repairs.filter(j => j.id !== id) }, false);
  };

  // ── CRUD – Works ──────────────────────────────────────────────
  const saveWork = async () => {
    if (!editWork || !data) return;
    setSaving(true);
    try {
      if (editWork._isNew) {
        const { _isNew, id, ...body } = editWork;
        const res  = await fetch("/api/works", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
        const newW = await res.json();
        mutate({ ...data, recentWorks: [newW, ...data.recentWorks] }, false);
      } else {
        const { _isNew, ...body } = editWork;
        const res  = await fetch(`/api/works/${editWork.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
        const upd  = await res.json();
        mutate({ ...data, recentWorks: data.recentWorks.map(w => w.id === upd.id ? upd : w) }, false);
      }
      setEditWork(null);
    } catch { alert("Error saving item"); }
    finally { setSaving(false); }
  };

  const deleteWork = async (id: string | number) => {
    if (!data || !confirm("Remove this carousel image?")) return;
    await fetch(`/api/works/${id}`, { method: "DELETE" });
    mutate({ ...data, recentWorks: data.recentWorks.filter(w => w.id !== id) }, false);
  };

  // ── Image upload – Jobs ───────────────────────────────────────
  const triggerJobUpload = (slot: number) => {
    uploadSlot.current = slot;
    fileInputRef.current?.click();
  };
  const handleJobFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editJob) return;
    setUploading(true);
    try {
      const fd = new FormData(); fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const { url } = await res.json();
      if (url) {
        const imgs = [...(editJob.images || [])];
        imgs[uploadSlot.current] = url;
        setEditJob({ ...editJob, images: imgs });
      }
    } catch { alert("Upload failed"); }
    finally { setUploading(false); if (fileInputRef.current) fileInputRef.current.value = ""; }
  };

  // ── Image upload – Works ──────────────────────────────────────
  const handleWorkFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editWork) return;
    setUploading(true);
    try {
      const fd = new FormData(); fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const { url } = await res.json();
      if (url) setEditWork({ ...editWork, src: url });
    } catch { alert("Upload failed"); }
    finally { setUploading(false); if (workFileRef.current) workFileRef.current.value = ""; }
  };

  // ── Loading / error ───────────────────────────────────────────
  if (error) return (
    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-500 text-[12px]">
      Failed to load content. Check Supabase env vars.
    </div>
  );
  if (!data) return (
    <div className="p-12 flex items-center justify-center gap-2 text-gray-400">
      <span className="w-4 h-4 border-2 border-gray-200 border-t-gray-400 rounded-full animate-spin" />
      <span className="text-[12px]">Loading…</span>
    </div>
  );

  // ── Render ────────────────────────────────────────────────────
  return (
    <div className="max-w-3xl mx-auto space-y-3 pb-16">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[14px] font-semibold text-black">Content Studio</h1>
          <p className="text-[11px] text-gray-400">Changes sync live to mrmech.ca</p>
        </div>
        {/* Tab switcher */}
        <div className="flex items-center bg-[#F5F5F7] rounded-lg p-0.5 gap-0.5 border border-black/[0.06]">
          {(["jobs", "works"] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1 rounded-md text-[11px] font-medium transition-all ${tab === t ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-black"}`}
            >
              {t === "jobs" ? "Jobs" : "Carousel"}
            </button>
          ))}
        </div>
      </div>

      {/* Section panel */}
      <div className="bg-white rounded-xl border border-black/[0.06] shadow-[0_1px_8px_rgba(0,0,0,0.03)] overflow-hidden">
        {/* Section toolbar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-black/[0.05]">
          <span className="text-[11px] font-medium text-gray-600">
            {tab === "jobs"
              ? `${orderedJobs.length} job${orderedJobs.length !== 1 ? "s" : ""}`
              : `${orderedWorks.length} image${orderedWorks.length !== 1 ? "s" : ""}`}
          </span>
          <div className="flex items-center gap-1.5">
            {/* View toggle */}
            <button onClick={() => setViewMode("list")} className={`p-1 rounded-md transition-colors ${viewMode === "list" ? "bg-[#F5F5F7] text-black" : "text-gray-400 hover:text-black"}`}><FiList size={13}/></button>
            <button onClick={() => setViewMode("grid")} className={`p-1 rounded-md transition-colors ${viewMode === "grid" ? "bg-[#F5F5F7] text-black" : "text-gray-400 hover:text-black"}`}><FiGrid size={13}/></button>
            <div className="w-px h-3.5 bg-black/10 mx-0.5" />
            {/* Add */}
            <button
              onClick={() => tab === "jobs"
                ? setEditJob({ id: "", ...blankJob(), _isNew: true })
                : setEditWork({ id: "", ...blankWork(), _isNew: true })
              }
              className="flex items-center gap-1 bg-black text-white px-2.5 py-1 rounded-lg text-[11px] font-semibold hover:bg-gray-800 transition-colors"
            >
              <FiPlus size={11}/> Add
            </button>
          </div>
        </div>

        {/* List view */}
        {viewMode === "list" && tab === "jobs" && (
          <ul className="divide-y divide-black/[0.04]">
            {orderedJobs.length === 0 && (
              <li className="px-4 py-6 text-center text-[11px] text-gray-400">No jobs yet — click Add</li>
            )}
            {orderedJobs.map((job, idx) => (
              <li
                key={String(job.id)}
                className={`flex items-center gap-2.5 px-3 py-1.5 group transition-colors ${dragOver === idx ? "bg-blue-50/60" : "hover:bg-[#FAFAFA]"}`}
                {...jobDrag(idx)}
              >
                <span className="cursor-grab text-gray-300 hover:text-gray-500 text-[10px] select-none shrink-0">⋮⋮</span>
                <div className="relative w-8 h-8 rounded-md overflow-hidden bg-gray-100 shrink-0">
                  {job.images?.[0] && <Image src={job.images[0]} alt={job.title} fill className="object-cover" sizes="32px" unoptimized />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-medium text-black truncate leading-tight">{job.title || <span className="text-gray-400">Untitled</span>}</p>
                  <p className="text-[10px] text-gray-400 truncate">{job.vehicle}{job.location ? ` · ${job.location}` : ""}</p>
                </div>
                <div className="flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => setEditJob({ ...job, images: job.images?.length ? [...job.images, ...Array(5 - job.images.length).fill("")].slice(0, 5) : ["","","","",""], _isNew: false })} className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-black transition-colors"><FiEdit2 size={12}/></button>
                  <button onClick={() => deleteJob(job.id)} className="p-1.5 rounded-md hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"><FiTrash2 size={12}/></button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {viewMode === "grid" && tab === "jobs" && (
          <div className="p-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {orderedJobs.map((job, idx) => (
              <div
                key={String(job.id)}
                className={`group relative rounded-lg overflow-hidden bg-gray-100 aspect-square border border-black/[0.06] cursor-grab ${dragOver === idx ? "ring-1 ring-blue-300" : ""}`}
                {...jobDrag(idx)}
              >
                {job.images?.[0] && <Image src={job.images[0]} alt={job.title} fill className="object-cover" sizes="160px" unoptimized />}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100">
                  <button onClick={() => setEditJob({ ...job, images: job.images?.length ? [...job.images, ...Array(5 - job.images.length).fill("")].slice(0, 5) : ["","","","",""], _isNew: false })} className="p-1.5 bg-white rounded-md text-black"><FiEdit2 size={11}/></button>
                  <button onClick={() => deleteJob(job.id)} className="p-1.5 bg-red-500 rounded-md text-white"><FiTrash2 size={11}/></button>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-1.5">
                  <p className="text-[10px] text-white truncate font-medium">{job.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {viewMode === "list" && tab === "works" && (
          <ul className="divide-y divide-black/[0.04]">
            {orderedWorks.length === 0 && (
              <li className="px-4 py-6 text-center text-[11px] text-gray-400">No carousel images yet — click Add</li>
            )}
            {orderedWorks.map((work, idx) => (
              <li
                key={String(work.id)}
                className={`flex items-center gap-2.5 px-3 py-1.5 group transition-colors ${dragOver === idx ? "bg-blue-50/60" : "hover:bg-[#FAFAFA]"}`}
                {...workDrag(idx)}
              >
                <span className="cursor-grab text-gray-300 hover:text-gray-500 text-[10px] select-none shrink-0">⋮⋮</span>
                <div className="relative w-10 h-7 rounded-md overflow-hidden bg-gray-100 shrink-0">
                  {work.src && <Image src={work.src} alt={work.alt || ""} fill className="object-cover" sizes="40px" unoptimized />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-gray-600 truncate">{work.alt || <span className="italic text-gray-300">No alt text</span>}</p>
                  {work.note && <p className="text-[10px] text-gray-400 truncate">{work.note}</p>}
                </div>
                <div className="flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => setEditWork({ ...work, _isNew: false })} className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-black transition-colors"><FiEdit2 size={12}/></button>
                  <button onClick={() => deleteWork(work.id)} className="p-1.5 rounded-md hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"><FiTrash2 size={12}/></button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {viewMode === "grid" && tab === "works" && (
          <div className="p-3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
            {orderedWorks.map((work, idx) => (
              <div
                key={String(work.id)}
                className={`group relative rounded-lg overflow-hidden bg-gray-100 aspect-video border border-black/[0.06] cursor-grab ${dragOver === idx ? "ring-1 ring-blue-300" : ""}`}
                {...workDrag(idx)}
              >
                {work.src && <Image src={work.src} alt={work.alt || ""} fill className="object-cover" sizes="160px" unoptimized />}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100">
                  <button onClick={() => setEditWork({ ...work, _isNew: false })} className="p-1.5 bg-white rounded-md text-black"><FiEdit2 size={11}/></button>
                  <button onClick={() => deleteWork(work.id)} className="p-1.5 bg-red-500 rounded-md text-white"><FiTrash2 size={11}/></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hint */}
      <p className="text-[10px] text-gray-300 text-center">Drag rows to reorder · order saved in browser</p>

      {/* ── Hidden file inputs ──────────────────────────────────── */}
      <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleJobFileChange} />
      <input ref={workFileRef}  type="file" accept="image/*" className="hidden" onChange={handleWorkFileChange} />

      {/* ══════════════════════════════════════════════════════════
          JOB MODAL
      ══════════════════════════════════════════════════════════ */}
      {editJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/50 backdrop-blur-[2px]"
          onMouseDown={e => e.target === e.currentTarget && setEditJob(null)}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[420px] flex flex-col max-h-[88vh]">

            {/* Modal header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-black/[0.06]">
              <h3 className="text-[13px] font-semibold text-black">{editJob._isNew ? "New Job" : "Edit Job"}</h3>
              <button onClick={() => setEditJob(null)} className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-black transition-colors"><FiX size={14}/></button>
            </div>

            {/* Modal body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
              {/* Title */}
              <Input
                value={editJob.title}
                onChange={v => setEditJob({ ...editJob, title: v })}
                placeholder="Job title"
                className="w-full font-medium"
              />

              {/* Vehicle + Location */}
              <div className="grid grid-cols-2 gap-2">
                <Input value={editJob.vehicle}  onChange={v => setEditJob({ ...editJob, vehicle: v })}  placeholder="Vehicle" className="w-full" />
                <Input value={editJob.location} onChange={v => setEditJob({ ...editJob, location: v })} placeholder="Location" className="w-full" />
              </div>

              {/* Before + After */}
              <div className="grid grid-cols-2 gap-2">
                <Input value={editJob.before} onChange={v => setEditJob({ ...editJob, before: v })} placeholder="Issue (before)" className="w-full" />
                <Input value={editJob.after}  onChange={v => setEditJob({ ...editJob, after: v })}  placeholder="Result (after)"  className="w-full" />
              </div>

              {/* Images */}
              <div>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Images (up to 5)</p>
                <div className="space-y-1.5">
                  {[0, 1, 2, 3, 4].map(i => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="text-[10px] text-gray-300 w-2.5 text-center font-mono shrink-0">{i + 1}</span>
                      <input
                        value={editJob.images?.[i] || ""}
                        onChange={e => {
                          const imgs = [...(editJob.images || ["","","","",""])];
                          imgs[i] = e.target.value;
                          setEditJob({ ...editJob, images: imgs });
                        }}
                        placeholder="Paste URL…"
                        className="flex-1 h-7 px-2 bg-[#F5F5F7] border border-black/[0.07] rounded-md text-[11px] outline-none focus:border-black/20 focus:bg-white transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => triggerJobUpload(i)}
                        disabled={uploading}
                        title="Upload file"
                        className="h-7 w-7 flex items-center justify-center bg-[#F5F5F7] border border-black/[0.07] rounded-md hover:bg-[#EBEBED] transition-colors shrink-0 disabled:opacity-40"
                      >
                        {uploading && uploadSlot.current === i
                          ? <span className="w-3 h-3 border border-gray-400 border-t-gray-700 rounded-full animate-spin"/>
                          : <FiUpload size={10} className="text-gray-500"/>}
                      </button>
                      {editJob.images?.[i] && (
                        <div className="relative w-7 h-7 rounded overflow-hidden bg-gray-100 shrink-0 border border-black/[0.06]">
                          <Image src={editJob.images[i]} alt="" fill className="object-cover" sizes="28px" unoptimized />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal footer */}
            <div className="flex items-center justify-end gap-2 px-4 py-3 border-t border-black/[0.06]">
              <button onClick={() => setEditJob(null)} className="px-3 py-1.5 rounded-lg text-[12px] font-medium text-gray-500 hover:bg-gray-100 transition-colors">Cancel</button>
              <button
                onClick={saveJob}
                disabled={saving}
                className="px-3.5 py-1.5 rounded-lg text-[12px] font-semibold bg-black text-white hover:bg-gray-800 transition-colors flex items-center gap-1.5 disabled:opacity-50"
              >
                {saving ? <span className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin"/> : <FiCheck size={12}/>}
                {editJob._isNew ? "Create" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════
          WORK MODAL
      ══════════════════════════════════════════════════════════ */}
      {editWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/50 backdrop-blur-[2px]"
          onMouseDown={e => e.target === e.currentTarget && setEditWork(null)}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[380px] flex flex-col max-h-[88vh]">

            {/* Modal header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-black/[0.06]">
              <h3 className="text-[13px] font-semibold text-black">{editWork._isNew ? "Add Carousel Image" : "Edit Carousel Image"}</h3>
              <button onClick={() => setEditWork(null)} className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-black transition-colors"><FiX size={14}/></button>
            </div>

            {/* Modal body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2.5">

              {/* Image URL + upload */}
              <div>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1">Image</p>
                <div className="flex gap-1.5">
                  <input
                    value={editWork.src}
                    onChange={e => setEditWork({ ...editWork, src: e.target.value })}
                    placeholder="Paste URL or upload →"
                    className="flex-1 h-8 px-2.5 bg-[#F5F5F7] border border-black/[0.07] rounded-lg text-[12px] outline-none focus:border-black/20 focus:bg-white transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => workFileRef.current?.click()}
                    disabled={uploading}
                    className="h-8 px-2.5 flex items-center gap-1 bg-[#F5F5F7] border border-black/[0.07] rounded-lg text-[11px] font-medium text-gray-500 hover:bg-[#EBEBED] transition-colors shrink-0 disabled:opacity-40"
                  >
                    {uploading ? <span className="w-3 h-3 border border-gray-400 border-t-gray-700 rounded-full animate-spin"/> : <FiUpload size={11}/>}
                    Upload
                  </button>
                </div>
                {editWork.src && (
                  <div className="relative mt-2 aspect-video rounded-lg overflow-hidden bg-gray-100">
                    <Image src={editWork.src} alt="preview" fill className="object-cover" sizes="350px" unoptimized />
                  </div>
                )}
              </div>

              {/* Hover note */}
              <div>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1">Hover note</p>
                <textarea
                  value={editWork.note}
                  onChange={e => setEditWork({ ...editWork, note: e.target.value })}
                  rows={2}
                  placeholder="Brief description shown on hover…"
                  className="w-full px-2.5 py-1.5 bg-[#F5F5F7] border border-black/[0.07] rounded-lg text-[12px] outline-none focus:border-black/20 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Alt text */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide flex items-center gap-1">
                    <FiCpu size={9}/> Alt Text (SEO)
                  </p>
                  <button
                    type="button"
                    onClick={() => setEditWork({ ...editWork, alt: generateAlt(editWork.note || editWork.src) })}
                    className="text-[10px] text-gray-500 hover:text-black font-medium flex items-center gap-0.5 transition-colors"
                  >
                    <FiRefreshCw size={9}/> Generate
                  </button>
                </div>
                <textarea
                  value={editWork.alt}
                  onChange={e => setEditWork({ ...editWork, alt: e.target.value })}
                  rows={2}
                  placeholder="SEO-friendly alt text…"
                  className="w-full px-2.5 py-1.5 bg-[#F5F5F7] border border-black/[0.07] rounded-lg text-[12px] outline-none focus:border-black/20 focus:bg-white transition-all resize-none"
                />
              </div>
            </div>

            {/* Modal footer */}
            <div className="flex items-center justify-end gap-2 px-4 py-3 border-t border-black/[0.06]">
              <button onClick={() => setEditWork(null)} className="px-3 py-1.5 rounded-lg text-[12px] font-medium text-gray-500 hover:bg-gray-100 transition-colors">Cancel</button>
              <button
                onClick={saveWork}
                disabled={saving}
                className="px-3.5 py-1.5 rounded-lg text-[12px] font-semibold bg-black text-white hover:bg-gray-800 transition-colors flex items-center gap-1.5 disabled:opacity-50"
              >
                {saving ? <span className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin"/> : <FiCheck size={12}/>}
                {editWork._isNew ? "Add" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
