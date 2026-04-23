import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 px-4 lg:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand & Bio */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="font-display text-2xl font-black text-white tracking-tighter">
                EVENT<span className="text-primary">NEXUS</span>
              </h2>
              <p className="text-sm leading-relaxed">
                Strategic event management and partnership activation for
                world-class corporate gatherings and community festivals.
              </p>
              <div className="flex gap-4">
                {["twitter", "linkedin", "instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  >
                    <span className="sr-only">{social}</span>
                    {/* Placeholder for icons */}
                    <div className="w-4 h-4 bg-current opacity-70"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
                Capabilities
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Sponsorship Strategy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Logistics Planning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Financial Oversight
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Digital Experience
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
                Company
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Our Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    The Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Location/Contact */}
            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
                Global Office
              </h4>
              <div className="text-sm space-y-2">
                <p className="text-white font-bold text-lg italic underline underline-offset-4 decoration-primary">
                  Rajshahi, BD
                </p>
                <p>123 Innovation Drive</p>
                <p>connect@eventnexus.pro</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-[10px] uppercase font-black text-primary mb-1">
                  Status
                </p>
                <p className="text-xs text-white">
                  Accepting new partnerships for 2026/27
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em]">
            <p>© 2026 EVENT NEXUS PARTNERS. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
