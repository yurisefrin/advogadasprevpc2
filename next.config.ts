import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/salario-maternidade", destination: "/salario-maternidade.html" },
      ],
    };
  },
};

export default nextConfig;
