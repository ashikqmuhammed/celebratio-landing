import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { CRMSection } from "@/components/crm-section";
import { WebsiteBuilderSection } from "@/components/website-builder-section";
import { MarketplaceSection } from "@/components/marketplace-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <CRMSection />
      <WebsiteBuilderSection />
      <MarketplaceSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
