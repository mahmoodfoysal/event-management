"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AddProjectForm = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    date: "",
    category: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate API logic
    const finalData = {
      ...formData,
      id: Date.now(), // Generate unique ID
      category_id: 1, // Defaulting based on your JSON structure
    };

    console.log("Success:", finalData);

    // Trigger Success Toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);

    // Reset Form
    setFormData({
      title: "",
      shortDescription: "",
      fullDescription: "",
      price: "",
      date: "",
      category: "Tech",
      imageUrl: "",
    });
  };

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (!user) return <p>Checking auth...</p>;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 flex justify-center items-center relative">
      {/* --- SUCCESS TOAST --- */}
      {showToast && (
        <div className="fixed top-10 right-10 z-50 animate-bounce-subtle">
          <div className="bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs font-black">
              ✓
            </div>
            <p className="font-bold text-sm uppercase tracking-widest">
              Item Added Successfully!
            </p>
          </div>
        </div>
      )}

      {/* --- FORM CONTAINER --- */}
      <div className="w-full max-w-4xl bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Add New <span className="text-orange-500">Item</span>
            </h2>
            <p className="text-slate-400 font-medium mt-2">
              Fill in the details below to list a new event on the platform.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title - Required */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                Event Title *
              </label>
              <input
                required
                name="title"
                value={formData.title}
                onChange={handleChange}
                type="text"
                placeholder="e.g. Global Tech Summit 2026"
                className="w-full h-14 bg-slate-50 border border-slate-100 rounded-2xl px-6 focus:outline-none focus:border-orange-500 transition-all font-semibold text-slate-900"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Short Description - Required */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                  Short Description *
                </label>
                <input
                  required
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                  type="text"
                  placeholder="Catchy one-liner..."
                  className="w-full h-14 bg-slate-50 border border-slate-100 rounded-2xl px-6 focus:outline-none focus:border-orange-500 transition-all font-semibold text-slate-900"
                />
              </div>

              {/* Image URL - Optional */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                  Image URL (Optional)
                </label>
                <input
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  className="w-full h-14 bg-slate-50 border border-slate-100 rounded-2xl px-6 focus:outline-none focus:border-orange-500 transition-all font-semibold text-slate-900"
                />
              </div>
            </div>

            {/* Full Description - Required */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                Full Description *
              </label>
              <textarea
                required
                name="fullDescription"
                value={formData.fullDescription}
                onChange={handleChange}
                rows="4"
                placeholder="Detail everything your attendees need to know..."
                className="w-full py-5 bg-slate-50 border border-slate-100 rounded-2xl px-6 focus:outline-none focus:border-orange-500 transition-all font-semibold text-slate-900"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Price - Required */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                  Price (USD) *
                </label>
                <input
                  required
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  type="number"
                  placeholder="299.00"
                  className="w-full h-14 bg-slate-50 border border-slate-100 rounded-2xl px-6 focus:outline-none focus:border-orange-500 transition-all font-semibold text-slate-900"
                />
              </div>

              {/* Date - Required */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                  Event Date *
                </label>
                <input
                  required
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  type="date"
                  className="w-full h-14 bg-slate-50 border border-slate-100 rounded-2xl px-6 focus:outline-none focus:border-orange-500 transition-all font-semibold text-slate-900"
                />
              </div>

              {/* Priority/Category - Required */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full h-14 bg-slate-50 border border-slate-100 rounded-2xl px-6 focus:outline-none focus:border-orange-500 transition-all font-bold text-slate-900"
                >
                  <option value="">Select</option>
                  <option value="Tech">Tech</option>
                  <option value="Business">Business</option>
                  <option value="Design">Art</option>
                  <option value="Marketing">Exhibition</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full h-16 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-orange-500 transition-all duration-500 shadow-xl shadow-slate-200 active:scale-[0.98]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .animate-bounce-subtle {
          animation: slideIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes slideIn {
          from {
            transform: translateX(100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AddProjectForm;
