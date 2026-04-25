"use client";
import React, { useEffect, useState } from "react";
import { events } from "@/data/events";
import Card from "../card/Card";
import Link from "next/link";

const Features = () => {
  const [eventList, setEventList] = useState(events);
  const [randomEvent, setRandomEvent] = useState([]);

  useEffect(() => {
    const getRandomItems = (arr, count) => {
      const result = [];
      const usedIndices = new Set();

      while (result.length < count && usedIndices.size < arr?.length) {
        const index = Math.floor(Math.random() * arr?.length);
        if (!usedIndices.has(index)) {
          usedIndices.add(index);
          result.push(arr[index]);
        }
      }

      return result;
    };

    setTimeout(() => {
      setRandomEvent(getRandomItems(eventList, 4));
    }, 0);
  }, [eventList]);

  return (
    <>
      <section className="py-10 px-10 lg:px-18 bg-slate-50">
        <div className="max-w-8xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <span className="text-orange-600 font-bold tracking-[0.3em] text-xs uppercase">
              Upcoming
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900">
              Featured <span className="text-orange-500 ">Events</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* 3-Card Row Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {randomEvent.map((item, index) => (
              <Card key={index} event={item}></Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/items">
              <button className="btn btn-ghost text-orange-500 font-bold text-[20px]">
                View More →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
