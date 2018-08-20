module.exports = function (api) {
  api.cache(true)
  const presets = [
    '@babel/preset-env',
    'babel-preset-react-native'
  ]
  const plugins = [
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-transform-modules-commonjs'
  ]

  return {
    presets,
    plugins
  }
}
