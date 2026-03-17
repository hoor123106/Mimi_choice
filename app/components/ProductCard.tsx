import Link from "next/link";
import Image from "next/image";
import { Badge } from "../components/badge";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-[2rem] p-6 shadow-xl shadow-primary/5 border border-secondary/50 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group flex flex-col h-full hover:-translate-y-2">
      <Link href={`/products/${product.id}`} className="flex-1 flex flex-col cursor-pointer">
        <div className="relative aspect-[4/5] mb-6 rounded-[1.5rem] overflow-hidden bg-secondary/10 flex items-center justify-center p-4">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain transition-transform duration-700 ease-out group-hover:scale-110 p-4"
          />
          {product.stockStatus !== "In Stock" && (
            <div className="absolute top-4 left-4">
              <Badge variant="destructive" className="bg-white/90 text-red-500 border-none shadow-md backdrop-blur-sm px-3 py-1 font-bold">
                {product.stockStatus}
              </Badge>
            </div>
          )}
          {product.isFeatured && product.stockStatus === "In Stock" && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-accent text-white border-none shadow-md backdrop-blur-sm px-3 py-1 font-bold">
                ★ Featured
              </Badge>
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-secondary text-primary rounded-full">
              {product.category}
            </span>
            {product.size && (
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-slate-100 text-slate-500 rounded-full">
                {product.size}
              </span>
            )}
          </div>

          <h3 className="text-xl font-extrabold text-foreground mb-2 leading-tight group-hover:text-accent transition-colors">
            {product.name}
          </h3>

          <p className="text-sm text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>
      </Link>
    </div>
  );
}
