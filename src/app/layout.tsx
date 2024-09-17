import { Poppins } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "@/index.css";

const poppins = Poppins({ weight: ["300", "400", "500", "700"], subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={poppins.className}>
        <div className="min-h-dvh flex flex-col justify-between gap-20">
          <Navbar />
          <div className="px-6">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
