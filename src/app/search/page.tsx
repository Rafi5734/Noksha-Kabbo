import { Suspense } from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import NavbarCategorySection from "@/components/shared/navbar-category-section";
import { MOCK_PRODUCTS } from "@/app/shop/data/mockProducts";
import SearchResults from "@/app/search/search-results";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

async function SearchContent({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;

  return (
    <main className="min-h-screen bg-[#FAF8F5] pb-24 text-[#1C1B19]">
      <div className="mx-auto max-w-[1380px] px-5 pt-12 sm:px-8 lg:px-12">
        <nav aria-label="Breadcrumb" className="text-[11px] text-[#7D7870]">
          <Link href="/" className="transition-colors hover:text-[#1C1B19]">
            Home
          </Link>
          <span className="mx-1.5" aria-hidden="true">
            /
          </span>
          <span className="text-[#5C5852]">Search</span>
        </nav>

        <header className="mt-4">
          <h1 className="font-serif text-4xl font-normal tracking-[-0.015em] text-[#1C1B19] sm:text-5xl">
            Find your next favourite.
          </h1>
        </header>

        <SearchResults key={q} products={MOCK_PRODUCTS} initialQuery={q} />
      </div>
    </main>
  );
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  return (
    <>
      <NavbarCategorySection />
      <Suspense
        fallback={
          <div className="min-h-screen bg-[#FAF8F5] py-20 text-center text-[13px] text-[#7D7870]">
            Loading search...
          </div>
        }
      >
        <SearchContent searchParams={searchParams} />
      </Suspense>
      <Footer />
    </>
  );
}
