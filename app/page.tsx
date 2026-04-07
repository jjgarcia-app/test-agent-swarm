import { HeroSection } from "@/components/sections/hero-section";

// Secciones se importan progresivamente en cada fase
// import { FeaturesSection } from "@/components/sections/features-section";
// import { DemoSection } from "@/components/sections/demo-section";
// import { SocialProofSection } from "@/components/sections/social-proof-section";
// import { PricingSection } from "@/components/sections/pricing-section";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* Grid background global */}
      <div className="fixed inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="fixed inset-0 bg-dots opacity-20 pointer-events-none" />

      {/* Glow orbs de fondo */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] 
                      bg-brand-600/10 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="fixed top-1/2 -left-64 w-[500px] h-[500px] 
                      bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <HeroSection />

      {/* Próximas secciones: Features, Demo, Social Proof, Pricing */}
    </main>
  );
}