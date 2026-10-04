import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tegar Aldiansyah - Fullstack Developer & Network",
  description:
    "Personal portfolio of Tegar Aldiansyah — a creative fullstack developer and network specialist from Semarang, Indonesia. Student at SMKN 7 Semarang majoring in Network and Application Information Systems.",
  keywords: [
    "Tegar Aldiansyah",
    "Fullstack Developer",
    "Network Specialist",
    "Portfolio",
    "Semarang",
    "Web Developer",
    "SMKN 7 Semarang",
    "SIJA",
  ],
  authors: [{ name: "Tegar Aldiansyah" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
