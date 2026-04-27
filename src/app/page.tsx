"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, Leaf, FlaskConical } from "lucide-react";

export default function LandingPage() {
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
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Products", id: "products" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="Senerita Libya"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroSplitDualMedia
            background={{ variant: "radial-gradient" }}
            title="Senerita Libya — Quality Trusted Since Day One"
            description="Discover premium products designed for Libyan families and businesses. Authentic. Reliable. Local."
            tag="PREMIUM HAIR CARE"
            mediaItems={[
              { imageSrc: "http://img.b2bpic.net/free-photo/foundation-advertising-with-different-containers_23-2149511276.jpg?_wi=1", imageAlt: "Senerita hair care collection" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777317421410-2rdkgphp.jpg?_wi=1", imageAlt: "Senerita product line up" }
            ]}
            mediaAnimation="slide-up"
            rating={5}
            ratingText="Trusted by 5,000+ Libyan families"
          />
        </div>

        <div id="about" data-section="about">
          <TextAbout
            useInvertedBackground={false}
            tag="OUR MISSION"
            title="Empowering Natural Beauty Through Science and Nature"
          />
        </div>

        <div id="products" data-section="products">
          <ProductCardOne
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={true}
            products={[
              { id: "p1", name: "Grape Seed Anti-Dandruff", price: "LD 45.00", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777317421410-2rdkgphp.jpg?_wi=2" },
              { id: "p2", name: "Caffeine Shampoo", price: "LD 50.00", imageSrc: "http://img.b2bpic.net/free-photo/foundation-advertising-with-different-containers_23-2149511276.jpg?_wi=2" },
              { id: "p3", name: "Rosemary Shampoo", price: "LD 48.00", imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-coquettish-brunette-woman-laughing-smiling-looking-down-flirty-standing-ove_1258-87409.jpg?_wi=1" }
            ]}
            title="Discover Our Premium Range"
            description="Formulated with nature's finest extracts to revitalize and strengthen."
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTen
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              { title: "Authentic Ingredients", description: "Sourced from the finest natural reserves.", media: { imageSrc: "http://img.b2bpic.net/free-photo/foundation-bottles-stands_23-2149511226.jpg", imageAlt: "Foundation bottles" }, items: [{ icon: Leaf, text: "Organic extracts" }], reverse: false },
              { title: "Science Backed", description: "Formulas designed for maximum efficacy.", media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777317421410-2rdkgphp.jpg?_wi=3", imageAlt: "Science lab" }, items: [{ icon: FlaskConical, text: "Clinical testing" }], reverse: true }
            ]}
            title="Why Choose Senerita Libya?"
            description="We blend the best of scientific innovation with pure natural ingredients."
          />
        </div>

        <div id="socialProof" data-section="socialProof">
          <SocialProofOne
            textboxLayout="default"
            useInvertedBackground={true}
            names={["Libya Health", "Beauty Global", "DistroTech", "NatureCare", "Libyan Retail Co"]}
            title="Trusted by Local Partners"
            description="Partners who support our commitment to quality."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardOne
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={false}
            testimonials={[
              { id: "t1", name: "Sarah Ahmed", role: "Homemaker", company: "Tripoli", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-coquettish-brunette-woman-laughing-smiling-looking-down-flirty-standing-ove_1258-87409.jpg?_wi=2" },
              { id: "t2", name: "Fatima Youssef", role: "Beauty Enthusiast", company: "Benghazi", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/woman-corrects-her-hairstyle-looks-aside_8353-10717.jpg" }
            ]}
            title="Real Stories from Satisfied Customers"
            description="Hear from our community members."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitText
            useInvertedBackground={true}
            faqs={[
              { id: "q1", title: "Are products safe for all hair types?", content: "Yes, our natural formula is designed for all hair textures." },
              { id: "q2", title: "Where can I buy Senerita products?", content: "Available through our website and authorized local pharmacies." },
              { id: "q3", title: "Do you offer international shipping?", content: "Currently, we serve the Libyan market exclusively to maintain freshness." }
            ]}
            sideTitle="Frequently Asked Questions"
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactText
            useInvertedBackground={false}
            background={{ variant: "rotated-rays-static" }}
            text="Ready to experience Senerita? Get in touch with our team today."
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
