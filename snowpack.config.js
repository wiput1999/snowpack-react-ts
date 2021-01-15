/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  buildOptions: {
    baseUrl: 'https://wiput1999.github.io/snowpack-react-ts/'
  },
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
};
