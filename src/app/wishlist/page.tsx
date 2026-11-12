// app/wishlist/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { INITIAL_WISHLIST, WishlistItem } from "./data/wishlistData";
import NavbarCategorySection from "@/components/shared/navbar-category-section";
import Footer from "@/components/footer";

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] =
    useState<WishlistItem[]>(INITIAL_WISHLIST);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleRemove = (id: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddToBag = (id: string) => {
    setAddedIds((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [id]: false }));
    }, 2500);
  };

  return (
    <>
      <NavbarCategorySection />

      <main className="min-h-screen bg-[#FAF8F5] pb-24 text-[#1C1B19]">
        <div className="mx-auto max-w-[1380px] px-5 pt-8 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-[11px] text-[#7D7870]">
            <Link href="/" className="transition-colors hover:text-[#1C1B19]">
              Home
            </Link>
            <span className="mx-1.5" aria-hidden="true">
              /
            </span>
            <span className="text-[#5C5852]">Wishlist</span>
          </nav>

          {/* Header Title & Subtitle */}
          <header className="mt-4">
            <h1 className="font-serif text-4xl font-normal tracking-[-0.015em] text-[#1C1B19] sm:text-5xl lg:text-[46px]">
              Your little collection.
            </h1>
            <p className="mt-2 text-[14px] text-[#5C5852]">
              {wishlistItems.length} saved{" "}
              {wishlistItems.length === 1 ? "piece" : "pieces"}, ready when you
              are.
            </p>
          </header>

          {/* Account Status / Info Banner */}
          <div className="mt-6 flex items-center justify-between bg-[#EAEBE3] px-5 py-3.5 text-[12px] text-[#4A543E]">
            <span>
              Signed in as Alex &middot; Your wishlist is saved across your
              devices.
            </span>
          </div>

          {/* Wishlist Grid or Empty State */}
          {wishlistItems.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {wishlistItems.map((item) => {
                const isJustAdded = addedIds[item.id];
                return (
                  <article
                    key={item.id}
                    className="flex flex-col justify-between group"
                  >
                    <div>
                      {/* Product Image */}
                      <Link
                        href={item.href}
                        className="block relative aspect-square w-full overflow-hidden bg-[#EAE4DC]"
                      >
                        <Image
                          src={item.imageSrc}
                          alt={item.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      </Link>

                      {/* Product Metadata */}
                      <div className="mt-4">
                        <h2 className="text-[13px] font-medium text-[#1C1B19]">
                          {item.name}
                        </h2>
                        <p className="mt-1 text-[11px] text-[#7D7870]">
                          {item.material}
                        </p>
                        <p className="mt-0.5 text-[11px] text-[#7D7870]">
                          {item.currency}
                          {item.price}
                        </p>

                        {/* Selected Option & Change / Remove actions */}
                        <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#5C5852]">
                          <span>
                            {item.selectedOption} &middot;{" "}
                            <button
                              type="button"
                              onClick={() =>
                                alert(`Change options for ${item.name}`)
                              }
                              className="underline hover:text-[#1C1B19]"
                            >
                              Change
                            </button>
                          </span>

                          <button
                            type="button"
                            onClick={() => handleRemove(item.id)}
                            aria-label={`Remove ${item.name} from wishlist`}
                            className="text-[14px] text-[#7D7870] transition-colors hover:text-[#1C1B19]"
                          >
                            ♥
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Add to Bag Button */}
                    <div className="mt-5">
                      <button
                        type="button"
                        onClick={() => handleAddToBag(item.id)}
                        className="w-full bg-[#4A543E] py-3.5 text-[12px] font-medium tracking-[0.02em] text-[#FAF8F5] transition-colors hover:bg-[#3B4431]"
                      >
                        {isJustAdded ? "Added to bag ✓" : "Add to bag"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mt-12 border border-[#E5DFD6] py-16 text-center">
              <p className="text-[14px] text-[#5C5852]">
                Your wishlist is currently empty.
              </p>
            </div>
          )}

          {/* Footer Helper Note */}
          <p className="mt-12 text-[11px] text-[#7D7870]">
            Use the heart to remove a piece. Prices and availability may change
            until you check out.
          </p>

          {/* Continue Discovering CTA */}
          <div className="mt-6">
            <Link
              href="/shop"
              className="flex w-full items-center justify-center border border-[#DDD7CE] bg-transparent py-4 text-[12px] font-medium tracking-[0.01em] text-[#1C1B19] transition-colors hover:border-[#1C1B19] hover:bg-[#1C1B19] hover:text-[#FAF8F5]"
            >
              Continue discovering
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
