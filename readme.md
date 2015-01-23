## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Stringify an array or object of github shorthand url objects returned from [parse-github-short-url(s)][parse-github-short-url]

## Install
```bash
npm install stringify-github-short-urls
npm test
```


## Related
- [parse-github-short-urls][parse-github-short-urls]
- [github-short-url-regex][github-short-url-regex]
- [parse-github-short-url][parse-github-short-url]
- [stringify-github-short-url][stringify-github-short-url]


## API
> For more use-cases see the [tests](./test.js)

### [.stringifyGithubShortUrls](./index.js#L62)
> Stringify github shorthand url objects or array

- `<urls>` **{Object|Array}** required object or array to stringify
- `[opts]` **{Object}** options pass to [filter-object][filter-object]
- `returns` **{String}**

**Example:**

```js
var stringifyGithubShortUrls = require('stringify-github-short-urls');

var authors = [{
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
}];

// default separator is ', '
stringifyGithubShortUrls(authors, {sep: '\n'});

//=> results in:
// tunnckoCore/glob2fp#master
// jonschlinkert/template#feature
// visionmedia/mocha
```


### Filter with glob patterns

```js
stringifyGithubShortUrls(authors, {filter: '{user,repo}'});
//=> tunnckoCore/glob2fp, jonschlinkert/template

stringifyGithubShortUrls(authors, {filter: '{user,repo}', sep: '\n'});
//=> results in:
// tunnckoCore/glob2fp
// jonschlinkert/template
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014-2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/stringify-github-short-urls
[npmjs-img]: https://img.shields.io/npm/v/stringify-github-short-urls.svg?style=flat&label=stringify-github-short-urls

[coveralls-url]: https://coveralls.io/r/tunnckoCore/stringify-github-short-urls?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/stringify-github-short-urls.svg?style=flat

[license-url]: https://github.com/tunnckoCore/stringify-github-short-urls/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/stringify-github-short-urls
[travis-img]: https://img.shields.io/travis/tunnckoCore/stringify-github-short-urls.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/stringify-github-short-urls
[daviddm-img]: https://img.shields.io/david/tunnckoCore/stringify-github-short-urls.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/stringify-github-short-urls/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), January 23, 2015_

[filter-object]: https://github.com/jonschlinkert/filter-object
[github-short-url-regex]: https://github.com/regexps/github-short-url-regex
[parse-github-short-url]: https://github.com/tunnckoCore/parse-github-short-url
[parse-github-short-urls]: https://github.com/tunnckoCore/parse-github-short-urls
[stringify-github-short-url]: https://github.com/tunnckoCore/stringify-github-short-url