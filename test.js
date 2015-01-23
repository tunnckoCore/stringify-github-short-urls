/**
 * stringify-github-short-urls <https://github.com/tunnckoCore/stringify-github-short-urls>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var stringifyGithubShortUrls = require('./index');

// describe('stringify-github-short-urls:', function() {
//   // body
// });

var res = stringifyGithubShortUrls([{
  user: 'tunnckoCore',
  username: 'tunnckoCore',
  org: 'tunnckoCore',
  organization: 'tunnckoCore',
  repo: 'glob2fp',
  repository: 'glob2fp',
  branch: 'master'
}, {
  user: 'jonschlinkert',
  username: 'jonschlinkert',
  org: 'jonschlinkert',
  organization: 'jonschlinkert',
  repo: 'template',
  repository: 'template',
  branch: 'feature'
}, {
  user: 'visionmedia',
  username: 'visionmedia',
  org: 'visionmedia',
  organization: 'visionmedia',
  repo: 'mocha',
  repository: 'mocha',
  branch: ''
}], {filter: 'false', sep: '\n'});
console.log(res);
