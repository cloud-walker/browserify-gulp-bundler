'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (pattern) {
  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var entries = _glob2.default.sync(pattern);

  if (entries.length < 1) {}
  switch (entries.length) {
    case 0:
      (0, _log2.default)('No bundle found'.yellow + '...');
      break;
    case 1:

    default:

  }

  return entries;
};

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

var _log = require('./log.js');

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateBundle(entry) {
  var b = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true
  });

  b.add(entry);

  return bundle(b, entry);
}

function bundle(b, entry) {
  return b.bundle();
}
module.exports = exports['default'];