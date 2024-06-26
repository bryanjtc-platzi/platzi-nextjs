module.exports = {
  output: "export",
  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  },
  async rewrites() {
    return [
      {
        source: '/avocado/:path*',
        destination: '/product/:path*',
      },
    ]
  },
}
