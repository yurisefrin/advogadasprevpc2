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
  title: "Advogadas Prev | Especialistas em Direito Previdenciário",
  description: "Escritório especializado em Direito Previdenciário. Aposentadorias, auxílio-doença, BPC/LOAS e pensão por morte.",
  icons: {
    icon: "/favicon.svg",
  },
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
