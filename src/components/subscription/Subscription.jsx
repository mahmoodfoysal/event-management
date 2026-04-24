"use client";
import React from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MessageSquare,
  Send,
  ShieldCheck,
} from "lucide-react";

const Subscription = () => {
  return (
    <section className="py-24 px-4 bg-slate-50">
      {/* Outer Container with a subtle gradient border effect */}
      <div className="max-w-4xl mx-auto p-[1px] bg-gradient-to-br from-primary/50 to-secondary/50 rounded-[3rem] shadow-2xl">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
          {/* Enhanced Background Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                Partnership Program
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-black mb-4 tracking-tight">
                Partner With <span className="text-primary italic">Us.</span>
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
                Ready to elevate your event strategy? Fill out the details below
                and our partnership team will reach out within 24 hours.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Full Name */}
              <div className="form-control">
                <label className="label gap-2 justify-start text-[10px] uppercase font-bold tracking-widest text-slate-500">
                  <User className="w-3 h-3 text-primary" /> Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input bg-white/5 border-white/10 focus:border-primary focus:bg-white/10 transition-all rounded-2xl h-14"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label gap-2 justify-start text-[10px] uppercase font-bold tracking-widest text-slate-500">
                  <Mail className="w-3 h-3 text-primary" /> Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="input bg-white/5 border-white/10 focus:border-primary focus:bg-white/10 transition-all rounded-2xl h-14"
                  required
                />
              </div>

              {/* Contact Number */}
              <div className="form-control">
                <label className="label gap-2 justify-start text-[10px] uppercase font-bold tracking-widest text-slate-500">
                  <Phone className="w-3 h-3 text-primary" /> Contact Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="input bg-white/5 border-white/10 focus:border-primary focus:bg-white/10 transition-all rounded-2xl h-14"
                  required
                />
              </div>

              {/* Event Type Dropdown */}
              <div className="form-control">
                <label className="label gap-2 justify-start text-[10px] uppercase font-bold tracking-widest text-slate-500">
                  <Calendar className="w-3 h-3 text-primary" /> Event Category
                </label>
                <select className="select bg-white/5 border-white/10 focus:border-primary focus:bg-white/10 transition-all rounded-2xl h-14">
                  <option className="text-slate-900">Select Type</option>
                  <option className="text-slate-900">
                    Corporate Conference
                  </option>
                  <option className="text-slate-900">Music Festival</option>
                  <option className="text-slate-900">Private Wedding</option>
                  <option className="text-slate-900">Tech Summit</option>
                </select>
              </div>

              {/* Message Area */}
              <div className="form-control md:col-span-2">
                <label className="label gap-2 justify-start text-[10px] uppercase font-bold tracking-widest text-slate-500">
                  <MessageSquare className="w-3 h-3 text-primary" /> Message &
                  Goals
                </label>
                <textarea
                  className="textarea bg-white/5 border-white/10 focus:border-primary focus:bg-white/10 transition-all rounded-2xl min-h-[140px] pt-4 leading-relaxed"
                  placeholder="Tell us about your event requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 pt-6">
                <button className="btn btn-primary btn-lg w-full rounded-2xl font-black shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all group">
                  Send Inquiry
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-4 mt-8 opacity-40">
                  <div className="h-[1px] w-12 bg-white"></div>
                  <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold">
                    <ShieldCheck className="w-3 h-3" /> Secure Submission
                  </p>
                  <div className="h-[1px] w-12 bg-white"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
