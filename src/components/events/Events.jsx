import React from "react";

const Features = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Global Tech Summit 2026",
      category: "Corporate",
      date: "MAY 15",
      price: "$199",
      image:
        "https://images.unsplash.com/photo-1540575861501-7ad0582373f2?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Abstract Art Gala",
      category: "Exhibition",
      date: "JUN 02",
      price: "$45",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Neon Music Festival",
      category: "Entertainment",
      date: "JUL 20",
      price: "$89",
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800",
    },
  ];
  return (
    <>
      <section className="py-10 px-4 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <span className="text-orange-600 font-bold tracking-[0.3em] text-xs uppercase">
              Upcoming Experiences
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900">
              Featured <span className="text-orange-500 italic">Events</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* 3-Card Row Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200/60"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Price Tag Overlay */}
                  <div className="absolute top-4 right-4 bg-white px-4 py-1 rounded-full shadow-md font-bold text-slate-900">
                    {event.price}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-widest text-orange-600 uppercase bg-orange-50 px-3 py-1 rounded-lg">
                      {event.category}
                    </span>
                    <p className="text-sm font-bold text-slate-400">
                      {event.date}
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-orange-500 transition-colors leading-tight">
                    {event.title}
                  </h3>

                  <p className="text-slate-500 text-sm line-clamp-2">
                    Experience the most anticipated{" "}
                    {event.category.toLowerCase()} event of the year. Secure
                    your spot now.
                  </p>

                  <div className="pt-6 flex items-center justify-between border-t border-slate-100 ">
                    <button className="btn btn-primary btn-md rounded-xl px-8 font-bold text-white cursor-pointer">
                      Book Now
                    </button>
                    <button className="btn btn-primary btn-md rounded-xl px-8 font-bold text-white cursor-pointer">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
