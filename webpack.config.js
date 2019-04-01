const path = require('path')

const TerserPlugin = require('terser-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')

const babelOptions = {
  presets: [
    '@babel/typescript',
    ['@babel/preset-env', { targets: { node: true }, modules: false }]
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@prisma': './generated/prisma-client',
          '@nexus-prisma': './generated/nexus-prisma',
          '@settings': './src/settings',
          '@util': './src/util'
        }
      }
    ]
  ]
}

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  devtool: 'inline-source-map',
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder

  optimization: {
    minimizer: [new TerserPlugin()]
  },
  plugins: [new HardSourceWebpackPlugin(), new CheckerPlugin()],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              babelrc: false,
              babelCore: '@babel/core',
              babelOptions,
              cacheDirectory: '.cache',
              forceIsolatedModules: true,
              useBabel: true,
              useCache: true
            }
          }
        ],
        include: path.resolve(__dirname, './src')
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist')
  }
}
