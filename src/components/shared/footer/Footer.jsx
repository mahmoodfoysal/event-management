"use client";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const { user, logout } = useAuth();
  const handleNotice = (e, linkName) => {
    e.preventDefault(); // Prevents jumping to the top of the page
    toast.success(`${linkName} will be updated soon!`, {
      style: {
        borderRadius: "12px",
        background: "#0f172a", // slate-900
        color: "#fff",
        fontSize: "14px",
        fontWeight: "bold",
      },
    });
  };
  return (
    <>
      <Toaster position="bottom-center" />
      <footer className="bg-white text-slate-500 pt-20 pb-10 px-4 lg:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
            {/* Column 1: Brand & Bio */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="font-display text-2xl font-black text-slate-900 tracking-tighter">
                Odyssey {""}
                <span className="text-orange-500">Event</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-500">
                Strategic event management and partnership activation for
                world-class corporate gatherings and community festivals.
              </p>

              {/* Social Icons - Integrated Facebook, GitHub, LinkedIn */}
              <div className="flex gap-3">
                {[
                  {
                    name: "facebook",
                    icon: "fb",
                    link: "https://www.facebook.com/foysal.mahmood.1/",
                  },
                  {
                    name: "github",
                    icon: "gh",
                    link: "https://www.linkedin.com/in/foysalmahmood/",
                  },
                  {
                    name: "linkedin",
                    icon: "in",
                    link: "https://github.com/mahmoodfoysal",
                  },
                  {
                    name: "portfolio",
                    icon: "pf",
                    link: "https://foysalmahmood-portfolio.web.app/",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    target="_blank"
                    href={social.link}
                    className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all duration-300 border border-slate-100"
                  >
                    <span className="sr-only">{social.name}</span>
                    {/* Using simple SVG icons for Facebook, GitHub, LinkedIn */}
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      {social.name === "facebook" && (
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" />
                      )}
                      {social.name === "github" && (
                        <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
                      )}
                      {social.name === "linkedin" && (
                        <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5a1.75 1.75 0 0 1-1.75 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.05V19h-3v-9h3v1.09c.41-.63 1.06-1.09 2.03-1.09 1.98 0 3 1.34 3 3.53z" />
                      )}
                      {social.name === "portfolio" && (
                        <path
                          fill="currentColor"
                          d="M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 15H4V9h16v11z"
                        />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 4: Location/Contact */}
            <div className="space-y-6">
              <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-6">
                Global Office
              </h4>
              <div className="text-sm space-y-2">
                <p className="text-slate-900 font-bold text-lg italic underline underline-offset-4 decoration-orange-500">
                  Rajshahi, Bangladesh
                </p>

                <p className="text-slate-500">foysalcse033@gmail.com</p>
              </div>
            </div>
            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-6">
                Navigation
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <Link
                    href="/"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/items"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Items
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-orange-500 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                {!user && (
                  <li>
                    <Link
                      href="/login"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Login
                    </Link>
                  </li>
                )}
                {!user && (
                  <li>
                    <Link
                      href="/register"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Register
                    </Link>
                  </li>
                )}
                {user && (
                  <li>
                    <button
                      className="hover:text-orange-500 transition-colors cursor-pointer"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
            <div>
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
            <p>© 2026 Odyssey Event ALL RIGHTS RESERVED by Foysal Mahmood.</p>
            <div className="flex gap-8">
              <a
                href="#"
                onClick={(e) => handleNotice(e, "Privacy Policy")}
                className="hover:text-slate-900 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                onClick={(e) => handleNotice(e, "Terms")}
                className="hover:text-slate-900 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                onClick={(e) => handleNotice(e, "Cookies Policy")}
                className="hover:text-slate-900 transition-colors"
              >
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
