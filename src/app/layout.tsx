import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/compenent/header/Header";
import ContactHeader from "@/compenent/home/ContactHeader";
import Footer from "@/compenent/footer/Footer";



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
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"/>
      </head>
      <body className={inter.className}>
        <ContactHeader/>    
        <hr style={{color:"#46B3E9",border: '1px solid #909090',marginTop:"5px", width: '100%' }} />
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
