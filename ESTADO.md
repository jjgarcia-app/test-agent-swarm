# Estado del Proyecto — test-agent-swarm

> Generado por orquestador MG | 2026-04-08  
> Issue de referencia: #16

---

## Propósito del repositorio

Landing page profesional para promocionar el **Agent Swarm** — sistema de agentes de IA orquestados. El objetivo es competir visualmente con grandes franquicias tecnológicas, usando animaciones premium y un diseño de alta calidad.

**Stack definido:** Next.js 14 · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion · Motion Primitives · Sonner · Vaul · Radix UI

---

## Estado por rama

| Rama | Base | Estado | Contenido real |
|------|------|--------|----------------|
| `main` | — | Solo README | `README.md` (61 bytes, descripción vacía) |
| `develop` | main | Sin cambios adicionales | Idéntico a main (SHA f3e8e8c) |
| `feat/setup-base` | develop | Scaffold completo | Next.js 14 + dependencias completas (ver abajo) |
| `feat/issue-1` | develop | Scaffold alternativo | Next.js 14 con nombre `swarm-agent-landing`, sin motion-primitives |
| `feat/hero-section` | develop | Sin implementación | Igual a develop |
| `feat/features-section` | develop | Sin implementación | Igual a develop |
| `feat/demo-section` | develop | Sin implementación | Igual a develop |
| `feat/design-system` | develop | Sin implementación | Igual a develop |
| `feat/pricing-cta` | develop | Sin implementación | Igual a develop |
| `feat/social-proof` | develop | Sin implementación | Igual a develop |
| `feat/seo-performance` | develop | Sin implementación | Igual a develop |

---

## Rama feat/setup-base — archivos presentes

```
package.json          → Next.js 14.2.29, framer-motion, motion-primitives, sonner, vaul, radix-ui
tsconfig.json
next.config.js / .mjs
tailwind.config.ts
postcss.config.js
.eslintrc.json
.prettierrc
```

Dependencias clave confirmadas en `package.json`:
- `next` 14.2.29
- `framer-motion` ^11.3.0
- `motion-primitives` ^0.4.0 — animaciones premium
- `sonner` ^1.5.0 — toasts (Emil Kowalski)
- `vaul` ^0.9.1 — drawers (Emil Kowalski)
- `@radix-ui/*` — primitivos accesibles
- `geist` ^1.3.0 — tipografía oficial Vercel
- `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`

---

## Issues activos (15 abiertos + 1 este doc)

| # | Título | Labels | Prioridad |
|---|--------|--------|-----------|
| #16 | [DOCS] Estado actual del proyecto | docs | — |
| #15 | FASE 6: Performance, SEO y deploy en Vercel | performance, deploy | — |
| #14 | FASE 5: Navbar + Footer + Layout global | ui, layout | — |
| #13 | FASE 4: Demo en vivo — terminal animada | ui, demo | — |
| #12 | FASE 3: Features Section | ui | — |
| #11 | FASE 2: Hero Section — animaciones premium | ui, animaciones | — |
| #10 | FASE 1: Design System — tokens, paleta | design | — |
| #9 | FASE 0: Setup — Next.js 14 + estructura base | setup | — |
| #8 | [PERF] SEO, Performance, Core Web Vitals | performance, seo | medium |
| #7 | [PRICING] Sección de precios y CTA final | frontend | medium |
| #6 | [SOCIAL] Testimonios y prueba social | frontend | medium |
| #5 | [DEMO] Demo visual en vivo del swarm | frontend | **high** |
| #4 | [FEATURES] Capacidades del Swarm Agent | frontend | medium |
| #3 | [HERO] Sección hero — animada e impactante | frontend | **high** |
| #2 | [DESIGN] Sistema de diseño completo | design | **high** |
| #1 | [SETUP] Scaffold Next.js 14 + Tailwind | setup | **high** |

---

## Problemas identificados

1. **Duplicidad de scaffolds:** `feat/setup-base` y `feat/issue-1` tienen configuraciones distintas (nombres de proyecto diferentes, versiones de Next.js diferentes). Hay que definir cuál es el canónico y descartar el otro.

2. **main vacío:** Ninguna rama ha sido mergeada a `main` ni a `develop`. Todo el trabajo existe solo en ramas feature que no divergen de develop.

3. **Issues duplicados:** Los issues #1–#8 y #9–#15 cubren el mismo trabajo con distinto esquema de nombres. Hay que hacer triaje.

4. **Rama feat/issue-1 vs feat/setup-base:** No está claro cuál es la fuente de verdad para el scaffold base.

---

## Próximos pasos recomendados

1. **Triaje de issues:** Definir cuál conjunto usar (#1-#8 o #9-#15) y cerrar los duplicados
2. **Elegir scaffold canónico:** `feat/setup-base` (con motion-primitives) es el más completo — se recomienda como base
3. **Merge feat/setup-base → develop** como primer hito
4. **Arrancar implementación** empezando por issue #2 (Design System) → #3 (Hero) → resto

---

*Documento mantenido por el orquestador MG del Agent Swarm v2.*
