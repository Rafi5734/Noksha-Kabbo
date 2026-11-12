// app/products/[id]/data/productData.ts
export interface Product {
  id: string;
  name: string;
  category: string;
  collection: string;
  price: number;
  currency: string;
  description: string;
  images: { src: string; alt: string }[];
  metals: { name: string; available: boolean }[];
  sizes: { size: string; available: boolean }[];
  inStock: boolean;
  stockMessage: string;
  details: string;
}

export const PRODUCTS_MAP: Record<string, Product> = {
  "sol-signet-ring": {
    id: "sol-signet-ring",
    name: "Sol Signet Ring",
    category: "Rings",
    collection: "THE SOL COLLECTION · BESTSELLER",
    price: 180,
    currency: "£",
    description:
      "A modern heirloom in the making. A softly sculpted oval face and a smooth, substantial feel — your everyday signature.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1748679451120-c2ad459c73ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        alt: "Sol Signet Ring in 14k yellow gold on travertine stone",
      },
      {
        src: "https://plus.unsplash.com/premium_photo-1681276170683-706111cf496e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        alt: "Model wearing the Sol Signet Ring",
      },
      {
        src: "https://images.unsplash.com/photo-1748679451503-f0d7f150817b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        alt: "Angle view of Sol Signet Ring",
      },
    ],
    metals: [
      { name: "14k yellow gold", available: true },
      { name: "White gold", available: false },
    ],
    sizes: [
      { size: "K", available: true },
      { size: "L", available: true },
      { size: "M", available: true },
      { size: "N", available: true },
      { size: "O", available: true },
    ],
    inStock: true,
    stockMessage:
      "Order today for delivery 28–30 October. Complimentary standard UK shipping.",
    details:
      "14k solid yellow gold. Oval face: 9 × 7 mm. Band width: 2 mm. Approximate weight: 2.4 g (size M). Product code: AU-SOL-01.",
  },
};
