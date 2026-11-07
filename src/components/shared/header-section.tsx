"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1200",
    alt: "Woman wearing gold earrings and a signet ring",
  },
  {
    url: "https://images.unsplash.com/photo-1694617232492-3c804e06f234?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    alt: "Gold necklace close up detail",
  },
  {
    url: "https://images.unsplash.com/photo-1777126413365-f4113a23eeab?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    alt: "Sculptural gold jewelry collection",
  },
];

export default function HeaderSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1,
    );
  };

  // Auto-play timer (5 seconds)
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <section className="bg-[#FAF8F5] container mx-auto min-h-[550px] grid grid-cols-1 md:grid-cols-2 items-center">
      {/* Left Text Content */}
      <div className="px-6 py-12 sm:px-12 md:px-14 lg:px-20 xl:px-24 flex flex-col justify-center space-y-6 max-w-xl mx-auto md:mx-0">
        <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
          THE EVERYDAY, MADE EXTRAORDINARY
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.15] font-normal">
          A little gold. <br />A lot of meaning.
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed font-light max-w-md pt-1">
          Jewellery for the moments that become you. Discover sculptural
          essentials, made to be worn your way.
        </p>

        <div className="pt-2 space-y-3">
          <button className="w-full bg-[#535D40] text-white py-3.5 px-6 rounded-sm text-sm font-medium hover:bg-[#3f4732] transition-colors duration-200 shadow-sm">
            Discover the collection
          </button>

          <p className="text-xs text-gray-500 font-light">
            The Sol edit · From £125
          </p>
        </div>
      </div>

      {/* Right Carousel Container */}
      <div className="relative group w-full h-[350px] sm:h-[450px] md:h-full min-h-[450px] overflow-hidden bg-gray-100">
        {/* Images */}
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Navigation Arrows (Visible on Hover) */}
        <button
          onClick={prevSlide}
          className="z-20 absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-all opacity-0 group-hover:opacity-100 shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="z-20 absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-all opacity-0 group-hover:opacity-100 shadow-md"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Carousel Indicators */}
        <div className="z-20 absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
