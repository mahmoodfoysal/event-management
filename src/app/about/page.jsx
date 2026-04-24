import React from "react";

const Page = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* --- 1. HERO SECTION --- */}
        <section className="py-24 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
              Elevating Every{" "}
              <span className="text-orange-500  font-bold">Moment.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
              We are a team of strategic planners and creative thinkers
              dedicated to turning your corporate and community visions into
              world-class reality.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 lg:px-12 py-20 space-y-24">
          {/* --- 2. MISSION & VISION CARDS --- */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="group p-10 bg-white border border-slate-200 rounded-[3rem] hover:border-orange-500 transition-all duration-500 shadow-sm">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-500">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">
                Our Mission
              </h3>
              <p className="text-slate-500 leading-relaxed">
                To provide seamless, high-impact event management solutions that
                bridge the gap between ambitious ideas and flawless execution,
                ensuring every client feels supported at every step.
              </p>
            </div>

            {/* Vision */}
            <div className="group p-10 bg-slate-900 text-white rounded-[3rem] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl"></div>
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-orange-400">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-black mb-4 text-white">
                Our Vision
              </h3>
              <p className="text-slate-400 leading-relaxed">
                To become the global benchmark for luxury event technology and
                planning, fostering a world where gathering together is an
                effortless and unforgettable experience.
              </p>
            </div>
          </section>

          {/* --- 3. KEY STATS / CLIENT INFO --- */}
          <section className="bg-slate-50 rounded-[4rem] p-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-black text-slate-900">24/7</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Support Time
              </p>
              <p className="text-sm text-slate-500 px-4">
                Global assistance for all your planning emergencies.
              </p>
            </div>
            <div className="space-y-2 border-y md:border-y-0 md:border-x border-slate-200 py-8 md:py-0">
              <p className="text-4xl font-black text-slate-900">99%</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Satisfaction
              </p>
              <p className="text-sm text-slate-500 px-4">
                Proven track record of exceeding client expectations.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-black text-slate-900">500+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Events Hosted
              </p>
              <p className="text-sm text-slate-500 px-4">
                From corporate galas to international tech summits.
              </p>
            </div>
          </section>

          {/* --- 4. OUR VALUES & OWNER SECTION --- */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-900">
                Core <span className="text-orange-500 ">Values</span>
              </h2>
              <ul className="space-y-6">
                {[
                  {
                    title: "Radical Transparency",
                    desc: "No hidden costs, no surprises. Just honest planning.",
                  },
                  {
                    title: "Innovation First",
                    desc: "We use the latest tech to enhance guest experiences.",
                  },
                  {
                    title: "Community Driven",
                    desc: "Every event is an opportunity to bring people together.",
                  },
                ].map((value, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-orange-500 font-black">
                      0{i + 1}.
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900">
                        {value.title}
                      </h4>
                      <p className="text-sm text-slate-500">{value.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* OWNER CARD */}
            <div className="relative group">
              <div className="absolute inset-0 bg-orange-500 rounded-[3rem] rotate-3 transition-transform group-hover:rotate-1"></div>
              <div className="relative bg-white border border-slate-200 p-8 rounded-[3rem] flex flex-col items-center text-center space-y-4 shadow-xl">
                <div className="w-32 h-32 rounded-full bg-slate-100 overflow-hidden border-4 border-white shadow-lg">
                  {/* Replace with actual image */}
                  <img
                    src="https://lh3.googleusercontent.com/a/ACg8ocJK5iLAouRSJ6_58PTtpwHoJ3BywTeFcbXfG6RMLpDr3YvxMogd=s288-c-no"
                    alt="Owner"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-slate-900 uppercase">
                    Foysal Mahmood
                  </h3>
                  <p className="text-orange-500 font-bold text-xs uppercase tracking-widest">
                    Founder & Web Developer
                  </p>
                </div>
                <p className="text-sm text-slate-500  leading-relaxed">
                  We do not just organize events; we build bridges between ideas
                  and communities. Our goal is to make professional management
                  accessible and extraordinary.
                </p>
                <div className="flex gap-4 pt-4">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/foysalmahmood/"
                  >
                    {" "}
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-orange-500 cursor-pointer">
                      In
                    </div>
                  </a>
                  <a
                    target="_blank"
                    href="https://foysalmahmood-portfolio.web.app/"
                  >
                    {" "}
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-orange-500 cursor-pointer">
                      P
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
