//const Dotenv = require('dotenv-webpack')
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
    target: 'serverless'
  }
}
