"use client";
import React from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MessageSquare,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Globe,
} from "lucide-react";

const PartnershipSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="py-20 px-6 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-0 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50">
        {/* --- LEFT SIDEBAR: THE HOOK --- */}
        <div className="lg:col-span-4 bg-slate-900 p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              size: "20px 20px",
              backgroundSize: "30px 30px",
            }}
          ></div>

          <div className="relative z-10">
            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20">
              <Zap className="w-6 h-6 text-white fill-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.9] mb-6">
              LET’S BUILD <br />
              <span className="text-orange-500 underline decoration-slate-700 underline-offset-8">
                BEYOND.
              </span>
            </h2>
            <p className="text-slate-400 font-medium text-sm leading-relaxed max-w-xs">
              We do not just manage events; we architect experiences. Join our
              partnership ecosystem and scale your vision.
            </p>
          </div>

          <div className="relative z-10 space-y-6 pt-12">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all">
                <Globe className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
                Global Operations
              </span>
            </div>

            <div className="pt-8 border-t border-slate-800">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-2">
                Fast Response
              </p>
              <p className="text-xl font-bold italic">avg. 2 hours</p>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: THE FORM --- */}
        <div className="lg:col-span-8 bg-white p-10 md:p-16">
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-2">
                Inquiry Form
              </p>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                Partnership Application
              </h3>
            </div>
            <div className="hidden md:block text-right">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                Form ID
              </p>
              <p className="text-xs font-mono font-bold text-slate-400">
                #PRT-2026-X
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Input */}
              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-orange-500 transition-colors" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full h-14 bg-slate-50 border-b-2 border-slate-100 px-14 text-sm font-bold text-slate-900 focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-orange-500 transition-colors" />
                  <input
                    type="email"
                    placeholder="email@company.com"
                    className="w-full h-14 bg-slate-50 border-b-2 border-slate-100 px-14 text-sm font-bold text-slate-900 focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">
                  Contact Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-orange-500 transition-colors" />
                  <input
                    type="tel"
                    placeholder="+1 . . . "
                    className="w-full h-14 bg-slate-50 border-b-2 border-slate-100 px-14 text-sm font-bold text-slate-900 focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Category Select */}
              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">
                  Event Vertical
                </label>
                <div className="relative">
                  <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-orange-500 transition-colors" />
                  <select className="w-full h-14 bg-slate-50 border-b-2 border-slate-100 px-14 text-sm font-bold text-slate-900 focus:outline-none focus:border-orange-500 focus:bg-white appearance-none transition-all">
                    <option>Select</option>
                    <option>Strategic Partnership</option>
                    <option>Tech Integration</option>
                    <option>Venue Management</option>
                    <option>Sponsorship</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div className="relative group">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">
                Partnership Goals
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-5 top-6 w-4 h-4 text-slate-300 group-focus-within:text-orange-500 transition-colors" />
                <textarea
                  placeholder="Describe your vision and how we fit in..."
                  className="w-full min-h-[120px] bg-slate-50 border-b-2 border-slate-100 p-6 pl-14 text-sm font-bold text-slate-900 focus:outline-none focus:border-orange-500 focus:bg-white transition-all resize-none"
                ></textarea>
              </div>
            </div>

            <button className="cursor-pointer w-full h-20 bg-slate-900 text-white flex items-center justify-between px-10 group hover:bg-orange-500 transition-all duration-500 rounded-2xl overflow-hidden shadow-xl shadow-slate-200">
              <span className="text-xs font-black uppercase tracking-[0.4em]">
                Initialize Connection
              </span>
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-white/20 group-hover:w-12 transition-all"></span>
                <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
