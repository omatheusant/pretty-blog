import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header";
import { ToasterProvider } from "@/providers/toast-provider";
import { Gaegu } from "next/font/google";
import SessionProvider from "@/providers/session-provider";

const gaegu = Gaegu({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Lud Photos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${gaegu.className} bg-background min-h-screen`}>
        <SessionProvider>
          <Header />
          <ToasterProvider />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
