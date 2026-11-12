// app/bag/data/bagData.ts
export interface BagItem {
  id: string;
  name: string;
  variant: string; // e.g., "14k yellow gold - Size M"
  price: number;
  quantity: number;
  imageSrc: string;
  href: string;
}

export const INITIAL_BAG_ITEMS: BagItem[] = [
  {
    id: "sol-signet-ring",
    name: "Sol Signet Ring",
    variant: "14k yellow gold - Size M",
    price: 180.0,
    quantity: 1,
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1674748385436-db725f68e312?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/products/sol-signet-ring",
  },
  {
    id: "lune-hoop-earrings",
    name: "Lune Hoop Earrings",
    variant: "14k yellow gold - Pair",
    price: 240.0,
    quantity: 1,
    imageSrc:
      "https://images.unsplash.com/photo-1545839539-88eac4c475d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    href: "/products/lune-hoop-earrings",
  },
];
