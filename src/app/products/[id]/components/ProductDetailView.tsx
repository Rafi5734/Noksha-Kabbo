// app/products/[id]/components/ProductDetailView.tsx
"use client";

import { useState, use } from "react";
import Link from "next/link";
import { PRODUCTS_MAP } from "../data/productData";
import ProductGallery from "../components/ProductGallery";

interface ProductDetailViewProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailView({ params }: ProductDetailViewProps) {
  const { id } = use(params);
  const product = PRODUCTS_MAP[id] || PRODUCTS_MAP["sol-signet-ring"]; // Fallback for mock demo

  const [selectedMetal, setSelectedMetal] = useState(product.metals[0].name);
  const [selectedSize, setSelectedSize] = useState("M");
  const [isSaved, setIsSaved] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToBag = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2500);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] pb-24 text-[#1C1B19]">
      <div className="mx-auto max-w-[1380px] px-5 pt-8 sm:px-8 lg:px-12">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 text-[11px] text-[#7D7870]"
        >
          <Link href="/" className="hover:text-[#1C1B19]">
            Home
          </Link>
          <span className="mx-1.5" aria-hidden="true">
            /
          </span>
          <Link href="/shop" className="hover:text-[#1C1B19]">
            {product.category}
          </Link>
          <span className="mx-1.5" aria-hidden="true">
            /
          </span>
          <span className="text-[#5C5852]">{product.name}</span>
        </nav>

        {/* Main 2-Column Product Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Image Gallery (7 Cols) */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} name={product.name} />
          </div>

          {/* Right Column: Product Metadata & Actions (5 Cols) */}
          <div className="flex flex-col lg:col-span-5">
            {/* Collection Eyebrow */}
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#7D7870]">
              {product.collection}
            </p>

            {/* Title & Price */}
            <h1 className="mt-3 font-serif text-3xl font-normal tracking-[-0.015em] text-[#1C1B19] sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 text-[18px] font-medium text-[#1C1B19]">
              {product.currency}
              {product.price.toFixed(2)}
            </p>

            <p className="mt-1 text-[11px] text-[#7D7870]">
              VAT included · Complimentary UK delivery
            </p>

            {/* Description */}
            <p className="mt-5 text-[14px] leading-[1.6] text-[#5C5852]">
              {product.description}
            </p>

            {/* Metal Selector */}
            <div className="mt-8 border-t border-[#EAE4DC] pt-6">
              <div className="flex items-center justify-between text-[12px]">
                <span className="font-medium text-[#1C1B19]">Metal</span>
                <span className="text-[#7D7870]">{selectedMetal}</span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                {product.metals.map((metal) => {
                  const isSelected = selectedMetal === metal.name;
                  return (
                    <button
                      key={metal.name}
                      type="button"
                      onClick={() =>
                        metal.available && setSelectedMetal(metal.name)
                      }
                      disabled={!metal.available}
                      className={`py-3 text-[12px] font-medium border transition-all ${
                        isSelected
                          ? "border-[#1C1B19] bg-[#4A543E] text-white"
                          : metal.available
                            ? "border-[#D1C9BC] bg-white text-[#1C1B19] hover:border-[#1C1B19]"
                            : "border-[#EAE4DC] bg-[#F5F2EC] text-[#A8A29A] cursor-not-allowed"
                      }`}
                    >
                      {metal.name}
                    </button>
                  );
                })}
              </div>

              {!product.metals.find((m) => m.name === selectedMetal)
                ?.available && (
                <p className="mt-2 text-[11px] text-[#7D7870]">
                  {selectedMetal} is currently unavailable.
                </p>
              )}
            </div>

            {/* Ring Size Selector */}
            <div className="mt-6 border-t border-[#EAE4DC] pt-6">
              <div className="flex items-center justify-between text-[12px]">
                <span className="font-medium text-[#1C1B19]">
                  Ring size: {selectedSize}
                </span>
                <Link
                  href="/size-guide"
                  className="text-[#7D7870] underline hover:text-[#1C1B19]"
                >
                  Size guide ↗
                </Link>
              </div>

              <div className="mt-3 grid grid-cols-5 gap-2">
                {product.sizes.map((s) => {
                  const isSelected = selectedSize === s.size;
                  return (
                    <button
                      key={s.size}
                      type="button"
                      onClick={() => setSelectedSize(s.size)}
                      className={`py-2.5 text-[12px] font-medium border transition-all ${
                        isSelected
                          ? "border-[#1C1B19] bg-[#3B3936] text-white"
                          : "border-[#D1C9BC] bg-white text-[#1C1B19] hover:border-[#1C1B19]"
                      }`}
                    >
                      {s.size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Stock Status Box */}
            <div className="mt-6 flex items-start gap-2.5 bg-[#EAEBE3] p-3.5 text-[12px] text-[#4A543E]">
              <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-[#526043]" />
              <span>
                <strong>In stock</strong> · {product.stockMessage}
              </span>
            </div>

            {/* Actions: Add to Bag & Save to Wishlist */}
            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={handleAddToBag}
                className="w-full bg-[#4A543E] py-4 text-[12px] font-medium tracking-[0.02em] text-[#FAF8F5] transition-colors hover:bg-[#3B4431]"
              >
                {isAdded
                  ? "Added to bag ✓"
                  : `Add to bag · £${product.price} (${selectedMetal} · Size ${selectedSize})`}
              </button>

              <button
                type="button"
                onClick={() => setIsSaved(!isSaved)}
                className="w-full border border-[#D1C9BC] bg-transparent py-3.5 text-[12px] font-medium tracking-[0.01em] text-[#1C1B19] transition-colors hover:border-[#1C1B19]"
              >
                {isSaved ? "Saved to wishlist ♥" : "♡ Save to wishlist"}
              </button>
            </div>

            {/* Gift Box Note */}
            <p className="mt-4 text-center text-[11px] text-[#7D7870]">
              Gift box included · Add a personal note in your bag
            </p>

            {/* Details & Materials Section */}
            <div className="mt-8 border-t border-[#EAE4DC] pt-6">
              <h3 className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#7D7870]">
                Details & materials
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-[#5C5852]">
                {product.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
