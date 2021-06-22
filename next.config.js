
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['31KQKhD9AstA56qWm1fJtc'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  