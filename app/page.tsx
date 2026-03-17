"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Heart, Truck, Star } from "lucide-react";
import { products, type Product } from "@/data/products";
import { ProductCard } from "@/app/components/ProductCard";
import { Skeleton } from "./components/skeleton";

export default function Home() {
  const featuredProducts: Product[] = products.filter((p) => p.isFeatured === true);
  const isLoading = false;
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    show: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="w-full flex flex-col min-h-screen">

      <motion.section
        className="relative overflow-hidden bg-secondary/50 pt-16 pb-24 lg:pt-24 lg:pb-32"
        initial="hidden"
        animate="show"
        variants={fadeIn}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="max-w-xl"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
              }}
            >
              <motion.span variants={fadeUp} className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6">
                Premium Baby Care
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
                Soft, Safe, and Loved by <span className="text-primary">Moms Everywhere</span>.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Discover our carefully curated collection of wide-neck feeders, ultra-soft teats, and beautiful baby dresses designed for maximum comfort.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link href="/products" className="btn-accent px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center justify-center">
                  Shop Collection
                </Link>
                <Link href="/about" className="px-8 py-4 rounded-xl text-base font-semibold bg-white text-primary border-2 border-primary/10 hover:border-primary/30 shadow-sm hover:shadow transition-all inline-flex items-center justify-center">
                  Our Story
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16, rotate: reduceMotion ? 0 : -1 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-primary/20 rounded-[3rem] transform rotate-3 scale-105"></div>
              <Image
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1000"
                alt="Happy baby"
                width={1000}
                height={750}
                priority
                className="relative z-10 rounded-[3rem] shadow-2xl object-cover aspect-square md:aspect-[4/3] w-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-24 bg-white"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.08 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Trending Now</h2>
            <p className="text-muted-foreground">Our most loved essentials, handpicked for your little one&apos;s daily comfort.</p>
          </motion.div>

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
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={{
                hidden: { opacity: 1 },
                show: { opacity: 1, transition: { staggerChildren: 0.06 } },
              }}
            >
              {featuredProducts?.slice(0, 8).map((product) => (
                <motion.div key={product.id} variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          )}

          <motion.div variants={fadeUp} className="text-center mt-12">
            <Link href="/products" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-primary bg-secondary hover:bg-primary hover:text-white transition-colors duration-300">
              View All Products
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-primary text-primary-foreground"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div variants={fadeUp} className="space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-2">
                <ShieldCheck className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white">100% Safe Materials</h3>
              <p className="text-primary-foreground/80">BPA-free, non-toxic materials rigorously tested for your baby&apos;s absolute safety.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-2">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white">Mom Approved</h3>
              <p className="text-primary-foreground/80">Designed with mothers to ensure natural feeding patterns and maximum comfort.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-2">
                <Truck className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white">Fast Delivery</h3>
              <p className="text-primary-foreground/80">Because babies don&apos;t wait. Quick and reliable shipping right to your doorstep.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-24 bg-white overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary/30 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
            <motion.div variants={fadeUp} className="flex-1 space-y-6">
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
            </motion.div>
            <motion.div variants={fadeUp} className="flex-1 w-full relative">
              <Image
                src="https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=800"
                alt="Baby Essentials"
                width={800}
                height={600}
                className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
