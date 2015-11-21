'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (msg) {
  var time = '[' + (0, _moment2.default)().format('HH:mm:ss').grey + ']';

  console.log(time, emblem, msg);
};

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emblem = '[' + 'JS'.yellow + ']';

module.exports = exports['default'];