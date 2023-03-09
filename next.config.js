/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.pixabay.com",
      "upload.wikimedia.org",
      "cdn-icons-png.flaticon.com"
    ]
  }
}

module.exports = nextConfig
