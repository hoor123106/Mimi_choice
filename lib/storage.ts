import { db } from "./db";
import {
  products,
  contactMessages,
  type InsertProduct,
  type Product,
  type InsertContactMessage,
  type ContactMessage,
} from "@/shared/schema";
import { eq, and } from "drizzle-orm";

export interface IStorage {
  getProducts(filters?: { category?: string; subcategory?: string; size?: string; isFeatured?: string }): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async getProducts(filters?: { category?: string; subcategory?: string; size?: string; isFeatured?: string }): Promise<Product[]> {
    let query = db.select().from(products).$dynamic();
    const conditions = [];
    if (filters?.category) conditions.push(eq(products.category, filters.category));
    if (filters?.subcategory) conditions.push(eq(products.subcategory, filters.subcategory));
    if (filters?.size) conditions.push(eq(products.size, filters.size));
    if (filters?.isFeatured === "true") conditions.push(eq(products.isFeatured, true));
    else if (filters?.isFeatured === "false") conditions.push(eq(products.isFeatured, false));
    if (conditions.length > 0) query = query.where(and(...conditions));
    return await query;
  }

  async getProduct(id: number): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [created] = await db.insert(contactMessages).values(message).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
