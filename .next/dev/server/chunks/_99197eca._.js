module.exports = [
"[project]/shared/schema.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contactMessages",
    ()=>contactMessages,
    "insertContactMessageSchema",
    ()=>insertContactMessageSchema,
    "insertProductSchema",
    ()=>insertProductSchema,
    "products",
    ()=>products
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/table.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/text.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/serial.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/integer.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/boolean.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/timestamp.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-zod/index.mjs [instrumentation] (ecmascript)");
;
;
const products = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["pgTable"])("products", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["text"])("name").notNull(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["text"])("description").notNull(),
    shortDescription: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["text"])("short_description").notNull(),
    price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["integer"])("price").notNull(),
    imageUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["text"])("image_url").notNull(),
    category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["text"])("category").notNull(),
    subcategory: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["text"])("subcategory"),
    size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["text"])("size"),
    stockStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["text"])("stock_status").default('In Stock').notNull(),
    isFeatured: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["boolean"])("is_featured").default(false).notNull()
});
const contactMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["pgTable"])("contact_messages", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["text"])("name").notNull(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["text"])("email").notNull(),
    phone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["text"])("phone").notNull(),
    message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["text"])("message").notNull(),
    interestedInBuying: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["boolean"])("interested_in_buying").default(false).notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow().notNull()
});
const insertProductSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["createInsertSchema"])(products).omit({
    id: true
});
const insertContactMessageSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$instrumentation$5d$__$28$ecmascript$29$__["createInsertSchema"])(contactMessages).omit({
    id: true,
    createdAt: true
});
}),
"[project]/lib/db.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "db",
    ()=>db,
    "pool",
    ()=>pool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/node-postgres/driver.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/schema.ts [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const { Pool } = __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"];
if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL must be set.");
}
const globalForDb = /*TURBOPACK member replacement*/ __turbopack_context__.g;
const pool = globalForDb.pool || new Pool({
    connectionString: process.env.DATABASE_URL
});
if ("TURBOPACK compile-time truthy", 1) globalForDb.pool = pool;
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["drizzle"])(pool, {
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/seed.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "seedDatabase",
    ()=>seedDatabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/schema.ts [instrumentation] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
let seeded = false;
async function seedDatabase() {
    if (seeded) return;
    seeded = true;
    console.log("Seeding product database...");
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["db"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["products"]);
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$schema$2e$ts__$5b$instrumentation$5d$__$28$ecmascript$29$__["products"]).values([
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
            isFeatured: true
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
            isFeatured: false
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
            isFeatured: false
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
            isFeatured: false
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
            isFeatured: false
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
            isFeatured: true
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
            isFeatured: false
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
            isFeatured: false
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
            isFeatured: false
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
            isFeatured: false
        },
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
            isFeatured: true
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
            isFeatured: false
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
            isFeatured: false
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
            isFeatured: false
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
            isFeatured: false
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
            isFeatured: false
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
            isFeatured: false
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
            isFeatured: false
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
            isFeatured: false
        },
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
            isFeatured: true
        },
        {
            name: "Green Nipples Regular Extra Soft",
            description: "Premium soft green silicone teats (No: 1056). Extra soft for sensitive babies, BPA-free. Pack of 2.",
            shortDescription: "Soft green silicone teats.",
            price: 1399,
            imageUrl: "/products/1056.jpeg",
            category: "Teats",
            subcategory: null,
            size: "Regular",
            stockStatus: "In Stock",
            isFeatured: true
        },
        {
            name: "Wide Neck Nipples Pack of 2",
            description: "Premium wide neck teats (No: 1082). High-quality silicone for wide neck bottles. Pack of 2.",
            shortDescription: "Wide neck silicone teats.",
            price: 1599,
            imageUrl: "/products/1082.jpeg",
            category: "Teats",
            subcategory: null,
            size: "Wide Neck",
            stockStatus: "In Stock",
            isFeatured: true
        },
        {
            name: "Mug Color Wide Neck 320ml",
            description: "Vibrant colored dual-handle wide neck feeder (No: 1089). 320ml capacity with easy grip handles.",
            shortDescription: "Colorful wide neck mug feeder 320ml.",
            price: 2899,
            imageUrl: "/products/1089.jpeg",
            category: "Feeders",
            subcategory: "Wide Neck",
            size: "320 ml",
            stockStatus: "In Stock",
            isFeatured: true
        },
        {
            name: "Strawberry Natural Wide Neck 320ml",
            description: "Natural clear strawberry-themed wide neck feeder (No: 1087). 320ml capacity with safety handles.",
            shortDescription: "Strawberry natural wide neck feeder 320ml.",
            price: 2799,
            imageUrl: "/products/1087.jpeg",
            category: "Feeders",
            subcategory: "Wide Neck",
            size: "320 ml",
            stockStatus: "In Stock",
            isFeatured: false
        },
        {
            name: "Strawberry Water Color Wide Neck 320ml",
            description: "Beautiful water color strawberry-themed wide neck feeder (No: 1088). 320ml with colorful handles.",
            shortDescription: "Strawberry water color wide neck feeder 320ml.",
            price: 2899,
            imageUrl: "/products/1088.jpeg",
            category: "Feeders",
            subcategory: "Wide Neck",
            size: "320 ml",
            stockStatus: "In Stock",
            isFeatured: false
        },
        {
            name: "Strawberry Color Wide Neck 320ml",
            description: "Colorful strawberry-themed wide neck feeder (No: 1086). 320ml capacity with textured handles.",
            shortDescription: "Strawberry color wide neck feeder 320ml.",
            price: 2899,
            imageUrl: "/products/1086.jpeg",
            category: "Feeders",
            subcategory: "Wide Neck",
            size: "320 ml",
            stockStatus: "In Stock",
            isFeatured: false
        },
        {
            name: "Bear Color Wide Neck 320ml",
            description: "Adorable bear-themed colored wide neck feeder (No: 1076). 320ml capacity with safety handles.",
            shortDescription: "Bear color wide neck feeder 320ml.",
            price: 2899,
            imageUrl: "/products/1076.jpeg",
            category: "Feeders",
            subcategory: "Wide Neck",
            size: "320 ml",
            stockStatus: "In Stock",
            isFeatured: false
        },
        {
            name: "Bear Natural Wide Neck 320ml",
            description: "Natural clear bear-themed wide neck feeder (No: 1077). 320ml with cute character designs.",
            shortDescription: "Bear natural wide neck feeder 320ml.",
            price: 2799,
            imageUrl: "/products/1077.jpeg",
            category: "Feeders",
            subcategory: "Wide Neck",
            size: "320 ml",
            stockStatus: "In Stock",
            isFeatured: false
        },
        {
            name: "Bear Water Color Wide Neck 320ml",
            description: "Beautiful water color bear-themed wide neck feeder (No: 1078). 320ml capacity with dual handles.",
            shortDescription: "Bear water color wide neck feeder 320ml.",
            price: 2899,
            imageUrl: "/products/1078.jpeg",
            category: "Feeders",
            subcategory: "Wide Neck",
            size: "320 ml",
            stockStatus: "In Stock",
            isFeatured: false
        },
        {
            name: "Bear Color Regular 280ml",
            description: "Adorable bear-themed colored regular feeder (No: 1025). 280ml capacity with dual handles.",
            shortDescription: "Bear color regular feeder 280ml.",
            price: 2299,
            imageUrl: "/products/1025.jpeg",
            category: "Feeders",
            subcategory: "Regular Feeders",
            size: "280 ml",
            stockStatus: "In Stock",
            isFeatured: false
        },
        {
            name: "Bear Natural Regular 280ml",
            description: "Natural clear bear-themed regular feeder (No: 1027). 280ml with cute character designs.",
            shortDescription: "Bear natural regular feeder 280ml.",
            price: 2199,
            imageUrl: "/products/1027.jpeg",
            category: "Feeders",
            subcategory: "Regular Feeders",
            size: "280 ml",
            stockStatus: "In Stock",
            isFeatured: false
        },
        {
            name: "Basic Color Regular 280ml",
            description: "Fun and colorful regular feeder (No: 1002). 280ml capacity with safety handles.",
            shortDescription: "Basic color regular feeder 280ml.",
            price: 1999,
            imageUrl: "/products/1002.jpeg",
            category: "Feeders",
            subcategory: "Regular Feeders",
            size: "280 ml",
            stockStatus: "In Stock",
            isFeatured: false
        },
        {
            name: "Mug Natural Wide Neck 320ml",
            description: "Natural clear dual-handle wide neck mug feeder (No: 1090). 320ml capacity with adorable character designs.",
            shortDescription: "Natural wide neck mug feeder 320ml.",
            price: 2899,
            imageUrl: "/products/1090.jpeg",
            category: "Feeders",
            subcategory: "Wide Neck",
            size: "320 ml",
            stockStatus: "In Stock",
            isFeatured: false
        },
        {
            name: "Mug Water Color Wide Neck 320ml",
            description: "Beautiful water color dual-handle wide neck mug feeder (No: 1091). 320ml capacity with colorful designs.",
            shortDescription: "Water color wide neck mug feeder 320ml.",
            price: 2999,
            imageUrl: "/products/1091.jpeg",
            category: "Feeders",
            subcategory: "Wide Neck",
            size: "320 ml",
            stockStatus: "In Stock",
            isFeatured: false
        }
    ]);
    console.log("Database seeded successfully.");
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=_99197eca._.js.map