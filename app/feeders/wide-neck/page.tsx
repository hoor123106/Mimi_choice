"use client";

import { useState } from "react";
import { useProducts } from "@/hooks/use-products";
import { ProductCard } from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function WideNeckFeeders() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: products, isLoading } = useProducts({ category: "Feeders", subcategory: "Wide Neck" });

  const filtered = products?.filter(
    (p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Wide Neck Feeders</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">Premium wide neck design for easy cleaning and anti-colic venting.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-12 flex justify-end">
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 bg-slate-50 border-secondary focus-visible:ring-primary rounded-xl h-11" />
          </div>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => <div key={i} className="space-y-4"><Skeleton className="w-full aspect-[4/5] rounded-2xl" /></div>)}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered?.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        )}
      </div>
    </div>
  );
}
