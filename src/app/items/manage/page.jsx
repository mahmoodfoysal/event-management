"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import {
  Eye,
  Trash2,
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  MapPin,
  Tag,
} from "lucide-react";
import { events } from "@/data/events";
import Link from "next/link";

const ProductList = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [products, setProducts] = useState(events);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const itemsPerPage = 9;

  const toastStyle = {
    borderRadius: "16px",
    background: "#1e293b",
    color: "#fff",
    fontWeight: "bold",
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      toast.error("Deletion cancelled!", {
        duration: 3000,
        position: "top-center",
        style: toastStyle,
      });
      return;
    }

    const deletePromise = new Promise((resolve) => {
      setTimeout(() => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
        setSelectedProduct(null);
        resolve();
      }, 800);
    });

    return toast.promise(
      deletePromise,
      {
        loading: "Item deleting...",
        success: "Item removed from inventory!",
        error: "Something went wrong!",
      },
      {
        position: "top-center",
        style: toastStyle,
      },
    );
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (!user)
    return <p className="text-center py-10 font-bold">Checking auth...</p>;

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* --- DRAWER OVERLAY --- */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${selectedProduct ? "visible" : "invisible"}`}
      >
        <div
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 ${selectedProduct ? "opacity-100" : "opacity-0"}`}
          onClick={() => setSelectedProduct(null)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 ease-out p-8 flex flex-col ${selectedProduct ? "translate-x-0" : "translate-x-full"}`}
        >
          {selectedProduct && (
            <>
              <div className="flex justify-between items-center mb-8">
                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {selectedProduct.category}
                </span>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-6">
                <img
                  src={selectedProduct.image}
                  className="w-full h-64 object-cover rounded-[2rem] shadow-lg"
                  alt=""
                />

                <div>
                  <h2 className="text-3xl font-black text-slate-900 leading-tight">
                    {selectedProduct.title}
                  </h2>
                  <p className="text-2xl font-black text-orange-500 mt-2">
                    ${selectedProduct.price.toFixed(2)}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 py-6 border-y border-slate-100">
                  <div className="flex items-center gap-3 text-slate-500">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <span className="text-sm font-semibold">
                      {selectedProduct.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span className="text-sm font-semibold">
                      {selectedProduct.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500">
                    <Tag className="w-5 h-5 text-orange-500" />
                    <span className="text-sm font-semibold">
                      ID: #{selectedProduct.id}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">
                    Short Description
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">
                    Long Description
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {selectedProduct.long_description}
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 flex gap-3">
                <button
                  onClick={() => handleDelete(selectedProduct.id)}
                  className="cursor-pointer flex-1 h-14 bg-red-50 text-red-600 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition-all"
                >
                  <Trash2 className="w-4 h-4" /> Delete Item
                </button>
                <button className="cursor-pointer flex-1 h-14 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-orange-500 transition-all">
                  Edit Details
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* --- TABLE CONTENT (Header) --- */}
      <div className="w-full border-b border-slate-100 px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Item <span className="text-orange-500">Inventory</span>
          </h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
            Total Items: {products.length}
          </p>
        </div>
        <Link href="/items/add">
          <button className="cursor-pointer h-12 px-6 bg-orange-500 text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-slate-900 transition-all">
            <Plus className="w-4 h-4" /> Add Item
          </button>
        </Link>
      </div>

      {/* --- TABLE CONTENT (Body) --- */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100 text-left">
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Product
              </th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Category
              </th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Price
              </th>
              <th className="px-8 py-5 text-right text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {currentItems.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-slate-50/80 transition-all group"
              >
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      className="w-12 h-12 rounded-xl object-cover border border-slate-100"
                      alt=""
                    />
                    <p className="font-bold text-slate-900">{product.title}</p>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {product.category}
                  </span>
                </td>
                <td className="px-8 py-6">
                  <p className="text-sm font-black text-slate-900">
                    ${product.price.toFixed(2)}
                  </p>
                </td>
                <td className="px-8 py-6">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="cursor-pointer p-2.5 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-orange-500 hover:border-orange-100 hover:shadow-lg transition-all"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="cursor-pointer p-2.5 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-red-500 transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- TABLE CONTENT (Footer) --- */}
      <div className="w-full px-8 py-6 border-t border-slate-100 flex justify-between items-center bg-white">
        <p className="text-slate-400 text-xs font-medium">
          Showing {indexOfFirstItem + 1} to{" "}
          {Math.min(indexOfLastItem, products.length)} of {products.length}
        </p>
        <div className="flex gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${currentPage === 1 ? "bg-slate-50 text-slate-300" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            <ChevronLeft className="w-4 h-4 inline" /> Previous
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${currentPage === totalPages ? "bg-slate-50 text-slate-300" : "bg-slate-900 text-white hover:bg-orange-500"}`}
          >
            Next <ChevronRight className="w-4 h-4 inline" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
