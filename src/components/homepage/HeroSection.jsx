"use client";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-base-100 py-10 lg:py-20 px-4 lg:px-12">
        {/* Background Mesh Gradient - Subtle "Spotlights" */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[0%] w-[30%] h-[30%] rounded-full bg-secondary/10 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest animate-bounce">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Next-Gen Event Planning
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-black leading-tight tracking-tighter">
              Where Moments <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Become Memories.
              </span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto lg:mx-0">
              The ultimate platform for creators to host, manage, and scale
              unforgettable experiences. From local meetups to global summits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="btn btn-primary btn-lg rounded-2xl px-10 font-bold shadow-xl shadow-primary/20">
                Create Event
              </button>
              <button className="btn btn-outline btn-lg rounded-2xl px-10 border-white/10 hover:bg-white/5">
                Explore Demo
              </button>
            </div>

            {/* Social Proof / Stats */}
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                <div className="avatar border-base-100">
                  <div className="w-10">
                    <img src="https://i.pravatar.cc/100?u=1" />
                  </div>
                </div>
                <div className="avatar border-base-100">
                  <div className="w-10">
                    <img src="https://i.pravatar.cc/100?u=2" />
                  </div>
                </div>
                <div className="avatar border-base-100">
                  <div className="w-10">
                    <img src="https://i.pravatar.cc/100?u=3" />
                  </div>
                </div>
                <div className="avatar placeholder border-base-100">
                  <div className="w-10 bg-neutral text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-base-content/60">
                Trusted by{" "}
                <span className="text-base-content font-bold">500+</span>{" "}
                organizers worldwide
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Bento-style Visuals */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-[400px] md:h-[500px] cursor-pointer">
            <div className="relative group overflow-hidden rounded-3xl col-span-1 row-span-2">
              <img
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Concert"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl col-span-1">
              <img
                src="https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Conference"
              />
            </div>
            <div className="relative group overflow-hidden rounded-3xl col-span-1 ">
              <img
                src="https://images.unsplash.com/photo-1629332792005-495fac74cfcf?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Conference"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
