"use client";
import { useParams } from "next/navigation";
import React from "react";
import { projects } from "@/data/events"; // Ensure this matches your export
import Card from "@/components/card/Card";
import Link from "next/link";

const Page = () => {
  const params = useParams();
  const itemId = params?.id;

  // Find project by ID
  const Detail = projects?.find((event) => event.id === parseInt(itemId));

  // Filter related events by Category (using name or a category ID)
  const reletedEvents = projects
    ?.filter(
      (event) => event.category === Detail?.category && event.id !== Detail?.id,
    )
    .slice(0, 3); // Limit to 3 items

  if (!Detail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <Link href="/projects">
          <button className="btn btn-ghost text-orange-500 font-bold">
            ← Back to Projects
          </button>
        </Link>

        {/* --- 1. HERO SECTION --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-6 md:p-10 rounded-[3rem] shadow-sm border border-slate-200">
          <div className="rounded-[2rem] overflow-hidden h-[400px] md:h-[500px]">
            <img
              src={Detail?.img} // FIXED: matched to 'img'
              className="w-full h-full object-cover"
              alt={Detail?.name}
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="flex gap-2">
              <span className="badge badge-primary rounded-lg font-bold p-3">
                {Detail?.category}
              </span>
              <span className="badge badge-outline rounded-lg font-bold p-3">
                {Detail?.type}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              {Detail?.name} {/* FIXED: matched to 'name' */}
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed">
              {Detail?.long_description}
            </p>

            <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-100">
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">
                  Date
                </p>
                <p className="font-bold text-slate-900">{Detail?.date}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">
                  Location
                </p>
                <p className="font-bold text-slate-900">{Detail?.location}</p>
              </div>
              {/* Optional: Add price to your array later, currently using fallback */}
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">
                  Status
                </p>
                <p className="font-bold text-slate-900 text-green-600">
                  Completed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. REVIEWS (Placeholder) --- */}
        {/* ... keep your existing review section ... */}
        <section className="space-y-8">
          <h2 className="text-3xl font-black text-slate-900">
            Client <span className="text-orange-500 ">Reviews</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side: Rating Input */}
            <div className="lg:col-span-1 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-fit">
              <h4 className="text-lg font-bold text-slate-900 mb-6">
                Leave a Rating
              </h4>
              <div className="space-y-6">
                <div className="rating rating-lg gap-2">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <textarea
                  className="textarea textarea-bordered w-full bg-slate-50 border-slate-200 rounded-2xl h-32"
                  placeholder="Share your thoughts about this event..."
                ></textarea>
                <button className="btn btn-primary w-full rounded-xl text-white">
                  Post Review
                </button>
              </div>
            </div>

            {/* Right Side: Comments Display */}
            <div className="lg:col-span-2 space-y-4">
              {[1, 2].map((review) => (
                <div
                  key={review}
                  className="bg-white p-6 rounded-[2rem] border border-slate-100 flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex-shrink-0"></div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <p className="font-bold text-slate-900">User Name</p>
                      <div className="rating rating-xs">
                        <input
                          type="radio"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm">
                      Amazing organization! The sound and lighting were
                      top-notch. Highly recommend attending the next one.
                    </p>
                    <p className="text-[10px] font-bold text-slate-300 uppercase">
                      2 Days Ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
