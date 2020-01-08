import Config = require("webpack-chain");

export function pack(config:Config) {
  ;['.tsx', '.ts', '.js', '.jsx'].forEach(ext=> {
    config.resolve.extensions.add(ext)
  })

  config.module.rule('babel-loader').test(/\.(j|t)sx?$/).use('babel-loader').loader('babel-loader')

  config.module.rule('ts-loader').test(/\.tsx?$/).use('ts-loader').loader('ts-loader')
}