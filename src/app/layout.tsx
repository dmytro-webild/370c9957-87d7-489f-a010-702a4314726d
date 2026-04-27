import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Senerita Libya | Premium Natural Hair Care',
  description: 'Discover premium hair care solutions tailored for Libyan families. Trusted quality, natural ingredients, and authentic local care since day one.',
  openGraph: {
    "title": "Senerita Libya | Premium Natural Hair Care",
    "description": "Experience the natural difference with Senerita Libya.",
    "type": "website",
    "siteName": "Senerita Libya"
  },
};

const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
