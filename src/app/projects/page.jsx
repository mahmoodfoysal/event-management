"use client";
import React, { useState } from "react";
import { projects } from "@/data/events";
import ProjectCard from "@/components/projectCard/ProjectCard";

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
              From high-stakes tech conferences to immersive cultural festivals,
              we have delivered over 12+ world-class experiences. Explore our
              portfolio of past events where precision planning meets creative
              excellence.
            </p>
          </div>

          {/* --- Projects Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((item, index) => (
              <ProjectCard key={index} project={item} />
            ))}
          </div>

          {/* --- Pagination --- */}
          <div className="flex justify-center mt-12 gap-2 flex-wrap">
            {/* Prev */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
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
