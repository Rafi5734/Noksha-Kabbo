// components/CommunityQuoteSection.tsx
interface CommunityQuoteSectionProps {
  eyebrow?: string;
  quote?: string;
  storyContext?: string;
  disclaimer?: string;
}

export default function CommunityQuoteSection({
  eyebrow = "THE AUREL COMMUNITY · ILLUSTRATIVE STORIES",
  quote = "“The ring I reach for, without thinking.”",
  storyContext = "A small piece, a daily companion. A sample wearer story from Alex, styled with the Sol Signet Ring.",
  disclaimer = "Concept story, not a verified customer testimonial.",
}: CommunityQuoteSectionProps) {
  return (
    <section
      aria-labelledby="community-quote-heading"
      className="w-full bg-[#FAF8F5] py-14 sm:py-20 lg:py-24"
    >
      <div className="container mx-auto space-y-8 sm:space-y-12">
        <figure className="max-w-[820px]">
          {/* Eyebrow Label */}
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#7D7870]">
            {eyebrow}
          </p>

          {/* Editorial Pull-Quote */}
          <blockquote
            id="community-quote-heading"
            className="mt-4 font-serif text-3xl font-normal tracking-[-0.015em] text-[#1C1B19] sm:mt-5 sm:text-4xl lg:text-[44px] lg:leading-[1.15]"
          >
            {quote}
          </blockquote>

          {/* Story Context & Disclaimer */}
          <figcaption className="mt-4 sm:mt-5">
            <p className="text-[14px] leading-[1.6] text-[#6E6A63] sm:text-[15px]">
              {storyContext}
            </p>
            <p className="mt-4 text-[12px] font-medium text-[#2E2C29] sm:mt-5">
              {disclaimer}
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
