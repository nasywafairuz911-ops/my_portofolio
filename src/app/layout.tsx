import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nasywa Fairuz Nafis — Portofolio",
  description:
    "Portofolio Nasywa Fairuz Nafis — Mahasiswa Teknologi Informasi, Tegal Indonesia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
