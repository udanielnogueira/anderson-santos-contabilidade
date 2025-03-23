import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Evita warnings de Hydration
  // Garante compatibilidade total com styled-components
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
