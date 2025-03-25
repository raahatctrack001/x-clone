import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/page";
import News from "./components/news/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "X-Clone",
  description: "Practicing the next framework",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="flex justify-between items-center px-10 py-2">
          <div>
            <Sidebar />
          </div>
          {children}
          <div>
            <News />
          </div>
      </div>
      </body>
    </html>
  );
}
