/**
 * stringify-github-short-urls <https://github.com/tunnckoCore/stringify-github-short-urls>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var stringify = require('./index');

describe('stringify-github-short-urls:', function() {
  describe('should throw:', function() {
    it('Error when no arguments', function(done) {
      assert.throws(stringify, Error);
      done()
    });

    it('TypeError when first argument isnt object or array', function(done) {
      function fixture() {
        stringify('some string')
      }
      assert.throws(fixture, TypeError);
      done();
    });
  });

  describe('should return empty string:', function(done) {
    it('when object not contain `user` property', function(done) {
      var actual = stringify({
        user: '',
        username: '',
        org: '',
        organization: '',
        repo: '',
        repository: '',
        branch: ''
      });
      var expected = '';

      assert.strictEqual(typeof actual, 'string');
      assert.strictEqual(actual, expected);
      done();
    });

    it('when empty object given', function(done) {
      var actual = stringify({});
      var expected = '';

      assert.strictEqual(typeof actual, typeof expected);
      assert.strictEqual(actual, expected);
      done();
    });
  });

  describe('array: multiple urls:', function() {
    it('should stringify user and repo:', function(done) {
      var urls = [{
        user: 'tunnckoCore',
        repo: 'npmls'
      }, {
        user: 'jonschlinkert',
        repo: 'is-glob'
      }];

      var actual = stringify(urls);
      var expected = 'tunnckoCore/npmls, jonschlinkert/is-glob';

      assert.strictEqual(typeof actual, typeof expected);
      assert.strictEqual(actual, expected);
      done();
    });

    it('should stringify user, repo and branch:', function(done) {
      var urls = [{
        user: 'tunnckoCore',
        repo: 'npmls',
        branch: 'feature'
      }, {
        user: 'jonschlinkert',
        repo: 'is-glob',
        branch: 'bugfix'
      }];

      var actual = stringify(urls);
      var expected = 'tunnckoCore/npmls#feature, jonschlinkert/is-glob#bugfix';

      assert.strictEqual(typeof actual, typeof expected);
      assert.strictEqual(actual, expected);
      done();
    });

    it('should stringify objects with options.sep {sep: \'\\n\'}', function(done) {
      var urls = [{
        user: 'tunnckoCore',
        repo: 'npmls',
        branch: 'feature'
      }, {
        user: 'jonschlinkert',
        repo: 'is-glob',
        branch: 'bugfix'
      }];

      var actual = stringify(urls, {sep: '\n'});
      var expected = 'tunnckoCore/npmls#feature\njonschlinkert/is-glob#bugfix';

      assert.strictEqual(typeof actual, typeof expected);
      assert.strictEqual(actual, expected);
      done();
    });

    it('should stringify objects with options.filter', function(done) {
      var urls = [{
        user: 'tunnckoCore',
        repo: 'npmls',
        branch: 'feature'
      }, {
        user: 'jonschlinkert',
        repo: 'is-glob',
        branch: 'bugfix'
      }];

      var actual = stringify(urls, {filter: '{user,repo}'});
      var expected = 'tunnckoCore/npmls, jonschlinkert/is-glob';

      assert.strictEqual(typeof actual, typeof expected);
      assert.strictEqual(actual, expected);
      done();
    });
  });

  describe('array: one url:', function() {
    it('should stringify user and repo:', function(done) {
      var urls = [{
        user: 'tunnckoCore',
        repo: 'npmls'
      }];

      var actual = stringify(urls);
      var expected = 'tunnckoCore/npmls';

      assert.strictEqual(typeof actual, typeof expected);
      assert.strictEqual(actual, expected);
      done();
    });

    it('should stringify user, repo and branch:', function(done) {
      var urls = [{
        user: 'tunnckoCore',
        repo: 'npmls',
        branch: 'feature'
      }];

      var actual = stringify(urls);
      var expected = 'tunnckoCore/npmls#feature';

      assert.strictEqual(typeof actual, typeof expected);
      assert.strictEqual(actual, expected);
      done();
    });
  });

  describe('object:', function() {
    it('should stringify user and repo:', function(done) {
      var urls = {
        user: 'tunnckoCore',
        repo: 'npmls'
      };

      var actual = stringify(urls);
      var expected = 'tunnckoCore/npmls';

      assert.strictEqual(typeof actual, typeof expected);
      assert.strictEqual(actual, expected);
      done();
    });

    it('should stringify user, repo and branch:', function(done) {
      var urls = {
        user: 'tunnckoCore',
        repo: 'npmls',
        branch: 'feature'
      };

      var actual = stringify(urls);
      var expected = 'tunnckoCore/npmls#feature';

      assert.strictEqual(typeof actual, typeof expected);
      assert.strictEqual(actual, expected);
      done();
    });
  });
});
