'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (entry) {
  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var b = (0, _browserify2.default)({
    cache: {},
    packageCache: {},
    fullPaths: true
  });

  b.add(entry);

  if (opts.watch) {
    b.plugin(_watchify2.default);
    b.on('update', function () {
      return generateBundle(b, entry, opts);
    });
    b.on('time', function (time) {
      return (0, _log2.default)(entry + ' ' + parseTime(time));
    });
  }

  if (opts.transforms) {
    (0, _parseTransforms2.default)(b, opts.transforms);
  }

  return generateBundle(b, entry, opts);
};

var _browserify = require('browserify');

var _browserify2 = _interopRequireDefault(_browserify);

var _watchify = require('watchify');

var _watchify2 = _interopRequireDefault(_watchify);

var _log = require('./log');

var _log2 = _interopRequireDefault(_log);

var _parseTransforms = require('./parseTransforms');

var _parseTransforms2 = _interopRequireDefault(_parseTransforms);

var _vinylSourceStream = require('vinyl-source-stream');

var _vinylSourceStream2 = _interopRequireDefault(_vinylSourceStream);

var _through = require('through2');

var _through2 = _interopRequireDefault(_through);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _gulp = require('gulp');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Parse time
 * @param  {Number} time [milliseconds]
 * @return {String}
 */
function parseTime(time) {
  if (time < 1000) {
    time = (time + 'ms').green;
  } else if (time < 5000) {
    time = (time + 'ms').yellow;
  } else {
    time = (time + 'ms').red;
  }

  return time;
}

/**
 * Finalize the bundle generation, used for both
 * browserify and watchify.
 * For now the basePath is the first folder of
 * the entry.
 * For now the dest folder is the dist folder.
 *
 * @param  {Object} b     [Browserify instance]
 * @param  {String} entry
 * @return {Object}       [Browserify stream]
 */

/**
 * Generate the Browserify stream
 *
 * @param  {String} entry
 * @param  {Object} opts  [Configuration options]
 * @return {Object}       [Browserify stream]
 */
function generateBundle(b, entry, opts) {
  return b.bundle().on('error', function (err) {
    console.log(('' + err).red);
  }).pipe((0, _vinylSourceStream2.default)(entry)).pipe(_through2.default.obj(function (file, enc, done) {
    file.base = _path2.default.resolve(opts.basePath);
    this.push(file);
    done();
  })).pipe((0, _gulp.dest)('dist'));
}
module.exports = exports['default'];