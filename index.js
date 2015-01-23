/**
 * stringify-github-short-urls <https://github.com/tunnckoCore/stringify-github-short-urls>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var stringify = require('stringify-github-short-url');
var _NAME = 'stringify-github-short-urls:'

/**
 * > Stringify github shorthand url objects or array
 *
 * **Example:**
 *
 * ```js
 * var stringifyGithubShortUrls = require('stringify-github-short-urls');
 *
 * var urls = [{
 *   user: 'tunnckoCore',
 *   username: 'tunnckoCore',
 *   org: 'tunnckoCore',
 *   organization: 'tunnckoCore',
 *   repo: 'glob2fp',
 *   repository: 'glob2fp',
 *   branch: 'master'
 * }, {
 *   user: 'jonschlinkert',
 *   username: 'jonschlinkert',
 *   org: 'jonschlinkert',
 *   organization: 'jonschlinkert',
 *   repo: 'template',
 *   repository: 'template',
 *   branch: 'feature'
 * }, {
 *   user: 'visionmedia',
 *   username: 'visionmedia',
 *   org: 'visionmedia',
 *   organization: 'visionmedia',
 *   repo: 'mocha',
 *   repository: 'mocha',
 *   branch: ''
 * }];
 *
 * // default separator is ', '
 * stringifyGithubShortUrls(urls, {sep: '\n'});
 *
 * //=> results in
 * // tunnckoCore/glob2fp#master
 * // jonschlinkert/template#feature
 * // visionmedia/mocha
 * ```
 *
 * @name stringifyGithubShortUrls
 * @param  {Object|Array} `<urls>`
 * @param  {Object} `[opts]`
 * @return {String}
 * @api public
 */
module.exports = function stringifyGithubShortUrls(urls, opts) {
  if (!urls) {
    throw new Error('%s should have at least 1 arguments', _NAME);
  }

  if (typeOf(urls) !== 'object' && typeOf(urls) !== 'array') {
    throw new TypeError('%s expect `urls` be object or array', _NAME);
  }

  opts = opts || {}
  urls = !Array.isArray(urls) ? [urls] : urls;

  var filter = opts.filter ? require('filter-object') : false;

  var res = urls.map(function(ele) {
    if (filter) {
      return stringify(filter(ele, opts.filter));
    }
    return stringify(ele);
  });

  return res.join(opts.sep || ', ');
};


/**
 * Get correct type of value
 *
 * @param  {*} `val`
 * @return {String}
 * @api private
 */
function typeOf(val) {
  if (typeof val !== 'object') {
    return typeof val;
  }

  if (Array.isArray(val)) {
    return 'array';
  }

  return {}.toString(val).slice(8, -1).toLowerCase();
}
