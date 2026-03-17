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
"[project]/hooks/use-products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProduct",
    ()=>useProduct,
    "useProducts",
    ()=>useProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/products.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const imageCache = new Map();
async function probe(url) {
    try {
        const res = await fetch(url, {
            method: "HEAD",
            cache: "no-store"
        });
        return res.ok;
    } catch  {
        return false;
    }
}
async function resolveImageForId(id) {
    if (imageCache.has(id)) return imageCache.get(id);
    const exts = [
        "jpeg",
        "jpg",
        "png",
        "webp",
        "gif"
    ];
    const variants = [
        "",
        "b",
        "c"
    ];
    for (const v of variants){
        for (const ext of exts){
            const url = `/products/${id}${v}.${ext}`;
            if (await probe(url)) {
                imageCache.set(id, url);
                return url;
            }
        }
    }
    return null;
}
function useProducts(filters) {
    _s();
    const [all, setAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProducts.useEffect": ()=>{
            mounted.current = true;
            async function build() {
                const updated = await Promise.all(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].map({
                    "useProducts.useEffect.build": async (p)=>{
                        const found = await resolveImageForId(p.id);
                        return {
                            ...p,
                            imageUrl: found ?? p.imageUrl
                        };
                    }
                }["useProducts.useEffect.build"]));
                if (mounted.current) {
                    setAll(updated);
                    setIsLoading(false);
                }
            }
            build();
            return ({
                "useProducts.useEffect": ()=>{
                    mounted.current = false;
                }
            })["useProducts.useEffect"];
        }
    }["useProducts.useEffect"], []);
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useProducts.useMemo[data]": ()=>{
            let result = [
                ...all
            ];
            if (filters?.category) result = result.filter({
                "useProducts.useMemo[data]": (p)=>p.category === filters.category
            }["useProducts.useMemo[data]"]);
            if (filters?.subcategory) result = result.filter({
                "useProducts.useMemo[data]": (p)=>p.subcategory === filters.subcategory
            }["useProducts.useMemo[data]"]);
            if (filters?.isFeatured !== undefined) result = result.filter({
                "useProducts.useMemo[data]": (p)=>p.isFeatured === filters.isFeatured
            }["useProducts.useMemo[data]"]);
            return result;
        }
    }["useProducts.useMemo[data]"], [
        all,
        filters?.category,
        filters?.subcategory,
        filters?.isFeatured
    ]);
    return {
        data,
        isLoading
    };
}
_s(useProducts, "uUJ+IIVJ1dj7hdqMg5D12N0ZWfI=");
function useProduct(id) {
    _s1();
    const { data, isLoading } = useProducts();
    const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useProduct.useMemo[item]": ()=>data.find({
                "useProduct.useMemo[item]": (p)=>p.id === id
            }["useProduct.useMemo[item]"]) ?? null
    }["useProduct.useMemo[item]"], [
        data,
        id
    ]);
    return {
        data: item,
        isLoading
    };
}
_s1(useProduct, "jOiRm6E7usoTWlx05tya5zO8wNQ=", false, function() {
    return [
        useProducts
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])(// Whitespace-nowrap: Badges should never wrap.
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/components/badge.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ProductCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/badge.tsx [app-client] (ecmascript)");
;
;
;
;
function ProductCard({ product }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-[2rem] p-6 shadow-xl shadow-primary/5 border border-secondary/50 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group flex flex-col h-full hover:-translate-y-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/products/${product.id}`,
            className: "flex-1 flex flex-col cursor-pointer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-[4/5] mb-6 rounded-[1.5rem] overflow-hidden bg-secondary/10 flex items-center justify-center p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                        product.stockStatus !== "In Stock" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-4 left-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
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
                        product.isFeatured && product.stockStatus === "In Stock" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-4 left-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-secondary text-primary rounded-full",
                                    children: product.category
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ProductCard.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                product.size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-extrabold text-foreground mb-2 leading-tight group-hover:text-accent transition-colors",
                            children: product.name
                        }, void 0, false, {
                            fileName: "[project]/app/components/ProductCard.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/products/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ProductCard.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/skeleton'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/badge'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function ProductDetail({ params }) {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const productId = parseInt(id || "0");
    const { data: product, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProduct"])(productId);
    const { data: relatedProducts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"])({
        category: product?.category
    });
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                        className: "aspect-square w-full rounded-3xl"
                    }, void 0, false, {
                        fileName: "[project]/app/products/[id]/page.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                className: "h-10 w-3/4"
                            }, void 0, false, {
                                fileName: "[project]/app/products/[id]/page.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                                className: "h-32 w-full"
                            }, void 0, false, {
                                fileName: "[project]/app/products/[id]/page.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/products/[id]/page.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/products/[id]/page.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/products/[id]/page.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    if (!product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[60vh] flex flex-col items-center justify-center text-center px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-primary mb-4",
                    children: "Product Not Found"
                }, void 0, false, {
                    fileName: "[project]/app/products/[id]/page.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground mb-8",
                    children: "The product you're looking for doesn't exist or has been removed."
                }, void 0, false, {
                    fileName: "[project]/app/products/[id]/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/products",
                    className: "btn-accent px-6 py-3 rounded-xl font-semibold",
                    children: "Browse Products"
                }, void 0, false, {
                    fileName: "[project]/app/products/[id]/page.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/products/[id]/page.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    const otherProducts = relatedProducts?.filter((p)=>p.id !== product.id).slice(0, 4) || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white min-h-screen py-12 lg:py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative bg-secondary/20 rounded-[2.5rem] p-6 flex items-center justify-center border border-secondary/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full aspect-square",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: product.imageUrl,
                                        alt: product.name,
                                        fill: true,
                                        sizes: "(max-width: 768px) 100vw, 50vw",
                                        className: "object-contain p-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/products/[id]/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/products/[id]/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                product.isFeatured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                    className: "absolute top-8 left-8 bg-accent hover:bg-accent/90 text-white border-none px-4 py-1.5 text-sm shadow-lg",
                                    children: "★ Featured"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/[id]/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/[id]/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-accent font-bold uppercase tracking-widest text-sm",
                                            children: product.category
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/[id]/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        product.subcategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-secondary-foreground/30"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/[id]/page.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground text-sm font-medium",
                                                    children: product.subcategory
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/[id]/page.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/[id]/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight",
                                    children: product.name
                                }, void 0, false, {
                                    fileName: "[project]/app/products/[id]/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "prose text-muted-foreground mb-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: product.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/products/[id]/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/products/[id]/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 mb-10",
                                    children: [
                                        product.size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-20 font-semibold text-foreground",
                                                    children: "Size:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/[id]/page.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                    variant: "outline",
                                                    className: "text-sm bg-slate-50",
                                                    children: product.size
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/[id]/page.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/products/[id]/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-20 font-semibold text-foreground",
                                                    children: "Status:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/[id]/page.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `flex items-center gap-2 font-medium ${product.stockStatus === "In Stock" ? "text-green-600" : "text-red-500"}`,
                                                    children: [
                                                        product.stockStatus === "In Stock" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/products/[id]/page.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 58
                                                        }, this),
                                                        product.stockStatus
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/products/[id]/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/products/[id]/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/[id]/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 pt-8 border-t border-secondary",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center text-center gap-2 text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                    className: "w-6 h-6 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/[id]/page.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium",
                                                    children: "Safe Materials"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/[id]/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/products/[id]/page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center text-center gap-2 text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                    className: "w-6 h-6 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/[id]/page.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium",
                                                    children: "Fast Shipping"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/[id]/page.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/products/[id]/page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center text-center gap-2 text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                    className: "w-6 h-6 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/[id]/page.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium",
                                                    children: "30-Day Returns"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/[id]/page.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/products/[id]/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/[id]/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/[id]/page.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/products/[id]/page.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                otherProducts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-16 border-t border-secondary",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold mb-8",
                            children: "You might also like"
                        }, void 0, false, {
                            fileName: "[project]/app/products/[id]/page.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
                            children: otherProducts.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                                    product: p
                                }, p.id, false, {
                                    fileName: "[project]/app/products/[id]/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 41
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/products/[id]/page.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/products/[id]/page.tsx",
                    lineNumber: 111,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/products/[id]/page.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/products/[id]/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(ProductDetail, "9ikZsSl9mPhf1CMly70PdCs6nh4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProduct"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"]
    ];
});
_c = ProductDetail;
var _c;
__turbopack_context__.k.register(_c, "ProductDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShieldCheck
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ShieldCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ShieldCheck", [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
]);
;
 //# sourceMappingURL=shield-check.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShieldCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Truck
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Truck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Truck", [
    [
        "path",
        {
            d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
            key: "wrbu53"
        }
    ],
    [
        "path",
        {
            d: "M15 18H9",
            key: "1lyqi6"
        }
    ],
    [
        "path",
        {
            d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
            key: "lysw3i"
        }
    ],
    [
        "circle",
        {
            cx: "17",
            cy: "18",
            r: "2",
            key: "332jqn"
        }
    ],
    [
        "circle",
        {
            cx: "7",
            cy: "18",
            r: "2",
            key: "19iecd"
        }
    ]
]);
;
 //# sourceMappingURL=truck.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Truck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RotateCcw
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const RotateCcw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("RotateCcw", [
    [
        "path",
        {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3"
        }
    ],
    [
        "path",
        {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }
    ]
]);
;
 //# sourceMappingURL=rotate-ccw.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RotateCcw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_fe95d2e9._.js.map