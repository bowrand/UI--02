"use client";

import { useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import { FiPlus, FiTrash2, FiImage, FiEdit2, FiX, FiCheck, FiCpu, FiRefreshCw, FiLoader } from "react-icons/fi";
import { Job, CarouselWork, WebContent } from "@/lib/contentStore";

const fetcher = (url: string) => fetch(url).then(r => r.json());

const BLANK_JOB: Omit<Job, 'id'> = {
  title: "", vehicle: "", location: "", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", before: "", after: "", images: [""],
};
const BLANK_WORK: Omit<CarouselWork, 'id'> = {
  src: "", alt: "", note: "", width: 400, height: 300,
};

type ModalJob = Job & { _isNew?: boolean };
type ModalWork = CarouselWork & { _isNew?: boolean };

export default function ContentManager() {
  const { data, error, mutate } = useSWR<WebContent>("/api/content", fetcher, { refreshInterval: 0 });
  const [saving, setSaving] = useState(false);
  const [editingJob, setEditingJob] = useState<ModalJob | null>(null);
  const [editingWork, setEditingWork] = useState<ModalWork | null>(null);

  if (error) return (
    <div className="p-8 rounded-3xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
      Failed to load content. Check that your Supabase tables exist and environment variables are set.
    </div>
  );
  if (!data) return (
    <div className="p-16 flex flex-col items-center gap-3 text-gray-400">
      <div className="w-6 h-6 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
      <span className="text-sm font-medium">Connecting to database...</span>
    </div>
  );

  // ── Jobs ────────────────────────────────────────────────────────
  const saveJob = async () => {
    if (!editingJob) return;
    setSaving(true);
    try {
      if (editingJob._isNew) {
        const { _isNew, id, ...body } = editingJob;
        const res = await fetch('/api/jobs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
        const newJob = await res.json();
        mutate({ ...data, repairs: [newJob, ...data.repairs] }, false);
      } else {
        const { _isNew, ...body } = editingJob;
        const res = await fetch(`/api/jobs/${editingJob.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
        const updated = await res.json();
        mutate({ ...data, repairs: data.repairs.map(j => j.id === updated.id ? updated : j) }, false);
      }
      setEditingJob(null);
    } catch { alert("Error saving job"); }
    finally { setSaving(false); }
  };

  const removeJob = async (id: string | number) => {
    if (!confirm("Remove this job?")) return;
    await fetch(`/api/jobs/${id}`, { method: 'DELETE' });
    mutate({ ...data, repairs: data.repairs.filter(j => j.id !== id) }, false);
  };

  // ── Works ───────────────────────────────────────────────────────
  const saveWork = async () => {
    if (!editingWork) return;
    setSaving(true);
    try {
      if (editingWork._isNew) {
        const { _isNew, id, ...body } = editingWork;
        const res = await fetch('/api/works', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
        const newWork = await res.json();
        mutate({ ...data, recentWorks: [newWork, ...data.recentWorks] }, false);
      } else {
        const { _isNew, ...body } = editingWork;
        const res = await fetch(`/api/works/${editingWork.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
        const updated = await res.json();
        mutate({ ...data, recentWorks: data.recentWorks.map(w => w.id === updated.id ? updated : w) }, false);
      }
      setEditingWork(null);
    } catch { alert("Error saving carousel item"); }
    finally { setSaving(false); }
  };

  const removeWork = async (id: string | number) => {
    if (!confirm("Remove this carousel image?")) return;
    await fetch(`/api/works/${id}`, { method: 'DELETE' });
    mutate({ ...data, recentWorks: data.recentWorks.filter(w => w.id !== id) }, false);
  };

  const generateAlt = (note: string) =>
    `Professional mobile mechanic service in Calgary: ${note}. On-site automotive repair by MrMech.`;

  // ── Render ──────────────────────────────────────────────────────
  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-20">

      {/* Header */}
      <div className="border-b border-gray-100 pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-black">Content Studio</h1>
        <p className="text-sm text-gray-400 mt-0.5 font-medium">Edits save instantly to Supabase · live on homepage in seconds</p>
      </div>

      {/* ── Recent Jobs Grid ─────────────────────────────────────── */}
      <section className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.06)] border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-base font-bold text-black flex items-center gap-2"><FiImage className="text-gray-400" /> Recent Jobs</h2>
            <p className="text-xs text-gray-400 mt-0.5">Shown in the repairs grid on the homepage</p>
          </div>
          <button
            onClick={() => setEditingJob({ id: '', ...BLANK_JOB, _isNew: true })}
            className="flex items-center gap-1.5 bg-black text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all"
          >
            <FiPlus size={15} /> Add Job
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.repairs.map(job => (
            <div key={String(job.id)} className="group flex items-center gap-3 p-3 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-gray-200">
                {job.images?.[0] && <Image src={job.images[0]} alt={job.title} fill className="object-cover" sizes="56px" unoptimized />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-black text-sm truncate">{job.title}</p>
                <p className="text-xs text-gray-500 truncate">{job.vehicle} · {job.location}</p>
              </div>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => setEditingJob({ ...job, _isNew: false })} className="p-2 bg-white rounded-lg shadow-sm text-gray-500 hover:text-black transition-colors"><FiEdit2 size={14} /></button>
                <button onClick={() => removeJob(job.id)} className="p-2 bg-white rounded-lg shadow-sm text-gray-500 hover:text-red-500 transition-colors"><FiTrash2 size={14} /></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Carousel Works ───────────────────────────────────────── */}
      <section className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.06)] border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-base font-bold text-black flex items-center gap-2"><FiImage className="text-gray-400" /> Recent Work Carousel</h2>
            <p className="text-xs text-gray-400 mt-0.5">Scroll marquee near the bottom of the homepage</p>
          </div>
          <button
            onClick={() => setEditingWork({ id: '', ...BLANK_WORK, _isNew: true })}
            className="flex items-center gap-1.5 bg-black text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all"
          >
            <FiPlus size={15} /> Add Image
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {data.recentWorks.map(work => (
            <div key={String(work.id)} className="group relative rounded-2xl overflow-hidden aspect-video bg-gray-100 border border-gray-200">
              {work.src && <Image src={work.src} alt={work.alt || ''} fill className="object-cover" sizes="200px" unoptimized />}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <button onClick={() => setEditingWork({ ...work, _isNew: false })} className="p-2 bg-white rounded-lg text-black hover:scale-105 transition-transform"><FiEdit2 size={13} /></button>
                <button onClick={() => removeWork(work.id)} className="p-2 bg-red-500 rounded-lg text-white hover:scale-105 transition-transform"><FiTrash2 size={13} /></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Job Modal ─────────────────────────────────────────────── */}
      {editingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-xl flex flex-col max-h-[90vh] overflow-hidden">
            <div className="p-6 flex-1 overflow-y-auto space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-black">{editingJob._isNew ? 'New Job' : 'Edit Job'}</h3>
                <button onClick={() => setEditingJob(null)} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"><FiX size={16} /></button>
              </div>
              {[
                { label: 'Job Title', key: 'title', placeholder: 'e.g. Brake Pad Replacement' },
                { label: 'Vehicle', key: 'vehicle', placeholder: 'e.g. 2021 Ford F-150' },
                { label: 'Location', key: 'location', placeholder: 'e.g. NW Calgary' },
                { label: 'Issue (Before)', key: 'before', placeholder: 'e.g. Squeaking brakes' },
                { label: 'Result (After)', key: 'after', placeholder: 'e.g. Smooth, silent stopping' },
              ].map(({ label, key, placeholder }) => (
                <div key={key} className="space-y-1">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">{label}</label>
                  <input
                    value={(editingJob as any)[key] || ''}
                    onChange={e => setEditingJob({ ...editingJob, [key]: e.target.value } as ModalJob)}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-black rounded-xl text-sm outline-none transition-all"
                  />
                </div>
              ))}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Image URL</label>
                <input
                  value={editingJob.images?.[0] || ''}
                  onChange={e => setEditingJob({ ...editingJob, images: [e.target.value] } as ModalJob)}
                  placeholder="https://..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-black rounded-xl text-sm outline-none transition-all"
                />
              </div>
              {editingJob.images?.[0] && (
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
                  <Image src={editingJob.images[0]} alt="preview" fill className="object-cover" sizes="500px" unoptimized />
                </div>
              )}
            </div>
            <div className="p-5 bg-gray-50 border-t border-gray-100 flex justify-end gap-2">
              <button onClick={() => setEditingJob(null)} className="px-4 py-2.5 rounded-xl font-semibold text-gray-500 hover:bg-gray-200 transition-colors text-sm">Cancel</button>
              <button onClick={saveJob} disabled={saving} className="px-5 py-2.5 rounded-xl font-bold bg-black text-white hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm disabled:opacity-60">
                {saving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <FiCheck size={15} />}
                {editingJob._isNew ? 'Create Job' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Carousel Modal ─────────────────────────────────────────── */}
      {editingWork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-xl flex flex-col max-h-[90vh] overflow-hidden">
            <div className="p-6 flex-1 overflow-y-auto space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-black">{editingWork._isNew ? 'Add Carousel Image' : 'Edit Carousel Image'}</h3>
                <button onClick={() => setEditingWork(null)} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"><FiX size={16} /></button>
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Image URL</label>
                <input value={editingWork.src} onChange={e => setEditingWork({ ...editingWork, src: e.target.value } as ModalWork)} placeholder="https://..." className="w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-black rounded-xl text-sm outline-none transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Hover Note</label>
                <textarea value={editingWork.note} onChange={e => setEditingWork({ ...editingWork, note: e.target.value } as ModalWork)} rows={2} className="w-full px-4 py-3 bg-gray-50 border border-gray-100 focus:border-black rounded-xl text-sm outline-none transition-all resize-none" placeholder="Brief description shown on hover" />
              </div>

              {/* Auto Alt-Text Generator */}
              <div className="p-5 bg-black rounded-2xl space-y-3 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-white/5"><FiCpu size={90} /></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                      <FiRefreshCw size={10} className="text-blue-400" /> Auto Alt Text (SEO + Accessibility)
                    </label>
                    <button
                      onClick={() => setEditingWork({ ...editingWork, alt: generateAlt(editingWork.note || editingWork.src) } as ModalWork)}
                      className="text-[10px] bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1"
                    >
                      ✦ Generate
                    </button>
                  </div>
                  <textarea
                    value={editingWork.alt}
                    onChange={e => setEditingWork({ ...editingWork, alt: e.target.value } as ModalWork)}
                    rows={2}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-white/30 text-white rounded-xl text-sm outline-none resize-none placeholder-gray-600"
                    placeholder="SEO-friendly alt text..."
                  />
                  <p className="text-[10px] text-gray-600 mt-1.5">Good alt text boosts Google image rankings and accessibility scores.</p>
                </div>
              </div>

              {editingWork.src && (
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
                  <Image src={editingWork.src} alt="preview" fill className="object-cover" sizes="500px" unoptimized />
                </div>
              )}
            </div>
            <div className="p-5 bg-gray-50 border-t border-gray-100 flex justify-end gap-2">
              <button onClick={() => setEditingWork(null)} className="px-4 py-2.5 rounded-xl font-semibold text-gray-500 hover:bg-gray-200 transition-colors text-sm">Cancel</button>
              <button onClick={saveWork} disabled={saving} className="px-5 py-2.5 rounded-xl font-bold bg-black text-white hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm disabled:opacity-60">
                {saving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <FiCheck size={15} />}
                {editingWork._isNew ? 'Add Image' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
