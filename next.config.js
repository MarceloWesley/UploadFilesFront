/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "conteudo.imguol.com.br",
      },
      {
        protocol: "https",
        hostname: "cdn.icon-icons.com",
      },
    ],
  },
};

module.exports = nextConfig;
