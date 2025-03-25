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
  description: "Practicing the Next.js framework",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 dark:bg-gray-900`}>
        <div className="flex min-h-screen">
          {/* Sidebar (Fixed Left) */}
          <aside className="w-64 fixed left-0 top-0 h-full bg-white dark:bg-gray-800 shadow-lg p-4">
            <Sidebar />
          </aside>

          {/* Main Content Area (Scrollable) */}
          <main className="flex-1 ml-64 p-6 overflow-y-auto">
            {/* Page Content */}
            <div>{children}</div>
          </main>

          {/* Right Side News (Independent Scroll) */}
          <aside className="w-1/4 fixed right-0 top-0 h-screen bg-gray-50 dark:bg-gray-800 shadow-lg p-4 hidden md:flex flex-col">
            {/* Search Bar (Fixed at the top of News) */}
            <div className="sticky top-0 bg-gray-50 dark:bg-gray-800 p-3 border-b border-gray-300 dark:border-gray-700 z-10">
              <input
                type="text"
                placeholder="Search News..."
                className="w-full border rounded-3xl text-sm px-4 py-2 bg-gray-200 dark:bg-black text-gray-700 dark:text-white focus:outline-none"
              />
            </div>

            {/* News Content (Scrollable) */}
            <div className="flex-1 overflow-y-auto mt-2">
              <News />
            </div>
          </aside>
        </div>
      </body>
    </html>
  );
}
