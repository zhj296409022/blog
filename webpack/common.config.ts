import Config = require("webpack-chain")
import path = require('path')
import { pack as code } from './code.config'
import { pack as staticPack } from './static.config'
/**
 * common pack config
 * @param config 
 */
export function pack(config: Config) {

  code(config)

  staticPack(config)

  //alias
  config.resolve.alias.set('src', path.resolve('src'))
  config.resolve.alias.set('@', path.resolve('src'))
  config.resolve.alias.set('lib', path.resolve('lib'))

  config.entry('index').add(path.resolve('src', 'index.ts'))
}
