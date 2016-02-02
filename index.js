/*!
 * stringify-github-short-urls <https://github.com/tunnckoCore/stringify-github-short-urls>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isArray = require('isarray')
var stringify = require('stringify-github-short-url')

/**
 * Stringify object or list of arguments to Github / npm shorthand.
 *
 * **Example**
 *
 * ```js
 * const gh = require('stringify-github-short-urls')
 *
 * // same as `stringify-github-short-url`
 * gh('jonschlinkert', 'micromatch')          // => ['jonschlinkert/micromatch']
 * gh('jonschlinkert', 'micromatch', 'dev')   // => ['jonschlinkert/micromatch#dev']
 * gh('gulpjs', 'gulp', 'v3.8.1', true)       // => ['gulpjs/gulp@v3.8.1']
 * gh({
 *   owner: 'tunnckoCore',
 *   name: 'parse-function'
 * }) // => ['tunnckoCore/parse-function']
 * gh({
 *   user: 'assemble',
 *   repo: 'assemble-core'
 * }) // => ['assemble/assemble-core']
 *
 * // or accept arrays of objects that are passed to `stringify-github-short-url`
 * gh([
 *   {owner: 'assemble', name: 'assemble-core'},
 *   {owner: 'jonschlinkert', name: 'micromatch', branch: 'dev'}
 * ]) // => ['assemble/assemble-core', 'jonschlinkert/micromatch#dev']
 * ```
 *
 * @name  stringifyGithubShortUrls
 * @param  {Array|String|Object} `<owner>` user or org string, or object, array of objects
 * @param  {String} `[name]` repo name
 * @param  {String} `[branch]` branch name
 * @param  {String} `[npm]` pass `true` if you want to generate npm shorthand
 * @return {String} generated shorthand
 * @api public
 */
module.exports = function stringifyGithubShortUrls (owner) {
  if ((!isArray(owner) && typeof owner === 'object') || arguments.length > 1) {
    return [stringify.apply(this, arguments)]
  }
  var urls = isArray(owner) ? owner : [owner]

  return urls.map(function (val) {
    return stringify(val)
  })
}
