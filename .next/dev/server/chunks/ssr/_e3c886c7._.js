module.exports = [
"[project]/data/products.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterProducts",
    ()=>filterProducts,
    "getProductById",
    ()=>getProductById,
    "products",
    ()=>products
]);
const products = [
    {
        id: 1,
        name: "TPR Wide Neck Feeder",
        description: "Premium TPR wide neck feeder (No: 1050/1053). Features adorable character designs, a soft silicone teat, and ergonomic handles. Anti-colic venting system.",
        shortDescription: "Premium TPR wide neck feeder with character designs.",
        imageUrl: "/1050.jpeg",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "320 ml",
        stockStatus: "In Stock",
        isFeatured: true
    },
    {
        id: 2,
        name: "TPR Wide Neck Feeder",
        description: "Premium TPR wide neck feeder (No: 1050/1053). Features adorable character designs, a soft silicone teat, and ergonomic handles. Anti-colic venting system.",
        shortDescription: "Premium TPR wide neck feeder with character designs.",
        imageUrl: "/1053.jpeg",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "240 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 3,
        name: "TPR Wide Neck Natural",
        description: "Natural finish TPR wide neck feeder (No: 1051/1054). Clear design with premium silicone teat and safety handles.",
        shortDescription: "Natural finish TPR wide neck feeder.",
        imageUrl: "/1051.jpeg",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "320 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 4,
        name: "TPR Wide Neck Natural",
        description: "Natural finish TPR wide neck feeder (No: 1051/1054). Clear design with premium silicone teat and safety handles.",
        shortDescription: "Natural finish TPR wide neck feeder.",
        imageUrl: "/1054.jpeg",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "240 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 5,
        name: "TPR Water Color Wide Neck",
        description: "Vibrant water color series wide neck feeder (No: 1052). Premium TPR material with anti-colic safety features.",
        shortDescription: "Vibrant water color series wide neck feeder.",
        imageUrl: "/1052.jpeg",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "320 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 6,
        name: "Snowman Color Wide Neck",
        description: "Cute Snowman series color wide neck feeder (No: 1044/1047). Wide neck for easy cleaning and high-quality materials.",
        shortDescription: "Cute Snowman series color wide neck feeder.",
        imageUrl: "/1044.jpeg",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "320 ml",
        stockStatus: "In Stock",
        isFeatured: true
    },
    {
        id: 7,
        name: "Snowman Color Wide Neck",
        description: "Cute Snowman series color wide neck feeder (No: 1044/1047). Wide neck for easy cleaning and high-quality materials.",
        shortDescription: "Cute Snowman series color wide neck feeder.",
        imageUrl: "/1047.jpeg",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "240 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 8,
        name: "Snowman Natural Wide Neck",
        description: "Clear Snowman series wide neck feeder (No: 1045/1048). Premium safe materials and anti-colic design.",
        shortDescription: "Clear Snowman series wide neck feeder.",
        imageUrl: "/1045.jpeg",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "320 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 9,
        name: "Snowman Natural Wide Neck",
        description: "Clear Snowman series wide neck feeder (No: 1045/1048). Premium safe materials and anti-colic design.",
        shortDescription: "Clear Snowman series wide neck feeder.",
        imageUrl: "/1048.jpeg",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "240 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 10,
        name: "Snowman Water Color Wide Neck",
        description: "Beautiful water color Snowman series wide neck feeder (No: 1046). 320ml capacity for growing babies.",
        shortDescription: "Water color Snowman series wide neck feeder.",
        imageUrl: "/1046.jpeg",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "320 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 12,
        name: "Strawberry Natural Wide Neck 320ml",
        description: "Natural clear strawberry-themed wide neck feeder (No: 1087). 320ml capacity with safety handles.",
        shortDescription: "Strawberry natural wide neck feeder 320ml.",
        imageUrl: "/1087.jpeg",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "320 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 13,
        name: "Strawberry Water Color Wide Neck 320ml",
        description: "Beautiful water color strawberry-themed wide neck feeder (No: 1088). 320ml with colorful handles.",
        shortDescription: "Strawberry water color wide neck feeder 320ml.",
        imageUrl: "/1088.jpeg",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "320 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 14,
        name: "Strawberry Color Wide Neck 320ml",
        description: "Colorful strawberry-themed wide neck feeder (No: 1086). 320ml capacity with textured handles.",
        shortDescription: "Strawberry color wide neck feeder 320ml.",
        imageUrl: "/1086.jpeg",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "320 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 15,
        name: "Bear Color Wide Neck 320ml",
        description: "Adorable bear-themed colored wide neck feeder (No: 1076). 320ml capacity with safety handles.",
        shortDescription: "Bear color wide neck feeder 320ml.",
        imageUrl: "/1076.jpeg",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "320 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 16,
        name: "Bear Natural Wide Neck 320ml",
        description: "Natural clear bear-themed wide neck feeder (No: 1077). 320ml with cute character designs.",
        shortDescription: "Bear natural wide neck feeder 320ml.",
        imageUrl: "/1077.jpeg",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "320 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 17,
        name: "Bear Water Color Wide Neck 320ml",
        description: "Beautiful water color bear-themed wide neck feeder (No: 1078). 320ml capacity with dual handles.",
        shortDescription: "Bear water color wide neck feeder 320ml.",
        imageUrl: "/1078.jpeg",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "320 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 18,
        name: "Mug Natural Wide Neck 320ml",
        description: "Natural clear dual-handle wide neck mug feeder (No: 1090). 320ml capacity with adorable character designs.",
        shortDescription: "Natural wide neck mug feeder 320ml.",
        imageUrl: "/1090.jpeg",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "320 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 19,
        name: "Mug Water Color Wide Neck 320ml",
        description: "Beautiful water color dual-handle wide neck feeder (No: 1091). 320ml capacity with colorful designs.",
        shortDescription: "Water color wide neck mug feeder 320ml.",
        imageUrl: "/1091.jpeg",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "320 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 20,
        name: "Basic Natural Feeder",
        description: "Classic natural slim-neck feeder (No: 1001/1009). Easy-grip handles and clear measurement markings.",
        shortDescription: "Classic natural slim-neck feeder.",
        imageUrl: "/1001.jpeg",
        category: "Feeders",
        subcategory: "Regular Feeders",
        size: "280 ml",
        stockStatus: "In Stock",
        isFeatured: true
    },
    {
        id: 21,
        name: "Basic Natural Feeder",
        description: "Classic natural slim-neck feeder (No: 1001/1009). Easy-grip handles and clear measurement markings.",
        shortDescription: "Classic natural slim-neck feeder.",
        imageUrl: "/1009.jpeg",
        category: "Feeders",
        subcategory: "Regular Feeders",
        size: "150 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 22,
        name: "Basic Color Feeder",
        description: "Fun and colorful slim-neck feeder (No: 1010). Durable design with safety handles.",
        shortDescription: "Colorful slim-neck feeder.",
        imageUrl: "/1010.jpeg",
        category: "Feeders",
        subcategory: "Regular Feeders",
        size: "150 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 23,
        name: "Mug Natural Feeder",
        description: "Natural-style mug feeder with dual handles (No: 1065/1073). Helps babies transition to independent drinking.",
        shortDescription: "Dual-handle natural mug feeder.",
        imageUrl: "/1065.jpeg",
        category: "Feeders",
        subcategory: "Regular Feeders",
        size: "280 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 24,
        name: "Mug Natural Feeder",
        description: "Natural-style mug feeder with dual handles (No: 1065/1073). Helps babies transition to independent drinking.",
        shortDescription: "Dual-handle natural mug feeder.",
        imageUrl: "/1073.jpeg",
        category: "Feeders",
        subcategory: "Regular Feeders",
        size: "150 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 25,
        name: "Mug Color Feeder",
        description: "Brightly colored dual-handle mug feeder (No: 1064/1074). Ergonomic and safe for little hands.",
        shortDescription: "Vibrant dual-handle mug feeder.",
        imageUrl: "/1064.jpeg",
        category: "Feeders",
        subcategory: "Regular Feeders",
        size: "280 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 26,
        name: "Mug Color Feeder",
        description: "Brightly colored dual-handle mug feeder (No: 1064/1074). Ergonomic and safe for little hands.",
        shortDescription: "Vibrant dual-handle mug feeder.",
        imageUrl: "/1074.jpeg",
        category: "Feeders",
        subcategory: "Regular Feeders",
        size: "150 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 27,
        name: "Animal Color Feeder",
        description: "Adorable animal-themed color feeder (No: 1037). Fun designs to keep your baby engaged.",
        shortDescription: "Animal-themed color feeder.",
        imageUrl: "/1037.jpeg",
        category: "Feeders",
        subcategory: "Regular Feeders",
        size: "280 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 28,
        name: "Animal Natural Feeder",
        description: "Cute animal-themed natural feeder (No: 1039). Safe, clear design with delightful animal graphics.",
        shortDescription: "Animal-themed natural feeder.",
        imageUrl: "/1039.jpeg",
        category: "Feeders",
        subcategory: "Regular Feeders",
        size: "280 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 29,
        name: "Bear Color Regular 280ml",
        description: "Adorable bear-themed colored regular feeder (No: 1025). 280ml capacity with dual handles.",
        shortDescription: "Bear color regular feeder 280ml.",
        imageUrl: "/1025.jpeg",
        category: "Feeders",
        subcategory: "Regular Feeders",
        size: "280 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 30,
        name: "Bear Natural Regular 280ml",
        description: "Natural clear bear-themed regular feeder (No: 1027). 280ml with cute character designs.",
        shortDescription: "Bear natural regular feeder 280ml.",
        imageUrl: "/1027.jpeg",
        category: "Feeders",
        subcategory: "Regular Feeders",
        size: "280 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 31,
        name: "Basic Color Regular 280ml",
        description: "Fun and colorful regular feeder (No: 1002). 280ml capacity with safety handles.",
        shortDescription: "Basic color regular feeder 280ml.",
        imageUrl: "/1002.jpeg",
        category: "Feeders",
        subcategory: "Regular Feeders",
        size: "280 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 32,
        name: "Premium Teats - Regular Pack of 2",
        description: "High-quality silicone teats (No: 1024). Regular flow, BPA-free, and natural feel. Pack of 2.",
        shortDescription: "Premium regular flow silicone teats.",
        imageUrl: "/1024.jpeg",
        category: "Teats",
        subcategory: null,
        size: "Regular",
        stockStatus: "In Stock",
        isFeatured: true
    },
    {
        id: 33,
        name: "Green Teats Regular Extra Soft",
        description: "Premium soft green silicone teats (No: 1056). Extra soft for sensitive babies, BPA-free. Pack of 2.",
        shortDescription: "Soft green silicone teats.",
        imageUrl: "/1056.jpeg",
        category: "Teats",
        subcategory: null,
        size: "Regular",
        stockStatus: "In Stock",
        isFeatured: true
    },
    {
        id: 34,
        name: "Wide Neck Teats Pack of 2",
        description: "Premium wide neck teats (No: 1082). High-quality silicone for wide neck bottles. Pack of 2.",
        shortDescription: "Wide neck silicone teats.",
        imageUrl: "/1082.jpeg",
        category: "Teats",
        subcategory: null,
        size: "Wide Neck",
        stockStatus: "In Stock",
        isFeatured: true
    }
];
function filterProducts(filters) {
    let result = [
        ...products
    ];
    if (filters?.category) result = result.filter((p)=>p.category === filters.category);
    if (filters?.subcategory) result = result.filter((p)=>p.subcategory === filters.subcategory);
    if (filters?.isFeatured !== undefined) result = result.filter((p)=>p.isFeatured === filters.isFeatured);
    return result;
}
function getProductById(id) {
    return products.find((p)=>p.id === id);
}
}),
"[project]/app/components/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])(// Whitespace-nowrap: Badges should never wrap.
"whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" + " hover-elevate ", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow-xs",
            secondary: "border-transparent bg-secondary text-secondary-foreground",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow-xs",
            outline: " border [border-color:var(--badge-outline)] shadow-xs"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/badge.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/app/components/ProductCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/badge.tsx [app-ssr] (ecmascript)");
;
;
;
;
function ProductCard({ product }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-[2rem] p-6 shadow-xl shadow-primary/5 border border-secondary/50 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group flex flex-col h-full hover:-translate-y-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: `/products/${product.id}`,
            className: "flex-1 flex flex-col cursor-pointer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-[4/5] mb-6 rounded-[1.5rem] overflow-hidden bg-secondary/10 flex items-center justify-center p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: product.imageUrl,
                            alt: product.name,
                            fill: true,
                            sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
                            className: "object-contain transition-transform duration-700 ease-out group-hover:scale-110 p-4"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ProductCard.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        product.stockStatus !== "In Stock" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-4 left-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "destructive",
                                className: "bg-white/90 text-red-500 border-none shadow-md backdrop-blur-sm px-3 py-1 font-bold",
                                children: product.stockStatus
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProductCard.tsx",
                                lineNumber: 20,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/ProductCard.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this),
                        product.isFeatured && product.stockStatus === "In Stock" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-4 left-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                className: "bg-accent text-white border-none shadow-md backdrop-blur-sm px-3 py-1 font-bold",
                                children: "★ Featured"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProductCard.tsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/ProductCard.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ProductCard.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-secondary text-primary rounded-full",
                                    children: product.category
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ProductCard.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                product.size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-slate-100 text-slate-500 rounded-full",
                                    children: product.size
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ProductCard.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ProductCard.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-extrabold text-foreground mb-2 leading-tight group-hover:text-accent transition-colors",
                            children: product.name
                        }, void 0, false, {
                            fileName: "[project]/app/components/ProductCard.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground mb-6 line-clamp-2 leading-relaxed",
                            children: product.shortDescription
                        }, void 0, false, {
                            fileName: "[project]/app/components/ProductCard.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ProductCard.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ProductCard.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ProductCard.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/feeders/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Feeders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/products.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ProductCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
"use client";
;
;
;
;
;
function Feeders() {
    const [subcategory, setSubcategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const products = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.category === "Feeders" && (!subcategory || p.subcategory === subcategory));
    const filtered = products.filter((p)=>p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-50 min-h-screen pb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-primary text-white py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold mb-4",
                            children: "All Feeders"
                        }, void 0, false, {
                            fileName: "[project]/app/feeders/page.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-primary-foreground/80 max-w-2xl mx-auto",
                            children: "Discover our premium range of baby feeders designed with love, care, and the highest safety standards."
                        }, void 0, false, {
                            fileName: "[project]/app/feeders/page.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/feeders/page.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/feeders/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-lg shadow-black/5 p-4 md:p-6 mb-12 flex flex-col md:flex-row gap-6 justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0",
                                children: [
                                    {
                                        label: "All Feeders",
                                        value: null
                                    },
                                    {
                                        label: "Wide Neck",
                                        value: "Wide Neck"
                                    },
                                    {
                                        label: "Regular Feeders",
                                        value: "Regular Feeders"
                                    }
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSubcategory(item.value),
                                        className: `px-5 py-2.5 rounded-full font-medium whitespace-nowrap transition-all ${subcategory === item.value ? "bg-primary text-white shadow-md" : "bg-secondary text-primary hover:bg-secondary/70"}`,
                                        children: item.label
                                    }, item.label, false, {
                                        fileName: "[project]/app/feeders/page.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/feeders/page.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full md:w-72",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/app/feeders/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        placeholder: "Search feeders...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-full pl-10 pr-4 bg-slate-50 border border-secondary focus-visible:ring-primary rounded-xl h-11"
                                    }, void 0, false, {
                                        fileName: "[project]/app/feeders/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/feeders/page.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/feeders/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10",
                        children: filtered.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductCard"], {
                                product: product
                            }, product.id, false, {
                                fileName: "[project]/app/feeders/page.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/feeders/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/feeders/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/feeders/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Search
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Search", [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "path",
        {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }
    ]
]);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_e3c886c7._.js.map