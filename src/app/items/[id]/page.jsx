"use client"
import React from 'react';

const page = () => {
    return (
        <>
            <div className="min-h-screen bg-slate-50 py-12 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* --- 1. HERO SECTION: IMAGE & KEY DETAILS --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-6 md:p-10 rounded-[3rem] shadow-sm border border-slate-200">
          <div className="rounded-[2rem] overflow-hidden h-[400px] md:h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1540575861501-7ad0582373f2?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover" 
              alt="Event Detail" 
            />
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex gap-2">
              <span className="badge badge-primary rounded-lg font-bold p-3">CORPORATE</span>
              <span className="badge badge-outline rounded-lg font-bold p-3">FEATURED</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Strategic Tech <span className="text-orange-500">Summit 2026</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              Join the worlds leading innovators for a day of deep-dives into AI, Web3, and the future of digital infrastructure.
            </p>
            
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-100">
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Location</p>
                <p className="font-bold text-slate-900">Party Point, Rajshahi</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Price</p>
                <p className="font-bold text-slate-900">$120.00 / Person</p>
              </div>
            </div>

            <button className="btn btn-primary btn-lg rounded-2xl text-white font-bold w-full md:w-fit px-12">
              Book Your Seat Now
            </button>
          </div>
        </section>

        {/* --- 2. RATING & COMMENTS SECTION --- */}
        <section className="space-y-8">
          <h2 className="text-3xl font-black text-slate-900">Experience <span className="text-orange-500 ">Reviews</span></h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side: Rating Input */}
            <div className="lg:col-span-1 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-fit">
              <h4 className="text-lg font-bold text-slate-900 mb-6">Leave a Rating</h4>
              <div className="space-y-6">
                <div className="rating rating-lg gap-2">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <textarea 
                  className="textarea textarea-bordered w-full bg-slate-50 border-slate-200 rounded-2xl h-32" 
                  placeholder="Share your thoughts about this event..."
                ></textarea>
                <button className="btn btn-primary w-full rounded-xl text-white">Post Review</button>
              </div>
            </div>

            {/* Right Side: Comments Display */}
            <div className="lg:col-span-2 space-y-4">
              {[1, 2].map((review) => (
                <div key={review} className="bg-white p-6 rounded-[2rem] border border-slate-100 flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex-shrink-0"></div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <p className="font-bold text-slate-900">Foysal Mahmood</p>
                      <div className="rating rating-xs">
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked disabled />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked disabled />
                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked disabled />
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm">
                      Amazing organization! The sound and lighting were top-notch. Highly recommend attending the next one.
                    </p>
                    <p className="text-[10px] font-bold text-slate-300 uppercase">2 Days Ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. BOTTOM: RELATED EVENTS --- */}
        <section className="space-y-8 pt-10">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-black text-slate-900">Related <span className="text-orange-500 ">Events</span></h2>
            <button className="btn btn-ghost text-orange-500 font-bold">View More →</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm group">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-slate-900 group-hover:text-orange-500 transition-colors">Innovate Expo 2026</h4>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-orange-500 font-black">$85</span>
                    <button className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900">Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
        </>
    );
};

export default page;