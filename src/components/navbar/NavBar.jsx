"use client";
import Link from "next/link";
import React from "react";
import { useAuth } from "@/context/AuthContext";

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
    <div className="drawer position: sticky z-[2000] top-0">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-40 w-full border-b border-white/5 px-4 lg:px-8">
          <div className="flex-1">
            {/* Logo */}
            <Link
              href="/"
              className="font-display text-2xl font-extrabold tracking-tighter hover:opacity-80 transition-opacity"
            >
              Odyssey<span className="text-primary"> Event Management</span>
            </Link>
          </div>

          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal px-1 gap-2">
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

              {user ? (
                <li onClick={logout}>
                  <Link
                    href="/"
                    className="font-sans font-medium text-sm hover:text-primary transition-colors"
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      href="/login"
                      className="font-sans font-medium text-sm hover:text-primary transition-colors"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/register"
                      className="font-sans font-medium text-sm hover:text-primary transition-colors"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <button className="btn btn-primary btn-sm ml-4 rounded-full px-6">
              Get Tickets
            </button>
          </div>

          {/* Hamburger Button (Hidden on Desktop) */}
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
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

        {/* Page Content Goes Here */}
      </div>

      {/* Mobile Sidebar (Drawer) */}
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col gap-4">
          <li className="mb-8">
            <Link href="/" className="font-display text-2xl font-extrabold">
              EVENT<span className="text-primary">NEXUS</span>
            </Link>
          </li>
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className="text-lg font-sans py-3 border-b border-white/5"
              >
                {route.name}
              </Link>
            </li>
          ))}

          {user ? (
            <li onClick={logout}>
              <Link
                href="/"
                className="text-lg font-sans py-3 border-b border-white/5"
              >
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  href="/login"
                  className="text-lg font-sans py-3 border-b border-white/5"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-lg font-sans py-3 border-b border-white/5"
                >
                  Register
                </Link>
              </li>
            </>
          )}

          <li className="mt-auto">
            <button className="btn btn-primary w-full">Get Tickets</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
