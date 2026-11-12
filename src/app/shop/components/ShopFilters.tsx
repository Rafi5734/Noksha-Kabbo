// app/shop/components/ShopFilters.tsx
"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FILTER_OPTIONS } from "../data/mockProducts";

export default function ShopFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mobileOpen, setMobileOpen] = useState(false);

  const selectedMaterials = searchParams.getAll("material");
  const selectedGemstones = searchParams.getAll("gemstone");
  const inStockOnly = searchParams.get("inStock") === "true";
  const maxPrice =
    Number(searchParams.get("maxPrice")) || FILTER_OPTIONS.maxPrice;

  const updateParams = (mutate: (params: URLSearchParams) => void) => {
    const params = new URLSearchParams(searchParams.toString());
    mutate(params);
    const query = params.toString();
    router.push(query ? `/shop?${query}` : "/shop", { scroll: false });
  };

  const toggleMultiValue = (key: "material" | "gemstone", slug: string) => {
    updateParams((params) => {
      const current = params.getAll(key);
      params.delete(key);
      const next = current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug];
      next.forEach((item) => params.append(key, item));
    });
  };

  const toggleInStock = () => {
    updateParams((params) => {
      if (inStockOnly) {
        params.delete("inStock");
      } else {
        params.set("inStock", "true");
      }
    });
  };

  const handlePriceChange = (value: number) => {
    updateParams((params) => {
      if (value >= FILTER_OPTIONS.maxPrice) {
        params.delete("maxPrice");
      } else {
        params.set("maxPrice", String(value));
      }
    });
  };

  const clearAll = () => {
    const category = searchParams.get("category");
    router.push(category ? `/shop?category=${category}` : "/shop", {
      scroll: false,
    });
  };

  const activeChips: { label: string; onRemove: () => void }[] = [
    ...selectedMaterials.map((slug) => ({
      label:
        FILTER_OPTIONS.materials.find((m) => m.slug === slug)?.label || slug,
      onRemove: () => toggleMultiValue("material", slug),
    })),
    ...selectedGemstones.map((slug) => ({
      label:
        FILTER_OPTIONS.gemstones.find((g) => g.slug === slug)?.label || slug,
      onRemove: () => toggleMultiValue("gemstone", slug),
    })),
    ...(maxPrice < FILTER_OPTIONS.maxPrice
      ? [
          {
            label: `Up to £${maxPrice}`,
            onRemove: () => handlePriceChange(FILTER_OPTIONS.maxPrice),
          },
        ]
      : []),
    ...(inStockOnly ? [{ label: "In stock", onRemove: toggleInStock }] : []),
  ];

  const filterContent = (
    <div className="text-[12px]">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-medium text-[#1C1B19]">
          Filter by
        </span>
      </div>

      {/* Active Filter Chips & Clear All */}
      {activeChips.length > 0 && (
        <div className="mt-3 border-b border-[#E5DFD6] pb-4">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[11px] text-[#5C5852]">
            {activeChips.map((chip) => (
              <button
                key={chip.label}
                type="button"
                onClick={chip.onRemove}
                className="inline-flex cursor-pointer items-center gap-1 transition-colors hover:text-[#1C1B19]"
              >
                <span>{chip.label}</span>
                <span aria-hidden="true" className="text-[#8C867E]">
                  &times;
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={clearAll}
            className="mt-2.5 block cursor-pointer text-[11px] text-[#7D7870] transition-colors hover:text-[#1C1B19]"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Material Group */}
      <div className="border-b border-[#E5DFD6] py-5">
        <h3 className="text-[12px] font-medium text-[#1C1B19]">Material</h3>
        <ul className="mt-3.5 space-y-3">
          {FILTER_OPTIONS.materials.map((item) => {
            const checked = selectedMaterials.includes(item.slug);
            return (
              <li key={item.slug}>
                <label className="flex cursor-pointer items-center gap-2.5 text-[#5C5852] transition-colors hover:text-[#1C1B19]">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleMultiValue("material", item.slug)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={`flex h-3.5 w-3.5 items-center justify-center rounded-[2px] border transition-colors ${
                      checked
                        ? "border-[#3B3936] bg-[#3B3936] text-white"
                        : "border-[#C5BEB3] bg-white"
                    }`}
                  >
                    {checked && (
                      <svg
                        viewBox="0 0 12 12"
                        className="h-2.5 w-2.5 fill-none stroke-current stroke-[2]"
                      >
                        <path d="M2.5 6.2L5 8.7L9.5 3.5" />
                      </svg>
                    )}
                  </span>
                  <span>{item.label}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Price Range Group */}
      <div className="border-b border-[#E5DFD6] py-5">
        <h3 className="text-[12px] font-medium text-[#1C1B19]">Price</h3>
        <div className="mt-3.5 flex items-center justify-between text-[11px] text-[#7D7870]">
          <span>£{FILTER_OPTIONS.minPrice}</span>
          <span>£{maxPrice}</span>
        </div>
        <input
          type="range"
          min={FILTER_OPTIONS.minPrice}
          max={FILTER_OPTIONS.maxPrice}
          step={5}
          value={maxPrice}
          onChange={(e) => handlePriceChange(Number(e.target.value))}
          aria-label="Maximum price"
          className="mt-2.5 h-[2px] w-full cursor-pointer appearance-none bg-[#D6CFC4] accent-[#1C1B19]"
        />
      </div>

      {/* Gemstone Group */}
      <div className="border-b border-[#E5DFD6] py-5">
        <h3 className="text-[12px] font-medium text-[#1C1B19]">Gemstone</h3>
        <ul className="mt-3.5 space-y-3">
          {FILTER_OPTIONS.gemstones.map((item) => {
            const checked = selectedGemstones.includes(item.slug);
            return (
              <li key={item.slug}>
                <label className="flex cursor-pointer items-center gap-2.5 text-[#5C5852] transition-colors hover:text-[#1C1B19]">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleMultiValue("gemstone", item.slug)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={`flex h-3.5 w-3.5 items-center justify-center rounded-[2px] border transition-colors ${
                      checked
                        ? "border-[#3B3936] bg-[#3B3936] text-white"
                        : "border-[#C5BEB3] bg-white"
                    }`}
                  >
                    {checked && (
                      <svg
                        viewBox="0 0 12 12"
                        className="h-2.5 w-2.5 fill-none stroke-current stroke-[2]"
                      >
                        <path d="M2.5 6.2L5 8.7L9.5 3.5" />
                      </svg>
                    )}
                  </span>
                  <span>{item.label}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      {/* In Stock Only Toggle */}
      <div className="pt-5">
        <label className="flex cursor-pointer items-center gap-2.5 text-[#5C5852] transition-colors hover:text-[#1C1B19]">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={toggleInStock}
            className="sr-only"
          />
          <span
            aria-hidden="true"
            className={`flex h-3.5 w-3.5 items-center justify-center rounded-[2px] border transition-colors ${
              inStockOnly
                ? "border-[#3B3936] bg-[#3B3936] text-white"
                : "border-[#C5BEB3] bg-white"
            }`}
          >
            {inStockOnly && (
              <svg
                viewBox="0 0 12 12"
                className="h-2.5 w-2.5 fill-none stroke-current stroke-[2]"
              >
                <path d="M2.5 6.2L5 8.7L9.5 3.5" />
              </svg>
            )}
          </span>
          <span>In stock only</span>
        </label>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Filter Trigger */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex w-full items-center justify-between border border-[#DDD7CE] bg-white px-4 py-2.5 text-[12px] font-medium text-[#1C1B19]"
        >
          <span>
            Filter by {activeChips.length > 0 ? `(${activeChips.length})` : ""}
          </span>
          <span>{mobileOpen ? "−" : "+"}</span>
        </button>

        {mobileOpen && (
          <div className="mt-3 border border-[#E5DFD6] bg-[#FAF8F5] p-5">
            {filterContent}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block lg:w-[210px] lg:shrink-0">
        <div className="sticky top-8">{filterContent}</div>
      </aside>
    </>
  );
}
