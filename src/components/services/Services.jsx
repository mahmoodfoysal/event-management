"use client";
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import toast from "react-hot-toast";

const ServicesBento = () => {
  const serviceList = [
    {
      title: "Complete Event Planning",
      desc: "From social gatherings to massive corporate functions, we manage every detail from start to finish.",
      icon: "📋",
      tag: "Strategy",
    },
    {
      title: "Party Rentals Redefined",
      desc: "From tables to premium linens. Specializing in pipe & drape, red carpets, and dynamic lighting.",
      icon: "🪑",
      tag: "Supplies",
    },
    {
      title: "Guest Entertainment",
      desc: " amazing entertainment. We bring top-tier bands, DJs, and interactive games to your doorstep.",
      icon: "🎤",
      tag: "Talent",
    },
    {
      title: "Conceptual Creative Ideas",
      desc: " stuck? We brainstorm with you to uncover memorable ideas for cozy gatherings summits.",
      icon: "💡",
      tag: "Creative",
    },
    {
      title: "Catering Excellence",
      desc: " catering Designed to delight guests. From BBQ feasts to plated meals, we manage flavor.",
      icon: "🍽️",
      tag: "Hospitality",
    },
    {
      title: "Sound, Stage & Lighting",
      desc: "audio/visual setups, professional audio/visual setups, stages, and lighting to bring your event.",
      icon: "🏗️",
      tag: "Production",
    },
  ];

  const toastStyle = {
    borderRadius: "16px",
    background: "#1e293b",
    color: "#fff",
    fontWeight: "bold",
  };
  const handleMessage = () => {
    toast.success(`Details Comming Soon`, {
      duration: 3000,
      position: "top-center",
      style: toastStyle,
    });
  };
  return (
    <section className="py-18 px-4 md:px-10 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* --- Header: Bolder, Modernist --- */}

        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-[10px] font-black uppercase tracking-[0.2em]">
            <Sparkles className="w-3 h-3" /> Professional solutions
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[0.9]">
            Our <span className="text-orange-500 ">Services.</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* --- Grid: "Lite Bento" Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm shadow-slate-200/50 flex flex-col group hover:scale-[1.02] hover:shadow-2xl hover:shadow-slate-200/70 transition-all duration-500 cursor-pointer relative overflow-hidden"
              onClick={handleMessage}
            >
              {/* Subtle background circle effect on hover */}
              <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-slate-50 rounded-full group-hover:scale-[3] transition-transform duration-700 opacity-50"></div>

              {/* Tag & Icon Row */}
              <div className="flex justify-between items-start mb-10 relative z-10">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-200">
                  {service.tag}
                </span>
                <div className="text-5xl group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-4 flex-grow relative z-10">
                <h3 className="font-display text-2xl font-bold text-slate-900 leading-tight group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-slate-500 leading-relaxed text-sm font-medium">
                  {service.desc}
                </p>
              </div>

              {/* Action Link (Shows on hover) */}
              <div className="pt-8 mt-auto flex justify-end opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-500 relative z-10">
                <div className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-widest">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;
