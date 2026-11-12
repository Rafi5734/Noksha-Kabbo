// components/Footer.tsx
"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

const HELP_LINKS_ROW_1 = [
  { label: "Contact us", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
  { label: "Delivery & returns", href: "/delivery-returns" },
];

const HELP_LINKS_ROW_2 = [
  { label: "Size & care guide", href: "/size-care-guide" },
  { label: "Track your order", href: "/track-order" },
];

const HELP_LINKS_ROW_3 = [
  { label: "My account", href: "/account" },
  { label: "Wishlist", href: "/wishlist" },
];

const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

function InlineLinkRow({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[13px] text-[#2E2C29]">
      {links.map((item, index) => (
        <span key={item.href} className="inline-flex items-center gap-1.5">
          <Link
            href={item.href}
            className="transition-colors duration-150 hover:text-[#7D7870]"
          >
            {item.label}
          </Link>
          {index < links.length - 1 && (
            <span aria-hidden="true" className="text-[#9A948B]">
              ·
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "subscribed">(
    "idle",
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("submitting");
    // Replace with your newsletter API endpoint / Server Action
    await new Promise((resolve) => setTimeout(resolve, 400));
    setStatus("subscribed");
    setEmail("");
  };

  return (
    <footer className="w-full bg-[#F3EEE7] text-[#1C1B19]">
      <div className="container mx-auto space-y-8 sm:space-y-12 m-5 p-5">
        {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand Wordmark & Tagline */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="font-serif text-[28px] font-normal uppercase tracking-[0.06em] text-[#1C1B19]"
            >
              AUREL
            </Link>
            <p className="mt-4 text-[14px] font-normal text-[#1C1B19]">
              Small rituals. Lasting pieces.
            </p>
            <p className="mt-3 text-[12px] text-[#7D7870]">
              A conceptual jewellery house, thoughtfully imagined.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex text-[12px] font-medium uppercase tracking-[0.14em] text-[#1C1B19] transition-colors hover:text-[#7D7870]"
            >
              Shop all{" "}
              <span aria-hidden="true" className="ml-1">
                →
              </span>
            </Link>
          </div>

          {/* Column 2: Customer Care Navigation */}
          <div className="lg:col-span-4">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#7D7870]">
              HERE TO HELP
            </h3>
            <nav aria-label="Footer customer care" className="mt-4 space-y-2.5">
              <InlineLinkRow links={HELP_LINKS_ROW_1} />
              <InlineLinkRow links={HELP_LINKS_ROW_2} />
              <InlineLinkRow links={HELP_LINKS_ROW_3} />
            </nav>
          </div>

          {/* Column 3: Newsletter Form */}
          <div id="footer-newsletter" className="scroll-mt-12 lg:col-span-4">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#7D7870]">
              LETTERS FROM AUREL
            </h3>
            <p className="mt-4 text-[13px] text-[#2E2C29]">
              New pieces, quiet inspiration. A little less often.
            </p>

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="rounded-[4px] border border-[#E2DBD0] bg-white px-4 py-2.5 transition-colors focus-within:border-[#1C1B19]">
                <label
                  htmlFor="footer-email-input"
                  className="block text-[11px] text-[#7D7870]"
                >
                  Email address
                </label>
                <input
                  id="footer-email-input"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "subscribed") setStatus("idle");
                  }}
                  placeholder="Your email address"
                  className="mt-0.5 w-full bg-transparent text-[14px] text-[#1C1B19] placeholder:text-[#4A4742] focus:outline-none"
                />
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex cursor-pointer items-center gap-1 font-medium text-[#1C1B19] transition-colors hover:text-[#6E6A63] disabled:opacity-50"
                >
                  <span>
                    {status === "submitting"
                      ? "Subscribing..."
                      : status === "subscribed"
                        ? "Subscribed"
                        : "Subscribe"}
                  </span>
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </button>

                <span aria-hidden="true" className="text-[#9A948B]">
                  ·
                </span>

                <Link
                  href="/privacy"
                  className="text-[#2E2C29] transition-colors hover:text-[#7D7870]"
                >
                  Privacy policy
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Hairline Bar: Copyright, Region, Legal & Payment Methods */}
        <div className="mt-14 border-t border-[#E4DDD2] pt-6 sm:mt-16">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-[#7D7870]">
            <span>© 2026 Aurel concept store.</span>

            <span>United Kingdom · GBP £</span>

            <nav aria-label="Legal links" className="flex items-center gap-1.5">
              {LEGAL_LINKS.map((link, index) => (
                <span
                  key={link.href}
                  className="inline-flex items-center gap-1.5"
                >
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#1C1B19]"
                  >
                    {link.label}
                  </Link>
                  {index < LEGAL_LINKS.length - 1 && (
                    <span aria-hidden="true">·</span>
                  )}
                </span>
              ))}
            </nav>

            <span>Visa · Mastercard · Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
