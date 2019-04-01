module.exports = {
  apps: [
    {
      name: 'api-client',
      script: './dist/index.js',
      watch: true,
      interpreter_args: '-r dotenv/config'
    }
  ]
}
