/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ne bloque PAS le build en cas d'erreur ESLint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ne bloque PAS le build en cas d'erreur TypeScript
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
