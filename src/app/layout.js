import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";
import GlobalLoader from "@/components/GlobalLoader";
import { NavigationProvider } from "@/components/NavigationEvents";
import SplashScreen from "@/components/Splashscreen";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    default: "Genrobotics",
    template: "%s | Genrobotics",
  },
  description:
    "Genrobotics drives sustainable robotics innovation through advanced solutions for safe and efficient sanitation.",
  keywords: "Genrobotics",
  metadataBase: new URL("https://www.genrobotics.com"),
  openGraph: {
    title: "Genrobotics",
    description:
      "Explore our groundbreaking robotics solutions like Bandicoot that transform sanitation and industrial safety.",
    url: "https://www.genrobotics.com",
    siteName: "Genrobotics",
    images: [
      {
        url: "https://images.prismic.io/gen-robotics/8acaddbf-43be-4848-9bcf-45d2a7de2b05_JKR_8841.webp",
        width: 1200,
        height: 630,
        alt: "Genrobotics Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genrobotics",
    description:
      "Revolutionizing safety and efficiency in sanitation with robotics technology.",
    images: [
      "https://images.prismic.io/gen-robotics/8acaddbf-43be-4848-9bcf-45d2a7de2b05_JKR_8841.webp",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin ="true" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased`}>
        <SplashScreen />
        <NavigationProvider>
          <GlobalLoader />
          <Header />
          {children}
          <Toaster />
          <Footer />
        </NavigationProvider>
      </body>
    </html>
  );
}
