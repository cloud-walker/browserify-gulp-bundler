'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (b, transforms) {
	if (typeof transforms === 'string' || transforms instanceof String) {
		b.transform(transforms);
		return;
	}

	if (Array.isArray(transforms)) {
		transforms.forEach(function (transform) {
			b.transform(transform);
		});
		return;
	}

	(0, _log2.default)('Transform option not valid'.yellow);
	return;
};

var _log = require('./log');

var _log2 = _interopRequireDefault(_log);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];