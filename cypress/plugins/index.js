const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
module.exports = (on, config) => {
  on('file:preprocessor', createBundler())
}