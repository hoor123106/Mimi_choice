import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { products } from "@shared/schema";

async function seedDatabase() {
  console.log("Refreshing product database with new uploads...");
  await db.delete(products);
  
  await db.insert(products).values([
    // FEEDERS - WIDE NECK
    {
      name: "TPR Wide Neck Feeder",
      description: "Premium TPR wide neck feeder (No: 1050/1053). Features adorable character designs, a soft silicone nipple, and ergonomic handles. Anti-colic venting system.",
      shortDescription: "Premium TPR wide neck feeder with character designs.",
      price: 2899,
      imageUrl: "/products/1050.jpeg",
      category: "Feeders",
      subcategory: "Wide Neck",
      size: "320 ml",
      stockStatus: "In Stock",
      isFeatured: true,
    },
    {
      name: "TPR Wide Neck Feeder",
      description: "Premium TPR wide neck feeder (No: 1050/1053). Features adorable character designs, a soft silicone nipple, and ergonomic handles. Anti-colic venting system.",
      shortDescription: "Premium TPR wide neck feeder with character designs.",
      price: 2499,
      imageUrl: "/products/1053.jpeg",
      category: "Feeders",
      subcategory: "Wide Neck",
      size: "240 ml",
      stockStatus: "In Stock",
      isFeatured: false,
    },
    {
      name: "TPR Wide Neck Natural",
      description: "Natural finish TPR wide neck feeder (No: 1051/1054). Clear design with premium silicone nipple and safety handles.",
      shortDescription: "Natural finish TPR wide neck feeder.",
      price: 2899,
      imageUrl: "/products/1051.jpeg",
      category: "Feeders",
      subcategory: "Wide Neck",
      size: "320 ml",
      stockStatus: "In Stock",
      isFeatured: false,
    },
    {
      name: "TPR Wide Neck Natural",
      description: "Natural finish TPR wide neck feeder (No: 1051/1054). Clear design with premium silicone nipple and safety handles.",
      shortDescription: "Natural finish TPR wide neck feeder.",
      price: 2499,
      imageUrl: "/products/1054.jpeg",
      category: "Feeders",
      subcategory: "Wide Neck",
      size: "240 ml",
      stockStatus: "In Stock",
      isFeatured: false,
    },
    {
      name: "TPR Water Color Wide Neck",
      description: "Vibrant water color series wide neck feeder (No: 1052). Premium TPR material with anti-colic safety features.",
      shortDescription: "Vibrant water color series wide neck feeder.",
      price: 2799,
      imageUrl: "/products/1052.jpeg",
      category: "Feeders",
      subcategory: "Wide Neck",
      size: "320 ml",
      stockStatus: "In Stock",
      isFeatured: false,
    },
    {
      name: "Snowman Color Wide Neck",
      description: "Cute Snowman series color wide neck feeder (No: 1044/1047). Wide neck for easy cleaning and high-quality materials.",
      shortDescription: "Cute Snowman series color wide neck feeder.",
      price: 2999,
      imageUrl: "/products/1044.jpeg",
      category: "Feeders",
      subcategory: "Wide Neck",
      size: "320 ml",
      stockStatus: "In Stock",
      isFeatured: true,
    },
    {
      name: "Snowman Color Wide Neck",
      description: "Cute Snowman series color wide neck feeder (No: 1044/1047). Wide neck for easy cleaning and high-quality materials.",
      shortDescription: "Cute Snowman series color wide neck feeder.",
      price: 2599,
      imageUrl: "/products/1047.jpeg",
      category: "Feeders",
      subcategory: "Wide Neck",
      size: "240 ml",
      stockStatus: "In Stock",
      isFeatured: false,
    },
    {
      name: "Snowman Natural Wide Neck",
      description: "Clear Snowman series wide neck feeder (No: 1045/1048). Premium safe materials and anti-colic design.",
      shortDescription: "Clear Snowman series wide neck feeder.",
      price: 2999,
      imageUrl: "/products/1045.jpeg",
      category: "Feeders",
      subcategory: "Wide Neck",
      size: "320 ml",
      stockStatus: "In Stock",
      isFeatured: false,
    },
    {
      name: "Snowman Natural Wide Neck",
      description: "Clear Snowman series wide neck feeder (No: 1045/1048). Premium safe materials and anti-colic design.",
      shortDescription: "Clear Snowman series wide neck feeder.",
      price: 2599,
      imageUrl: "/products/1048.jpeg",
      category: "Feeders",
      subcategory: "Wide Neck",
      size: "240 ml",
      stockStatus: "In Stock",
      isFeatured: false,
    },
    {
      name: "Snowman Water Color Wide Neck",
      description: "Beautiful water color Snowman series wide neck feeder (No: 1046). 320ml capacity for growing babies.",
      shortDescription: "Water color Snowman series wide neck feeder.",
      price: 2999,
      imageUrl: "/products/1046.jpeg",
      category: "Feeders",
      subcategory: "Wide Neck",
      size: "320 ml",
      stockStatus: "In Stock",
      isFeatured: false,
    },

    // FEEDERS - REGULAR FEEDERS
    {
      name: "Basic Natural Feeder",
      description: "Classic natural slim-neck feeder (No: 1001/1009). Easy-grip handles and clear measurement markings.",
      shortDescription: "Classic natural slim-neck feeder.",
      price: 1999,
      imageUrl: "/products/1001.jpeg",
      category: "Feeders",
      subcategory: "Regular Feeders",
      size: "280 ml",
      stockStatus: "In Stock",
      isFeatured: true,
    },
    {
      name: "Basic Natural Feeder",
      description: "Classic natural slim-neck feeder (No: 1001/1009). Easy-grip handles and clear measurement markings.",
      shortDescription: "Classic natural slim-neck feeder.",
      price: 1599,
      imageUrl: "/products/1009.jpeg",
      category: "Feeders",
      subcategory: "Regular Feeders",
      size: "150 ml",
      stockStatus: "In Stock",
      isFeatured: false,
    },
    {
      name: "Basic Color Feeder",
      description: "Fun and colorful slim-neck feeder (No: 1010). Durable design with safety handles.",
      shortDescription: "Colorful slim-neck feeder.",
      price: 1699,
      imageUrl: "/products/1010.jpeg",
      category: "Feeders",
      subcategory: "Regular Feeders",
      size: "150 ml",
      stockStatus: "In Stock",
      isFeatured: false,
    },
    {
      name: "Mug Natural Feeder",
      description: "Natural-style mug feeder with dual handles (No: 1065/1073). Helps babies transition to independent drinking.",
      shortDescription: "Dual-handle natural mug feeder.",
      price: 2299,
      imageUrl: "/products/1065.jpeg",
      category: "Feeders",
      subcategory: "Regular Feeders",
      size: "280 ml",
      stockStatus: "In Stock",
      isFeatured: false,
    },
    {
      name: "Mug Natural Feeder",
      description: "Natural-style mug feeder with dual handles (No: 1065/1073). Helps babies transition to independent drinking.",
      shortDescription: "Dual-handle natural mug feeder.",
      price: 1899,
      imageUrl: "/products/1073.jpeg",
      category: "Feeders",
      subcategory: "Regular Feeders",
      size: "150 ml",
      stockStatus: "In Stock",
      isFeatured: false,
    },
    {
      name: "Mug Color Feeder",
      description: "Brightly colored dual-handle mug feeder (No: 1064/1074). Ergonomic and safe for little hands.",
      shortDescription: "Vibrant dual-handle mug feeder.",
      price: 2399,
      imageUrl: "/products/1064.jpeg",
      category: "Feeders",
      subcategory: "Regular Feeders",
      size: "280 ml",
      stockStatus: "In Stock",
      isFeatured: false,
    },
    {
      name: "Mug Color Feeder",
      description: "Brightly colored dual-handle mug feeder (No: 1064/1074). Ergonomic and safe for little hands.",
      shortDescription: "Vibrant dual-handle mug feeder.",
      price: 1999,
      imageUrl: "/products/1074.jpeg",
      category: "Feeders",
      subcategory: "Regular Feeders",
      size: "150 ml",
      stockStatus: "In Stock",
      isFeatured: false,
    },
    {
      name: "Animal Color Feeder",
      description: "Adorable animal-themed color feeder (No: 1037). Fun designs to keep your baby engaged.",
      shortDescription: "Animal-themed color feeder.",
      price: 2199,
      imageUrl: "/products/1037.jpeg",
      category: "Feeders",
      subcategory: "Regular Feeders",
      size: "280 ml",
      stockStatus: "In Stock",
      isFeatured: false,
    },
    {
      name: "Animal Natural Feeder",
      description: "Cute animal-themed natural feeder (No: 1039). Safe, clear design with delightful animal graphics.",
      shortDescription: "Animal-themed natural feeder.",
      price: 2099,
      imageUrl: "/products/1039.jpeg",
      category: "Feeders",
      subcategory: "Regular Feeders",
      size: "280 ml",
      stockStatus: "In Stock",
      isFeatured: false,
    },

    // TEATS
    {
      name: "Premium Teats - Regular Pack of 2",
      description: "High-quality silicone teats (No: 1024). Regular flow, BPA-free, and natural feel. Pack of 2.",
      shortDescription: "Premium regular flow silicone teats.",
      price: 1299,
      imageUrl: "/products/1024.jpeg",
      category: "Teats",
      subcategory: null,
      size: "Regular",
      stockStatus: "In Stock",
      isFeatured: true,
    }
  ]);
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
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
