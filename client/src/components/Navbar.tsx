import { Link, useLocation } from "wouter";
import { Menu, ShoppingBag, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full glass-card border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <img src="/logo.png" alt="Mimi Choice" className="h-12 w-auto group-hover:scale-105 transition-transform" />
            <span className="font-bold text-xl tracking-tight text-primary hidden sm:inline">Mimi Choice</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={`text-sm font-medium transition-colors hover:text-accent ${isActive("/") ? "text-primary border-b-2 border-primary py-1" : "text-muted-foreground"}`}>
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-accent transition-colors outline-none">
                Products <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 rounded-xl p-2 shadow-xl border-secondary">
                <DropdownMenuItem asChild>
                  <Link href="/feeders" className="cursor-pointer w-full px-3 py-2 rounded-lg hover:bg-secondary text-primary font-medium">Feeders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/teats" className="cursor-pointer w-full px-3 py-2 rounded-lg hover:bg-secondary text-primary font-medium">Teats</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className={`text-sm font-medium transition-colors hover:text-accent ${isActive("/about") ? "text-primary border-b-2 border-primary py-1" : "text-muted-foreground"}`}>
              About Us
            </Link>
            <Link href="/contact" className={`text-sm font-medium transition-colors hover:text-accent ${isActive("/contact") ? "text-primary border-b-2 border-primary py-1" : "text-muted-foreground"}`}>
              Contact
            </Link>
            <Link href="/privacy" className={`text-sm font-medium transition-colors hover:text-accent ${isActive("/privacy") ? "text-primary border-b-2 border-primary py-1" : "text-muted-foreground"}`}>
              Privacy Policy
            </Link>
            
            <Link href="/feeders" className="btn-accent px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Shop Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-secondary absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`block px-3 py-4 rounded-xl text-base font-medium ${isActive("/") ? "bg-secondary text-primary" : "text-foreground hover:bg-secondary/50"}`}>Home</Link>
            <Link href="/feeders" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-4 rounded-xl text-base font-medium text-foreground hover:bg-secondary/50">Feeders</Link>
            <Link href="/teats" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-4 rounded-xl text-base font-medium text-foreground hover:bg-secondary/50">Teats</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`block px-3 py-4 rounded-xl text-base font-medium ${isActive("/about") ? "bg-secondary text-primary" : "text-foreground hover:bg-secondary/50"}`}>About Us</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`block px-3 py-4 rounded-xl text-base font-medium ${isActive("/contact") ? "bg-secondary text-primary" : "text-foreground hover:bg-secondary/50"}`}>Contact</Link>
            <Link href="/privacy" onClick={() => setIsMobileMenuOpen(false)} className={`block px-3 py-4 rounded-xl text-base font-medium ${isActive("/privacy") ? "bg-secondary text-primary" : "text-foreground hover:bg-secondary/50"}`}>Privacy Policy</Link>
          </div>
        </div>
      )}
    </header>
  );
}
