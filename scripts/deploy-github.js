const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    // Branch to deploy on
    branch: 'master',
  },
{
    console.log('Deploy Complete!')
  }
)
