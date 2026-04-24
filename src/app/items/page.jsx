"use client";
import React from 'react';

const pages = () => {
    return (
        <>
<div className="min-h-screen bg-slate-50 py-12 px-4 lg:px-12">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* --- LEFT SIDEBAR: OPEN FILTERS --- */}
        <aside className="w-full lg:w-80 space-y-10 bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 h-fit sticky top-24">
          <h3 className="font-display text-xl font-black text-slate-900 border-b border-slate-100 pb-4">
            Filter <span className="text-orange-500">Events</span>
          </h3>

          {/* Search Bar - Always Open */}
          <div className="form-control w-full">
            <label className="label text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2">Search</label>
            <div className="relative">
              <input type="text" placeholder="Type event name..." className="input input-bordered w-full bg-slate-50 border-slate-200 focus:border-orange-500 rounded-xl" />
              <button className="absolute right-3 top-3 text-slate-400">🔍</button>
            </div>
          </div>

          {/* Category - Open List */}
          <div className="space-y-4">
            <label className="label text-[10px] uppercase font-bold tracking-widest text-slate-400">By Category</label>
            <div className="flex flex-col gap-3">
              {['Corporate', 'Wedding', 'Music', 'Exhibition', 'Workshops'].map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="checkbox checkbox-sm checkbox-warning rounded-md border-slate-300" />
                  <span className="text-sm font-medium text-slate-600 group-hover:text-orange-500 transition-colors">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Location - Open List */}
          <div className="space-y-4">
            <label className="label text-[10px] uppercase font-bold tracking-widest text-slate-400">By Place</label>
            <div className="flex flex-col gap-3">
              {['Rajshahi', 'Dhaka', 'Sylhet', 'Chittagong'].map((city) => (
                <label key={city} className="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" name="location" className="radio radio-sm radio-warning border-slate-300" />
                  <span className="text-sm font-medium text-slate-600 group-hover:text-orange-500 transition-colors">{city}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range - Open View */}
          <div className="space-y-4">
            <label className="label text-[10px] uppercase font-bold tracking-widest text-slate-400">Price Range</label>
            <input type="range" min="0" max="1000" className="range range-warning range-sm" />
            <div className="flex justify-between text-[11px] font-black text-slate-400 px-1">
              <span>$0</span>
              <span>$500</span>
              <span>$1k+</span>
            </div>
          </div>

          <button className="btn btn-primary w-full rounded-2xl text-white font-bold shadow-lg shadow-orange-200">
            Reset All Filters
          </button>
        </aside>

        {/* --- RIGHT CONTENT: EVENT GRID --- */}
        <main className="flex-grow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Browse <span className="text-orange-500 italic font-medium">All Events</span>
            </h2>
            <div className="flex items-center gap-4">
               <span className="text-sm text-slate-400 font-bold">SORT BY:</span>
               <select className="select select-ghost select-sm text-slate-900 font-bold focus:bg-transparent">
                <option>Most Recent</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300">
                <div className="h-52 relative overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=500`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Event" />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-black text-slate-900 shadow-sm">
                    FEATURED
                  </div>
                </div>
                <div className="p-7 space-y-4">
                  <h4 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-orange-500 transition-colors">Digital Innovation Conference 2026</h4>
                  <div className="flex items-center gap-4 text-slate-400 text-[11px] font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5">📍 Rajshahi</span>
                    <span className="flex items-center gap-1.5">🎟️ $85.00</span>
                  </div>
                  <div className="pt-4 flex justify-between items-center border-t border-slate-50">
                    <div className="flex -space-x-2">
                       <div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white"></div>
                       <div className="w-7 h-7 rounded-full bg-slate-300 border-2 border-white"></div>
                    </div>
                    <button className="text-orange-500 font-black text-xs hover:underline underline-offset-4">BOOK SEAT →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Component */}
          <div className="flex justify-center mt-16">
            <div className="join bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <button className="join-item btn btn-ghost px-6 border-r border-slate-100">Prev</button>
              <button className="join-item btn btn-primary px-6 text-white">1</button>
              <button className="join-item btn btn-ghost px-6 border-l border-slate-100">Next</button>
            </div>
          </div>
        </main>

      </div>
    </div>
        </>
    );
};

export default pages;