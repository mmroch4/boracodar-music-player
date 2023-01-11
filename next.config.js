const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'src', 'app'),
      path.join(__dirname, 'src', 'styles'),
      path.join(__dirname, 'src', 'pages'),
    ],
  },
  images: {
    domains: ['localhost', 'boracodar.miguelrocha.dev'],
  },
};

module.exports = nextConfig;
