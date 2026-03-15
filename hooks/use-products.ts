"use client";

import { useMemo } from "react";
import { products, getProductById, type Product, type ProductFilters } from "@/data/products";

export function useProducts(filters?: ProductFilters) {
  const data = useMemo(() => {
    let result = [...products];
    if (filters?.category) result = result.filter((p) => p.category === filters.category);
    if (filters?.subcategory) result = result.filter((p) => p.subcategory === filters.subcategory);
    if (filters?.isFeatured !== undefined) result = result.filter((p) => p.isFeatured === filters.isFeatured);
    return result;
  }, [filters?.category, filters?.subcategory, filters?.isFeatured]);

  return { data, isLoading: false };
}

export function useProduct(id: number) {
  const data = useMemo(() => getProductById(id) ?? null, [id]);
  return { data, isLoading: false };
}

export type { Product };
