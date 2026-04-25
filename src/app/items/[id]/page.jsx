"use client";
import { useParams } from "next/navigation";
import React from "react";
import { events } from "@/data/events";
import Card from "@/components/card/Card";
import Link from "next/link";

const Page = () => {
  const params = useParams();
  const itemId = params?.id;
  const Detail = events?.find((event) => event.id === parseInt(itemId));
  const reletedEvents = events?.filter(
    (event) =>
      event.category_id === Detail?.category_id && event.id !== Detail?.id,
  );

  return (
    <>
      <div className="min-h-screen bg-slate-50 py-12 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <Link href="/items">
            {" "}
            <button className="btn btn-ghost text-orange-500 font-bold">
              ← Back to All Items
            </button>
          </Link>
          {/* --- 1. HERO SECTION: IMAGE & KEY DETAILS --- */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-6 md:p-10 rounded-[3rem] shadow-sm border border-slate-200">
            <div className="rounded-[2rem] overflow-hidden h-[400px] md:h-[500px]">
              <img
                src={Detail?.image}
                className="w-full h-full object-cover"
                alt="Event Detail"
              />
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div className="rating rating-xs">
                <input
                  type="radio"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                  disabled
                />
                <input
                  type="radio"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                  disabled
                />
                <input
                  type="radio"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                  disabled
                />
                <input
                  type="radio"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                  disabled
                />
                <input
                  type="radio"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                  disabled
                />
              </div>
              <div className="flex gap-2">
                <span className="badge badge-primary rounded-lg font-bold p-3">
                  {Detail?.category}
                </span>
                {/* <span className="badge badge-outline rounded-lg font-bold p-3">FEATURED</span> */}
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                {Detail?.title}
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
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">
                    Price
                  </p>
                  <p className="font-bold text-slate-900">
                    ${Detail.price} / Person
                  </p>
                </div>
              </div>

              <button className="btn btn-primary btn-lg rounded-2xl text-white font-bold w-full md:w-fit px-12">
                Book Your Seat Now
              </button>
            </div>
          </section>

          {/* --- 3. BOTTOM: RELATED EVENTS --- */}
          <section className="space-y-8 pt-10">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-black text-slate-900">
                Related <span className="text-orange-500 ">Events</span>
              </h2>
              {/* <button className="btn btn-ghost text-orange-500 font-bold">
                View More →
              </button> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reletedEvents?.map((event, index) => (
                <Card key={index} event={event} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
