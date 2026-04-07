"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, GitBranch, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const STATS = [
  { label: "Tareas completadas", value: "12k+" },
  { label: "Repos gestionados", value: "48"   },
  { label: "Correos procesados", value: "3.2k" },
  { label: "Uptime",             value: "99.9%"},
];

const INTEGRATIONS = [
  { icon: Mail,      label: "Gmail"  },
  { icon: GitBranch, label: "GitHub" },
  { icon: Zap,       label: "Jira"   },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16">

      {/* Badge */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
          </span>
          Swarm activo — {new Date().toLocaleDateString("es-VE", { weekday: "long" })}
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="max-w-4xl text-center text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
      >
        <span className="text-white">Tu empresa,</span>
        <br />
        <span className="text-gradient">automatizada por IA</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
        className="mt-6 max-w-2xl text-center text-lg text-white/50 sm:text-xl leading-relaxed"
      >
        Un swarm de agentes de IA que trabajan en paralelo: gestionan correos,
        issues de código, reportes y decisiones — mientras tú te enfocas en lo
        que importa.
      </motion.p>

      {/* CTAs */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.3}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <button
          className={cn(
            "group relative inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold",
            "bg-brand-600 text-white shadow-glow",
            "hover:bg-brand-500 hover:shadow-glow-lg transition-all duration-300"
          )}
        >
          Empieza gratis
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>

        <button
          className={cn(
            "inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold",
            "glass text-white/80",
            "hover:text-white hover:bg-white/10 transition-all duration-300"
          )}
        >
          Ver demo en vivo
        </button>
      </motion.div>

      {/* Integrations */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.4}
        className="mt-12 flex items-center gap-3 text-sm text-white/30"
      >
        <span>Conectado con</span>
        {INTEGRATIONS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-white/50"
          >
            <Icon className="h-3.5 w-3.5" />
            <span>{label}</span>
          </div>
        ))}
        <span>y más</span>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.5}
        className="mt-16 grid grid-cols-2 gap-px sm:grid-cols-4 w-full max-w-3xl"
      >
        {STATS.map(({ label, value }) => (
          <div
            key={label}
            className="glass flex flex-col items-center py-6 px-4 first:rounded-l-2xl last:rounded-r-2xl"
          >
            <span className="text-2xl font-bold text-white">{value}</span>
            <span className="mt-1 text-xs text-white/40 text-center">{label}</span>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/20">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}