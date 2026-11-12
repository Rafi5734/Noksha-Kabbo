// components/JournalSection.tsx
import Image from "next/image";
import Link from "next/link";

export interface JournalArticle {
  id: string;
  category: string;
  readTime: string;
  title: string;
  ctaLabel?: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "everyday-stack",
    category: "STYLE & RITUAL",
    readTime: "5 MIN READ",
    title: "The art of an everyday stack",
    ctaLabel: "Read the story",
    href: "/journal/the-art-of-an-everyday-stack",
    imageSrc:
      "https://images.unsplash.com/photo-1727807308865-a42ca97fbaae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt:
      "Close-up of a polished 14k gold signet ring resting on textured travertine stone",
  },
  {
    id: "quieter-kind-of-care",
    category: "STYLE & RITUAL",
    readTime: "5 MIN READ",
    title: "A quieter kind of care",
    ctaLabel: "Read the story",
    href: "/journal/a-quieter-kind-of-care",
    imageSrc:
      "https://images.unsplash.com/photo-1748679451184-97ddab571605?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt:
      "Delicate gold chain necklace with a single freshwater baroque pearl pendant on stone",
  },
];

interface JournalSectionProps {
  eyebrow?: string;
  heading?: string;
  articles?: JournalArticle[];
}

export default function JournalSection({
  eyebrow = "THE JOURNAL",
  heading = "Notes on living with jewellery.",
  articles = JOURNAL_ARTICLES,
}: JournalSectionProps) {
  return (
    <section
      aria-labelledby="journal-section-heading"
      className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-28"
    >
      <div className="container mx-auto space-y-8 sm:space-y-12">
        {/* Section Header */}
        <header className="mb-8 sm:mb-10 lg:mb-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#7D7870]">
            {eyebrow}
          </p>
          <h2
            id="journal-section-heading"
            className="mt-3 font-serif text-3xl font-normal tracking-[-0.015em] text-[#1C1B19] sm:text-4xl lg:text-[42px] lg:leading-[1.15]"
          >
            {heading}
          </h2>
        </header>

        {/* Two-Column Editorial Article Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:gap-x-10">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link href={article.href} className="block focus:outline-none">
                {/* Landscape Editorial Photograph */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE4DC]">
                  <Image
                    src={article.imageSrc}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Article Metadata & Title */}
                <div className="mt-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#7D7870] sm:text-[11px]">
                    <span>{article.category}</span>
                    <span className="mx-1.5" aria-hidden="true">
                      ·
                    </span>
                    <span>{article.readTime}</span>
                  </p>

                  <h3 className="mt-2 font-serif text-2xl font-normal tracking-[-0.01em] text-[#1C1B19] transition-colors duration-200 group-hover:text-[#5C5852] sm:text-[28px] sm:leading-[1.2]">
                    {article.title}
                  </h3>

                  <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium tracking-[0.01em] text-[#1C1B19] transition-colors duration-200 group-hover:text-[#6E6A63]">
                    <span>{article.ctaLabel || "Read the story"}</span>
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
