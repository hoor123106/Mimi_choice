export interface Product {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  category: string;
  subcategory: string | null;
  size: string | null;
  stockStatus: string;
  isFeatured: boolean;
}

export const products: Product[] = [
  { id: 1, name: "TPR Wide Neck Feeder", description: "Premium TPR wide neck feeder (No: 1050/1053). Features adorable character designs, a soft silicone teat, and ergonomic handles. Anti-colic venting system.", shortDescription: "Premium TPR wide neck feeder with character designs.", imageUrl: "/1050.jpeg", category: "Feeders", subcategory: "Wide Neck", size: "320 ml", stockStatus: "In Stock", isFeatured: true },
  { id: 2, name: "TPR Wide Neck Feeder", description: "Premium TPR wide neck feeder (No: 1050/1053). Features adorable character designs, a soft silicone teat, and ergonomic handles. Anti-colic venting system.", shortDescription: "Premium TPR wide neck feeder with character designs.", imageUrl: "/1053.jpeg", category: "Feeders", subcategory: "Wide Neck", size: "240 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 3, name: "TPR Wide Neck Natural", description: "Natural finish TPR wide neck feeder (No: 1051/1054). Clear design with premium silicone teat and safety handles.", shortDescription: "Natural finish TPR wide neck feeder.", imageUrl: "/1051.jpeg", category: "Feeders", subcategory: "Wide Neck", size: "320 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 4, name: "TPR Wide Neck Natural", description: "Natural finish TPR wide neck feeder (No: 1051/1054). Clear design with premium silicone teat and safety handles.", shortDescription: "Natural finish TPR wide neck feeder.", imageUrl: "/1054.jpeg", category: "Feeders", subcategory: "Wide Neck", size: "240 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 5, name: "TPR Water Color Wide Neck", description: "Vibrant water color series wide neck feeder (No: 1052). Premium TPR material with anti-colic safety features.", shortDescription: "Vibrant water color series wide neck feeder.", imageUrl: "/1052.jpeg", category: "Feeders", subcategory: "Wide Neck", size: "320 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 6, name: "Snowman Color Wide Neck", description: "Cute Snowman series color wide neck feeder (No: 1044/1047). Wide neck for easy cleaning and high-quality materials.", shortDescription: "Cute Snowman series color wide neck feeder.", imageUrl: "/1044.jpeg", category: "Feeders", subcategory: "Wide Neck", size: "320 ml", stockStatus: "In Stock", isFeatured: true },
  { id: 7, name: "Snowman Color Wide Neck", description: "Cute Snowman series color wide neck feeder (No: 1044/1047). Wide neck for easy cleaning and high-quality materials.", shortDescription: "Cute Snowman series color wide neck feeder.", imageUrl: "/1047.jpeg", category: "Feeders", subcategory: "Wide Neck", size: "240 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 8, name: "Snowman Natural Wide Neck", description: "Clear Snowman series wide neck feeder (No: 1045/1048). Premium safe materials and anti-colic design.", shortDescription: "Clear Snowman series wide neck feeder.", imageUrl: "/1045.jpeg", category: "Feeders", subcategory: "Wide Neck", size: "320 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 9, name: "Snowman Natural Wide Neck", description: "Clear Snowman series wide neck feeder (No: 1045/1048). Premium safe materials and anti-colic design.", shortDescription: "Clear Snowman series wide neck feeder.", imageUrl: "/1048.jpeg", category: "Feeders", subcategory: "Wide Neck", size: "240 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 10, name: "Snowman Water Color Wide Neck", description: "Beautiful water color Snowman series wide neck feeder (No: 1046). 320ml capacity for growing babies.", shortDescription: "Water color Snowman series wide neck feeder.", imageUrl: "/1046.jpeg", category: "Feeders", subcategory: "Wide Neck", size: "320 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 12, name: "Strawberry Natural Wide Neck 320ml", description: "Natural clear strawberry-themed wide neck feeder (No: 1087). 320ml capacity with safety handles.", shortDescription: "Strawberry natural wide neck feeder 320ml.", imageUrl: "/1087.jpeg", category: "Feeders", subcategory: "Wide Neck", size: "320 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 13, name: "Strawberry Water Color Wide Neck 320ml", description: "Beautiful water color strawberry-themed wide neck feeder (No: 1088). 320ml with colorful handles.", shortDescription: "Strawberry water color wide neck feeder 320ml.", imageUrl: "/1088.jpeg", category: "Feeders", subcategory: "Wide Neck", size: "320 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 14, name: "Strawberry Color Wide Neck 320ml", description: "Colorful strawberry-themed wide neck feeder (No: 1086). 320ml capacity with textured handles.", shortDescription: "Strawberry color wide neck feeder 320ml.", imageUrl: "/1086.jpeg", category: "Feeders", subcategory: "Wide Neck", size: "320 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 15, name: "Bear Color Wide Neck 320ml", description: "Adorable bear-themed colored wide neck feeder (No: 1076). 320ml capacity with safety handles.", shortDescription: "Bear color wide neck feeder 320ml.", imageUrl: "/1076.jpeg", category: "Feeders", subcategory: "Wide Neck", size: "320 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 16, name: "Bear Natural Wide Neck 320ml", description: "Natural clear bear-themed wide neck feeder (No: 1077). 320ml with cute character designs.", shortDescription: "Bear natural wide neck feeder 320ml.", imageUrl: "/1077.jpeg", category: "Feeders", subcategory: "Wide Neck", size: "320 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 17, name: "Bear Water Color Wide Neck 320ml", description: "Beautiful water color bear-themed wide neck feeder (No: 1078). 320ml capacity with dual handles.", shortDescription: "Bear water color wide neck feeder 320ml.", imageUrl: "/1078.jpeg", category: "Feeders", subcategory: "Wide Neck", size: "320 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 18, name: "Mug Natural Wide Neck 320ml", description: "Natural clear dual-handle wide neck mug feeder (No: 1090). 320ml capacity with adorable character designs.", shortDescription: "Natural wide neck mug feeder 320ml.", imageUrl: "/1090.jpeg", category: "Feeders", subcategory: "Wide Neck", size: "320 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 19, name: "Mug Water Color Wide Neck 320ml", description: "Beautiful water color dual-handle wide neck feeder (No: 1091). 320ml capacity with colorful designs.", shortDescription: "Water color wide neck mug feeder 320ml.", imageUrl: "/1091.jpeg", category: "Feeders", subcategory: "Wide Neck", size: "320 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 20, name: "Basic Natural Feeder", description: "Classic natural slim-neck feeder (No: 1001/1009). Easy-grip handles and clear measurement markings.", shortDescription: "Classic natural slim-neck feeder.", imageUrl: "/1001.jpeg", category: "Feeders", subcategory: "Regular Feeders", size: "280 ml", stockStatus: "In Stock", isFeatured: true },
  { id: 21, name: "Basic Natural Feeder", description: "Classic natural slim-neck feeder (No: 1001/1009). Easy-grip handles and clear measurement markings.", shortDescription: "Classic natural slim-neck feeder.", imageUrl: "/1009.jpeg", category: "Feeders", subcategory: "Regular Feeders", size: "150 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 22, name: "Basic Color Feeder", description: "Fun and colorful slim-neck feeder (No: 1010). Durable design with safety handles.", shortDescription: "Colorful slim-neck feeder.", imageUrl: "/1010.jpeg", category: "Feeders", subcategory: "Regular Feeders", size: "150 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 23, name: "Mug Natural Feeder", description: "Natural-style mug feeder with dual handles (No: 1065/1073). Helps babies transition to independent drinking.", shortDescription: "Dual-handle natural mug feeder.", imageUrl: "/1065.jpeg", category: "Feeders", subcategory: "Regular Feeders", size: "280 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 24, name: "Mug Natural Feeder", description: "Natural-style mug feeder with dual handles (No: 1065/1073). Helps babies transition to independent drinking.", shortDescription: "Dual-handle natural mug feeder.", imageUrl: "/1073.jpeg", category: "Feeders", subcategory: "Regular Feeders", size: "150 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 25, name: "Mug Color Feeder", description: "Brightly colored dual-handle mug feeder (No: 1064/1074). Ergonomic and safe for little hands.", shortDescription: "Vibrant dual-handle mug feeder.", imageUrl: "/1064.jpeg", category: "Feeders", subcategory: "Regular Feeders", size: "280 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 26, name: "Mug Color Feeder", description: "Brightly colored dual-handle mug feeder (No: 1064/1074). Ergonomic and safe for little hands.", shortDescription: "Vibrant dual-handle mug feeder.", imageUrl: "/1074.jpeg", category: "Feeders", subcategory: "Regular Feeders", size: "150 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 27, name: "Animal Color Feeder", description: "Adorable animal-themed color feeder (No: 1037). Fun designs to keep your baby engaged.", shortDescription: "Animal-themed color feeder.", imageUrl: "/1037.jpeg", category: "Feeders", subcategory: "Regular Feeders", size: "280 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 28, name: "Animal Natural Feeder", description: "Cute animal-themed natural feeder (No: 1039). Safe, clear design with delightful animal graphics.", shortDescription: "Animal-themed natural feeder.", imageUrl: "/1039.jpeg", category: "Feeders", subcategory: "Regular Feeders", size: "280 ml", stockStatus: "In Stock", isFeatured: true },
  { id: 29, name: "Bear Color Regular 280ml", description: "Adorable bear-themed colored regular feeder (No: 1025). 280ml capacity with dual handles.", shortDescription: "Bear color regular feeder 280ml.", imageUrl: "/1025.jpeg", category: "Feeders", subcategory: "Regular Feeders", size: "280 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 30, name: "Bear Natural Regular 280ml", description: "Natural clear bear-themed regular feeder (No: 1027). 280ml with cute character designs.", shortDescription: "Bear natural regular feeder 280ml.", imageUrl: "/1027.jpeg", category: "Feeders", subcategory: "Regular Feeders", size: "280 ml", stockStatus: "In Stock", isFeatured: false },
  { id: 31, name: "Basic Color Regular 280ml", description: "Fun and colorful regular feeder (No: 1002). 280ml capacity with safety handles.", shortDescription: "Basic color regular feeder 280ml.", imageUrl: "/1002.jpeg", category: "Feeders", subcategory: "Regular Feeders", size: "280 ml", stockStatus: "In Stock", isFeatured: true },
  { id: 32, name: "Premium Teats - Regular Pack of 2", description: "High-quality silicone teats (No: 1024). Regular flow, BPA-free, and natural feel. Pack of 2.", shortDescription: "Premium regular flow silicone teats.", imageUrl: "/1024.jpeg", category: "Teats", subcategory: null, size: "Regular", stockStatus: "In Stock", isFeatured: true },
  { id: 33, name: "Green Teats Regular Extra Soft", description: "Premium soft green silicone teats (No: 1056). Extra soft for sensitive babies, BPA-free. Pack of 2.", shortDescription: "Soft green silicone teats.", imageUrl: "/1056.jpeg", category: "Teats", subcategory: null, size: "Regular", stockStatus: "In Stock", isFeatured: true },
  { id: 34, name: "Wide Neck Teats Pack of 2", description: "Premium wide neck teats (No: 1082). High-quality silicone for wide neck bottles. Pack of 2.", shortDescription: "Wide neck silicone teats.", imageUrl: "/1082.jpeg", category: "Teats", subcategory: null, size: "Wide Neck", stockStatus: "In Stock", isFeatured: true },
];

export interface ProductFilters {
  category?: string;
  subcategory?: string;
  isFeatured?: boolean;
}

export function filterProducts(filters?: ProductFilters): Product[] {
  let result = [...products];
  if (filters?.category) result = result.filter((p) => p.category === filters.category);
  if (filters?.subcategory) result = result.filter((p) => p.subcategory === filters.subcategory);
  if (filters?.isFeatured !== undefined) result = result.filter((p) => p.isFeatured === filters.isFeatured);
  return result;
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}
