"use client";

import { useState, useMemo } from "react";
import { useProducts } from "../../hooks/use-products";
import { ProductCard } from "../components/ProductCard";
import { Search, Filter } from "lucide-react";
import { Input } from "../components/input";
import type { Product } from "../../data/products";

type FilterKey = "All" | "Teats" | "Wide Neck" | "Regular";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "All", label: "All Products" },
  { key: "Teats", label: "Teats" },
  { key: "Wide Neck", label: "Wide Neck Feeders" },
  { key: "Regular", label: "Regular Feeders" },
];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { data: allProducts, isLoading } = useProducts();

  const filtered: Product[] = useMemo(() => {
    let result = [...allProducts];
    if (activeFilter === "Teats") result = result.filter((p) => p.category === "Teats");
    else if (activeFilter === "Wide Neck") result = result.filter((p) => p.subcategory === "Wide Neck");
    else if (activeFilter === "Regular") result = result.filter((p) => p.subcategory === "Regular Feeders");
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q));
    }
    return result;
  }, [activeFilter, searchQuery, allProducts]);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#22C1C3]">Our Products</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">Discover our premium range of baby essentials designed with love, care, and the highest safety standards.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-lg shadow-black/5 p-4 md:p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`flex flex-col items-start px-5 py-3 rounded-xl font-medium whitespace-nowrap transition-all border-2 ${
                    activeFilter === f.key
                      ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                      : "bg-slate-50 text-primary border-secondary hover:border-primary/30 hover:bg-secondary/50"
                  }`}
                >
                  <span className="text-sm font-semibold">{f.label}</span>
                  {/* <span className={`text-xs font-normal mt-0.5 ${activeFilter === f.key ? "text-white/70" : "text-muted-foreground"}`}>
                    {f.description}
                  </span> */}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-50 border-secondary focus-visible:ring-primary rounded-xl h-11"
              />
            </div>
          </div>

          {/* <div className="mt-3 flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-primary">{filtered.length}</span> product{filtered.length !== 1 ? "s" : ""}
              {activeFilter !== "All" && <span> in <span className="font-semibold text-accent">{FILTERS.find(f => f.key === activeFilter)?.label}</span></span>}
            </span>
          </div> */}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-6 shadow-xl border border-secondary/50 animate-pulse h-[380px]" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-secondary">
            <Filter className="w-16 h-16 mx-auto text-secondary mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
            <button
              onClick={() => { setActiveFilter("All"); setSearchQuery(""); }}
              className="mt-6 text-accent font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
