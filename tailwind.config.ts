import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#150F1C", // fundo, quase preto com base violeta
        fog: "#EDEAF5", // texto principal
        muted: "#8B8299", // texto secundário / bordas
        glow: "#C6F135", // acento assinatura (o "cometa" que segue o scroll)
        ember: "#FF6F59", // acento secundário, uso raro (hover)
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};

export default config;
