// page.tsx
import dynamic from "next/dynamic";
import Sections from "@/components/Sections";

// O Canvas usa WebGL: precisa rodar só no cliente.
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0 z-0">
        <Scene />
      </div>

      <header className="fixed left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-5 md:px-16">
        <span className="font-display text-sm font-bold tracking-wide text-fog">
          eduardo<span className="text-glow">.dev</span>
        </span>
        <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-muted">
          <a href="https://www.linkedin.com/in/eduardo-pembele-afonso-b789441a7/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fog">
            LinkedIn
          </a>
          <a href="/Eduardo-new-cv-2026.pdf" download="Eduardo-CV-2026.pdf" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fog">
            Currículo
          </a>
        </nav>
      </header>

      <Sections />
    </main>
  );
}
