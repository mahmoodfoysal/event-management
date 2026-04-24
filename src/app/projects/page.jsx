"use client";
import React, { useState } from 'react';
import { projects } from "@/data/events";

const Pages = () => {
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 6;

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

const totalPages = Math.ceil(projects.length / itemsPerPage);
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
  
  {/* --- Added Paragraph --- */}
  <p className="max-w-2xl mx-auto text-slate-600 text-lg md:text-xl leading-relaxed pt-2">
    From high-stakes tech conferences to immersive cultural festivals, we have 
    delivered over 12+ world-class experiences. Explore our portfolio of 
    past events where precision planning meets creative excellence.
  </p>
</div>

        {/* --- Projects Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100 flex flex-col"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={item.name}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-1 rounded-full text-[10px] font-black uppercase shadow-sm">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-orange-500 font-black text-[10px] uppercase mb-2">
                  {item.type}
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.name}
                </h3>

                <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="mt-auto space-y-2 border-t pt-4">
                  <div className="text-slate-500 text-xs">
                    📍 {item.location}
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    📅{" "}
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>

                  <button className="btn btn-ghost btn-sm w-full font-bold text-slate-500 hover:text-orange-600">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Pagination --- */}
        <div className="flex justify-center mt-12 gap-2 flex-wrap">
          {/* Prev */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.max(prev - 1, 1))
            }
            className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-orange-500 hover:text-white transition"
          >
            Prev
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg transition ${
                currentPage === i + 1
                  ? "bg-orange-500 text-white"
                  : "bg-slate-100 hover:bg-orange-400 hover:text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, totalPages)
              )
            }
            className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-orange-500 hover:text-white transition"
          >
            Next
          </button>
        </div>

      </div>
    </section>
 </>
    );
};

export default Pages;