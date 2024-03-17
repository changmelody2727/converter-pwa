import pkg from "next-pwa";

const withPWA = pkg({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPWA(nextConfig);
