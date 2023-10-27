/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(glsl|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader']
    })

    return config
  }
}

module.exports = nextConfig
