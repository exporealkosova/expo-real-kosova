import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "EXPO REAL KOSOVA",
  description:
    "Ndërtim, Patundshmëri, Materiale Ndërtimore dhe Industri Përcjellëse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
