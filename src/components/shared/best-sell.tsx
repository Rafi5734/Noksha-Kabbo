// components/BestsellersSection.tsx
import Image from "next/image";
import Link from "next/link";

export interface Product {
  id: string;
  name: string;
  material: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const BESTSELLERS: Product[] = [
  {
    id: "sol-signet-ring",
    name: "Sol Signet Ring",
    material: "14k yellow gold",
    price: "£180",
    imageSrc:
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: "Sol Signet Ring in 14k yellow gold resting on travertine stone",
    href: "/products/sol-signet-ring",
  },
  {
    id: "lune-hoop-earrings",
    name: "Lune Hoop Earrings",
    material: "14k yellow gold",
    price: "£240",
    imageSrc:
      "https://images.unsplash.com/photo-1590166223826-12dee1677420?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: "Pair of sculpted Lune Hoop Earrings in 14k yellow gold",
    href: "/products/lune-hoop-earrings",
  },
  {
    id: "tide-pearl-necklace",
    name: "Tide Pearl Necklace",
    material: "Gold vermeil",
    price: "£165",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1681276170092-446cd1b5b32d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: "Tide Pearl Necklace with freshwater baroque pearl pendant",
    href: "/products/tide-pearl-necklace",
  },
  {
    id: "arc-cuff",
    name: "Arc Cuff",
    material: "Sterling silver",
    price: "£125",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1671641737519-841d15b5211f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: "Minimalist Arc Cuff bracelet in polished sterling silver",
    href: "/products/arc-cuff",
  },
];

interface BestsellersSectionProps {
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
  products?: Product[];
}

export default function BestsellersSection({
  title = "The pieces you come back to.",
  ctaLabel = "SHOP BESTSELLERS",
  ctaHref = "/collections/bestsellers",
  products = BESTSELLERS,
}: BestsellersSectionProps) {
  return (
    <section
      aria-labelledby="bestsellers-heading"
      className="w-full bg-[#FAF7F2] py-16 sm:py-20 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24"
    >
      <div className="container mx-auto space-y-8 sm:space-y-12">
        {/* Header Row */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-baseline">
          <h2
            id="bestsellers-heading"
            className="font-serif text-3xl font-normal tracking-[-0.015em] text-[#1C1B19] sm:text-4xl lg:text-[42px] lg:leading-[1.15]"
          >
            {title}
          </h2>

          <Link
            href={ctaHref}
            className="group inline-flex items-center gap-1.5 self-start text-[11px] font-medium uppercase tracking-[0.14em] text-[#6E6A63] transition-colors duration-200 hover:text-[#1C1B19] sm:self-auto"
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

        {/* Responsive Product Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="group">
              <Link href={product.href} className="block focus:outline-none">
                {/* Square Image Container */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#EAE4DC]">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Product Metadata */}
                <div className="mt-4 flex flex-col">
                  <h3 className="text-[14px] font-medium leading-snug text-[#1C1B19] transition-colors group-hover:text-[#5C5852]">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#7D7870]">
                    {product.material}
                  </p>
                  <p className="mt-0.5 text-[12px] font-normal text-[#7D7870]">
                    {product.price}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
