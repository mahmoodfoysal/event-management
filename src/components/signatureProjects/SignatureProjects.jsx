import React from "react";

const SignatureProjects = () => {
  return (
    <>
      <section className="py-24 px-4 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900">
              Successful <span className="text-orange-500 ">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                name: "TechSummit 2026",
                type: "Conference Management",
                img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
              },
              {
                name: "Global Charity Gala",
                type: "Fundraising & Logistics",
                img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={project.img}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={project.name}
                  />
                </div>
                <div className="p-8">
                  <p className="text-primary font-bold text-xs uppercase tracking-tighter mb-2">
                    {project.type}
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 flex justify-between items-center">
                    {project.name}
                    <span className="group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SignatureProjects;
