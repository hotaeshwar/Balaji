import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Balaji Autoss | Premium Tyres, Batteries & EV Scooters",
  description: "Welcome to Balaji Autoss - your trusted partner for high-quality Tyres, Batteries, and state-of-the-art EV Scooters. Experience professional service, premium vehicle care, and expert advice. Contact Rohit (9646952897) or Vivek (9779606655) today.",
  keywords: "Balaji Autoss, Tyres, Batteries, EV Scooters, Electric Scooters, Car Tyres, Bike Tyres, Car Batteries, Battery Replacement, Garage Service, Rohit, Vivek",
  authors: [{ name: "Balaji Autoss" }],
  icons: {
    icon: "/brand.png",
    shortcut: "/brand.png",
    apple: "/brand.png",
  },
  openGraph: {
    title: "Balaji Autoss | Premium Tyres, Batteries & EV Scooters",
    description: "Welcome to Balaji Autoss - your trusted partner for high-quality Tyres, Batteries, and state-of-the-art EV Scooters.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-white text-charcoal antialiased overflow-x-clip max-w-full`}>
        {children}
      </body>
    </html>
  );
}

