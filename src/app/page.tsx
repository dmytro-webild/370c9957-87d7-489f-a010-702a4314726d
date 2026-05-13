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
import { Leaf, FlaskConical, MessageCircle, Instagram, Facebook } from "lucide-react";

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
            brandName="Senerita+ Libya"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroSplitDualMedia
            background={{ variant: "radial-gradient" }}
            title="Senerita_Libya         منتجات طبيعية  خالية من السلفات والبارابين"
            description="مستخلصات طبيعية تناسب جميع أنواع الشعر"
            tag="عنايتك بشعرك تبدأ من هنا"
            mediaItems={[
              { videoSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777754874673-n0so01y6.mp4", imageAlt: "Senerita hair care collection" },
              { videoSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777741140013-fiujdr77.mp4", imageAlt: "Senerita product line up" }
            ]}
            mediaAnimation="slide-up"
            rating={5}
            ratingText="%منتجات آمنة 100"
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
              { id: "p1", name: "شامبو وسيروم الكافيين", price: "
غني بالكافيين والكولاجين والبيوتين لمعالجة تساقط الشعر وتغذية الشعر وتعزيز بصيلاتها من الجذور وجعلها أقوى وألمع
مناسب للاستخدام اليومي لشعر ناعم وطبيعي. 
(مستح", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777741219362-l83s1kf5.jpg" },
              { id: "p2", name: "شامبو إكليل الجبل", price: "( الشامبو إكليل الجبل )\nيقوي الجذور: يحتوي على الكيراتين لدعم نمو الشعر الصحي.\nيضيف لمعان: غني بالكولاجين للمساعدة على استعادة النعومة واللمعان.\nوبشكل عام، بما أنه شامبو بإكليل الجبل مع كيراتين وكولاجين، فوائده\nتقليل تساقط الشعر.\nتحفيز الدورة الدموية في فروة الرأس.\nتقوية الشعرة من الداخل.\nترطيب وتحسين مظهر الشعر الباهت أو التالف.\n ", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777928486821-fjk1q1er.jpg" },
              { id: "p3", name: "شامبو بذور العنب ضد القشرة", price: "(فوائده الأساسية):\nSage-Infused Relief\nيحتوي على الميرمية (Sage) التي تهدئ فروة الرأس المتهيجة وتعيد\nتوازنها الطبيعي.\nGrape Seed Purity\nمستخلص بذور العنب يساعد في محاربة القشرة ويغذي الشعر من الجذور.\nيحتوي أيضًا على Salicylic Acid (حمض الساليسيليك) اللي يساعد في إزالة القشرة ومنع تراكمها.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1778102424311-5bu87t9u.jpg" }
            ]}
            title="من هنا يبدأ اهتمامك بشعرك"
            description="نهتم بصحة شعرك لأن ذلك جوهر اهتمامنا بكم"
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTen
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              { title: "مجموعة العناية المتكاملة ", description: "تشكيلة شاملة من شامبو+سيروم الكافيين+ شامبو بذور العنب ضد القشرة + شامبو إكليل الجبل. حل متكامل لتغذية الشعر وتقوية بنيته من الجذور، مع تركيبة آمنة تناسب مختلف أنواع الشعر", media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777927250256-vsn9njhf.jpg", imageAlt: "Senerita caffeine care" }, items: [{ icon: Leaf, text: "عناية صحية ولمعان فائق يومية" }], reverse: false },
              { title: "مجموعة الراحة  ", description: "جمعنا لكم شامبو بذور العنب ضد القشر لصحة ونظافة فروة الشعر+ شامبو إكليل الجبل  لدعم الشعر الصحي وترطيبه ونعومته ولمعانه", media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777927467041-mjqrrmrj.jpg", imageAlt: "Senerita rosemary care" }, items: [{ icon: FlaskConical, text: "معالجة وترميم الشعر من التساقط " }], reverse: true }
            ]}
            title="صحة الشعر تبدأ من عنايتك"
            description="منتجات طبيعية تمنحك فروة شعر صحية وناعمة"
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitText
            useInvertedBackground={true}
            faqs={[
              { id: "q1", title: "تواصل معنا عبر الواتساب", content: "تواصل معنا مباشرة عبر الواتساب للحصول على استشارة سريعة" },
              { id: "q2", title: "إنستغرام", content: "تابعوا جديدنا وآخر العروض عبر @senerita_libya" },
              { id: "q3", title: "فيسبوك", content: "انضموا لمجتمع سنيوريتا ليبيا الرسمي" }
            ]}
            sideTitle="تواصل معنا"
            sideDescription="نحن هنا للرد على استفساراتكم عبر قنواتنا الرسمية."
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactText
            useInvertedBackground={false}
            background={{ variant: "rotated-rays-static" }}
            text="هل أنتم مستعدون لتجربة منتجات سنيوريتا ليبيا ؟ تواصلو معنا الان"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterCard
            logoText="Senerita_ Libya"
            copyrightText="© 2025 Senerita Libya | جميع الحقوق محفوظة."
            socialLinks={[
              { icon: MessageCircle, href: "https://wa.me/218946268415", ariaLabel: "WhatsApp" },
              { icon: Instagram, href: "https://www.instagram.com/senerita_libya/", ariaLabel: "Instagram" },
              { icon: Facebook, href: "https://www.facebook.com/SeneritaLibya", ariaLabel: "Facebook" }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
