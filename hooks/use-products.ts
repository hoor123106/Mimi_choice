"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { products as sourceProducts, getProductById, type Product, type ProductFilters } from "@/data/products";

export function useProducts(filters?: ProductFilters) {
  const [all, setAll] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if (mounted.current) {
      setAll(sourceProducts);
      setIsLoading(false);
    }
    return () => {
      mounted.current = false;
    };
  }, []);

  const data = useMemo(() => {
    let result = [...all];
    if (filters?.category) result = result.filter((p) => p.category === filters.category);
    if (filters?.subcategory) result = result.filter((p) => p.subcategory === filters.subcategory);
    if (filters?.isFeatured !== undefined) result = result.filter((p) => p.isFeatured === filters.isFeatured);
    return result;
  }, [all, filters?.category, filters?.subcategory, filters?.isFeatured]);

  return { data, isLoading };
}

export function useProduct(id: number) {
  const { data, isLoading } = useProducts();
  const item = useMemo(() => data.find((p) => p.id === id) ?? null, [data, id]);
  return { data: item, isLoading };
}

export type { Product };
