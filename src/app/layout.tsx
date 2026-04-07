import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Swarm Agent — IA que trabaja mientras duermes",
    template: "%s | Swarm Agent",
  },
  description:
    "El sistema de agentes de IA más avanzado para equipos de desarrollo. Automatiza tareas, coordina flujos y entrega resultados reales — en tiempo real.",
  keywords: ["swarm agent", "ia", "automatización", "agentes", "desarrollo"],
  authors: [{ name: "Appropia", url: "https://appropia.com" }],
  creator: "Appropia",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://swarm.appropia.com",
    title: "Swarm Agent — IA que trabaja mientras duermes",
    description:
      "El sistema de agentes de IA más avanzado para equipos de desarrollo.",
    siteName: "Swarm Agent",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swarm Agent",
    description: "IA que trabaja mientras duermes.",
    creator: "@appropia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)",  color: "#060d1f" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <Toaster position="bottom-right" theme="dark" richColors />
      </body>
    </html>
  );
}
