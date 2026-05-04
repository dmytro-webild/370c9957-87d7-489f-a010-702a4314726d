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
import TextAbout from '@/components/sections/about/TextAbout';
import { Leaf, FlaskConical } from "lucide-react";

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
            title="Senerita Libya         منتجات طبيعية  خالية من السلفات والبارابين"
            description="مستخلصات طبيعية تناسب جميع أنواع الشعر"
            tag="عنايتك بشعرك تبدأ من هنا"
            mediaItems={[
              { videoSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777754874673-n0so01y6.mp4", imageAlt: "Senerita hair care collection" },
              { videoSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777741140013-fiujdr77.mp4", imageAlt: "Senerita product line up" }
            ]}
            mediaAnimation="slide-up"
            rating={5}
            ratingText="منتجات آمنة 100%"
          />
        </div>

        <div id="about" data-section="about">
          <TextAbout
            useInvertedBackground={false}
            tag="كوني متأكدة من اختيارك الصحيح لشعرك"
            title="مستخلصات طبيعية مصممة لتناسب جميع أنواع الشعر"
          />
        </div>

        <div id="products" data-section="products">
          <ProductCardOne
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={true}
            products={[
              { id: "p1", name: "شامبو وسيروم الكافيين", price: "مستحضر غني بالكافيين، الكولاجين، والبيوتين. يساعد في معالجة تساقط الشعر، تغذية البصيلات من الجذور، ومنح شعرك لمعاناً طبيعياً. مناسب للاستخدام اليومي وخالٍ من السلفات والبارابين.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777741219362-l83s1kf5.jpg" },
              { id: "p2", name: "مجموعة العناية المتكاملة", price: "تشكيلة شاملة من شامبو الكافيين، شامبو بذور العنب، وشامبو إكليل الجبل. حل متكامل لتغذية الشعر وتقوية بنيته من الجذور، مع تركيبة آمنة تناسب مختلف أنواع الشعر.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777755330728-oe4g1r4z.jpg" },
              { id: "p3", name: "شامبو إكليل الجبل وبذور العنب", price: "LD 139", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777759406700-crigm2z4.jpg" }
            ]}
            title="من هنا يبدأ اهتمامك بشعرك"
            description="نهتم بصحة شعرك لأن ذلك جوهر اهتمامنا بكم."
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTen
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              { title: "شامبو وسيروم الكافيين", description: "تركيبة غنية بالكافيين والكولاجين والبيوتين لمعالجة تساقط الشعر وتعزيز صحة البصيلات. يمنحك شعراً أقوى وأكثر لمعاناً بشكل طبيعي، ومناسب للاستخدام اليومي.", media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777759857284-tmxsyp86.jpg", imageAlt: "Senerita caffeine care" }, items: [{ icon: Leaf, text: "عناية صحية يومية" }], reverse: false },
              { title: "شامبو إكليل الجبل", description: "يحتوي على الكيراتين والكولاجين لتحفيز نمو الشعر، تقوية الجذور، وتحسين مرونة الشعرة من الداخل. مثالي لترطيب الشعر التالف واستعادة نعومته.", media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777759806647-okfzfs73.jpg", imageAlt: "Senerita rosemary care" }, items: [{ icon: FlaskConical, text: "لمعان فائق وقوة إضافية" }], reverse: true }
            ]}
            title="صحة الشعر تبدأ من عنايتك"
            description="منتجات طبيعية تمنحك فروة شعر صحية وناعمة."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitText
            useInvertedBackground={true}
            faqs={[
              { id: "q1", title: "للمتابعة عبر الواتس آب", content: "https://wa.me/c/218946268415" },
              { id: "q2", title: "للمتابعة عبر الإنستقرام", content: "https://www.instagram.com/senerita_libya" },
              { id: "q3", title: "للمتابعة عبر الفيس بوك", content: "https://www.facebook.com/share/1EDmHvo3YN/?mibextid=wwXIfr" }
            ]}
            sideTitle="لأي استفسار يرجى التواصل معنا"
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactText
            useInvertedBackground={false}
            background={{ variant: "rotated-rays-static" }}
            text="هل أنت مستعدة لتجربة سينيـريتا؟ تواصل معنا اليوم."
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterCard
            logoText="Senerita Libya"
            copyrightText="© 2025 Senerita Libya | جميع الحقوق محفوظة."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
