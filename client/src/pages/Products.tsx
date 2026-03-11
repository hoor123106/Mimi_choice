import { useState, useEffect } from "react";
import { useProducts } from "@/hooks/use-products";
import { ProductCard } from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, Filter, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

interface ProductsProps {
  category?: string;
  subcategory?: string;
  size?: string;
}

const CATEGORIES = ["All", "Feeders", "Teats", "Dresses"];

export default function Products({ category: propCategory, subcategory: propSubcategory, size: propSize }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState<string>(propCategory || "All");
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    if (propCategory) setActiveCategory(propCategory);
  }, [propCategory]);

  const filters = activeCategory !== "All" ? { 
    category: activeCategory,
    subcategory: propSubcategory,
    size: propSize
  } : undefined;
  
  const { data: products, isLoading } = useProducts(filters);

  const filteredProducts = products?.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isMainFeedersPage = activeCategory === "Feeders" && !propSubcategory && !propSize;

  const getTitle = () => {
    if (propSize) return `${propSize} Wide Neck Feeders`;
    if (propSubcategory) return `${propSubcategory} Feeders`;
    if (activeCategory !== "All") return `Our ${activeCategory}`;
    return "Our Products";
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{isMainFeedersPage ? "All Feeders" : getTitle()}</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Discover our premium range of baby essentials designed with love, care, and the highest safety standards.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-lg shadow-black/5 p-4 md:p-6 mb-12 flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-secondary text-primary hover:bg-secondary/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-slate-50 border-secondary focus-visible:ring-primary rounded-xl h-11"
            />
          </div>
        </div>

        {/* Grid or Skeleton */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="space-y-4">
                <Skeleton className="w-full aspect-[4/5] rounded-2xl" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-10 w-full rounded-xl" />
              </div>
            ))}
          </div>
        ) : filteredProducts?.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-secondary">
            <Filter className="w-16 h-16 mx-auto text-secondary mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-6 text-accent font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts?.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Categories Section for Main Feeders Page */}
        {isMainFeedersPage && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-primary text-center mb-10">Explore Feeder Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Link href="/feeders/wide-neck" className="group">
                <Card className="overflow-hidden rounded-3xl border-none shadow-lg hover-elevate transition-all cursor-pointer h-72 bg-[#E6F4FF]">
                  <CardContent className="p-0 h-full flex flex-col justify-center items-center text-center p-8">
                    <h3 className="text-3xl font-bold text-primary mb-2">Wide Neck Feeders</h3>
                    <p className="text-muted-foreground mb-6">Premium wide neck design for easy cleaning and anti-colic venting.</p>
                    <div className="px-8 py-3 bg-primary text-white rounded-full font-bold group-hover:bg-primary/90 transition-all flex items-center gap-2">
                      View Wide Neck <ChevronRight className="w-5 h-5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/feeders/regular" className="group">
                <Card className="overflow-hidden rounded-3xl border-none shadow-lg hover-elevate transition-all cursor-pointer h-72 bg-[#FFF9F0]">
                  <CardContent className="p-0 h-full flex flex-col justify-center items-center text-center p-8">
                    <h3 className="text-3xl font-bold text-primary mb-2">Regular Feeders</h3>
                    <p className="text-muted-foreground mb-6">Classic slim-neck design, perfect for tiny hands to hold easily.</p>
                    <div className="px-8 py-3 bg-primary text-white rounded-full font-bold group-hover:bg-primary/90 transition-all flex items-center gap-2">
                      View Regular <ChevronRight className="w-5 h-5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
