"use client";
import React, { useState } from "react";
import Card from "@/components/card/Card";
import { getStoredItems } from "@/lib/itemsStorage";

const Page = () => {
  const [allEvents] = useState(() => getStoredItems());
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedlocation, setSelectedlocation] = useState("");
  const [price, setPrice] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 8;

  const maxPrice = Math.max(...allEvents.map((e) => e.price), 0);

  const filteredEvents = allEvents.filter((event) => {
    const matchSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(event.category_id);

    const matchlocation =
      !selectedlocation || event.location.includes(selectedlocation);

    const matchPrice = price === 0 || event.price <= price;

    return matchSearch && matchCategory && matchlocation && matchPrice;
  });

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const categories = [
    ...new Map(
      allEvents.map((e) => [
        e.category_id,
        { id: e.category_id, name: e.category },
      ]),
    ).values(),
  ];

  const locations = [...new Set(allEvents.map((e) => e.location))];

  const handleCategoryChange = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSearch("");
    setSelectedCategories([]);
    setSelectedlocation("");
    setPrice(0);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearch("");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Summary Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">
              Featured <span className="text-orange-500">Items</span>
            </h1>
            <p className="text-slate-500 font-medium mt-2">
              Showing {filteredEvents.length} results from our collection
            </p>
          </div>
          <button
            onClick={resetFilters}
            className="btn btn-ghost btn-sm text-orange-600 font-bold hover:bg-orange-50 transition-all"
          >
            Clear Filters
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="w-full lg:min-w-[340px] lg:w-[340px] space-y-10 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 h-fit lg:sticky lg:top-24">
            {/* Search Section */}
            <div className="form-control w-full">
              <label className="label text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2">
                Search Event
              </label>
              <div className="relative">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Type event name..."
                  className="input input-bordered w-full bg-slate-50 border-slate-200 rounded-2xl pr-10 focus:outline-none focus:border-orange-500 transition-all"
                />
                <button
                  onClick={handleClearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-orange-500 transition-colors"
                >
                  {search && <span className="text-xl">×</span>}
                </button>
              </div>
            </div>

            {/* Categories Section */}
            <div className="space-y-5">
              <label className="label text-[10px] uppercase font-bold tracking-widest text-slate-400">
                By Category
              </label>
              <div
                className="flex flex-col gap-3 max-h-[300px] overflow-y-auto pr-2 
    scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent"
              >
                {categories?.map((cat, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      checked={selectedCategories.includes(cat.id)}
                      onChange={() => handleCategoryChange(cat.id)}
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-warning rounded-md border-slate-300"
                    />
                    <span className="text-sm font-semibold text-slate-600 group-hover:text-orange-500 transition-colors">
                      {cat.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location Section - Styled as Badges */}
            <div className="space-y-5">
              <label className="label text-[10px] uppercase font-bold tracking-widest text-slate-400">
                By Location
              </label>
              <div
                className="flex flex-col gap-3 max-h-[300px] overflow-y-auto pr-2 
    scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent"
              >
                {" "}
                {/* Changed from flex-wrap gap-2 to flex-col gap-3 */}
                {locations?.map((loc, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setSelectedlocation(selectedlocation === loc ? "" : loc)
                    }
                    className={`px-4 py-3 cursor-pointer rounded-xl text-xs font-bold transition-all border text-left w-full ${
                      selectedlocation === loc
                        ? "bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-100"
                        : "bg-white border-slate-200 text-slate-500 hover:border-orange-500"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{loc}</span>
                      {selectedlocation === loc && (
                        <span className="text-[10px]">✔</span> // Optional checkmark for better UX
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Slider Section */}
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <label className="label text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Max Price
                </label>
                <span className="text-sm font-black text-slate-900">
                  ${price || maxPrice}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="range range-warning range-sm"
              />
              <div className="flex justify-between text-[11px] font-bold text-slate-300 px-1">
                <span>$0</span>
                <span>${maxPrice}</span>
              </div>
            </div>
          </aside>

          {/* ================= MAIN CONTENT (EVENT GRID) ================= */}
          <main className="flex-grow">
            {paginatedEvents.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
                {paginatedEvents.map((item, index) => (
                  <Card key={index} event={item} />
                ))}
              </div>
            ) : (
              <div className="w-full bg-white rounded-[3rem] py-24 text-center border border-dashed border-slate-300">
                <p className="text-slate-400 font-bold italic text-lg">
                  No events match your current filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="btn btn-ghost btn-sm text-orange-600 font-bold hover:bg-orange-50 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination Component */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-20">
                <div className="join bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <button
                    className="join-item btn btn-ghost px-6 disabled:opacity-30"
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Prev
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`join-item btn px-6 ${
                        currentPage === i + 1
                          ? "btn-primary text-white"
                          : "btn-ghost border-l border-slate-100"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    className="join-item btn btn-ghost px-6 border-l border-slate-100 disabled:opacity-30"
                    onClick={() =>
                      setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Page;
