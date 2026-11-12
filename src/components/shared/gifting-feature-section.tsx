// components/GiftingFeatureSection.tsx
import Image from "next/image";
import Link from "next/link";

interface GiftingFeatureSectionProps {
  eyebrow?: string;
  headingLine1?: string;
  headingLine2?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function GiftingFeatureSection({
  eyebrow = "A LITTLE SOMETHING, FOREVER",
  headingLine1 = "For them.",
  headingLine2 = "Or just for you.",
  description = "Find a thoughtful gift, add a personal note and let the unwrapping begin. Complimentary gift box with every order.",
  ctaLabel = "Find their piece",
  ctaHref = "/collections/gifts",
  imageSrc = "https://images.unsplash.com/photo-1727340624405-599ac7b8a04a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  imageAlt = "Olive green Aethel jewelry gift box with cream ribbon beside an open box holding gold hoop earrings on linen fabric",
}: GiftingFeatureSectionProps) {
  return (
    <section
      aria-labelledby="gifting-feature-heading"
      className="w-full bg-[#FAF8F5]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Full-bleed Gifting Photography (~44% width on desktop) */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#DDD5C7] sm:aspect-[16/10] lg:col-span-5 lg:aspect-auto lg:min-h-[480px] xl:min-h-[520px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center"
          />
        </div>

        {/* Right Column: Sage-Tinted Editorial Panel with Offset Bottom Margin */}
        <div className="flex flex-col lg:col-span-7 lg:pl-8 lg:pb-12 xl:pl-10 xl:pb-14">
          <div className="flex flex-1 flex-col justify-center bg-[#EAEBE3] px-6 py-14 sm:px-12 sm:py-16 lg:px-16 xl:px-20">
            <div className="w-full max-w-[540px]">
              {/* Eyebrow Label */}
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7062]">
                {eyebrow}
              </p>

              {/* Two-Line Editorial Serif Heading */}
              <h2
                id="gifting-feature-heading"
                className="mt-4 font-serif text-4xl font-normal tracking-[-0.015em] text-[#1C1B19] sm:text-[42px] lg:text-[44px] lg:leading-[1.14]"
              >
                <span className="block">{headingLine1}</span>
                <span className="block">{headingLine2}</span>
              </h2>

              {/* Description */}
              <p className="mt-4 max-w-[490px] text-[14px] leading-[1.65] text-[#55574E] sm:text-[15px]">
                {description}
              </p>

              {/* Solid Olive CTA Button */}
              <div className="mt-8">
                <Link
                  href={ctaHref}
                  className="flex w-full items-center justify-center bg-[#4A543E] px-6 py-3.5 text-[12px] font-medium tracking-[0.02em] text-[#FAF8F5] transition-colors duration-200 hover:bg-[#3B4431] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A543E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EAEBE3]"
                >
                  {ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
