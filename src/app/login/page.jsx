"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: false, password: false });

  const provider = new GoogleAuthProvider();

  const toastStyle = {
    borderRadius: "16px",
    background: "#1e293b",
    color: "#fff",
    fontWeight: "bold",
  };

  const handleGoogleLogin = async () => {
    const toastId = "google-login";

    try {
      const result = await signInWithPopup(auth, provider);

      router.push("/");
    } catch (err) {
      toast.error(err.message, {
        id: toastId,
        duration: 3000,
        style: toastStyle,
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailEmpty = !email.trim();
    const passwordEmpty = !password.trim();

    setErrors({ email: emailEmpty, password: passwordEmpty });

    if (emailEmpty || passwordEmpty) {
      toast.error("Please fill in all required fields.", {
        position: "top-center",
        duration: 3000,
        style: toastStyle,
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);

      router.push("/");
    } catch (err) {
      toast.error("Invalid email or password.", {
        id: toastId,
        duration: 4000,
        style: toastStyle,
      });
    }
  };

  useEffect(() => {
    if (!loading && user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (user)
    return <p className="text-center py-10 font-bold">Checking auth...</p>;

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="min-h-screen bg-white flex flex-col lg:flex-row">
        {/* --- LEFT SIDE: BRANDING --- */}
        <div className="w-full lg:w-1/2 bg-slate-900 p-12 md:p-20 text-white flex flex-col justify-between relative overflow-hidden min-h-[40vh] lg:min-h-screen">
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
              creative production.
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
                New here?{" "}
                <Link
                  href="/register"
                  className="text-orange-500 font-bold hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label
                  className={`text-[11px] font-black uppercase tracking-[0.2em] ml-1 transition-colors ${errors.email ? "text-red-500" : "text-slate-400"}`}
                >
                  Email Address {errors.email && " *"}
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: false });
                  }}
                  type="email"
                  placeholder="john@user.com"
                  className={`w-full h-16 rounded-2xl px-6 focus:outline-none transition-all font-medium shadow-sm border 
                    ${
                      errors.email
                        ? "bg-red-50 border-red-200 focus:border-red-500 text-red-900"
                        : "bg-slate-50 border-slate-100 focus:border-orange-500 focus:bg-white text-slate-900 placeholder:text-slate-300"
                    }`}
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label
                  className={`text-[11px] font-black uppercase tracking-[0.2em] ml-1 transition-colors ${errors.password ? "text-red-500" : "text-slate-400"}`}
                >
                  Password {errors.password && " *"}
                </label>
                <div className="relative">
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password)
                        setErrors({ ...errors, password: false });
                    }}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className={`w-full h-16 rounded-2xl px-6 focus:outline-none transition-all font-medium shadow-sm border 
                      ${
                        errors.password
                          ? "bg-red-50 border-red-200 focus:border-red-500 text-red-900"
                          : "bg-slate-50 border-slate-100 focus:border-orange-500 focus:bg-white text-slate-900 placeholder:text-slate-300"
                      }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-orange-500 text-[10px] font-black uppercase tracking-widest"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full h-14 bg-orange-500 text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-orange-100 hover:bg-orange-600 hover:scale-[1.01] active:scale-[0.98] transition-all"
                >
                  Login Account
                </button>
              </div>

              <div className="relative py-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-100"></div>
                </div>
                <div className="relative flex justify-center text-[10px] uppercase font-black tracking-[0.3em] text-slate-300">
                  <span className="bg-white px-6">Direct Access</span>
                </div>
              </div>

              <button
                onClick={handleGoogleLogin}
                type="button"
                className="w-full h-14 border border-slate-100 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-all text-xs font-bold text-slate-700 shadow-sm"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5 h-5"
                  alt="google"
                />
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
