'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (pattern) {
  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var entries = _glob2.default.sync(pattern);

  if (!opts.basePath) {
    Object.assign(opts, {
      basePath: (0, _glob2base2.default)(new _glob2.default.Glob(pattern))
    });
  }

  if (!opts.pipes) {
    (0, _log2.default)('No pipes option found'.yellow + '...');
  }

  switch (entries.length) {
    case 0:
      (0, _log2.default)('No bundle found'.yellow + '...');
      return false;
    case 1:
      return (0, _generateStream2.default)(entries[0], opts);
    default:
      var streams = entries.map(function (entry) {
        return (0, _generateStream2.default)(entry, opts);
      });
      return _eventStream2.default.merge(streams);
  }
};

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _glob2base = require('glob2base');

var _glob2base2 = _interopRequireDefault(_glob2base);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

var _log = require('./log');

var _log2 = _interopRequireDefault(_log);

var _generateStream = require('./generateStream');

var _generateStream2 = _interopRequireDefault(_generateStream);

var _eventStream = require('event-stream');

var _eventStream2 = _interopRequireDefault(_eventStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/**
 * @param  {String} pattern [Glob pattern]
 * @param  {Object} opts    [Configuration options]
 * @return {Mixed}         [Browserify stream or false]
 */