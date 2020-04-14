'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _estimator = require('./estimator');

var _estimator2 = _interopRequireDefault(_estimator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reportedCases = function reportedCases(data) {
    var result = (0, _estimator2.default)(data);

    return result;
};

// let r = reportedCases({
//     region: {
//         name: "Africa",
//         avgAge: 19.7,
//         avgDailyIncomeInUSD: 5,
//         avgDailyIncomePopulation: 0.71
//     },
//     periodType: "days",
//     timeToElapse: 58,
//     reportedCases: 674,
//     population: 66622705,
//     totalHospitalBeds: 1380614
// });

// console.log(r);


exports.default = reportedCases;