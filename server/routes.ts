import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { products } from "@shared/schema";

async function seedDatabase() {
  const existingProducts = await storage.getProducts();
  if (existingProducts.length === 0) {
    console.log("Seeding database with example products...");
    await db.insert(products).values([
      {
        name: "Life Feeder - Wide Neck 340ml",
        description: "The premium Life Feeder with a wide neck design, making it easier to clean and prepare. 340ml capacity perfect for growing babies. Made with soft, safe, baby-friendly materials. Features an anti-colic venting system.",
        shortDescription: "Premium 340ml wide neck feeder. Anti-colic and easy to clean.",
        price: 2499, // $24.99
        imageUrl: "https://images.unsplash.com/photo-1628198751509-6462706eeb41?q=80&w=1000&auto=format&fit=crop",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "340 ml",
        stockStatus: "In Stock",
        isFeatured: true,
      },
      {
        name: "Life Feeder - Wide Neck 240ml",
        description: "The premium Life Feeder with a wide neck design, making it easier to clean and prepare. 240ml capacity perfect for newborns. Made with soft, safe, baby-friendly materials. Features an anti-colic venting system.",
        shortDescription: "Premium 240ml wide neck feeder. Ideal for newborns.",
        price: 2199,
        imageUrl: "https://images.unsplash.com/photo-1628198751509-6462706eeb41?q=80&w=1000&auto=format&fit=crop",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "240 ml",
        stockStatus: "In Stock",
        isFeatured: true,
      },
      {
        name: "Classic Regular Feeder",
        description: "A traditional slim-neck baby feeder that's easy for tiny hands to hold. Made with our signature high-quality safe materials. Perfect for transitioning your baby.",
        shortDescription: "Traditional slim-neck design for easy holding.",
        price: 1899,
        imageUrl: "https://images.unsplash.com/photo-1594833633633-4f923c8fba50?q=80&w=1000&auto=format&fit=crop",
        category: "Feeders",
        subcategory: "Regular Feeders",
        size: "240 ml",
        stockStatus: "In Stock",
        isFeatured: false,
      },
      {
        name: "Ultra-Soft Silicone Teats (2 Pack)",
        description: "Our ultra-soft silicone teats mimic the natural feel, designed specifically for our Life Feeders. BPA-free and incredibly durable. Available in variable flow rates.",
        shortDescription: "Pack of 2 ultra-soft, natural feel silicone teats.",
        price: 1299,
        imageUrl: "https://images.unsplash.com/photo-1579546059281-a54b3d30b1bc?q=80&w=1000&auto=format&fit=crop",
        category: "Teats",
        subcategory: null,
        size: "Variable",
        stockStatus: "In Stock",
        isFeatured: true,
      },
      {
        name: "Premium Baby Dress - Starlight",
        description: "A beautiful, soft cotton baby dress featuring a starlight pattern. Breathable fabric ensures your little one stays comfortable all day. Snap closures for easy changing.",
        shortDescription: "Soft, breathable cotton dress with starlight pattern.",
        price: 3499,
        imageUrl: "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=1000&auto=format&fit=crop",
        category: "Dresses",
        subcategory: null,
        size: "3-6 Months",
        stockStatus: "Low Stock",
        isFeatured: true,
      }
    ]);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Seed the DB upon startup
  seedDatabase().catch(console.error);

  app.get(api.products.list.path, async (req, res) => {
    try {
      const filters = api.products.list.input?.parse(req.query);
      const products = await storage.getProducts(filters);
      res.json(products);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get(api.products.get.path, async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }
    
    const product = await storage.getProduct(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json(product);
  });

  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
