import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/compenent/header/Header";
import ContactHeader from "@/compenent/home/ContactHeader";



const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "CloudHosting",
  description: "A company specilized in services of hosting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ContactHeader/> */}
        <Header/>
        {children}
      </body>
    </html>
  );
}
