"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Heart, Truck, Star } from "lucide-react";
import { useProducts } from "@/hooks/use-products";
import { ProductCard } from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const { data: featuredProducts, isLoading } = useProducts({ isFeatured: "true" });

  return (
    <div className="w-full flex flex-col min-h-screen">

      <section className="relative overflow-hidden bg-secondary/50 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6">
                Premium Baby Care
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
                Soft, Safe, and Loved by <span className="text-primary">Moms Everywhere</span>.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Discover our carefully curated collection of wide-neck feeders, ultra-soft teats, and beautiful baby dresses designed for maximum comfort.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="btn-accent px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center justify-center">
                  Shop Collection
                </Link>
                <Link href="/about" className="px-8 py-4 rounded-xl text-base font-semibold bg-white text-primary border-2 border-primary/10 hover:border-primary/30 shadow-sm hover:shadow transition-all inline-flex items-center justify-center">
                  Our Story
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-primary/20 rounded-[3rem] transform rotate-3 scale-105"></div>
              <Image
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1000"
                alt="Happy baby"
                width={1000}
                height={750}
                className="relative z-10 rounded-[3rem] shadow-2xl object-cover aspect-square md:aspect-[4/3] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Trending Now</h2>
            <p className="text-muted-foreground">Our most loved essentials, handpicked for your little one&apos;s daily comfort.</p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="w-full aspect-square rounded-2xl" />
                  <Skeleton className="h-6 w-2/3" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts?.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/products" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-primary bg-secondary hover:bg-primary hover:text-white transition-colors duration-300">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-2">
                <ShieldCheck className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white">100% Safe Materials</h3>
              <p className="text-primary-foreground/80">BPA-free, non-toxic materials rigorously tested for your baby&apos;s absolute safety.</p>
            </div>
            <div className="space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-2">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white">Mom Approved</h3>
              <p className="text-primary-foreground/80">Designed with mothers to ensure natural feeding patterns and maximum comfort.</p>
            </div>
            <div className="space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-2">
                <Truck className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white">Fast Delivery</h3>
              <p className="text-primary-foreground/80">Because babies don&apos;t wait. Quick and reliable shipping right to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary/30 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">The Mimi Choice Promise</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We believe that every baby deserves the gentlest start in life. Our journey began with a simple mission: to create feeding essentials and clothing that seamlessly blend safety, comfort, and beautiful design.
              </p>
              <ul className="space-y-3 mb-6">
                {["Ergonomic wide-neck designs", "Anti-colic technology", "Breathable, soft fabrics"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-accent" fill="currentColor" />
                    <span className="font-medium text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-accent px-6 py-3 inline-block rounded-xl font-semibold">
                Read Our Story
              </Link>
            </div>
            <div className="flex-1 w-full relative">
              <Image
                src="https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=800"
                alt="Baby Essentials"
                width={800}
                height={600}
                className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
