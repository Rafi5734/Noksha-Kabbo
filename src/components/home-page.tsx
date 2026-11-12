import BestsellersSection from "./shared/best-sell";
import BrandStorySection from "./shared/brand-story-section";
import CategoryGrid from "./shared/catgeory-product";
import CollectionFeatureSection from "./shared/collection-feature-section";
import CommunityQuoteSection from "./shared/community-quote-section";
import GiftingFeatureSection from "./shared/gifting-feature-section";
import HeaderSection from "./shared/header-section";
import JournalSection from "./shared/journal-section";
import NewsletterBannerSection from "./shared/news-letter-banner-section";
import ValuePropositionBar from "./value-proposition-bar";

export function HomePage() {
  return (
    <main>
      <HeaderSection />
      <ValuePropositionBar />
      <CategoryGrid />
      <BestsellersSection />
      <CollectionFeatureSection />
      <BrandStorySection />
      <CommunityQuoteSection />
      <GiftingFeatureSection />
      <JournalSection />
      <NewsletterBannerSection />
    </main>
  );
}
