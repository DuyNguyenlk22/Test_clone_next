import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Beloved Sans — the display/heading/nav/button face (only Bold is served by the site).
const belovedSans = localFont({
  src: "./fonts/BelovedSans-Bold.otf",
  variable: "--font-beloved",
  weight: "400 700",
  display: "swap",
});

// Neue Haas Display — the body copy face.
const neueHaas = localFont({
  src: [
    { path: "./fonts/NeueHaasDisplay-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/NeueHaasDisplay-Roman.woff2", weight: "400", style: "normal" },
    { path: "./fonts/NeueHaasDisplay-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-neue",
  display: "swap",
});

// SF Pro Display — used for small utility/label text.
const sfPro = localFont({
  src: "./fonts/SFProDisplay-Regular.otf",
  variable: "--font-sf",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drai's After Hours | Las Vegas",
  description:
    "Drai's After Hours — the best after hours club in Las Vegas. The night, refined after midnight. 3595 S Las Vegas Blvd.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${belovedSans.variable} ${neueHaas.variable} ${sfPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
