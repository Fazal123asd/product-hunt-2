// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withPWA  = require("next-pwa");
const runtimeCaching = require('next-pwa/cache')
const withPlugins = require('next-compose-plugins');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  reactStrictMode: true,
  images: {
    domains: ['rickandmortyapi.com'],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching
  },
};

const plugins = [[withPWA], [withNx]];

module.exports = withPlugins(plugins, nextConfig);
