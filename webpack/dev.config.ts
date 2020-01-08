import Config = require('webpack-chain')
import { pack as common } from './common.config'
import path = require('path')

const config = new Config()

config.mode('development')

config.output.path(path.resolve('dist'))
config.output.filename('[name].js')

common(config)

module.exports = config.toConfig()