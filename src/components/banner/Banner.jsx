import React from 'react';

const Banner = () => {
    return (
        <>
            <section className="bg-slate-950 text-white w-full border-b border-orange-500/20">
      <div className="max-w-[1700px] mx-auto py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
        
        {/* Subtle Decorative Glow Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[150px] -z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 blur-[150px] -z-0"></div>

        {/* --- LEFT: The Discount Call-to-Action --- */}
        <div className="flex-1 space-y-8 relative z-10 text-center lg:text-left">
          
          {/* Discount Badge */}
          <span className="inline-flex items-center gap-2 px-6 py-2 bg-orange-500/10 rounded-full border border-orange-500/30 text-xs font-bold uppercase tracking-widest text-orange-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Limited Time Opening Offer
          </span>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl font-black leading-tight tracking-tight">
            Book <span className="text-orange-500">Now</span> & Get<br />
            <span className="italic underline underline-offset-8 decoration-orange-500">20% Discount</span>
          </h1>

          {/* Description Paragraph (Reason) */}
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            We are celebrating the launch of our new premium event experience 
            platform. We want to thank our early community by offering a 
            special, one-time discount on your very first event booking or ticket 
            purchase. Experience elite planning at exceptional value.
          </p>

          {/* Action Button */}
          <button className="btn btn-primary btn-lg rounded-2xl px-12 font-bold text-white shadow-lg shadow-orange-500/20 hover:scale-[1.03] transition-transform">
            Claim My Discount
          </button>
        </div>

        {/* --- RIGHT: Visual Accent (E.g., An Abstract Date Card) --- */}
        <div className="flex-shrink-0 relative z-10 w-full lg:w-fit flex justify-center lg:justify-end">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[3rem] p-10 flex flex-col items-center gap-6 shadow-2xl">
            <p className="text-[10px] uppercase font-black text-slate-500 tracking-[0.3em]">Opening Season</p>
            <div className="flex items-end gap-1 font-display">
                <span className="text-9xl font-black leading-none text-white">20</span>
                <span className="text-5xl font-black text-orange-500">%</span>
            </div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest px-4 border border-white/10 py-1.5 rounded-full">Valid until Dec 31, 2026</p>
          </div>
        </div>

      </div>
    </section>
        </>
    );
};

export default Banner;