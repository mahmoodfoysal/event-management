import React from 'react';

const Page = () => {
    return (
<>
<div className="min-h-screen bg-white">
    <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
    <h2 className="text-5xl font-black text-slate-900 tracking-tight">
      Get In <span className="text-orange-500 ">Touch</span>
    </h2>
    <p className="text-slate-500 font-medium text-lg">
      Have a question or feedback? We would love to hear from you. 
      Our team typically responds within 2 business hours.
    </p>
  </div>
      {/* --- 1. GOOGLE MAP SECTION (TOP) --- */}
      <section className="w-full h-[450px] grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden shadow-inner bg-slate-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116345.0372136034!2d88.51347649520442!3d24.372596547145785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefd0a55195a3%3A0x9ef106f362145892!2sRajshahi!5e0!3m2!1sen!2sbd!4v1714240000000!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* --- 2. CONTACT CONTENT SECTION --- */}
      <main className="max-w-7xl mx-auto px-4 lg:px-12 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* --- LEFT SIDE: INFO --- */}
          <div className="w-full lg:w-1/3 space-y-12">
            <div>
              <h1 className="text-4xl font-black text-slate-900 mb-4">
                Lets Start a <span className="text-orange-500">Conversation</span>
              </h1>
              <p className="text-slate-500 font-medium">
                Reach out to our strategic planning team to discuss your next world-class event.
              </p>
            </div>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Email Us</h4>
                  <p className="text-slate-500 text-sm">connect@eventnexus.pro</p>
                  <p className="text-slate-500 text-sm">support@eventnexus.pro</p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Call Anytime</h4>
                  <p className="text-slate-500 text-sm">+880 1234 567890</p>
                  <p className="text-slate-500 text-sm">+880 1234 567891</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Global Office</h4>
                  <p className="text-slate-500 text-sm">123 Innovation Drive, Sector 7</p>
                  <p className="text-slate-500 text-sm">Rajshahi, Bangladesh</p>
                </div>
              </div>

              {/* Visiting Hours */}
              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                <h4 className="font-bold text-slate-900 uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                  Visiting Hours
                </h4>
                <div className="space-y-2 text-sm text-slate-500 font-medium">
                  <div className="flex justify-between"><span>Mon - Thu:</span> <span>09:00 - 18:00</span></div>
                  <div className="flex justify-between border-t border-slate-200 pt-2"><span>Friday:</span> <span>Closed</span></div>
                  <div className="flex justify-between border-t border-slate-200 pt-2"><span>Sat - Sun:</span> <span>10:00 - 15:00</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <div className="flex-grow">
            <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-[3rem] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[100%] -z-0"></div>
              
              <form className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 px-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="input input-bordered w-full bg-slate-50 border-slate-200 rounded-2xl focus:border-orange-500 focus:outline-none h-14" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 px-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="input input-bordered w-full bg-slate-50 border-slate-200 rounded-2xl focus:border-orange-500 focus:outline-none h-14" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 px-1">Contact Number</label>
                    <input type="tel" placeholder="+880..." className="input input-bordered w-full bg-slate-50 border-slate-200 rounded-2xl focus:border-orange-500 focus:outline-none h-14" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 px-1">Subject</label>
                    <input type="text" placeholder="Partnership Inquiry" className="input input-bordered w-full bg-slate-50 border-slate-200 rounded-2xl focus:border-orange-500 focus:outline-none h-14" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 px-1">Your Message</label>
                  <textarea rows="5" placeholder="Tell us about your event..." className="textarea textarea-bordered w-full bg-slate-50 border-slate-200 rounded-2xl focus:border-orange-500 focus:outline-none py-4"></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full h-16 rounded-2xl text-white font-bold text-lg shadow-lg shadow-orange-100 group transition-all">
                  Send Message
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </form>
            </div>
          </div>

        </div>
      </main>
    </div>
</>
    );
};

export default Page;