/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
}

const { i18n } = require("./next-i18next.config")

module.exports = {
  i18n
}

module.exports = nextConfig