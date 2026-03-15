import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/storage";
import { z } from "zod";

const filtersSchema = z.object({
  category: z.string().optional(),
  subcategory: z.string().optional(),
  size: z.string().optional(),
  isFeatured: z.enum(["true", "false"]).optional(),
});

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const filters = filtersSchema.parse({
      category: searchParams.get("category") || undefined,
      subcategory: searchParams.get("subcategory") || undefined,
      size: searchParams.get("size") || undefined,
      isFeatured: searchParams.get("isFeatured") || undefined,
    });
    const products = await storage.getProducts(filters);
    return NextResponse.json(products);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ message: err.errors[0].message }, { status: 400 });
    }
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
