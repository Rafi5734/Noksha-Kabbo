import Link from "next/link";
// import Image from "next/image";

const categories = [
  {
    title: "Rings",
    href: "/category/rings",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
    alt: "Gold signet ring on stone surface",
  },
  {
    title: "Earrings",
    href: "/category/earrings",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800",
    alt: "Gold hoop earrings on stone surface",
  },
  {
    title: "Necklaces",
    href: "/category/necklaces",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
    alt: "Gold pendant necklace with pearl on stone surface",
  },
];

export default function CategoryGrid() {
  return (
    <section className="w-full bg-[#FAF7F2] py-16 sm:py-20 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="container mx-auto space-y-8 sm:space-y-12">
        {/* Header Section */}
        <div className="space-y-3">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 font-medium block">
            FIND YOUR EVERYDAY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 font-normal tracking-wide">
            A shape for every story.
          </h2>
        </div>

        {/* 3-Column Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className="group flex flex-col space-y-4 focus:outline-none"
            >
              {/* Image Box with subtle zoom effect on hover */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFECE6]">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Title & Arrow Link */}
              <div className="flex items-center space-x-1.5 text-sm sm:text-base text-gray-900 font-normal tracking-wide group-hover:text-gray-600 transition-colors">
                <span>{cat.title}</span>
                <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
