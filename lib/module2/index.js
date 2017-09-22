/**
 * @fileOverview Test module 2 loaded, interface file
 * Example using parameter reassignment, can be frowned upon
 */
const module2 = require('./app');
const libraryName = 'Module2';

module.exports = (libraries) => {
  libraries[libraryName] = {
    init: module2.init };
};
