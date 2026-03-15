"use client";

import { useQuery } from "@tanstack/react-query";
import type { Product } from "@/shared/schema";

interface ProductFilters {
  category?: string;
  subcategory?: string;
  isFeatured?: "true" | "false";
}

export function useProducts(filters?: ProductFilters) {
  return useQuery<Product[]>({
    queryKey: ["/api/products", filters],
    queryFn: async () => {
      const url = new URL("/api/products", window.location.origin);
      if (filters?.category) url.searchParams.append("category", filters.category);
      if (filters?.subcategory) url.searchParams.append("subcategory", filters.subcategory);
      if (filters?.isFeatured) url.searchParams.append("isFeatured", filters.isFeatured);
      const res = await fetch(url.toString());
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    },
  });
}

export function useProduct(id: number) {
  return useQuery<Product | null>({
    queryKey: ["/api/products", id],
    queryFn: async () => {
      if (!id || isNaN(id)) return null;
      const res = await fetch(`/api/products/${id}`);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch product");
      return res.json();
    },
    enabled: !!id,
  });
}
