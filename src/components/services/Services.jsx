import React from "react";

const Services = () => {
  const serviceList = [
    {
      title: "Complete Event Planning Made Easy",
      desc: "We manage every detail from start to finish. From intimate social gatherings to large-scale corporate functions, we handle it all.",
      icon: "📋",
    },
    {
      title: "All Your Party Rentals in One Place",
      desc: "From chairs and tables to premium linens, we’ve got you covered. We specialize in pipe & drape, red carpets, and dynamic lighting.",
      icon: "🪑",
    },
    {
      title: "Unforgettable Guest Entertainment",
      desc: "No event is complete without amazing entertainment. We bring top-tier bands, DJs, and interactive games to your doorstep.",
      icon: "🎤",
    },
    {
      title: "Inspiring Ideas for Your Celebration",
      desc: "Feeling stuck? We brainstorm with you to uncover fun, memorable ideas for cozy gatherings or massive global summits.",
      icon: "💡",
    },
    {
      title: "Catering & Beverage Excellence",
      desc: "Full-service catering designed to delight every guest. From BBQ feasts to elegant plated meals, we manage the flavor.",
      icon: "🍽️",
    },
    {
      title: "Sound, Stage & Lighting Services",
      desc: "We provide everything you need to bring your event to life: professional audio/visual setups, stages, and lighting.",
      icon: "🏗️",
    },
  ];
  return (
    <section className="py-10 px-4 lg:px-12 bg-base-150">
      {" "}
      {/* Light Background */}
      <div className="max-w-7xl mx-auto">
        {/* Title & Subtitle Section */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900">
            Our{" "}
            <span className="text-orange-500 underline decoration-slate-200 underline-offset-8">
              Services
            </span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            We provide end-to-end solutions to ensure your celebration is
            seamless, stress-free, and truly unforgettable.
          </p>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-6 group hover:translate-y-[-5px] transition-transform duration-300"
            >
              {/* Icon - Large and Grayish (Grayscale for professional look) */}
              <div className="text-6xl mb-2 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                {service.icon}
              </div>

              {/* Title - Slate 900 for Light Theme */}
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-slate-900 leading-tight group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>

              {/* Description - Slate 500 for readability */}
              <p className="font-sans text-slate-500 leading-relaxed text-lg px-2">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
