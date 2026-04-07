export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-6 px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-swarm-500/30 bg-swarm-500/10 px-4 py-1.5 text-sm text-swarm-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-swarm-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-swarm-500" />
          </span>
          Sistema activo — v2.0
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-swarm-gradient bg-clip-text text-transparent">
          Swarm Agent
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          IA que trabaja mientras duermes.
          <br />
          Scaffolding completado — construyendo el resto del sistema.
        </p>

        <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Issue #1 completado — Setup base listo
        </div>
      </div>
    </main>
  );
}
