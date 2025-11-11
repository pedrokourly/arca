import type { Metadata } from "next";
import AuthProvider from "@/components/AuthProvider";
import ToasterProvider from "@/components/ToasterProvider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Arca",
  description: "Sistema de Gestão para clinica-escola de Psicologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          {children}
          <ToasterProvider />
        </AuthProvider>
      </body>
    </html>
  );
}
