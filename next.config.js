
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});
const withTM = require('next-transpile-modules')([
  '@ionic/react',
  '@ionic/core',
  '@stencil/core',
  'ionicons',
]);

module.exports = withPWA(withTM({
  basePath: '',
  images: {
    domains: ['i.pinimg.com'],
  },
  swcMinify: true,
}));
