import React from "react";

const Footer = () => {
  return (
    <>
<footer className="bg-white text-slate-500 pt-20 pb-10 px-4 lg:px-12 border-t border-slate-100">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      
      {/* Column 1: Brand & Bio */}
      <div className="lg:col-span-1 space-y-6">
        <h2 className="font-display text-2xl font-black text-slate-900 tracking-tighter">
          EVENT<span className="text-orange-500">NEXUS</span>
        </h2>
        <p className="text-sm leading-relaxed text-slate-500">
          Strategic event management and partnership activation for
          world-class corporate gatherings and community festivals.
        </p>
        
        {/* Social Icons - Integrated Facebook, GitHub, LinkedIn */}
        <div className="flex gap-3">
          {[
            { name: "facebook", icon: "fb", link: "#" },
            { name: "github", icon: "gh", link: "#" },
            { name: "linkedin", icon: "in", link: "#" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.link}
              className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all duration-300 border border-slate-100"
            >
              <span className="sr-only">{social.name}</span>
              {/* Using simple SVG icons for Facebook, GitHub, LinkedIn */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                {social.name === "facebook" && <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z"/>}
                {social.name === "github" && <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/>}
                {social.name === "linkedin" && <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5a1.75 1.75 0 0 1-1.75 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.05V19h-3v-9h3v1.09c.41-.63 1.06-1.09 2.03-1.09 1.98 0 3 1.34 3 3.53z"/>}
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Column 2: Quick Links */}
      <div>
        <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-6">
          Capabilities
        </h4>
        <ul className="space-y-4 text-sm font-medium">
          {["Sponsorship Strategy", "Logistics Planning", "Financial Oversight", "Digital Experience"].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-orange-500 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Company */}
      <div>
        <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-6">
          Company
        </h4>
        <ul className="space-y-4 text-sm font-medium">
          {["Our Portfolio", "The Team", "Careers", "Contact Us"].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-orange-500 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 4: Location/Contact */}
      <div className="space-y-6">
        <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-6">
          Global Office
        </h4>
        <div className="text-sm space-y-2">
          <p className="text-slate-900 font-bold text-lg italic underline underline-offset-4 decoration-orange-500">
            Rajshahi, BD
          </p>
          <p className="text-slate-500">123 Innovation Drive</p>
          <p className="text-slate-500">connect@eventnexus.pro</p>
        </div>
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <p className="text-[10px] uppercase font-black text-orange-500 mb-1">
            Status
          </p>
          <p className="text-xs text-slate-600 font-medium">
            Accepting new partnerships for 2026/27
          </p>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
      <p>© 2026 EVENT NEXUS PARTNERS. ALL RIGHTS RESERVED.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Cookies</a>
      </div>
    </div>
  </div>
</footer>
    </>
  );
};

export default Footer;
