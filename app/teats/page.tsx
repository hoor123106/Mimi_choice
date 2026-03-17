"use client";

import { useState } from "react";
import { products as allProducts, type Product } from "@/data/products";
import { ProductCard } from "../components/ProductCard";
import { Search } from "lucide-react";

export default function Teats() {
  const [searchQuery, setSearchQuery] = useState("");
  const products: Product[] = allProducts.filter((p) => p.category === "Teats");

  const filtered = products.filter(
    (p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Teats</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">Premium silicone teats designed to mimic natural feeding for your baby&apos;s comfort.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-12 flex justify-end">
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              placeholder="Search teats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 bg-slate-50 border border-secondary focus-visible:ring-primary rounded-xl h-11"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
