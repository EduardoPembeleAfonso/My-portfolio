"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import { scrollState } from "@/lib/scrollState";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function Sections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Progresso global de 0 a 1 ao longo de todo o container -> alimenta a câmera 3D
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          scrollState.progress = self.progress;
        },
      });

      // Fade in/out de cada painel de texto conforme ele entra/sai da tela
      gsap.utils.toArray<HTMLElement>(".project-panel").forEach((panel) => {
        gsap.fromTo(
          panel,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 65%",
              end: "top 25%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative z-10">
      {projects.map((project) => {
        const fallbackText = {
          pt: "Portfólio",
          en: "Portfolio",
          es: "Portafolio"
        }[language];

        return (
          <section
            key={project.id}
            className="relative flex min-h-screen w-full items-center px-6 md:px-16"
          >
            <div className="project-panel max-w-lg invisible">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-glow">
                {project.tech.length ? project.tech.join(" · ") : fallbackText}
              </p>
              <h2 className="font-display text-4xl font-bold leading-tight text-fog md:text-5xl">
                {project.title[language]}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg">
                {project.description[language]}
              </p>
              {project.links && project.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-4">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border-b border-glow font-mono text-sm text-glow transition-opacity hover:opacity-70"
                    >
                      {link.label[language]}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
