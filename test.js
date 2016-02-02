/*!
 * stringify-github-short-urls <https://github.com/tunnckoCore/stringify-github-short-urls>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var stringify = require('./index')

test('should works as `stringify-github-short-url` but returns array', function (done) {
  test.deepEqual(stringify('assemble', 'verb'), ['assemble/verb'])
  test.deepEqual(stringify('assemble', 'verb', 'dev'), ['assemble/verb#dev'])
  test.deepEqual(stringify('jonschlinkert', 'micromatch', '2.4.7', true), ['jonschlinkert/micromatch@2.4.7'])
  test.deepEqual(stringify({owner: 'assemble', name: 'verb'}), ['assemble/verb'])
  test.deepEqual(stringify({owner: 'assemble', name: 'verb', branch: 'dev'}), ['assemble/verb#dev'])
  test.deepEqual(stringify({owner: 'gulpjs', name: 'gulp', branch: 'v3.8.1', npm: true}), ['gulpjs/gulp@v3.8.1'])
  done()
})

test('should accept array of objects or strings', function (done) {
  test.deepEqual(stringify([
    {owner: 'assemble', name: 'verb'},
    {owner: 'assemble', name: 'verb', branch: 'dev'}
  ]), ['assemble/verb', 'assemble/verb#dev'])
  done()
})
