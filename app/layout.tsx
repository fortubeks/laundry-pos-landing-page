import "./globals.css";
import { Suspense } from "react";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import GoogleAnalyticsPageTracker from "./components/GoogleAnalyticsPageTracker";

export const metadata = {
  title: "My Laundry Point of Sale",
  description: "Powerful Laundry POS Software for Smarter, Faster Business",

  metadataBase: new URL("https://mylaundrypos.com"),

  icons: {
    icon: [
      { url: "/icon.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/icon.png",
  },

  openGraph: {
    title: "My Laundry Point of Sale",
    description: "Powerful Laundry POS Software for Smarter, Faster Business",
    url: "https://mylaundrypos.com",
    siteName: "My Laundry Point of Sale",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "My Laundry POS",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FTY3Y5NX6V"
          strategy="afterInteractive"
        />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1899925260986343');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-FTY3Y5NX6V');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1899925260986343&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Suspense fallback={null}>
          <GoogleAnalyticsPageTracker />
        </Suspense>
        <Navbar />
        {children}
        <Footer />
      </body>
      <a
        href="https://wa.me/2349165426799?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20Laundry%20POS%20software."
        target="_blank"
        rel="noopener noreferrer"
        className="shadow-lg fixed bottom-10 right-10 rounded-[50%]"
      >
        <Image alt="" src={"/assets/whatsapp.png"} width={50} height={50} />
      </a>
      <Toaster />
    </html>
  );
}
