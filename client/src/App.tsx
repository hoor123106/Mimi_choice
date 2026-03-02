import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/products" component={Products} />
          
          {/* New Category Routes */}
          <Route path="/feeders">
            <Products category="Feeders" />
          </Route>
          <Route path="/feeders/wide-neck">
            <Products category="Feeders" subcategory="Wide Neck" />
          </Route>
          <Route path="/feeders/wide-neck/240ml">
            <Products category="Feeders" subcategory="Wide Neck" size="240 ml" />
          </Route>
          <Route path="/feeders/wide-neck/340ml">
            <Products category="Feeders" subcategory="Wide Neck" size="340 ml" />
          </Route>
          <Route path="/feeders/regular">
            <Products category="Feeders" subcategory="Regular Feeders" />
          </Route>
          <Route path="/teats">
            <Products category="Teats" />
          </Route>

          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
