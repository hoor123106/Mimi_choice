import { Link } from "wouter";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Mimi Choice" className="h-12 w-auto" />
              <span className="font-bold text-2xl tracking-tight">Mimi Choice</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Providing safe, premium, and lovingly crafted products for your little ones. Because every baby deserves the best.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Shop All Products</Link></li>
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Our Story</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-3">
              <li><Link href="/products?category=Feeders" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Premium Feeders</Link></li>
              <li><Link href="/products?category=Teats" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Soft Teats</Link></li>
              <li><Link href="/products?category=Dresses" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">Baby Dresses</Link></li>
              <li><Link href="/products" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-white/60" />
                <span>+92 321 2627 1662</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-white/60" />
                <span>mimichoicee@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Mimi Choice. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent" /> for your little ones
          </p>
        </div>
      </div>
    </footer>
  );
}
