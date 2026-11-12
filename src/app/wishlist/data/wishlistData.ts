// app/wishlist/data/wishlistData.ts
export interface WishlistItem {
  id: string;
  name: string;
  material: string;
  price: number;
  currency: string;
  selectedOption: string; // e.g., "Size M", "Pair", "45 cm", "Adjustable"
  imageSrc: string;
  href: string;
}

export const INITIAL_WISHLIST: WishlistItem[] = [
  {
    id: "sol-signet-ring",
    name: "Sol Signet Ring",
    material: "14k yellow gold",
    price: 180,
    currency: "£",
    selectedOption: "Size M",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1681276170758-d6ca6e6e276a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/products/sol-signet-ring",
  },
  {
    id: "lune-hoop-earrings",
    name: "Lune Hoop Earrings",
    material: "14k yellow gold",
    price: 240,
    currency: "£",
    selectedOption: "Pair",
    imageSrc:
      "https://images.unsplash.com/photo-1621311628038-01cd988520c2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/products/lune-hoop-earrings",
  },
  {
    id: "tide-pearl-necklace",
    name: "Tide Pearl Necklace",
    material: "Gold vermeil",
    price: 165,
    currency: "£",
    selectedOption: "45 cm",
    imageSrc:
      "https://images.unsplash.com/photo-1667933517619-a24837939aad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/products/tide-pearl-necklace",
  },
  {
    id: "arc-cuff",
    name: "Arc Cuff",
    material: "Sterling silver",
    price: 125,
    currency: "£",
    selectedOption: "Adjustable",
    imageSrc:
      "https://images.unsplash.com/photo-1745091947310-ff0af5e7c38c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/products/arc-cuff",
  },
];
