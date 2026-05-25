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
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-FTY3Y5NX6V', { send_page_view: false });
          `}
        </Script>
      </head>
      <body>
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
