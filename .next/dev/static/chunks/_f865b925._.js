(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "320 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 11,
        name: "Mug Color Wide Neck 320ml",
        description: "Vibrant colored dual-handle wide neck feeder (No: 1089). 320ml capacity with easy grip handles.",
        shortDescription: "Colorful wide neck mug feeder 320ml.",
        imageUrl: "/logo.png",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "320 ml",
        stockStatus: "In Stock",
        isFeatured: true
    },
    {
        id: 12,
        name: "Strawberry Natural Wide Neck 320ml",
        description: "Natural clear strawberry-themed wide neck feeder (No: 1087). 320ml capacity with safety handles.",
        shortDescription: "Strawberry natural wide neck feeder 320ml.",
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
        category: "Feeders",
        subcategory: "Wide Neck",
        size: "320 ml",
        stockStatus: "In Stock",
        isFeatured: false
    },
    {
        id: 19,
        name: "Mug Water Color Wide Neck 320ml",
        description: "Beautiful water color dual-handle wide neck mug feeder (No: 1091). 320ml capacity with colorful designs.",
        shortDescription: "Water color wide neck mug feeder 320ml.",
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
        imageUrl: "/logo.png",
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    // h-9 to match icon buttons and default buttons.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/input.tsx",
        lineNumber: 9,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/products/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Products
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/products.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ProductCard'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/input.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const FILTERS = [
    {
        key: "All",
        label: "All Products",
        description: "Everything we offer"
    },
    {
        key: "Teats",
        label: "Teats",
        description: "Soft silicone teats"
    },
    {
        key: "Wide Neck",
        label: "Wide Neck Feeders",
        description: "Wide neck design"
    },
    {
        key: "Regular",
        label: "Regular Feeders",
        description: "Classic slim-neck"
    }
];
function Products() {
    _s();
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Products.useMemo[filtered]": ()=>{
            let result = [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"]
            ];
            if (activeFilter === "Teats") result = result.filter({
                "Products.useMemo[filtered]": (p)=>p.category === "Teats"
            }["Products.useMemo[filtered]"]);
            else if (activeFilter === "Wide Neck") result = result.filter({
                "Products.useMemo[filtered]": (p)=>p.subcategory === "Wide Neck"
            }["Products.useMemo[filtered]"]);
            else if (activeFilter === "Regular") result = result.filter({
                "Products.useMemo[filtered]": (p)=>p.subcategory === "Regular Feeders"
            }["Products.useMemo[filtered]"]);
            if (searchQuery.trim()) {
                const q = searchQuery.toLowerCase();
                result = result.filter({
                    "Products.useMemo[filtered]": (p)=>p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q)
                }["Products.useMemo[filtered]"]);
            }
            return result;
        }
    }["Products.useMemo[filtered]"], [
        activeFilter,
        searchQuery
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-50 min-h-screen pb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-primary text-white py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold mb-4",
                            children: "Our Products"
                        }, void 0, false, {
                            fileName: "[project]/app/products/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-primary-foreground/80 max-w-2xl mx-auto",
                            children: "Discover our premium range of baby essentials designed with love, care, and the highest safety standards."
                        }, void 0, false, {
                            fileName: "[project]/app/products/page.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/products/page.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/products/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-lg shadow-black/5 p-4 md:p-6 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row gap-4 justify-between items-start md:items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 w-full md:w-auto",
                                        children: FILTERS.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveFilter(f.key),
                                                className: `flex flex-col items-start px-5 py-3 rounded-xl font-medium whitespace-nowrap transition-all border-2 ${activeFilter === f.key ? "bg-primary text-white border-primary shadow-md shadow-primary/20" : "bg-slate-50 text-primary border-secondary hover:border-primary/30 hover:bg-secondary/50"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold",
                                                        children: f.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/page.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xs font-normal mt-0.5 ${activeFilter === f.key ? "text-white/70" : "text-muted-foreground"}`,
                                                        children: f.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/products/page.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, f.key, true, {
                                                fileName: "[project]/app/products/page.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/products/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full md:w-72 shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/products/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "Search products...",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                className: "pl-10 bg-slate-50 border-secondary focus-visible:ring-primary rounded-xl h-11"
                                            }, void 0, false, {
                                                fileName: "[project]/app/products/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/products/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/products/page.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        "Showing ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-primary",
                                            children: filtered.length
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 23
                                        }, this),
                                        " product",
                                        filtered.length !== 1 ? "s" : "",
                                        activeFilter !== "All" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                " in ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-accent",
                                                    children: FILTERS.find((f)=>f.key === activeFilter)?.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/page.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 52
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/products/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/products/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/products/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-24 bg-white rounded-3xl border border-dashed border-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                className: "w-16 h-16 mx-auto text-secondary mb-4"
                            }, void 0, false, {
                                fileName: "[project]/app/products/page.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold text-primary mb-2",
                                children: "No products found"
                            }, void 0, false, {
                                fileName: "[project]/app/products/page.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "Try adjusting your filters or search query."
                            }, void 0, false, {
                                fileName: "[project]/app/products/page.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveFilter("All");
                                    setSearchQuery("");
                                },
                                className: "mt-6 text-accent font-semibold hover:underline",
                                children: "Clear all filters"
                            }, void 0, false, {
                                fileName: "[project]/app/products/page.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/products/page.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10",
                        children: filtered.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
                                product: product
                            }, product.id, false, {
                                fileName: "[project]/app/products/page.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/products/page.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/products/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/products/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Products, "jwttLV87gIZALIs+lELD554i1Zo=");
_c = Products;
var _c;
__turbopack_context__.k.register(_c, "Products");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Search", [
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
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Filter
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Filter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Filter", [
    [
        "polygon",
        {
            points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
            key: "1yg77f"
        }
    ]
]);
;
 //# sourceMappingURL=filter.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Filter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_f865b925._.js.map