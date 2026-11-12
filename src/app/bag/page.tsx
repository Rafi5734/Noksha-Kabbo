// app/bag/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { INITIAL_BAG_ITEMS, BagItem } from "./data/bagData";
import NavbarCategorySection from "@/components/shared/navbar-category-section";
import Footer from "@/components/footer";

export default function BagPage() {
  const [items, setItems] = useState<BagItem[]>(INITIAL_BAG_ITEMS);
  const [giftNoteEnabled, setGiftNoteEnabled] = useState(true);
  const [giftMessage, setGiftMessage] = useState(
    "A little gold for your everyday. With love, Alex.",
  );
  const [promoCode, setPromoCode] = useState("");
  const [postcode, setPostcode] = useState("N1 8QH");

  // Quantity updates
  const handleUpdateQuantity = (id: string, delta: number) => {
    setItems(
      (prev) =>
        prev
          .map((item) => {
            if (item.id === id) {
              const newQty = item.quantity + delta;
              return newQty > 0 ? { ...item, quantity: newQty } : null;
            }
            return item;
          })
          .filter(Boolean) as BagItem[],
    );
  };

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculations
  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <>
      <NavbarCategorySection />

      <main className="min-h-screen bg-[#FAF8F5] pb-24 text-[#1C1B19]">
        <div className="mx-auto max-w-[1380px] px-5 pt-8 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-[11px] text-[#7D7870]">
            <Link href="/" className="hover:text-[#1C1B19]">
              Home
            </Link>
            <span className="mx-1.5" aria-hidden="true">
              /
            </span>
            <span className="text-[#5C5852]">Bag</span>
          </nav>

          {/* Header Title & Subtitle */}
          <header className="mt-4">
            <h1 className="font-serif text-4xl font-normal tracking-[-0.015em] text-[#1C1B19] sm:text-5xl lg:text-[46px]">
              Your bag, beautifully chosen.
            </h1>
            <p className="mt-2 text-[14px] text-[#5C5852]">
              {totalItemsCount} {totalItemsCount === 1 ? "piece" : "pieces"}{" "}
              &middot; Complimentary gift box included
            </p>
          </header>

          {/* Delivery Milestone Banner */}
          <div className="mt-6 bg-[#EAEBE3] px-5 py-3.5 text-[12px] text-[#4A543E]">
            You&apos;ve unlocked complimentary standard UK delivery.
          </div>

          {/* Main 2-Column Grid Layout */}
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Items List & Gift/Promo Options (7 Cols) */}
            <div className="lg:col-span-7 space-y-10">
              {/* Bag Items List */}
              {items.length > 0 ? (
                <div className="divide-y divide-[#E5DFD6]">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-6"
                    >
                      {/* Product Thumbnail */}
                      <Link
                        href={item.href}
                        className="relative aspect-square w-full sm:w-[120px] sm:shrink-0 overflow-hidden bg-[#EAE4DC]"
                      >
                        <Image
                          src={item.imageSrc}
                          alt={item.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 120px"
                          className="object-cover object-center"
                        />
                      </Link>

                      {/* Product Metadata & Controls */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <div>
                              <h2 className="text-[13px] font-medium text-[#1C1B19]">
                                {item.name}
                              </h2>
                              <p className="mt-0.5 text-[11px] text-[#7D7870]">
                                {item.variant}
                              </p>
                            </div>
                            <span className="text-[13px] font-medium text-[#1C1B19]">
                              £{(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>

                          {/* Quantity Stepper */}
                          <div className="mt-4 inline-flex items-center border border-[#D1C9BC] bg-white">
                            <button
                              type="button"
                              onClick={() => handleUpdateQuantity(item.id, -1)}
                              className="px-3 py-1.5 text-[12px] text-[#7D7870] hover:text-[#1C1B19] transition-colors"
                              aria-label="Decrease quantity"
                            >
                              &minus;
                            </button>
                            <span className="w-8 text-center text-[12px] font-medium text-[#1C1B19]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleUpdateQuantity(item.id, 1)}
                              className="px-3 py-1.5 text-[12px] text-[#7D7870] hover:text-[#1C1B19] transition-colors"
                              aria-label="Increase quantity"
                            >
                              &#43;
                            </button>
                          </div>
                        </div>

                        {/* Action Links: Remove & Save to Wishlist */}
                        <div className="mt-4 flex items-center gap-4 text-[11px] text-[#7D7870]">
                          <button
                            type="button"
                            onClick={() => handleRemove(item.id)}
                            className="hover:text-[#1C1B19] underline transition-colors"
                          >
                            Remove
                          </button>
                          <span>&middot;</span>
                          <button
                            type="button"
                            onClick={() =>
                              alert(`Saved ${item.name} to wishlist!`)
                            }
                            className="hover:text-[#1C1B19] underline transition-colors"
                          >
                            Save to wishlist
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="border border-[#E5DFD6] py-16 text-center">
                  <p className="text-[14px] text-[#5C5852]">
                    Your shopping bag is empty.
                  </p>
                </div>
              )}

              {/* Gift Note Section Box */}
              <div className="border border-[#E5DFD6] bg-white p-6 sm:p-8">
                <h3 className="font-serif text-xl font-normal text-[#1C1B19]">
                  A gift, with a little more meaning.
                </h3>

                <label className="mt-4 flex cursor-pointer items-center gap-2.5 text-[12px] text-[#5C5852]">
                  <input
                    type="checkbox"
                    checked={giftNoteEnabled}
                    onChange={(e) => setGiftNoteEnabled(e.target.checked)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={`flex h-4 w-4 items-center justify-center rounded-[2px] border transition-colors ${
                      giftNoteEnabled
                        ? "border-[#3B3936] bg-[#3B3936] text-white"
                        : "border-[#C5BEB3] bg-white"
                    }`}
                  >
                    {giftNoteEnabled && (
                      <svg
                        viewBox="0 0 12 12"
                        className="h-3 w-3 fill-none stroke-current stroke-[2]"
                      >
                        <path d="M2.5 6.2L5 8.7L9.5 3.5" />
                      </svg>
                    )}
                  </span>
                  <span>Add a complimentary gift note</span>
                </label>

                {giftNoteEnabled && (
                  <div className="mt-4">
                    <div className="rounded-[4px] border border-[#E2DBD0] bg-[#FAF8F5] p-3">
                      <span className="block text-[10px] uppercase tracking-[0.1em] text-[#7D7870]">
                        Gift message (optional, up to 180 characters)
                      </span>
                      <textarea
                        rows={3}
                        maxLength={180}
                        value={giftMessage}
                        onChange={(e) => setGiftMessage(e.target.value)}
                        className="mt-1 w-full bg-transparent text-[13px] text-[#1C1B19] focus:outline-none resize-none"
                      />
                    </div>
                    <p className="mt-2 text-[11px] text-[#7D7870]">
                      No prices are printed on the gift receipt.
                    </p>
                  </div>
                )}
              </div>

              {/* Promotional Code & Delivery Estimator Section */}
              <div className="space-y-4">
                {/* Promo Code Input */}
                <div className="rounded-[4px] border border-[#E2DBD0] bg-white px-4 py-2.5">
                  <label
                    htmlFor="promo-code"
                    className="block text-[11px] text-[#7D7870]"
                  >
                    Promotional code (optional)
                  </label>
                  <input
                    id="promo-code"
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter a code"
                    className="mt-0.5 w-full bg-transparent text-[13px] text-[#1C1B19] placeholder:text-[#8C867E] focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => alert(`Promo code "${promoCode}" applied!`)}
                  className="w-full border border-[#DDD7CE] bg-white py-3 text-[12px] font-medium tracking-[0.01em] text-[#1C1B19] transition-colors hover:border-[#1C1B19]"
                >
                  Apply code
                </button>

                {/* Delivery Postcode Estimator */}
                <div className="rounded-[4px] border border-[#E2DBD0] bg-white px-4 py-2.5 mt-6">
                  <label
                    htmlFor="postcode"
                    className="block text-[11px] text-[#7D7870]"
                  >
                    Estimate delivery &middot; UK postcode
                  </label>
                  <input
                    id="postcode"
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="mt-0.5 w-full bg-transparent text-[13px] text-[#1C1B19] focus:outline-none uppercase"
                  />
                </div>
                <p className="text-[11px] text-[#7D7870]">
                  Standard: Free &middot; 3&ndash;5 working days. Express:
                  &pound;8 &middot; 1&ndash;2 working days. Select delivery at
                  checkout.
                </p>
              </div>
            </div>

            {/* Right Column: Sticky Order Summary & Checkout Actions (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="sticky top-8 space-y-4">
                {/* Summary Card */}
                <div className="border border-[#E5DFD6] bg-white p-6 sm:p-8">
                  <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#7D7870]">
                    ORDER SUMMARY &middot; {totalItemsCount}{" "}
                    {totalItemsCount === 1 ? "ITEM" : "ITEMS"}
                  </h3>

                  <div className="mt-6 space-y-3 text-[13px] text-[#5C5852]">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-[#1C1B19]">
                        &pound;{subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-[#EAE4DC] pb-4">
                      <span>Standard delivery</span>
                      <span className="text-[#1C1B19]">Free</span>
                    </div>
                  </div>

                  <p className="mt-3 text-[11px] text-[#7D7870]">
                    VAT included &middot; No additional duties in the UK[cite:
                    11]
                  </p>

                  <div className="mt-6 flex justify-between items-baseline border-t border-[#EAE4DC] pt-4">
                    <span className="text-[14px] font-medium text-[#1C1B19]">
                      Total
                    </span>
                    <span className="font-serif text-2xl text-[#1C1B19]">
                      &pound;{subtotal.toFixed(2)}
                    </span>
                  </div>

                  {/* Checkout Button */}
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => alert("Proceeding to secure checkout...")}
                      className="w-full bg-[#4A543E] py-4 text-[12px] font-medium tracking-[0.02em] text-[#FAF8F5] transition-colors hover:bg-[#3B4431]"
                    >
                      Continue to secure checkout
                    </button>
                  </div>

                  <p className="mt-4 text-center text-[11px] text-[#7D7870]">
                    Secure checkout &middot; 30-day returns on unworn pieces
                  </p>
                </div>

                {/* Continue Shopping Button */}
                <div>
                  <Link
                    href="/shop"
                    className="flex w-full items-center justify-center border border-[#DDD7CE] bg-white py-3.5 text-[12px] font-medium tracking-[0.01em] text-[#1C1B19] transition-colors hover:border-[#1C1B19]"
                  >
                    Continue shopping
                  </Link>
                </div>

                {/* Footer Payment & Support Info */}
                <div className="pt-2 text-center text-[11px] text-[#7D7870] space-y-2">
                  <p>Visa &middot; Mastercard &middot; Apple Pay</p>
                  <p>
                    Need a hand?{" "}
                    <Link
                      href="/contact"
                      className="underline hover:text-[#1C1B19]"
                    >
                      Contact our client team &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
