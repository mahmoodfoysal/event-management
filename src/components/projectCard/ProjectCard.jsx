"use client";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100 flex flex-col">
        {/* Image Container */}
        <div className="h-64 overflow-hidden relative">
          <img
            src={project.img}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
            alt={project.name}
          />
          {/* Floating Category Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-sm">
            {project.category}
          </div>
        </div>

        {/* Content Container */}
        <div className="p-8 flex-grow flex flex-col">
          <p className="text-orange-500 font-black text-[10px] uppercase tracking-widest mb-2">
            {project.type}
          </p>

          <h3 className="text-xl font-bold text-slate-900 flex justify-between items-start mb-3">
            <span className="leading-tight">{project.name}</span>
          </h3>

          {/* NEW: Short Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
            {project.description}
          </p>

          {/* Date and Location Info */}
          <div className="mt-auto space-y-2 border-t border-slate-50 pt-4">
            <div className="flex items-center text-slate-500 text-xs font-medium">
              <span className="mr-2 opacity-70">📍</span>
              {project.location}
            </div>
            <div className="flex items-center text-slate-400 text-[11px] font-medium">
              <span className="mr-2 opacity-70">📅</span>
              {new Date(project.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <Link href={`/projects/${project.id}`}>
              <button className="btn btn-ghost btn-sm rounded-xl w-full font-bold text-slate-500 hover:text-orange-600 capitalize">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
