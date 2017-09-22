/**
 * @fileOverview This is the logic for the main application.
 * @requires bin
 */
const helpers = require('./bin');
const libraryLoader = helpers.libraryLoader;

module.exports = () => {
  const libraries = libraryLoader(__dirname, '.', 'lib');
  Object.keys(libraries).forEach(library =>
    libraries[library].init());
};
