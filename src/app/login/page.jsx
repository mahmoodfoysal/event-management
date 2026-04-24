"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      alert(`Logged in as ${user.displayName}`);

      router.push("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = userCredential.user;

      alert(`Logged in as ${user.email}`);

      router.push("/");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col lg:flex-row">
        {/* --- LEFT SIDE: BRANDING/VISUAL (Hidden on mobile or stacked) --- */}
        <div className="w-full lg:w-1/2 bg-slate-900 p-12 md:p-20 text-white flex flex-col justify-between relative overflow-hidden min-h-[40vh] lg:min-h-screen">
          {/* Abstract background decorative elements */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-5%] right-[-5%] w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[80px]"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-black tracking-tighter italic text-orange-500">
              Odyssey Event Management
            </h2>
          </div>

          <div className="relative z-10 space-y-8">
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
              Build your <br />
              <span className="text-orange-500">legacy</span> with us.
            </h1>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md">
              The worlds most intuitive platform for event management and
              creative production. Join 2,000+ professionals today.
            </p>
          </div>

          <div className="relative z-10 pt-12 border-t border-slate-800 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/150?u=${i + 10}`}
                  alt="user"
                  className="w-12 h-12 rounded-full border-4 border-slate-900 object-cover"
                />
              ))}
            </div>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500">
              Trust in work
            </p>
          </div>
        </div>

        {/* --- RIGHT SIDE: FORM --- */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white">
          <div className="w-full max-w-lg space-y-12">
            <div className="space-y-3">
              <h3 className="text-4xl font-black text-slate-900 tracking-tight">
                Login Account
              </h3>
              <p className="text-slate-400 font-medium text-base">
                You have not an account? Please
                <Link
                  href="/register"
                  className="text-orange-500 font-bold hover:underline"
                >
                  <span className="text-orange-500 font-bold cursor-pointer hover:underline">
                    {" "}
                    Sign Up
                  </span>
                </Link>
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                  Email Address
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="john@user.com"
                  className="w-full h-16 bg-slate-50 border border-slate-100 rounded-2xl px-6 focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-300 shadow-sm"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full h-16 bg-slate-50 border border-slate-100 rounded-2xl px-6 focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-300 shadow-sm"
                  />
                  <button
                    type="submit"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-orange-500 text-[10px] font-black uppercase tracking-widest"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button className="cursor-pointer w-full h-12 bg-orange-500 text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-orange-100 hover:bg-orange-600 hover:scale-[1.01] active:scale-[0.98] transition-all">
                  Login Account
                </button>
              </div>

              {/* Social Divider */}
              <div className="relative py-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-100"></div>
                </div>
                <div className="relative flex justify-center text-[10px] uppercase font-black tracking-[0.3em] text-slate-300">
                  <span className="bg-white px-6">Direct Access</span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="cursor-pointer h-12 border border-slate-100 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-all text-xs font-bold text-slate-700 shadow-sm"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    className="w-5 h-5"
                    alt="google"
                  />
                  Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
