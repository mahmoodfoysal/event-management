"use client"
import Link from "next/link";
import React from "react";

const Card = ({ event }) => {
  // Guard clause to handle undefined event data
  if (!event) return null;

  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200/60 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Price Tag Overlay */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md font-bold text-slate-900 text-xs">
          ${event.price}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[9px] font-black tracking-widest text-orange-600 uppercase bg-orange-50 px-2 py-1 rounded-lg">
            {event.category}
          </span>
          <p className="text-[10px] font-bold text-slate-400">{event.date}</p>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-500 transition-colors leading-tight line-clamp-1 mb-2">
          {event.title}
        </h3>

        <p className="text-slate-500 text-[11px] line-clamp-2 leading-relaxed mb-4">
          Experience the most anticipated {event.category?.toLowerCase() || 'event'} of the year.
        </p>

        {/* Action Section - Fixed for 4 items in a row */}
        <div className="mt-auto pt-4 flex flex-col gap-2 border-t border-slate-100">
          <button className="btn btn-primary btn-sm rounded-xl w-full font-bold text-white shadow-sm capitalize">
            Book Now
          </button>
          
          <Link href={`/items/${event.id}`} className="w-full">
            <button className="btn btn-ghost btn-sm rounded-xl w-full font-bold text-slate-500 hover:text-orange-600 capitalize">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;