import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.mds.yandex.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lesyanebo.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "yandex.kz",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.pokupkalux.ru",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.tildacdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "siveno.shop",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.siveno.store",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "siveno.store",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "wear.loc",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wear.loc",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
