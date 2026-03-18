import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.advogadasprev.com.br"),
  title: "Advogadas Prev | Especialistas em Direito Previdenciário",
  description: "Aposentadorias, BPC/LOAS, Auxílio-Doença, Pensão por Morte e Revisões do INSS. Atendimento especializado 100% online para todo o Brasil.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Advogadas Prev",
    title: "Advogadas Prev | Especialistas em Direito Previdenciário",
    description: "Aposentadorias, BPC/LOAS, Auxílio-Doença, Pensão por Morte e Revisões do INSS. Atendimento especializado 100% online para todo o Brasil.",
    url: "/",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Advogadas Prev - Direito Previdenciário" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advogadas Prev | Especialistas em Direito Previdenciário",
    description: "Aposentadorias, BPC/LOAS, Auxílio-Doença, Pensão por Morte e Revisões do INSS. Atendimento especializado 100% online para todo o Brasil.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Advogadas Prev",
  alternateName: "Advogadas Prev - Direito Previdenciário",
  url: "https://www.advogadasprev.com.br",
  logo: "https://www.advogadasprev.com.br/logo.webp",
  description: "Escritório especializado em Direito Previdenciário. Aposentadorias, BPC/LOAS, Auxílio-Doença, Pensão por Morte e Revisões do INSS.",
  foundingDate: "2023",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Santa Catarina, 481 - Centro",
    addressLocality: "Cascavel",
    addressRegion: "PR",
    postalCode: "85801-040",
    addressCountry: "BR",
  },
  telephone: "+5545988110440",
  areaServed: "BR",
  priceRange: "$$",
  employee: [
    {
      "@type": "Person",
      name: "Dra. Isabela Wrubel Cechet",
      jobTitle: "Advogada Previdenciária",
      description: "OAB/PR 95.762",
    },
    {
      "@type": "Person",
      name: "Dra. Juliana Grignani",
      jobTitle: "Advogada Previdenciária",
      description: "OAB/PR 90.817",
    },
  ],
  sameAs: [
    "https://www.instagram.com/advogadasprev",
  ],
};

import Script from "next/script";
import CookieBanner from "@/components/CookieBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics (GA4) */}
        <Script id="google-analytics" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-JRPM8MDM7P" />
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JRPM8MDM7P');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1496296691912826');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} font-sans antialiased`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1496296691912826&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
