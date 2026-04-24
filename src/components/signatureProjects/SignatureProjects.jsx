"use client";

import React, { useEffect, useState } from "react";
import { projects } from "@/data/events";
import Link from "next/link";

const SignatureProjects = () => {

    const [projectList, setProjectList] = useState(projects);
      const [randomProjects, setRandomProjects] = useState([]);
  
      useEffect(() => {
      const getRandomItems = (arr, count) => {
        const result = [];
        const usedIndices = new Set();
  
        while (result.length < count && usedIndices.size < arr?.length) {
          const index = Math.floor(Math.random() * arr?.length);
          if (!usedIndices.has(index)) {
            usedIndices.add(index);
            result.push(arr[index]);
          }
        }
  
        return result;
      };
  
      setTimeout(() => {
        setRandomProjects(getRandomItems(projectList, 3));
      }, 0);
    }, [projectList]);

  return (
    <>
<section className="py-24 px-4 lg:px-12 bg-slate-50">
  <div className="max-w-7xl mx-auto">
    {/* --- Section Header --- */}
    <div className="text-center mb-16 space-y-4">
      <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900">
        Successful <span className="text-orange-500">Projects</span>
      </h2>
      <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
    </div>

    {/* --- Projects Grid --- */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {randomProjects.map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100 flex flex-col"
        >
          {/* Image Container */}
          <div className="h-64 overflow-hidden relative">
            <img
              src={item.img}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              alt={item.name}
            />
            {/* Floating Category Badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-sm">
              {item.category}
            </div>
          </div>

          {/* Content Container */}
          <div className="p-8 flex-grow flex flex-col">
            <p className="text-orange-500 font-black text-[10px] uppercase tracking-widest mb-2">
              {item.type}
            </p>
            
            <h3 className="text-xl font-bold text-slate-900 flex justify-between items-start mb-3">
              <span className="leading-tight">{item.name}</span>

            </h3>

            {/* NEW: Short Description */}
            <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
              {item.description}
            </p>

            {/* Date and Location Info */}
            <div className="mt-auto space-y-2 border-t border-slate-50 pt-4">
              <div className="flex items-center text-slate-500 text-xs font-medium">
                <span className="mr-2 opacity-70">📍</span>
                {item.location}
              </div>
              <div className="flex items-center text-slate-400 text-[11px] font-medium">
                <span className="mr-2 opacity-70">📅</span>
                {new Date(item.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
                          <button className="btn btn-ghost btn-sm rounded-xl w-full font-bold text-slate-500 hover:text-orange-600 capitalize">
              View Details
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
                      <div className="text-center mt-12">
          <Link href="/projects"><button className="btn btn-ghost text-orange-500 font-bold text-[20px]">View More →</button></Link>
        </div>
  </div>
</section>
    </>
  );
};

export default SignatureProjects;
