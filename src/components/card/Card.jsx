"use client"
import Link from "next/link";
import React from "react";

const Card = ({ event }) => {
  return (
    <>
      <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200/60">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Price Tag Overlay */}
          <div className="absolute top-4 right-4 bg-white px-4 py-1 rounded-full shadow-md font-bold text-slate-900">
            ${event.price}
          </div>
        </div>

        {/* Content Container */}
        <div className="p-8 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black tracking-widest text-orange-600 uppercase bg-orange-50 px-3 py-1 rounded-lg">
              {event.category}
            </span>
            <p className="text-sm font-bold text-slate-400">{event.date}</p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-orange-500 transition-colors leading-tight">
            {event.title}
          </h3>

          <p className="text-slate-500 text-sm line-clamp-2">
            Experience the most anticipated {event.category.toLowerCase()} event
            of the year. Secure your spot now.
          </p>

          <div className="pt-6 flex items-center justify-between border-t border-slate-100 ">
            <button className="btn btn-primary btn-md rounded-xl px-8 font-bold text-white cursor-pointer">
              Book Now
            </button>
  <Link key={event.id} href={`/items/${event.id}`}>
    <button className="btn btn-primary btn-md rounded-xl px-8 font-bold text-white">
      View Details
    </button>
  </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
