import type { Metadata, Viewport } from "next";
import RegisterSW from "@/components/RegisterSW";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Prayer Space at Redemption",
  description:
    "A guided prayer experience at Redemption Gilbert. Explore wall prayers, guided prayer activities, and a prayer walk.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Prayer Space",
  },
};

export const viewport: Viewport = {
  themeColor: "#194742",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className="min-h-full flex flex-col bg-brand-linen text-brand-primary">
        <RegisterSW />
        <main className="flex-1 w-full max-w-lg mx-auto px-5 py-6">{children}</main>
      </body>
    </html>
  );
}
