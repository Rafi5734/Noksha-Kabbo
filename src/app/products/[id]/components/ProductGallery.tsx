// app/products/[id]/components/ProductGallery.tsx
"using client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: { src: string; alt: string }[];
  name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeImage = images[selectedIndex] || images[0];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Feature Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#EAE4DC]">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-center transition-opacity duration-300"
        />
      </div>

      {/* Thumbnails Row */}
      <div className="grid grid-cols-3 gap-3">
        {images.map((img, idx) => {
          const isSelected = selectedIndex === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`relative aspect-[4/3] w-full overflow-hidden bg-[#EAE4DC] transition-all ${
                isSelected
                  ? "ring-1 ring-[#1C1B19]"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img.src}
                alt={`${name} thumbnail ${idx + 1}`}
                fill
                sizes="(max-width: 1024px) 33vw, 18vw"
                className="object-cover object-center"
              />
            </button>
          );
        })}
      </div>

      <p className="text-[11px] text-[#7D7870]">
        View {selectedIndex + 1} of {images.length} · Tap an image to explore
      </p>
    </div>
  );
}
