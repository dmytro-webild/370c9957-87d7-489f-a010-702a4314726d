"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FooterCard from '@/components/sections/footer/FooterCard';

export default function ProductsPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="large"
        background="floatingGradient"
        cardStyle="outline"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            navItems={[
              { name: "Home", id: "/" },
              { name: "About", id: "/#about" },
              { name: "Products", id: "/products" },
              { name: "Contact", id: "/#contact" },
            ]}
            brandName="Senerita+ Libya"
          />
        </div>

        <div id="products" data-section="products">
            <PricingCardThree 
                title="Our Product Tiers"
                description="Choose the perfect hair care plan for your needs."
                animationType="slide-up"
                textboxLayout="default"
                useInvertedBackground={false}
                plans={[
                    { id: "tier1", price: "LD 79", name: "Basic Care", features: ["Natural Extracts", "Sulfate-Free", "Gentle Cleanse"], buttons: [{ text: "Get Started" }] },
                    { id: "tier2", price: "LD 129", name: "Advanced Care", features: ["Natural Extracts", "Sulfate-Free", "Deep Nourishing Serum", "Scalp Stimulating Formula"], buttons: [{ text: "Choose Plan" }] },
                    { id: "tier3", price: "LD 199", name: "Premium Therapy", features: ["Full Bundle", "Personalized Consultation", "Priority Support", "Exclusive Hair Oil"], buttons: [{ text: "Buy Now" }] }
                ]}
            />
        </div>

        <div id="footer" data-section="footer">
          <FooterCard
            logoText="Senerita Libya"
            copyrightText="© 2025 Senerita Libya | All rights reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}