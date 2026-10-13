import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moed — Your appointed time with God, every day",
  description:
    "Moed is a Bible and SOAP journaling app from My HOPE Church. Read, reflect, apply and pray — one quiet appointment, kept each day.",
  openGraph: {
    title: "Moed — Your appointed time with God, every day",
    description: "A Bible and SOAP journaling app from My HOPE Church.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#2A2118" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
