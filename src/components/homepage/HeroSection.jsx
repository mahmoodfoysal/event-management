"use client";
import React from "react";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import toast from "react-hot-toast";

const HeroSection = () => {
  const toastStyle = {
    borderRadius: "16px",
    background: "#1e293b",
    color: "#fff",
    fontWeight: "bold",
  };
  const handleMessage = () => {
    toast.success(`Comming Soon`, {
      duration: 3000,
      position: "top-center",
      style: toastStyle,
    });
  };
  return (
    <section className="relative overflow-hidden bg-base-100 py-12 lg:py-20 px-4 lg:px-12">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        {/* Animated Mesh Gradients */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] animate-pulse"></div>
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[100px] animate-bounce-slow"></div>
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* --- LEFT COLUMN: CONTENT --- */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <Sparkles className="w-3 h-3 ml-1" />
            Next-Gen Event Planning
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-8xl font-black leading-[1.1] tracking-tighter text-slate-900">
            Where Moments <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-orange-500 bg-clip-text text-transparent">
              Become Memories.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            The ultimate platform for creators to host, manage, and scale
            unforgettable experiences. From local meetups to global summits, we
            handle the logistics so you can focus on the magic.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button
              onClick={handleMessage}
              className="btn btn-primary btn-lg rounded-2xl px-8 font-bold shadow-2xl shadow-primary/30 group"
            >
              Create Your Event
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleMessage}
              className="btn btn-ghost btn-lg rounded-2xl px-8 border border-slate-200 hover:bg-slate-50"
            >
              <Play className="w-4 h-4 mr-2 fill-current" />
              Explore Demo
            </button>
          </div>

          {/* Social Proof */}
          <div className="pt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <div className="avatar-group -space-x-4 rtl:space-x-reverse">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="avatar border-2 border-base-100 shadow-sm"
                >
                  <div className="w-12">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                  </div>
                </div>
              ))}
              <div className="avatar placeholder border-2 border-base-100">
                <div className="w-12 bg-slate-800 text-white text-xs font-bold">
                  <span>+99</span>
                </div>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-slate-900">
                Trusted by 500+ organizers
              </p>
              <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">
                Joining the Aura worldwide
              </p>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: BENTO VISUALS --- */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
          {/* Main Large Image */}
          <div className="relative group overflow-hidden rounded-[2.5rem] col-span-1 row-span-2 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt="Concert Experience"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-70">
                Concerts
              </p>
              <p className="font-bold">Live Festivals</p>
            </div>
          </div>

          {/* Top Small Image */}
          <div className="relative group overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=1074&auto=format&fit=crop"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt="Tech Conference"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Bottom Small Image */}
          <div className="relative group overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1629332792005-495fac74cfcf?q=80&w=1176&auto=format&fit=crop"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt="Business Summit"
            />
            <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
