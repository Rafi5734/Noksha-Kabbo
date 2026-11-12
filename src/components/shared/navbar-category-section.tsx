"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";

const categories = [
  { name: "New arrivals", href: "/new-arrivals" },
  { name: "Shop all", href: "/shop" },
  { name: "Rings", href: "/category/rings" },
  { name: "Earrings", href: "/category/earrings" },
  { name: "Necklaces", href: "/category/necklaces" },
  { name: "Gifts", href: "/gifts" },
  { name: "Our story", href: "/our-story" },
  { name: "Journal", href: "/journal" },
];

export default function NavbarCategorySection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#FAF7F2] text-gray-800 font-sans border-b border-gray-200/60 sticky top-0 z-50">
      {/* 1. Top Announcement Bar */}
      <div className="border-b border-gray-200/60 text-center py-2 text-[11px] uppercase tracking-[0.18em] text-gray-600 font-medium">
        COMPLIMENTARY UK DELIVERY ON ORDERS £150+
      </div>

      {/* 2. Main Navbar Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-black p-1 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Left Tagline (Desktop) */}
          <div className="hidden lg:flex items-center flex-1">
            <span className="text-[11px] uppercase tracking-[0.18em] text-gray-600 font-medium">
              FINE JEWELLERY, EVERY DAY
            </span>
          </div>

          {/* Center Brand Logo */}
          <div className="flex-1 lg:flex-none text-center">
            <Link
              href="/"
              className="font-serif text-3xl sm:text-4xl tracking-[0.25em] text-gray-900 uppercase font-normal inline-block hover:opacity-95 transition-opacity"
            >
              AUREL
            </Link>
          </div>

          {/* Right Action Items */}
          <div className="flex items-center justify-end flex-1 space-x-5 text-xs sm:text-sm tracking-wide">
            {/* Search */}
            <Link
              href="/search"
              aria-label="Search jewellery"
              className="flex items-center gap-1.5 hover:text-gray-600 transition-colors"
            >
              <Search
                size={15}
                strokeWidth={1.75}
                className="hidden sm:inline"
              />
              <span>Search</span>
            </Link>

            {/* Account */}
            <Link
              href="/account"
              className="hidden sm:flex items-center gap-1.5 hover:text-gray-600 transition-colors"
            >
              <User size={15} strokeWidth={1.75} />
              <span>Account</span>
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="flex items-center gap-1.5 hover:text-gray-600 transition-colors"
            >
              <Heart size={15} strokeWidth={1.75} />
              <span className="font-normal">4</span>
            </Link>

            {/* Bag */}
            <Link
              href="/bag"
              className="flex items-center gap-1.5 hover:text-gray-600 transition-colors"
            >
              <ShoppingBag
                size={15}
                strokeWidth={1.75}
                className="hidden sm:inline"
              />
              <span>Bag</span>
              <span className="font-normal">2</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Categories Navigation Bar (Desktop) */}
      <nav className="hidden lg:block border-t border-gray-200/40 py-3.5">
        <ul className="flex items-center justify-center space-x-8 text-sm font-light tracking-wide text-gray-700">
          {categories.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-black transition-colors duration-200 py-1"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* 4. Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200/70 bg-[#FAF7F2] px-6 py-6 space-y-4 shadow-lg transition-all">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            FINE JEWELLERY, EVERY DAY
          </div>
          <ul className="space-y-3.5 text-base font-light text-gray-800">
            {categories.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-black transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-gray-200/60 flex flex-col space-y-3 text-sm text-gray-700">
            <Link
              href="/account"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <User size={16} />
              <span>Account</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
