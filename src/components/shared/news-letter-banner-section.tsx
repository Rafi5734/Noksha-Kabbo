// components/NewsletterBannerSection.tsx
import Link from "next/link";

interface NewsletterBannerSectionProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function NewsletterBannerSection({
  eyebrow = "KEEP SOMETHING BEAUTIFUL CLOSE",
  heading = "Letters, not noise.",
  description = "Discover new collections, styling stories and small rituals in your inbox.",
  ctaLabel = "Join the Aurel list",
  ctaHref = "#footer-newsletter",
}: NewsletterBannerSectionProps) {
  return (
    <section
      aria-labelledby="newsletter-banner-heading"
      className="w-full bg-[#EAEBE3] py-16 sm:py-20 lg:py-24"
    >
      <div className="container mx-auto space-y-8 sm:space-y-12">
        <div className="max-w-[680px]">
          {/* Eyebrow */}
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7062]">
            {eyebrow}
          </p>

          {/* Editorial Serif Heading */}
          <h2
            id="newsletter-banner-heading"
            className="mt-4 font-serif text-4xl font-normal tracking-[-0.015em] text-[#1C1B19] sm:text-5xl lg:text-[48px] lg:leading-[1.12]"
          >
            {heading}
          </h2>

          {/* Description */}
          <p className="mt-4 text-[14px] leading-[1.6] text-[#55574E] sm:text-[15px]">
            {description}
          </p>

          {/* Downward Anchor CTA */}
          <div className="mt-5 sm:mt-6">
            <Link
              href={ctaHref}
              className="group inline-flex items-center gap-1.5 text-[12px] font-medium tracking-[0.01em] text-[#1C1B19] transition-colors duration-200 hover:text-[#55574E] focus:outline-none focus-visible:underline"
            >
              <span>{ctaLabel}</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 ease-out group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
