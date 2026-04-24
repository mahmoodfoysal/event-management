import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        {/* Main Container */}
        <div className="w-full max-w-[1100px] bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 overflow-hidden flex flex-col lg:flex-row border border-white">
          {/* --- LEFT SIDE: BRANDING/VISUAL --- */}
          <div className="w-full lg:w-5/12 bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Abstract background circles */}
            <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 bg-orange-500/5 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-black tracking-tighter italic text-orange-500">
                EventNexus
              </h2>
            </div>

            <div className="relative z-10 space-y-6">
              <h1 className="text-4xl md:text-5xl font-black leading-[1.1]">
                Start your <br />
                <span className="text-orange-500">journey</span> with us.
              </h1>
              <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs">
                Join our community of world-class event planners and creative
                directors. Manage your successful projects with ease.
              </p>
            </div>

            <div className="relative z-10 pt-8 border-t border-slate-800">
              <div className="flex -space-x-3 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold"
                  >
                    U{i}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-orange-500 flex items-center justify-center text-[10px] font-black">
                  +2k
                </div>
              </div>
              <p className="text-[11px] uppercase tracking-widest font-bold text-slate-500">
                Trusted by 2,000+ Professionals
              </p>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <div className="w-full lg:w-7/12 p-8 md:p-16 bg-white">
            <div className="max-w-md mx-auto space-y-10">
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-slate-900">
                  Create Account
                </h3>
                <p className="text-slate-400 font-medium text-sm">
                  Already have an account?{" "}
                  <span className="text-orange-500 cursor-pointer hover:underline">
                    Login
                  </span>
                </p>
              </div>

              <form className="space-y-5">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Foysal Mahmood"
                      className="w-full h-14 bg-slate-50 border border-slate-100 rounded-2xl px-6 focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-medium text-slate-900"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="hello@domain.com"
                    className="w-full h-14 bg-slate-50 border border-slate-100 rounded-2xl px-6 focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-medium text-slate-900"
                  />
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 ml-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full h-14 bg-slate-50 border border-slate-100 rounded-2xl px-6 focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-medium text-slate-900"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-orange-500 text-xs font-bold uppercase tracking-tighter"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm rounded-lg border-slate-200 [--chkbg:theme(colors.orange.500)] [--chkfg:white]"
                    id="terms"
                  />
                  <label
                    htmlFor="terms"
                    className="text-xs text-slate-500 font-medium cursor-pointer select-none"
                  >
                    I agree to the{" "}
                    <span className="text-slate-900 underline">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-slate-900 underline">
                      Privacy Policy
                    </span>
                    .
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button className="w-full h-14 bg-orange-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg shadow-orange-100 hover:bg-orange-600 hover:scale-[1.01] active:scale-[0.98] transition-all">
                    Create My Account
                  </button>
                </div>

                {/* Social Signup Divider */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-100"></div>
                  </div>
                  <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest text-slate-300">
                    <span className="bg-white px-4">Or sign up with</span>
                  </div>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="h-12 border border-slate-100 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-all text-xs font-bold text-slate-600"
                  >
                    <span className="text-blue-600 font-black">G</span> Google
                  </button>
                  <button
                    type="button"
                    className="h-12 border border-slate-100 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-all text-xs font-bold text-slate-600"
                  >
                    <span className="text-blue-800 font-black">f</span> Facebook
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
