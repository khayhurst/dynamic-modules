/**
 * @fileOverview This file is a helper for loading all modules within a specified directory.
 * @requires fs
 * @requires path
 */
const fs = require('fs');
const pathModule = require('path');

/**
 * This function returns an array of directories found within the specified path
 * @param {string} path - The full path to the directory where the modules are found
 */
const getLibraryDirectories = path =>
  fs.readdirSync(path)
    .filter(file => fs.statSync(pathModule.join(path, file)).isDirectory());

/**
 * Function that takes in the location and name of a directory containing libraries to load.
 * @param {string} start - The directory this module is being used. (e.g. __dirname).
 * @param {string} path - The path to where the library directory is found.
 * @param {string} directory - The directory where the libraries/modules can be found.
 */
module.exports = (start, path, directory) => {
  const libraries = {};
  const fullPath = pathModule.join(start, path, pathModule.sep, directory);
  const libraryDirectories = getLibraryDirectories(fullPath);

  libraryDirectories.forEach((library) => {
    require(`${fullPath}${pathModule.sep}${library}`)(libraries);
  });
  return libraries;
};
