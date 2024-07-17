import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Monochrome",
    template: "%s | Monochrome",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [
    {
      name: "M. Fadil Martias",
      url: "https://fadilmartias.my.id"
    },
    {
      name: "DilZ Studio",
      url: "https://dilzstudio.com"
    }
  ],
  creator: 'M. Fadil Martias',
  publisher: 'DilZ Studio',
  description: "Monochrome Admin Template Starter",
  keywords: ['Admin Template', 'Tailwind CSS', 'Next.js', 'React'],
  category: 'Admin Template',
  openGraph: {
    title: 'Dashboard',
    description: 'Dashboard',
    url: 'http://localhost:3000',
    siteName: 'Monochrome Admin Template Starter',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    // data-mode="dark"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
