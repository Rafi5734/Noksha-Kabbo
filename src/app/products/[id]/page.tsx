// app/products/[id]/page.tsx
import { Suspense } from "react";
import NavbarCategorySection from "@/components/shared/navbar-category-section";
import Footer from "@/components/footer";
import ProductDetailView from "./components/ProductDetailView";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: PageProps) {
  return (
    <>
      <NavbarCategorySection />
      <Suspense
        fallback={
          <div className="min-h-screen bg-[#FAF8F5] py-24 text-center text-[13px] text-[#7D7870]">
            Loading product details...
          </div>
        }
      >
        <ProductDetailView params={params} />
      </Suspense>
      <Footer />
    </>
  );
}
