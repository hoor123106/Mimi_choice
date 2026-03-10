import { Link } from "wouter";
import type { ProductResponse } from "@shared/routes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ProductCard({ product }: { product: ProductResponse }) {
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Added to Cart!",
      description: `${product.name} is ready for checkout.`,
      className: "bg-primary text-white border-none",
    });
  };

  return (
    <div className="bg-white rounded-[2rem] p-6 shadow-xl shadow-primary/5 border border-secondary/50 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group flex flex-col h-full hover:-translate-y-2">
      <Link href={`/products/${product.id}`} className="flex-1 flex flex-col cursor-pointer">
        <div className="relative aspect-[4/5] mb-6 rounded-[1.5rem] overflow-hidden bg-secondary/10 flex items-center justify-center p-4">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="object-contain w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {product.stockStatus !== 'In Stock' && (
            <div className="absolute top-4 left-4">
              <Badge variant="destructive" className="bg-white/90 text-red-500 border-none shadow-md backdrop-blur-sm px-3 py-1 font-bold">
                {product.stockStatus}
              </Badge>
            </div>
          )}
          {product.isFeatured && product.stockStatus === 'In Stock' && (
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
      
      <div className="mt-auto pt-6 border-t border-secondary/50 flex flex-col gap-4">
        <div className="text-2xl font-black text-primary">
          ${(product.price / 100).toFixed(2)}
        </div>
        
        <div className="flex gap-2">
          <Button 
            className="flex-1 rounded-xl font-bold bg-primary hover:bg-primary/90 h-12 shadow-lg shadow-primary/20"
            onClick={handleAddToCart}
            data-testid={`button-add-to-cart-${product.id}`}
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
          <Link href={`/products/${product.id}`} className="flex-none">
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-xl border-secondary text-primary hover:bg-secondary/50 h-12 w-12"
              data-testid={`button-view-product-${product.id}`}
            >
              <Eye className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
