import React from "react";

const Testimonial = () => {
  return (
    <>
      <section className="py-24 px-4 lg:px-12 bg-white relative overflow-hidden">
        {/* Decorative background quote mark */}
        <div className="absolute top-20 left-10 text-[20rem] font-serif text-slate-100 leading-none -z-10 select-none">
          “
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Side: The "Hero" Portrait */}
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Executive Partner"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Achievement Badge */}
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                <div className="text-primary text-3xl font-black italic">
                  10X
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest opacity-70">
                  Revenue Growth
                </div>
              </div>
            </div>

            {/* Right Side: The Quote Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="flex gap-1 text-primary">
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

              <h2 className="font-display text-3xl md:text-5xl font-black leading-tight text-slate-900">
                Their team didnt just manage our event; they{" "}
                <span className="text-primary underline decoration-slate-200 underline-offset-8">
                  amplified our brands global presence
                </span>
                .
              </h2>

              <div className="space-y-2 border-l-4 border-primary pl-6">
                <p className="text-2xl font-bold text-slate-900">
                  Alexandra Montgomery
                </p>
                <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">
                  Chief Marketing Officer —{" "}
                  <span className="text-slate-900">Lumina Global</span>
                </p>
              </div>

              <div className="pt-6 flex gap-4">
                <button className="btn btn-circle btn-outline btn-lg hover:bg-slate-900">
                  ❮
                </button>
                <button className="btn btn-circle btn-primary btn-lg">❯</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
