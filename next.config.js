const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      serverRuntimeConfig: {
        mongodb_username: process.env.MONGODB_USERNAME,
        mongodb_password: process.env.MONGODB_PASSWORD,
        mongodb_clustername: process.env.MONGODB_CLUSTERNAME,
        mongodb_database: process.env.MONGODB_DATABASE+'-dev',
      },
    };
  }

  return {
    serverRuntimeConfig: {
      mongodb_username: process.env.MONGODB_USERNAME,
      mongodb_password: process.env.MONGODB_PASSWORD,
      mongodb_clustername: process.env.MONGODB_CLUSTERNAME,
      mongodb_database: process.env.MONGODB_DATABASE,
    },
  };
};
