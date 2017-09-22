/**
 * @fileOverview Test module 1 loaded, interface file
 * A work-around for parameter reassignment, sort of :p
 */
const module1 = require('./app');

const libraryName = 'Module1';

module.exports = (libraries) => {
  const library = {};
  library[libraryName] = {};
  Object.assign(library[libraryName], { init: module1.init });
  Object.assign(libraries, library);
};
