import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Header } from "../components/organisms/header/header";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Nieliton Sousa!",
  description: "Seja bem vindo ao meu portfolio!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full bg-[var(--background)] " lang="pt-br">
      <body
        className={`${bebasNeue.variable} ${bebasNeue.variable} antialiased h-full`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
