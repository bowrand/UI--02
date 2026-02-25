"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiPlus, FiTrash2, FiImage, FiCheckCircle, FiTool } from "react-icons/fi";
import Image from "next/image";

const initialJobs = [
  { 
    id: 1, 
    title: "Brake Pad Replacement", 
    car: "2018 Honda Civic", 
    date: "Oct 12, 2025",
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=600&auto=format&fit=crop"
    ]
  },
  { 
    id: 2, 
    title: "Engine Diagnostics", 
    car: "2020 Ford F-150", 
    date: "Oct 10, 2025",
    images: [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop"
    ]
  },
];

const initialImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop", note: "Complete engine diagnostic and repair in NW Calgary." },
  { id: 2, src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=600&auto=format&fit=crop", note: "Front and rear brake pad replacement." },
];

export default function PortfolioManager() {
  const [jobs, setJobs] = useState(initialJobs);
  const [images, setImages] = useState(initialImages);

  const handleDeleteJob = (id: number) => setJobs(jobs.filter(j => j.id !== id));
  const handleDeleteImage = (id: number) => setImages(images.filter(i => i.id !== id));

  return (
    <div className="space-y-8">
      {/* Section 1: Moving Gallery Images */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Moving Gallery Images</h2>
            <p className="text-gray-500 mt-1 text-sm">Manage the photos that slide across the screen.</p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-md shadow-blue-600/20">
            <FiPlus size={18} /> Add Image
          </button>
        </div>

        <div className="space-y-4">
          {images.map((img, index) => (
            <motion.div key={img.id} layout className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow group">
              {/* Numbering */}
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">
                {index + 1}
              </div>
              
              {/* Image Preview */}
              <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                <Image src={img.src} alt="Gallery Image" fill className="object-cover" sizes="80px" />
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{img.note}</p>
                <p className="text-xs text-gray-500 mt-0.5">Displayed in the moving gallery</p>
              </div>

              {/* Actions */}
              <button onClick={() => handleDeleteImage(img.id)} className="p-3 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors" title="Delete Image">
                <FiTrash2 size={20} />
              </button>
            </motion.div>
          ))}
          {images.length === 0 && (
            <div className="text-center py-8 text-gray-500 text-sm">No images added yet.</div>
          )}
        </div>
      </div>

      {/* Section 2: Recent Repairs List */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Recent Repairs List</h2>
            <p className="text-gray-500 mt-1 text-sm">Manage the text-based list of recent jobs.</p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-md shadow-blue-600/20">
            <FiPlus size={18} /> Add Job
          </button>
        </div>

        <div className="space-y-4">
          {jobs.map((job, index) => (
            <motion.div key={job.id} layout className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow group">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                {/* Numbering */}
                <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-lg shrink-0">
                  {index + 1}
                </div>
                
                {/* Details */}
                <div className="flex-1 min-w-0 sm:w-48">
                  <h3 className="font-semibold text-gray-900 text-base truncate">{job.title}</h3>
                  <p className="text-sm text-gray-500 truncate">{job.car} • {job.date}</p>
                </div>
              </div>

              {/* Image Previews (Up to 5) */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 flex-1">
                {job.images && job.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="relative w-16 h-12 rounded-md overflow-hidden shrink-0 bg-gray-100 border border-gray-200">
                    <Image src={img} alt={`Job Image ${imgIndex + 1}`} fill className="object-cover" sizes="64px" />
                  </div>
                ))}
                {(!job.images || job.images.length < 5) && (
                  <button className="w-16 h-12 rounded-md border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-blue-500 hover:border-blue-300 transition-colors shrink-0" title="Add Image (Max 5)">
                    <FiPlus size={16} />
                  </button>
                )}
              </div>

              {/* Actions */}
              <button onClick={() => handleDeleteJob(job.id)} className="p-3 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors shrink-0 self-end sm:self-auto" title="Delete Job">
                <FiTrash2 size={20} />
              </button>
            </motion.div>
          ))}
          {jobs.length === 0 && (
            <div className="text-center py-8 text-gray-500 text-sm">No jobs added yet.</div>
          )}
        </div>
      </div>
    </div>
  );
}
