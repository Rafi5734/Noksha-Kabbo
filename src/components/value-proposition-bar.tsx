import React from "react";

const benefits = [
  "Complimentary UK delivery £150+",
  "30-day returns",
  "Considered gift packaging",
];

export default function ValuePropositionBar() {
  return (
    <section className="container mx-auto w-full bg-[#F4F1EA] py-3.5 px-4 border-y border-gray-200/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center text-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-700 tracking-normal font-light">
        {benefits.map((benefit, index) => (
          <React.Fragment key={index}>
            <span className="whitespace-nowrap">{benefit}</span>
            {index < benefits.length - 1 && (
              <span className="hidden sm:inline text-gray-400 font-normal select-none">
                ·
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
