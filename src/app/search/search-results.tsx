"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { ShopProduct } from "@/app/shop/data/mockProducts";

type SearchResultsProps = {
  products: ShopProduct[];
  initialQuery: string;
};

const QUICK_SEARCHES = ["gold rings", "gold earrings", "gold necklaces"];

function matchesQuery(product: ShopProduct, query: string) {
  const searchableText = [
    product.name,
    product.category,
    product.material,
    product.gemstone,
  ]
    .join(" ")
    .toLowerCase();

  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => searchableText.includes(term));
}

export default function SearchResults({
  products,
  initialQuery,
}: SearchResultsProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [material, setMaterial] = useState("all");
  const [gemstone, setGemstone] = useState("all");
  const [availability, setAvailability] = useState("all");
  const [sort, setSort] = useState("relevance");

  const results = useMemo(() => {
    const filtered = products.filter((product) => {
      if (!matchesQuery(product, initialQuery)) return false;
      if (material !== "all" && product.materialSlug !== material) return false;
      if (gemstone !== "all" && product.gemstoneSlug !== gemstone) return false;
      if (availability === "in-stock" && !product.inStock) return false;
      return true;
    });

    if (sort === "price-low") return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === "price-high") return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [availability, gemstone, initialQuery, material, products, sort]);

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextQuery = query.trim();
    router.push(nextQuery ? `/search?q=${encodeURIComponent(nextQuery)}` : "/search");
  };

  const setQuickSearch = (value: string) => {
    setQuery(value);
    router.push(`/search?q=${encodeURIComponent(value)}`);
  };

  const clearSearch = () => {
    setQuery("");
    setMaterial("all");
    setGemstone("all");
    setAvailability("all");
    setSort("relevance");
    router.push("/search");
  };

  return (
    <section aria-label="Search products" className="mt-7">
      <form onSubmit={submitSearch}>
        <label
          htmlFor="search-products"
          className="block border border-[#DDD7CE] bg-white px-3 py-3"
        >
          <span className="block text-[11px] text-[#7D7870]">Search jewellery</span>
          <input
            id="search-products"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, category, material..."
            className="mt-1 w-full bg-transparent text-[13px] text-[#1C1B19] outline-none placeholder:text-[#A49D94]"
          />
        </label>
      </form>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-[#5C6650]">
        {QUICK_SEARCHES.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setQuickSearch(value)}
            className="transition-colors hover:text-[#1C1B19]"
          >
            {value}
          </button>
        ))}
      </div>

      <div className="mt-7 border-t border-[#DDD7CE] pt-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-[13px] font-medium">
            {results.length} {results.length === 1 ? "result" : "results"} for{" "}
            <span className="font-semibold">&quot;{initialQuery || "all jewellery"}&quot;</span>
          </p>

          <button
            type="button"
            onClick={clearSearch}
            className="text-[12px] text-[#5C5852] transition-colors hover:text-[#1C1B19]"
          >
            Clear search <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-[12px] text-[#5C5852]">
          <span className="text-[#7D7870]">Refine:</span>
          <label>
            Material{" "}
            <select value={material} onChange={(e) => setMaterial(e.target.value)} className="bg-transparent text-[#1C1B19] outline-none">
              <option value="all">All</option>
              <option value="14k-yellow-gold">14k yellow gold</option>
              <option value="gold-vermeil">Gold vermeil</option>
              <option value="sterling-silver">Sterling silver</option>
            </select>
          </label>
          <label>
            Gemstone{" "}
            <select value={gemstone} onChange={(e) => setGemstone(e.target.value)} className="bg-transparent text-[#1C1B19] outline-none">
              <option value="all">All</option>
              <option value="diamond">Diamond</option>
              <option value="pearl">Pearl</option>
              <option value="no-gemstone">No gemstone</option>
            </select>
          </label>
          <label>
            Availability{" "}
            <select value={availability} onChange={(e) => setAvailability(e.target.value)} className="bg-transparent text-[#1C1B19] outline-none">
              <option value="all">All</option>
              <option value="in-stock">In stock</option>
            </select>
          </label>
          <label className="ml-auto">
            Sort: {" "}
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-transparent text-[#1C1B19] outline-none">
              <option value="relevance">Relevance</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </label>
        </div>
      </div>

      {results.length > 0 ? (
        <div className="mt-7 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((product) => (
            <Link key={product.id} href={product.href} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE4DC]">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-3.5 flex items-start justify-between gap-4 text-[12px]">
                <div>
                  <h2 className="font-medium group-hover:text-[#5C5852]">{product.name}</h2>
                  <p className="mt-1 text-[11px] text-[#7D7870]">{product.material}</p>
                </div>
                <span>£{product.price}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-7 border border-[#E5DFD6] py-16 text-center">
          <p className="text-[14px] text-[#5C5852]">No pieces match your search.</p>
          <button type="button" onClick={clearSearch} className="mt-3 text-[12px] underline underline-offset-4">
            Browse all jewellery
          </button>
        </div>
      )}
    </section>
  );
}
