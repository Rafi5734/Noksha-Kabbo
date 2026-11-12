// app/shop/page.tsx
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { MOCK_PRODUCTS, FILTER_OPTIONS } from "./data/mockProducts";
import ShopFilters from "./components/ShopFilters";
import SortSelect from "./components/SortSelect";
import NavbarCategorySection from "@/components/shared/navbar-category-section";
import Footer from "@/components/footer";

interface ShopSearchParams {
  category?: string;
  material?: string | string[];
  gemstone?: string | string[];
  maxPrice?: string;
  inStock?: string;
  sort?: string;
}

interface ShopPageProps {
  searchParams: Promise<ShopSearchParams>;
}

function toArray(val?: string | string[]): string[] {
  if (!val) return [];
  return Array.isArray(val) ? val : [val];
}

// 1. Separate async component that reads searchParams safely inside Suspense
async function ShopContent({ searchParams }: ShopPageProps) {
  const params = await searchParams;

  const activeCategory = params.category || "all";
  const selectedMaterials = toArray(params.material);
  const selectedGemstones = toArray(params.gemstone);
  const maxPrice = Number(params.maxPrice) || FILTER_OPTIONS.maxPrice;
  const inStockOnly = params.inStock === "true";
  const sort = params.sort || "featured";

  const hasFilters =
    selectedMaterials.length > 0 ||
    selectedGemstones.length > 0 ||
    maxPrice < FILTER_OPTIONS.maxPrice ||
    inStockOnly;

  // SSR Filtering over mock data
  let filteredProducts = MOCK_PRODUCTS.filter((product) => {
    if (activeCategory !== "all" && product.category !== activeCategory)
      return false;
    if (
      selectedMaterials.length > 0 &&
      !selectedMaterials.includes(product.materialSlug)
    ) {
      return false;
    }
    if (
      selectedGemstones.length > 0 &&
      !selectedGemstones.includes(product.gemstoneSlug)
    ) {
      return false;
    }
    if (product.price > maxPrice) return false;
    if (inStockOnly && !product.inStock) return false;
    return true;
  });

  if (sort === "price-asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] pb-24 text-[#1C1B19]">
      <div className="mx-auto max-w-[1380px] px-5 pt-8 sm:px-8 lg:px-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-[11px] text-[#7D7870]">
          <Link href="/" className="transition-colors hover:text-[#1C1B19]">
            Home
          </Link>
          <span className="mx-1.5" aria-hidden="true">
            /
          </span>
          <span className="text-[#5C5852]">Shop all</span>
        </nav>

        {/* Page Title & Subtitle */}
        <header className="mt-4">
          <h1 className="font-serif text-4xl font-normal tracking-[-0.015em] text-[#1C1B19] sm:text-5xl lg:text-[46px]">
            Everyday signatures
          </h1>
          <p className="mt-2.5 text-[14px] text-[#5C5852]">
            Considered pieces. Endless possibilities. Find the one that feels
            like you.
          </p>
        </header>

        {/* Category Tabs */}
        <nav
          aria-label="Product categories"
          className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-[#E5DFD6] pb-5 text-[12px]"
        >
          {FILTER_OPTIONS.categories.map((cat) => {
            const isActive = activeCategory === cat.slug;
            const nextParams = new URLSearchParams();
            if (cat.slug !== "all") nextParams.set("category", cat.slug);
            selectedMaterials.forEach((m) => nextParams.append("material", m));
            selectedGemstones.forEach((g) => nextParams.append("gemstone", g));
            if (maxPrice < FILTER_OPTIONS.maxPrice)
              nextParams.set("maxPrice", String(maxPrice));
            if (inStockOnly) nextParams.set("inStock", "true");
            if (sort !== "featured") nextParams.set("sort", sort);

            const query = nextParams.toString();
            const href = query ? `/shop?${query}` : "/shop";

            return (
              <Link
                key={cat.slug}
                href={href}
                className={`transition-colors ${
                  isActive
                    ? "font-medium text-[#1C1B19]"
                    : "text-[#7D7870] hover:text-[#1C1B19]"
                }`}
              >
                {cat.label}
              </Link>
            );
          })}
        </nav>

        {/* Main Workspace: Left Sidebar + Right Product Grid */}
        <div className="mt-7 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          <ShopFilters />

          {/* Right Product Area */}
          <div className="flex-1">
            {/* Toolbar: Count & Sort */}
            <div className="mb-5 flex items-center justify-between text-[12px]">
              <p className="text-[#7D7870]">
                <span className="text-[#1C1B19]">
                  {filteredProducts.length} pieces
                </span>
                {hasFilters && <span> &middot; Filters applied</span>}
              </p>

              <SortSelect />
            </div>

            {/* 4-Column Responsive Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                  <article key={product.id} className="group">
                    <Link
                      href={product.href}
                      className="block focus:outline-none"
                    >
                      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EAE4DC]">
                        <Image
                          src={product.imageSrc}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      </div>

                      <div className="mt-3.5">
                        <h2 className="text-[13px] font-medium text-[#1C1B19] transition-colors group-hover:text-[#5C5852]">
                          {product.name}
                        </h2>
                        <p className="mt-1 text-[11px] text-[#7D7870]">
                          {product.material}
                        </p>
                        <p className="mt-0.5 text-[11px] text-[#7D7870]">
                          &pound;{product.price}
                        </p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="border border-[#E5DFD6] py-16 text-center">
                <p className="text-[14px] text-[#5C5852]">
                  No pieces match your current filter selection.
                </p>
              </div>
            )}

            {/* End-of-Results Summary & Full-Width Reset Button */}
            <div className="mt-14 text-center">
              <p className="text-[12px] text-[#7D7870]">
                You&apos;ve seen all {filteredProducts.length} matching pieces.
              </p>

              <Link
                href="/shop"
                className="mt-5 flex w-full items-center justify-center border border-[#DDD7CE] bg-transparent px-6 py-3.5 text-[12px] font-medium tracking-[0.01em] text-[#1C1B19] transition-colors duration-200 hover:border-[#1C1B19] hover:bg-[#1C1B19] hover:text-[#FAF8F5]"
              >
                Clear filters &middot; Explore all {MOCK_PRODUCTS.length} pieces
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// 2. Main Page component wrapping the searchParams consumer inside Suspense
export default function ShopPage({ searchParams }: ShopPageProps) {
  return (
    <>
      <NavbarCategorySection />
      <Suspense
        fallback={
          <div className="min-h-screen bg-[#FAF8F5] py-20 text-center text-[13px] text-[#7D7870]">
            Loading shop...
          </div>
        }
      >
        <ShopContent searchParams={searchParams} />
      </Suspense>
      <Footer />
    </>
  );
}
