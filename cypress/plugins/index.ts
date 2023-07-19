import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
module.exports = (on) => {
  on('file:preprocessor', createBundler())
}
