import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro",
  description: "Car Repairing Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body className={`${inter.className}`}>
        <Navbar />
        <div className="bg-white">
          <div className="max-w-[1440px] mx-auto px-4">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
