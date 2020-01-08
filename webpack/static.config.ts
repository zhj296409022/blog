import Config = require("webpack-chain")
import CopyWebpackPlugin = require('copy-webpack-plugin')
import path = require('path')
/**
 * 1. copy static directory
 * 2. analyze files in asset
 * @param config 
 */
export function pack(config: Config) {
  config.plugin('static').use(CopyWebpackPlugin, [
    [
      {
        from: path.resolve('public', 'static'),
        //copy to output dir.
        //output directory is difference between production and development, 
        //so do not use absolute path.
        to: 'static'
      }
    ]
  ])

  //pictures and fonts
  config.module.rule('static-files').test(/\.(png|jpg|gif|ttf|eot|svg|woff|woff2)$/)
    .use('url-loader').loader('url-loader')
}
