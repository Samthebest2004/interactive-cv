// src/app/layout.tsx
import "./globals.css";
import ProgressBar from "./components/ProgressBar";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "My Interactive CV",
  description: "A portfolio showcasing my work and achievements.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
        {/* Client components handle their own mounting */}
        <ProgressBar />
        <Navbar />
        {/* Add top padding so content isn’t overlapped by fixed navbar */}
        <main className="container mx-auto px-4 pt-20">{children}</main>
      </body>
    </html>
  );
}
