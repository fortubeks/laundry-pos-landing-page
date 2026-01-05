import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "My Laundry Point of Sale",
  description: "Powerful Laundry POS Software for Smarter, Faster Business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
