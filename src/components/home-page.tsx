import CategoryGrid from "./shared/catgeory-product";
import HeaderSection from "./shared/header-section";
import ValuePropositionBar from "./value-proposition-bar";

export function HomePage() {
  return (
    <main>
      <HeaderSection />
      <ValuePropositionBar />
      <CategoryGrid />
    </main>
  );
}
