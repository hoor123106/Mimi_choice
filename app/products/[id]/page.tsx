"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { useProduct, useProducts } from "@/hooks/use-products";
import { ProductCard } from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Truck, RotateCcw, Check } from "lucide-react";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const productId = parseInt(id || "0");

  const { data: product, isLoading } = useProduct(productId);
  const { data: relatedProducts } = useProducts({ category: product?.category });

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Skeleton className="aspect-square w-full rounded-3xl" />
          <div className="space-y-6">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-primary mb-4">Product Not Found</h2>
        <p className="text-muted-foreground mb-8">The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Link href="/products" className="btn-accent px-6 py-3 rounded-xl font-semibold">Browse Products</Link>
      </div>
    );
  }

  const otherProducts = relatedProducts?.filter((p) => p.id !== product.id).slice(0, 4) || [];

  return (
    <div className="bg-white min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-24">
          <div className="relative bg-secondary/20 rounded-[2.5rem] p-6 flex items-center justify-center border border-secondary/50">
            <div className="relative w-full aspect-square">
              <Image src={product.imageUrl} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-4" />
            </div>
            {product.isFeatured && (
              <Badge className="absolute top-8 left-8 bg-accent hover:bg-accent/90 text-white border-none px-4 py-1.5 text-sm shadow-lg">
                ★ Featured
              </Badge>
            )}
          </div>

          <div className="flex flex-col">
            <div className="mb-2 flex items-center gap-3">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">{product.category}</span>
              {product.subcategory && (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-foreground/30"></span>
                  <span className="text-muted-foreground text-sm font-medium">{product.subcategory}</span>
                </>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">{product.name}</h1>

            <div className="prose text-muted-foreground mb-8">
              <p>{product.description}</p>
            </div>

            <div className="space-y-4 mb-10">
              {product.size && (
                <div className="flex items-center gap-4">
                  <span className="w-20 font-semibold text-foreground">Size:</span>
                  <Badge variant="outline" className="text-sm bg-slate-50">{product.size}</Badge>
                </div>
              )}
              <div className="flex items-center gap-4">
                <span className="w-20 font-semibold text-foreground">Status:</span>
                <span className={`flex items-center gap-2 font-medium ${product.stockStatus === "In Stock" ? "text-green-600" : "text-red-500"}`}>
                  {product.stockStatus === "In Stock" && <Check className="w-4 h-4" />}
                  {product.stockStatus}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 pt-8 border-t border-secondary">
              <div className="flex flex-col items-center text-center gap-2 text-muted-foreground">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium">Safe Materials</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 text-muted-foreground">
                <Truck className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium">Fast Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 text-muted-foreground">
                <RotateCcw className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {otherProducts.length > 0 && (
          <div className="pt-16 border-t border-secondary">
            <h2 className="text-3xl font-bold mb-8">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {otherProducts.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
