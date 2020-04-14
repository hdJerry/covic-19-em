'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _infectionsByRequestedTime = require('./infectionsByRequestedTime');

var _infectionsByRequestedTime2 = _interopRequireDefault(_infectionsByRequestedTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var severeCasesByRequestedTime = function severeCasesByRequestedTime(time, data) {

    var severeCasesByRequested = (0, _infectionsByRequestedTime2.default)(time, data);

    severeCasesByRequested.severeCasesByRequestedTime = severeCasesByRequested.infectionByRequestTime.severeImpact * 0.15;

    return severeCasesByRequested;
};

// severeCasesByRequestedTime = infectionByRequestTime;


// console.log(severeCasesByRequestedTime(30, {
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
// }));


exports.default = severeCasesByRequestedTime;