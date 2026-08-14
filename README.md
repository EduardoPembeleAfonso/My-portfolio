# Portfólio 3D — starter

Esqueleto de portfólio animado inspirado na linguagem visual de sites como o
[Messenger da Abeto](https://messenger.abeto.co/): câmera que se move por uma
cena 3D conforme você rola a página, com nós low-poly representando cada
projeto e um "cometa" (assinatura visual) que acompanha o progresso do scroll.

Stack: **Next.js 14 (App Router) + TypeScript + React Three Fiber + drei +
GSAP ScrollTrigger + Tailwind**.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Estrutura

```
src/
  app/
    layout.tsx      -> fontes (Space Grotesk, Inter, JetBrains Mono) e metadata
    page.tsx         -> junta o Canvas 3D (fixo) com as seções de texto
    globals.css       -> reset + acessibilidade (reduced-motion, focus-visible)
  components/
    Scene.tsx         -> Canvas, luzes, estrelas, pós-processamento (bloom)
    ProjectNode.tsx    -> geometria 3D de cada projeto (auto-rotação)
    CameraRig.tsx      -> curva Catmull-Rom que a câmera percorre no scroll
    Sections.tsx       -> painéis de texto em HTML + ScrollTrigger
  data/
    projects.ts        -> ⚠️ EDITE AQUI: seus projetos, textos e posições 3D
  lib/
    scrollState.ts     -> ponte simples entre o scroll (GSAP) e o loop 3D (R3F)
```

## Onde editar primeiro

1. **`src/data/projects.ts`** — troque título, descrição, tecnologias e link
   de cada projeto. O array `position` controla onde cada nó fica no espaço
   3D (e por consequência, por onde a câmera passa).
2. **`tailwind.config.ts`** — paleta de cores (`ink`, `fog`, `glow`, `ember`)
   e fontes. Foi escolhida uma paleta violeta-escuro + verde-limão para fugir
   do "preto + neon genérico"; troque pela sua identidade.
3. **`src/components/ProjectNode.tsx`** — troque as geometrias primitivas por
   modelos `.glb` reais quando tiver assets (ver seção abaixo).

## Próximos passos sugeridos

- **Modelos 3D próprios**: exporte de Blender em `.glb`, comprima com
  [gltf-transform](https://gltf-transform.dev/) ou Draco, e carregue com
  `useGLTF` do `@react-three/drei` no lugar das geometrias primitivas.
- **Cel-shading**: para o visual "cartoon" tipo Abeto, troque
  `meshStandardMaterial` por um material de toon shading (`meshToonMaterial`
  do Three.js, com uma `gradientMap` de 3-4 tons) e adicione contorno com
  `@react-three/drei`'s `<Outlines />`.
- **Loading**: adicione um `<Suspense>` com uma tela de carregamento antes do
  `<Canvas>` ficar pronto (importante se carregar modelos `.glb` pesados).
- **Mobile**: teste o `dpr` e a contagem de partículas em `<Stars />` em
  aparelhos reais — é o primeiro lugar para cortar custo de GPU.
- **Performance**: se a cena crescer, revise `three-mesh-bvh` (usado no
  Messenger) para raycasting rápido, e `<Bloom />`/`<Vignette />` custam GPU —
  desative em dispositivos fracos com um hook `useDeviceCapability`.

## Créditos de inspiração

Direção de câmera + linguagem de "planeta pequeno" inspiradas no projeto
[Messenger, da Abeto](https://messenger.abeto.co/) — vale ler o making-of
deles na Awwwards e no Communication Arts para entender as decisões técnicas
por trás do original.
