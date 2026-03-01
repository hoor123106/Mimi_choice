import { Link } from "wouter";
import type { ProductResponse } from "@shared/routes";
import { Badge } from "@/components/ui/badge";

export function ProductCard({ product }: { product: ProductResponse }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg shadow-primary/5 border border-secondary/50 hover:shadow-xl hover:border-secondary transition-all duration-300 group flex flex-col h-full">
      <div className="relative aspect-square mb-4 rounded-xl overflow-hidden bg-secondary/30">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {product.stockStatus !== 'In Stock' && (
          <div className="absolute top-3 left-3">
            <Badge variant="destructive" className="bg-white/90 text-red-500 border-none shadow-sm backdrop-blur-sm">
              {product.stockStatus}
            </Badge>
          </div>
        )}
        {product.isFeatured && product.stockStatus === 'In Stock' && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-primary/90 text-white border-none shadow-sm backdrop-blur-sm">
              Featured
            </Badge>
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-1">
        <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
          {product.category} {product.subcategory ? `• ${product.subcategory}` : ''}
        </div>
        <h3 className="text-lg font-bold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.shortDescription}
        </p>
        
        <div className="mt-auto pt-4 border-t border-secondary flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            ${(product.price / 100).toFixed(2)}
          </div>
          <Link 
            href={`/products/${product.id}`}
            className="btn-accent px-4 py-2 rounded-lg text-sm font-semibold inline-block text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
