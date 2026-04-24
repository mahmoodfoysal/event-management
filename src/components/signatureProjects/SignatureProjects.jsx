"use client";

import React, { useEffect, useState } from "react";
import { projects } from "@/data/events";
import Link from "next/link";
import ProjectCard from "../projectCard/ProjectCard";

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
              <ProjectCard key={index} project={item} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects">
              <button className="btn btn-ghost text-orange-500 font-bold text-[20px]">
                View More →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignatureProjects;
