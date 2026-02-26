"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiPlus, FiTrash2, FiSave, FiMessageSquare, FiImage, FiFileText } from "react-icons/fi";
import Image from "next/image";

const initialJobs = [
  { id: 1, title: "Brake Pad Replacement", car: "2018 Honda Civic", images: ["https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop"] },
  { id: 2, title: "Engine Diagnostics", car: "2020 Ford F-150", images: ["https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop"] },
];

const initialComments = [
  { id: 1, author: "John D.", text: "David was super fast and fixed my brakes in my driveway!", status: "approved" },
  { id: 2, author: "Sarah M.", text: "Highly recommend. Very professional.", status: "pending" },
];

export default function ContentManager() {
  const [jobs, setJobs] = useState(initialJobs);
  const [comments, setComments] = useState(initialComments);
  const [info, setInfo] = useState({ phone: "(403) 555-0199", email: "david@mrmech.ca", about: "Over 45 years of experience fixing cars in Calgary." });

  const handleDeleteJob = (id: number) => setJobs(jobs.filter(j => j.id !== id));
  const handleApproveComment = (id: number) => setComments(comments.map(c => c.id === id ? { ...c, status: "approved" } : c));
  const handleDeleteComment = (id: number) => setComments(comments.filter(c => c.id !== id));

  return (
    <div className="space-y-4">
      {/* 1. Recent Jobs & Images */}
      <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2"><FiImage className="text-blue-600" /> Recent Jobs & Images</h2>
          <button className="flex items-center gap-1 bg-gray-900 hover:bg-gray-800 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
            <FiPlus size={14} /> Add Job
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {jobs.map((job) => (
            <div key={job.id} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50/50 group">
              <div className="relative w-14 h-10 rounded-md overflow-hidden shrink-0 bg-gray-200">
                <Image src={job.images[0]} alt={job.title} fill className="object-cover" sizes="56px" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-sm truncate">{job.title}</h3>
                <p className="text-xs text-gray-500 truncate">{job.car}</p>
              </div>
              <button onClick={() => handleDeleteJob(job.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors shrink-0">
                <FiTrash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 2. User Comments */}
      <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4"><FiMessageSquare className="text-green-600" /> User Comments & Reviews</h2>
        <div className="space-y-2">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50/50">
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 font-medium">"{comment.text}"</p>
                <p className="text-xs text-gray-500 mt-0.5">- {comment.author} • <span className={comment.status === 'approved' ? 'text-green-600' : 'text-orange-500'}>{comment.status}</span></p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                {comment.status === 'pending' && (
                  <button onClick={() => handleApproveComment(comment.id)} className="px-3 py-1.5 text-xs font-medium text-green-700 bg-green-100 hover:bg-green-200 rounded-lg transition-colors">Approve</button>
                )}
                <button onClick={() => handleDeleteComment(comment.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. General Info & Text Content */}
      <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2"><FiFileText className="text-orange-500" /> Website Text & Info</h2>
          <button className="flex items-center gap-1 bg-gray-900 hover:bg-gray-800 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors">
            <FiSave size={14} /> Save
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-700">Phone Number</label>
            <input type="text" value={info.phone} onChange={e => setInfo({...info, phone: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-gray-900 outline-none" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-700">Email Address</label>
            <input type="email" value={info.email} onChange={e => setInfo({...info, email: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-gray-900 outline-none" />
          </div>
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-xs font-semibold text-gray-700">About Section Text</label>
            <textarea value={info.about} onChange={e => setInfo({...info, about: e.target.value})} rows={2} className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-gray-900 outline-none resize-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
