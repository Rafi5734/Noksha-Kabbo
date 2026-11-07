export type Product = {
  name: string;
  category: string;
  price: string;
  image: string;
  badge?: string;
};

export const featuredProducts: Product[] = [
  { name: "Alo Hoop Earrings", category: "Earrings", price: "৳ 2,450", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85", badge: "Best seller" },
  { name: "Mrittika Pendant", category: "Necklaces", price: "৳ 3,850", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85" },
  { name: "Rupali Stack Ring", category: "Rings", price: "৳ 1,950", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85", badge: "New" },
  { name: "Jochona Cuff", category: "Bracelets", price: "৳ 2,950", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85" },
];

export const categories = [
  { label: "Earrings", count: "24 pieces", image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=700&q=85" },
  { label: "Necklaces", count: "18 pieces", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=85" },
  { label: "Rings", count: "31 pieces", image: "https://images.unsplash.com/photo-1603561596112-db3b4a7b4f6d?auto=format&fit=crop&w=700&q=85" },
  { label: "Bracelets", count: "16 pieces", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=85" },
];
