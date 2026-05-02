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
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
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
            brandName="Senerita+ Libya"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroSplitDualMedia
            background={{ variant: "radial-gradient" }}
            title="Senerita+Libya منتجات طبيعية خالية من السلفات والبرابين"
            description="مستخلصات طبيعية تناسب جميع انواع الشعر "
            tag="عنايتك بشعرك تبداء من هنا "
            mediaItems={[
              { videoSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777754874673-n0so01y6.mp4", imageAlt: "Senerita hair care collection" },
              { videoSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777741140013-fiujdr77.mp4", imageAlt: "Senerita product line up" }
            ]}
            mediaAnimation="slide-up"
            rating={5}
            ratingText="منتجات آمنة %100"
          />
        </div>

        <div id="about" data-section="about">
          <TextAbout
            useInvertedBackground={false}
            tag="كوني متاكدة من اختيارك الصحيح لشعرك "
            title="مستخلصات طبيعية مصممة لتناسب جميع انواع الشعر  "
          />
        </div>

        <div id="products" data-section="products">
          <ProductCardOne
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={true}
            products={[
              { id: "p1", name: "شامبو بذور العنب للقشرة ", price: "LD 79", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777741219362-l83s1kf5.jpg" },
              { id: "p2", name: "شامبو إكليل الجبل", price: "LD 79", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777755330728-oe4g1r4z.jpg" },
              { id: "p3", name: "شامبو + سيروم الكافيين ", price: "LD 119", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777755229178-0l9lsfeq.jpg" }
            ]}
            title="من هنا يبدا اهتمامك لشعرك  "
            description="نهتم بشعرك وصحته لان هذا واجبنا اتجاهكم  "
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTen
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              { title: "شامبو + سيروم الكافيين  ", description: "غني بالبيوتين و الكرياتين والكولاجين ، لتعزيز نمو الشعر والمحافظة على بصيلاتها ومنحه لمعانا وقوة", media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777317919883-u9mbftva.jpg?_wi=2", imageAlt: "Foundation bottles" }, items: [{ icon: Leaf, text: "لعناية يومية وصحية لشعرك " }], reverse: false },
              { title: "شامبو إكليل الجبل ", description: "تحفيز بصيلات الشعر والمساعدة في التكثيف الحيوي  ", media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Cx9nk9sCSbinRaOXqM7TyaxmbU/uploaded-1777317963591-phr5pus9.jpg?_wi=2", imageAlt: "Science lab" }, items: [{ icon: FlaskConical, text: "لعناية اكثر ولمعان اقوة " }], reverse: true }
            ]}
            title="صحة الشعر من صحتك وأناقتك "
            description="منتجات غنية بالمستخلصات الطبيعية لفروة شعر ناعمة وحيوية "
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardOne
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={false}
            testimonials={[
              { id: "t1", name: "FATIMA ", role: "منتجكم شامبو السيروم جدا رهيب وفادني كثير ", company: "طرابلس ", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-coquettish-brunette-woman-laughing-smiling-looking-down-flirty-standing-ove_1258-87409.jpg?_wi=2" },
              { id: "t2", name: "Fatima ", role: "اهنيكم على منتجاتكم الجميلة وتجربة تتكرر اكيد ", company: "بنغازي ", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/woman-corrects-her-hairstyle-looks-aside_8353-10717.jpg" }
            ]}
            title="اراء العملاء "
            description="تعليقات العملاء و مدى رضائهم عن منتجاتنا  "
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitText
            useInvertedBackground={true}
            faqs={[
              { id: "q1", title: "لتواصل عبر الواتس آب من هنا ", content: "https://wa.me/c/218946268415 " },
              { id: "q2", title: "للمتابعة والتواصل عبر الإنستقرام ", content: "https://www.instagram.com/senerita_libya " },
              { id: "q3", title: "للمتابعة والتواصل عبر الفيس بوك ", content: "https://www.facebook.com/share/1EDmHvo3YN/?mibextid=wwXIfr." }
            ]}
            sideTitle="لطلبات والإستفسارات يرجاء متابعتنا"
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
