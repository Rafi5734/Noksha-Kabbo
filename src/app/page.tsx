import Footer from "@/components/footer";
import { HomePage } from "@/components/home-page";
import NavbarCategorySection from "@/components/shared/navbar-category-section";

export default function Page() {
  return (
    <>
      <NavbarCategorySection />
      <HomePage />
      <Footer />
    </>
  );
}
