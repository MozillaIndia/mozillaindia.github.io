const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'git@github.com:harshil1712/Mozilla-India-Gatsby.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
