"use client";
import Link from "next/link";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import {
  ChevronDown,
  User,
  ClipboardPlus,
  Settings,
  Activity,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

const NavBar = () => {
  const { user, logout } = useAuth();

  const routes = [
    { name: "Home", path: "/" },
    { name: "Items", path: "/items" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="drawer sticky z-[2000] top-0">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* --- Navbar --- */}
        <div className="navbar bg-base-100/80 backdrop-blur-md border-b border-base-200 px-4 lg:px-8">
          <div className="flex-1">
            <Link
              href="/"
              className="font-display text-2xl font-extrabold tracking-tighter hover:opacity-80 transition-opacity"
            >
              Odyssey<span className="text-primary"> Event</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal px-1 gap-1 mr-4">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className="font-sans font-medium text-sm hover:text-primary transition-colors"
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
                          user?.photoURL || "https://i.pravatar.cc/150?u=foysal"
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
                      {user?.displayName || "Foysal Mahmood"}
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
              <div className="hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <Link
                      href="/login"
                      className="font-sans font-medium text-sm hover:text-primary transition-colors"
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
                    src={user?.photoURL || "https://i.pravatar.cc/150?u=foysal"}
                    alt="user"
                  />
                </div>
              </div>
              <div>
                <p className="font-black text-sm tracking-tight">
                  {user?.displayName || "Foysal Mahmood"}
                </p>
                <p className="text-[10px] uppercase font-bold text-slate-400">
                  Premium Member
                </p>
              </div>
            </div>
          )}

          <ul className="menu text-base-content gap-2">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className="text-lg font-bold py-4 border-b border-base-200"
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
                    className="text-lg font-bold py-4 border-b border-base-200"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="text-lg font-bold py-4">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>

          <div className="mt-auto p-4">
            <button className="btn btn-primary w-full rounded-xl">
              Get Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
