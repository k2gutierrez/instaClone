/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.pixabay.com",
      "upload.wikimedia.org"
    ]
  }
}

module.exports = nextConfig
