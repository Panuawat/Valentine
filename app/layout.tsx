// ในไฟล์ root-layout หรือไฟล์ที่เหมาะสม
import { Inter } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Valentine's Day",
  description: "Happy Valentine's Day",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dancingScript.className}`}>
        {children}
      </body>
    </html>
  );
}
