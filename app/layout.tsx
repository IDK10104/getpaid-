import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GetPaid — Small business invoices that get paid faster",
  description: "Send professional invoices in seconds, accept payments instantly, and track everything.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
