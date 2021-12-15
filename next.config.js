const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER } = require('next/constants');


module.exports = (phase) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback = {
            // fs: false,
            // path: false,
            child_process: false,
            crypto: false,
            os: false,
            tty: false
          }
        }
        return config;
      },
      reactStrictMode: true,

      // target: 'node',
    }
  }

  return {

    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          // fs: false,
          // path: false,
          child_process: false,
          crypto: false,
          os: false,
          tty: false
        }
      }
      return config;
    },
    compress: false,



  }

}
