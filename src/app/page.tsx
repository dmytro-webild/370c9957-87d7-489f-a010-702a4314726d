"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitFormParallax from '@/components/sections/contact/ContactSplitFormParallax';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarInline from '@/components/ui/NavbarInline';
import FeaturesAttributeCards from '@/components/sections/features/FeaturesAttributeCards';
import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import { Leaf, FlaskConical, MessageCircle, Mail } from "lucide-react";

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
          <NavbarInline
            logo="Senerita+ Libya"
            navItems={[
              { name: "Home", href: "#hero" },
              { name: "About", href: "#about" },
              { name: "Products", href: "#products" },
              { name: "Contact", href: "#contact" },
            ]}
            ctaButton={{ text: "تسوق الآن", href: "#products" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroSplitKpi
            tag="عنايتك بشعرك تبدأ من هنا"
            title="Senerita_Libya منتجات طبيعية خالية من السلفات والبارابين"
            description="مستخلصات طبيعية تناسب جميع أنواع الشعر"
            primaryButton={{ text: "اكتشف المنتجات", href: "#products" }}
            secondaryButton={{ text: "تواصل معنا", href: "#contact" }}
            kpis={[
                { value: "100%", label: "طبيعية" },
                { value: "5+", label: "سنوات خبرة" },
                { value: "آمنة", label: "خالية من السلفات" }
            ]}
            videoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777754874673-n0so01y6.mp4"
          />
        </div>

        <div id="about" data-section="about">
          <AboutMediaOverlay
            tag="كوني متأكدة من اختيارك الصحيح لشعرك"
            title="مستخلصات طبيعية مصممة لتناسب جميع أنواع الشعر"
            description="نهتم بصحة شعرك لأن ذلك جوهر اهتمامنا بكم، منتجاتنا تمنحك فروة شعر صحية وناعمة."
            primaryButton={{ text: "تعرفي على المزيد", href: "#features" }}
            videoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777741140013-fiujdr77.mp4"
          />
        </div>

        <div id="products" data-section="products">
          <FeaturesAttributeCards
            tag="منتجاتنا الطبيعية"
            title="تشكيلة العناية بالشعر"
            description="اكتشفوا حلولنا المبتكرة للعناية بجمال شعركم"
            items={[
              { title: "شامبو وسيروم الكافيين", tags: "تساقط الشعر", badge: "الأكثر طلباً", details: [{ icon: Leaf, label: "الفائدة", value: "معالجة التساقط" }], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777741219362-l83s1kf5.jpg" },
              { title: "شامبو إكليل الجبل", tags: "نمو الشعر", details: [{ icon: FlaskConical, label: "الفائدة", value: "تقوية الجذور" }], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777928486821-fjk1q1er.jpg" },
              { title: "شامبو بذور العنب", tags: "مضاد للقشرة", details: [{ icon: Leaf, label: "الفائدة", value: "تغذية الفروة" }], imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1778102424311-5bu87t9u.jpg" }
            ]}
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTen
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              { title: "مجموعة العناية المتكاملة", description: "تشكيلة شاملة من شامبو+سيروم الكافيين+ شامبو بذور العنب ضد القشرة + شامبو إكليل الجبل. حل متكامل لتغذية الشعر وتقوية بنيته من الجذور، مع تركيبة آمنة تناسب مختلف أنواع الشعر", media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777927250256-vsn9njhf.jpg" }, items: [{ icon: Leaf, text: "عناية صحية ولمعان فائق يومية" }], reverse: false },
              { title: "مجموعة الراحة", description: "جمعنا لكم شامبو بذور العنب ضد القشر لصحة ونظافة فروة الشعر+ شامبو إكليل الجبل لدعم الشعر الصحي وترطيبه ونعومته ولمعانه", media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777927467041-mjqrrmrj.jpg" }, items: [{ icon: FlaskConical, text: "معالجة وترميم الشعر من التساقط" }], reverse: true }
            ]}
            title="صحة الشعر تبدأ من عنايتك"
            description="منتجات طبيعية تمنحك فروة شعر صحية وناعمة"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitFormParallax
            tag="تواصل معنا"
            title="هل أنتم مستعدون لتجربة منتجات سنيوريتا ليبيا؟"
            description="نحن هنا للإجابة على كافة استفساراتكم."
            inputs={[
              { name: "name", type: "text", placeholder: "الاسم الكامل", required: true },
              { name: "email", type: "email", placeholder: "البريد الإلكتروني", required: true }
            ]}
            textarea={{ name: "message", placeholder: "رسالتكم هنا", rows: 4 }}
            buttonText="إرسال"
            ctaLinks={[
                { icon: Mail, label: "seneritalibya@gmail.com" },
                { icon: MessageCircle, label: "WhatsApp" }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMinimal
            brand="Senerita_Libya"
            copyright="© 2025 | جميع الحقوق محفوظة."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}