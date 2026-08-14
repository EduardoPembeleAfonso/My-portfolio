//scrollState.ts
// Objeto mutável simples: evita re-render do React a cada frame de scroll.
// O ScrollTrigger escreve aqui, e o loop do R3F (useFrame) lê aqui.
export const scrollState = {
  progress: 0, // 0 a 1, atualizado pelo GSAP ScrollTrigger
  activeIndex: 0, // índice do projeto mais próximo, usado pela UI em HTML
};
