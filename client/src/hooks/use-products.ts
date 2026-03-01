import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

interface ProductFilters {
  category?: string;
  subcategory?: string;
  isFeatured?: 'true' | 'false';
}

export function useProducts(filters?: ProductFilters) {
  return useQuery({
    queryKey: [api.products.list.path, filters],
    queryFn: async () => {
      // Build query string
      const url = new URL(api.products.list.path, window.location.origin);
      if (filters?.category) url.searchParams.append("category", filters.category);
      if (filters?.subcategory) url.searchParams.append("subcategory", filters.subcategory);
      if (filters?.isFeatured) url.searchParams.append("isFeatured", filters.isFeatured);

      const res = await fetch(url.toString(), { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch products");
      
      const data = await res.json();
      return api.products.list.responses[200].parse(data);
    },
  });
}

export function useProduct(id: number) {
  return useQuery({
    queryKey: [api.products.get.path, id],
    queryFn: async () => {
      if (!id || isNaN(id)) return null;
      
      const url = buildUrl(api.products.get.path, { id });
      const res = await fetch(url, { credentials: "include" });
      
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch product details");
      
      const data = await res.json();
      return api.products.get.responses[200].parse(data);
    },
    enabled: !!id,
  });
}
