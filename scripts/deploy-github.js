const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    // Branch to deploy on
    branch: '',
    // Link to GitHub Repo
    repo: '',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
