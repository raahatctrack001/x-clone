import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/sidebar/page";
import News from "../components/news/page";
import SessionWrapper from "../components/SessionWrapper/page";

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
    <SessionWrapper>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 dark:bg-gray-900`}>
          <div className="flex min-h-screen">
            {/* Sidebar (md and above) */}
            <aside className="w-64 hidden md:flex flex-col fixed inset-y-0 left-0 bg-white dark:bg-gray-800 shadow-lg p-4">
              <Sidebar />
            </aside>

            {/* Main Content (Dynamically Adjusts) */}
            <main className="flex-1 p-6 overflow-y-auto w-full md:ml-64 lg:mr-80">
              {children}
            </main>

            {/* News & Search (Visible from lg onwards) */}
            <aside className="w-80 hidden lg:flex flex-col fixed inset-y-0 right-0 bg-gray-50 dark:bg-gray-800 shadow-lg p-4">
              <div className="sticky top-0 bg-gray-50 dark:bg-gray-800 p-3 border-b border-gray-300 dark:border-gray-700 z-10">
                <input
                  type="text"
                  placeholder="Search News..."
                  className="w-full border rounded-3xl text-sm px-4 py-2 bg-gray-200 dark:bg-black text-gray-700 dark:text-white focus:outline-none"
                />
              </div>
              <div className="flex-1 overflow-y-auto mt-2">
                <News />
              </div>
            </aside>
          </div>
        </body>
      </html>
    </SessionWrapper>
  );
}

