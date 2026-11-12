// components/BrandStorySection.tsx
import Image from "next/image";
import Link from "next/link";

interface BrandStorySectionProps {
  eyebrow?: string;
  headingLine1?: string;
  headingLine2?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  materialsSummary?: string;
  craftNote?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function BrandStorySection({
  eyebrow = "LESS, BUT MORE MEANINGFUL",
  headingLine1 = "Designed with intention.",
  headingLine2 = "Worn with feeling.",
  description = "Our imagined atelier begins with a sketch and a question: will you still love this tomorrow? We favour considered proportions, tactile finishes and honest material descriptions.",
  ctaLabel = "Meet Aurel",
  ctaHref = "/about",
  materialsSummary = "Solid gold · Gold vermeil · Sterling silver",
  craftNote = "Clearly described, piece by piece.",
  imageSrc = "https://images.unsplash.com/photo-1697713465161-d872b22723a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  imageAlt = "Jeweler polishing a gold ring by hand at a traditional wooden workbench",
}: BrandStorySectionProps) {
  return (
    <section
      aria-labelledby="brand-story-heading"
      className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-28"
    >
      <div className="container mx-auto space-y-8 sm:space-y-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* Left Column: Editorial Narrative & Material Footnote */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <div className="max-w-[500px]">
              {/* Eyebrow Label */}
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#7D7870]">
                {eyebrow}
              </p>

              {/* Two-Line Editorial Serif Heading */}
              <h2
                id="brand-story-heading"
                className="mt-4 font-serif text-3xl font-normal tracking-[-0.015em] text-[#1C1B19] sm:text-4xl lg:text-[44px] lg:leading-[1.15]"
              >
                <span className="block">{headingLine1}</span>
                <span className="block">{headingLine2}</span>
              </h2>

              {/* Body Copy */}
              <p className="mt-5 text-[14px] leading-[1.7] text-[#5C5852] sm:text-[15px]">
                {description}
              </p>

              {/* Inline Text CTA with Arrow */}
              <div className="mt-6">
                <Link
                  href={ctaHref}
                  className="group inline-flex items-center gap-1.5 text-[12px] font-medium tracking-[0.01em] text-[#1C1B19] transition-colors duration-200 hover:text-[#6E6A63]"
                >
                  <span>{ctaLabel}</span>
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>

              {/* Hairline Divider & Material Footnote */}
              <div className="mt-10 border-t border-[#E5DFD6] pt-6 sm:mt-12">
                <p className="text-[12px] font-medium text-[#3D3A36]">
                  {materialsSummary}
                </p>
                <p className="mt-0.5 text-[12px] text-[#7D7870]">{craftNote}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Inset Framed Workshop Photograph */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE4DC]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
