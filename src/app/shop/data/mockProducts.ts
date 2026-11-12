// app/shop/data/mockProducts.ts
export interface ShopProduct {
  id: string;
  name: string;
  category: "rings" | "earrings" | "necklaces" | "bracelets";
  material: "14k yellow gold" | "Gold vermeil" | "Sterling silver";
  materialSlug: "14k-yellow-gold" | "gold-vermeil" | "sterling-silver";
  gemstone: "Diamond" | "Pearl" | "No gemstone";
  gemstoneSlug: "diamond" | "pearl" | "no-gemstone";
  price: number;
  inStock: boolean;
  imageSrc: string;
  href: string;
}

export const MOCK_PRODUCTS: ShopProduct[] = [
  {
    id: "sol-signet-ring",
    name: "Sol Signet Ring",
    category: "rings",
    material: "14k yellow gold",
    materialSlug: "14k-yellow-gold",
    gemstone: "No gemstone",
    gemstoneSlug: "no-gemstone",
    price: 180,
    inStock: true,
    imageSrc:
      "https://images.unsplash.com/photo-1727807308829-b150f3ca25c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/products/sol-signet-ring",
  },
  {
    id: "lune-hoop-earrings",
    name: "Lune Hoop Earrings",
    category: "earrings",
    material: "14k yellow gold",
    materialSlug: "14k-yellow-gold",
    gemstone: "No gemstone",
    gemstoneSlug: "no-gemstone",
    price: 240,
    inStock: true,
    imageSrc:
      "https://images.unsplash.com/photo-1668718003065-9e776554620c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/products/lune-hoop-earrings",
  },
  {
    id: "dew-diamond-studs",
    name: "Dew Diamond Studs",
    category: "earrings",
    material: "14k yellow gold",
    materialSlug: "14k-yellow-gold",
    gemstone: "Diamond",
    gemstoneSlug: "diamond",
    price: 295,
    inStock: true,
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1757962534361-72068142ca1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/products/dew-diamond-studs",
  },
  {
    id: "muse-pendant",
    name: "Muse Pendant",
    category: "necklaces",
    material: "14k yellow gold",
    materialSlug: "14k-yellow-gold",
    gemstone: "No gemstone",
    gemstoneSlug: "no-gemstone",
    price: 210,
    inStock: true,
    imageSrc:
      "https://images.unsplash.com/photo-1654699991494-892326ee8171?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/products/muse-pendant",
  },
  {
    id: "tide-pearl-necklace",
    name: "Tide Pearl Necklace",
    category: "necklaces",
    material: "Gold vermeil",
    materialSlug: "gold-vermeil",
    gemstone: "Pearl",
    gemstoneSlug: "pearl",
    price: 165,
    inStock: true,
    imageSrc:
      "https://images.unsplash.com/photo-1648645294492-66bd4d98988c?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/products/tide-pearl-necklace",
  },
  {
    id: "arc-cuff",
    name: "Arc Cuff",
    category: "bracelets",
    material: "Sterling silver",
    materialSlug: "sterling-silver",
    gemstone: "No gemstone",
    gemstoneSlug: "no-gemstone",
    price: 125,
    inStock: true,
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1681276169903-83b87f1cbf19?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/products/arc-cuff",
  },
  {
    id: "vera-pearl-drops",
    name: "Vera Pearl Drops",
    category: "earrings",
    material: "Gold vermeil",
    materialSlug: "gold-vermeil",
    gemstone: "Pearl",
    gemstoneSlug: "pearl",
    price: 190,
    inStock: false,
    imageSrc:
      "https://images.unsplash.com/photo-1650785468226-e415afc2bd9e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/products/vera-pearl-drops",
  },
  {
    id: "sera-chain-bracelet",
    name: "Sera Chain Bracelet",
    category: "bracelets",
    material: "Sterling silver",
    materialSlug: "sterling-silver",
    gemstone: "No gemstone",
    gemstoneSlug: "no-gemstone",
    price: 140,
    inStock: true,
    imageSrc:
      "https://images.unsplash.com/photo-1612813033645-9bc8f5953105?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/products/sera-chain-bracelet",
  },
];

export const FILTER_OPTIONS = {
  categories: [
    { label: "All jewellery", slug: "all" },
    { label: "Rings", slug: "rings" },
    { label: "Earrings", slug: "earrings" },
    { label: "Necklaces", slug: "necklaces" },
    { label: "Bracelets", slug: "bracelets" },
  ],
  materials: [
    { label: "14k yellow gold", slug: "14k-yellow-gold" },
    { label: "Gold vermeil", slug: "gold-vermeil" },
    { label: "Sterling silver", slug: "sterling-silver" },
  ],
  gemstones: [
    { label: "Diamond", slug: "diamond" },
    { label: "Pearl", slug: "pearl" },
    { label: "No gemstone", slug: "no-gemstone" },
  ],
  minPrice: 125,
  maxPrice: 300,
};
