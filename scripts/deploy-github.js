const ghpages = require('gh-pages')

// replace with your repo url
var repo_url="https://github.com/gatsbyjs/gatsby/tree/master/examples";
ghpages.publish(
  'public',
  {
    // Branch to deploy on
    branch: 'master',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
