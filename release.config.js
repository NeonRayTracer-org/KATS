/* eslint-disable no-useless-escape */
module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: false
      }
    ],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        message:
          // eslint-disable-next-line no-template-curly-in-string
          'Release <%= nextRelease.version %> - <%= new Date().toLocaleDateString("en-US", {year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" }) %> [skip ci]\n\n<%= nextRelease.notes %>'
      }
    ]
  ],
  preset: 'angular'
}
