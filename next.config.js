const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    MONGODB_URI: process.env.MONGODB_URI,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  },
  images: {
    domains: ['aui.atlassian.com', 'images.unsplash.com', 'res.cloudinary.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
