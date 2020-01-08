import Config = require('webpack-chain')
import { pack as common } from './common.config'

const config = new Config()

config.mode('production')

common(config)

config.watch(true)
const devServer = config.devServer
devServer.inline(true)
devServer.port(9000)
devServer.hot(true)

module.exports = config.toConfig()
