// app/shop/components/SortSelect.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") || "featured";

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "featured") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    const query = params.toString();
    router.push(query ? `/shop?${query}` : "/shop", { scroll: false });
  };

  return (
    <div className="flex items-center gap-1.5 text-[12px] text-[#7D7870]">
      <label htmlFor="shop-sort">Sort:</label>
      <select
        id="shop-sort"
        value={currentSort}
        onChange={(e) => handleSortChange(e.target.value)}
        className="cursor-pointer bg-transparent font-normal text-[#1C1B19] focus:outline-none"
      >
        <option value="featured">Featured</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
}
