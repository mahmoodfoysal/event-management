import React from "react";

const Subscription = () => {
  return (
    <>
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-5xl font-black mb-4">
                Partner With <span className="text-primary italic">Us.</span>
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto">
                Ready to elevate your event strategy? Fill out the details below
                and our partnership team will reach out within 24 hours.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="form-control">
                <label className="label text-xs uppercase font-bold tracking-widest text-slate-500">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered bg-white/5 border-white/10 focus:border-primary focus:outline-none rounded-xl h-14"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label text-xs uppercase font-bold tracking-widest text-slate-500">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="input input-bordered bg-white/5 border-white/10 focus:border-primary focus:outline-none rounded-xl h-14"
                  required
                />
              </div>

              {/* Contact Number */}
              <div className="form-control">
                <label className="label text-xs uppercase font-bold tracking-widest text-slate-500">
                  Contact Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="input input-bordered bg-white/5 border-white/10 focus:border-primary focus:outline-none rounded-xl h-14"
                  required
                />
              </div>

              {/* Event Date */}
              <div className="form-control">
                <label className="label text-xs uppercase font-bold tracking-widest text-slate-500">
                  Planned Event Date
                </label>
                <input
                  type="date"
                  className="input input-bordered bg-white/5 border-white/10 focus:border-primary focus:outline-none rounded-xl h-14 appearance-none"
                  required
                />
              </div>

              {/* Message Area */}
              <div className="form-control md:col-span-2">
                <label className="label text-xs uppercase font-bold tracking-widest text-slate-500">
                  How can we help?
                </label>
                <textarea
                  className="textarea textarea-bordered bg-white/5 border-white/10 focus:border-primary focus:outline-none rounded-xl min-h-[120px] pt-4"
                  placeholder="Tell us about your event goals and requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 pt-4">
                <button className="btn btn-primary btn-lg w-full rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                  Send Inquiry
                </button>
                <p className="text-center text-[10px] text-slate-500 mt-6 uppercase tracking-[0.2em] font-medium">
                  🔒 Secure Submission • No Marketing Spam
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscription;
