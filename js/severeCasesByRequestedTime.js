'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _infectionsByRequestedTime = require('./infectionsByRequestedTime');

var _infectionsByRequestedTime2 = _interopRequireDefault(_infectionsByRequestedTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var severeCasesByRequestedTime = (0, _infectionsByRequestedTime2.default)(30);

severeCasesByRequestedTime.severeCasesByRequestedTime = severeCasesByRequestedTime.infectionByRequestTime.severeImpact * 0.15;

// severeCasesByRequestedTime = infectionByRequestTime;


console.log(severeCasesByRequestedTime);

exports.default = severeCasesByRequestedTime;