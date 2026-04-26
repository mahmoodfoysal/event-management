"use client";
import React, { useState, useEffect, useCallback } from "react";

const Testimonial = () => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const data = [
    {
      name: "Alexandra Montgomery",
      role: "Chief Marketing Officer",
      company: "Lumina Global",
      growth: "10X",
      statLabel: "Revenue Growth",
      quote:
        "Their team didn't just manage our event; they amplified our brand's global presence.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      rating: 4.5,
    },
    {
      name: "Marcus Chen",
      role: "Head of Operations",
      company: "Nexus Tech",
      growth: "85%",
      statLabel: "Efficiency Boost",
      quote:
        "The digital experience they built for our summit was flawlessly executed and highly intuitive.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
      rating: 5,
    },
    {
      name: "Sarah Jenkins",
      role: "Event Director",
      company: "Vogue Events",
      growth: "5K+",
      statLabel: "Active Attendees",
      quote:
        "Working with them felt like having an elite strategic partner, not just a service provider.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
      rating: 4.5,
    },
    {
      name: "David Voster",
      role: "Founder",
      company: "Startup Hub",
      growth: "90%",
      statLabel: "Efficiency Boost",
      quote:
        "They turned a complex multi-layered filtering logic into a seamless user journey.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
      rating: 4.5,
    },
    {
      name: "Elena Rodriguez",
      role: "Lead Strategist",
      company: "Global Reach",
      growth: "30+",
      statLabel: "Countries Reached",
      quote:
        "Their logistics planning is world-class. No detail was too small for their professional team.",
      image:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=800",
      rating: 5,
    },
  ];

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1 === data.length ? 0 : prev + 1));
  }, [data.length]);

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [handleNext, isPaused]);

  return (
    <section
      className="py-24 px-4 lg:px-12 bg-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative background quote mark */}
      <div className="absolute top-20 left-10 text-[20rem] font-serif text-slate-50 leading-none -z-10 select-none opacity-50">
        “
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Portrait */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100 transition-all duration-700">
              <img
                key={data[active].image} // Key helps trigger the animation on change
                src={data[active].image}
                alt={data[active].name}
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 rounded-3xl shadow-xl min-w-[180px]">
              <div className="text-orange-500 text-3xl font-black italic animate-bounce-subtle">
                {data[active].growth}
              </div>
              <div className="text-[10px] uppercase font-bold tracking-widest opacity-70">
                {data[active].statLabel}
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="flex gap-1 text-orange-500">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <div className="min-h-[180px]">
              <h2 className="font-display text-3xl md:text-5xl font-black leading-tight text-slate-900 animate-slide-up">
                {data[active].quote}
              </h2>
            </div>

            <div className="space-y-2 border-l-4 border-orange-500 pl-6 animate-slide-up">
              <p className="text-2xl font-bold text-slate-900">
                {data[active].name}
              </p>
              <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">
                {data[active].role} —{" "}
                <span className="text-slate-900">{data[active].company}</span>
              </p>
            </div>

            {/* Controls */}
            <div className="pt-6 flex items-center gap-8">
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="btn btn-circle btn-outline border-slate-200 hover:bg-slate-900 hover:text-white transition-all"
                >
                  ❮
                </button>
                <button
                  onClick={handleNext}
                  className="btn btn-circle bg-orange-500 border-none text-white hover:bg-orange-600 transition-all"
                >
                  ❯
                </button>
              </div>

              <div className="flex gap-2">
                {data.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 transition-all duration-500 rounded-full ${active === i ? "w-8 bg-orange-500" : "w-2 bg-slate-200"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
