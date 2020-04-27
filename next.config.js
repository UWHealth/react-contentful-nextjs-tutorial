//const Dotenv = require('dotenv-webpack')
//process.env.UV_THREADPOOL_SIZE = 8;
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  PHASE_EXPORT,
} = require('next/constants')

// const next_config = {
//   webpack: config => {
//     config.plugins = config.plugins || []

//     config.plugins = [
//       ...config.plugins,
//       // Read the .env file
//       new Dotenv({
//         systemvars: true,
//       }),
//     ]

//     return config
//   },
// }

//...next_config,

module.exports = (phase, { defaultConfig }) => {
  console.log(`Next.js Phase: ${phase}`)
  return {
    generateBuildId: async () => {
      return process.env.nextBuildId
    },
    exportTrailingSlash: false,
    target: 'serverless'
  }
}
