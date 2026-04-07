import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Agent Swarm — Automatización inteligente con IA",
    template: "%s | Agent Swarm",
  },
  description:
    "Un swarm de agentes de IA que trabajan en paralelo para gestionar tu empresa: correos, código, issues, reportes y más — de forma autónoma.",
  keywords: [
    "AI agents",
    "agent swarm",
    "automatización IA",
    "inteligencia artificial",
    "orquestador",
    "Claude",
  ],
  authors: [{ name: "Appropia" }],
  creator: "Appropia",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://agentswarm.appropia.com",
    siteName: "Agent Swarm",
    title: "Agent Swarm — Automatización inteligente con IA",
    description:
      "Un swarm de agentes de IA que trabajan en paralelo para gestionar tu empresa.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agent Swarm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Swarm",
    description: "Automatización inteligente con IA",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
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
      <body className="min-h-screen font-sans antialiased">
        {children}
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "rgba(15,15,26,0.9)",
              border: "1px solid rgba(99,102,241,0.3)",
              backdropFilter: "blur(12px)",
            },
          }}
        />
      </body>
    </html>
  );
}