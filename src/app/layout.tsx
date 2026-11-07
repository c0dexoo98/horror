import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HOLLOW VALE — Survival Horror",
  description:
    "A cursed village survival horror. First & third person, quests, weapons, and multiplayer rooms. They hear everything.",
  keywords: ["horror game", "survival horror", "multiplayer", "Hollow Vale", "cursed village"],
  authors: [{ name: "Hollow Vale" }],
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23090708'/%3E%3Ccircle cx='16' cy='13' r='7' fill='none' stroke='%238f1d1d' stroke-width='2'/%3E%3Ccircle cx='13' cy='12' r='1.4' fill='%23ffb32a'/%3E%3Ccircle cx='19' cy='12' r='1.4' fill='%23ffb32a'/%3E%3Cpath d='M10 27 L16 20 L22 27' stroke='%23555' stroke-width='2' fill='none'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#020204",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ background: "#020204", overflow: "hidden", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
