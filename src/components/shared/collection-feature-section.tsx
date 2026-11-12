// components/CollectionFeatureSection.tsx
import Image from "next/image";
import Link from "next/link";

interface CollectionFeatureSectionProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function CollectionFeatureSection({
  eyebrow = "THE SOL COLLECTION",
  heading = "Follow the light.",
  description = "Soft curves. Golden hours. A collection that finds beauty in the simplest things, from a familiar hoop to a new daily signature.",
  ctaLabel = "Explore the Sol edit",
  ctaHref = "/collections/sol",
  imageSrc = "https://images.unsplash.com/photo-1673131158657-4404fd1f041a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  imageAlt = "Woman wearing layered gold necklaces including a medallion and freshwater pearl pendant in warm sunlight",
}: CollectionFeatureSectionProps) {
  return (
    <section
      aria-labelledby="collection-feature-heading"
      className="w-full bg-[#FAF8F5]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Full-bleed Editorial Image (45% width on desktop) */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EAE4DC] sm:aspect-[16/11] lg:col-span-5 lg:aspect-auto lg:min-h-[580px] xl:min-h-[640px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center"
            priority={false}
          />
        </div>

        {/* Right Column: Editorial Copy & Full-Width Outlined CTA (55% width on desktop) */}
        <div className="flex flex-col justify-center px-6 py-14 sm:px-12 sm:py-20 lg:col-span-7 lg:px-16 xl:px-24">
          <div className="w-full max-w-[540px]">
            {/* Eyebrow Label */}
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#7D7870]">
              {eyebrow}
            </p>

            {/* Editorial Serif Heading */}
            <h2
              id="collection-feature-heading"
              className="mt-4 font-serif text-4xl font-normal tracking-[-0.015em] text-[#1C1B19] sm:text-5xl lg:text-[48px] lg:leading-[1.12]"
            >
              {heading}
            </h2>

            {/* Body Description */}
            <p className="mt-4 max-w-[460px] text-[14px] leading-[1.65] text-[#5C5852] sm:text-[15px]">
              {description}
            </p>

            {/* Wide Outlined CTA Button */}
            <div className="mt-8 sm:mt-9">
              <Link
                href={ctaHref}
                className="flex w-full items-center justify-center border border-[#DDD7CE] bg-transparent px-6 py-3.5 text-[12px] font-medium tracking-[0.02em] text-[#1C1B19] transition-colors duration-200 hover:border-[#3f4732] hover:bg-[#3f4732] hover:text-[#ffffff] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#3f4732]"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
