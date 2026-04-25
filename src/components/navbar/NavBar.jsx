"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import {
  ChevronDown,
  User,
  ClipboardPlus,
  Settings,
  Activity,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import "./NavBar.css";

const NavBar = () => {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  const routes = [
    { name: "Home", path: "/" },
    { name: "Items", path: "/items" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  const toastStyle = {
    borderRadius: "16px",
    background: "#1e293b",
    color: "#fff",
    fontWeight: "bold",
  };

  const handleMessage = () => {
    toast.success(`Ticket Option Comming Soon`, {
      duration: 3000,
      position: "top-center",
      style: toastStyle,
    });
  };

  return (
    <>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <div className="drawer sticky z-[2000] top-0">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* --- Navbar --- */}
          <div className="navbar bg-base-100/80 backdrop-blur-md border-b border-base-200 px-4 lg:px-8">
            <div className="flex-1">
              <Link
                href="/"
                className="flex items-center gap-3 group transition-all"
              >
                {/* --- Logo as Avatar --- */}
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 group-hover:scale-105 transition-transform">
                    <img
                      src="https://plus.unsplash.com/premium_vector-1683141234968-b4f861c0546a?q=80&w=966&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your actual logo path (e.g., /logo.png or a URL)
                      alt="Odyssey Logo"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* --- Brand Name --- */}
                <span className="font-display text-2xl font-extrabold tracking-tighter text-slate-900 group-hover:opacity-80">
                  Odyssey<span className="text-primary"> Event</span>
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="flex-none hidden lg:block nav-link">
              <ul className="menu menu-horizontal px-1 gap-1 mr-4">
                {routes.map((route) => (
                  <li key={route.path}>
                    <Link
                      href={route.path}
                      className={`font-sans font-medium text-sm hover:text-primary transition-colors ${pathname === route.path ? "active" : ""}`}
                    >
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {user && (
              <div className="mt-auto p-2">
                <button
                  onClick={handleMessage}
                  className="btn btn-primary btn-sm w-full rounded-full"
                >
                  Get Tickets
                </button>
              </div>
            )}

            {/* --- RIGHT SIDE: USER PROFILE / AUTH --- */}
            <div className="flex-none flex items-center gap-2">
              {user ? (
                <div className="dropdown dropdown-end">
                  {/* Avatar Toggle */}
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex items-center gap-2 p-1 hover:bg-base-200 rounded-full transition-all cursor-pointer"
                  >
                    <div className="avatar">
                      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          src={
                            user?.photoURL ||
                            "https://api.dicebear.com/7.x/avataaars/svg?seed=Foysal"
                          }
                          alt="user"
                        />
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-slate-400 hidden sm:block" />
                  </div>

                  {/* Dropdown Content */}
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-100 rounded-2xl w-56 mt-4 border border-base-200"
                  >
                    <div className="px-4 py-3 border-b border-base-100 mb-2">
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                        Account
                      </p>
                      <p className="text-sm font-bold truncate text-slate-900">
                        {user?.displayName || "User"}
                      </p>
                    </div>
                    <li>
                      <Link href="/items/add" className="py-3 flex gap-3">
                        <ClipboardPlus className="w-4 h-4" /> Add Items
                      </Link>
                    </li>
                    <li>
                      <Link href="/items/manage" className="py-3 flex gap-3">
                        <Activity className="w-4 h-4" /> Manage Items
                      </Link>
                    </li>
                    <div className="divider my-0 opacity-50"></div>
                    <li>
                      <button
                        onClick={logout}
                        className="py-3 text-red-500 flex gap-3 hover:bg-red-50"
                      >
                        <LogOut className="w-4 h-4" /> Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="hidden lg:flex items-center nav-link">
                  <ul className="menu menu-horizontal px-1">
                    <li>
                      <Link
                        href="/login"
                        className={`font-sans font-medium text-sm hover:text-primary transition-colors ${pathname.startsWith("/login") ? "active" : ""}`}
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                  <Link
                    href="/register"
                    className="btn btn-primary btn-sm rounded-full px-6 ml-2"
                  >
                    Register
                  </Link>
                </div>
              )}

              {/* Hamburger (Mobile Only) */}
              <label
                htmlFor="my-drawer-3"
                className="btn btn-square btn-ghost lg:hidden ml-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>

        {/* --- Mobile Sidebar (Drawer) --- */}
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <div className="p-4 w-80 min-h-full bg-base-100 flex flex-col">
            {/* Mobile User Info */}
            {user && (
              <div className="flex items-center gap-4 mb-8 p-4 bg-base-200 rounded-2xl">
                <div className="avatar">
                  <div className="w-12 rounded-full ring ring-primary">
                    <img
                      src={
                        user?.photoURL ||
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=Foysal"
                      }
                      alt="user"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-black text-sm tracking-tight">
                    {user?.displayName || "User"}
                  </p>
                  <p className="text-[10px] uppercase font-bold text-slate-400">
                    Premium Member
                  </p>
                </div>
              </div>
            )}

            <ul className="menu text-base-content gap-2 nav-link">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className={`text-lg font-bold py-4 border-b border-base-200 ${pathname === route.path ? "active" : ""}`}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}

              {user ? (
                <li>
                  <button
                    onClick={logout}
                    className="text-lg font-bold py-4 text-red-500"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      href="/login"
                      className={`text-lg font-bold py-4 border-b border-base-200 ${pathname.startsWith("/login") ? "active" : ""}`}
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/register"
                      className={`text-lg font-bold py-4 border-b border-base-200 ${pathname.startsWith("/register") ? "active" : ""}`}
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>

            {user && (
              <div className="mt-auto p-2">
                <button
                  onClick={handleMessage}
                  className="btn btn-primary btn-sm w-full rounded-full"
                >
                  Get Tickets
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
