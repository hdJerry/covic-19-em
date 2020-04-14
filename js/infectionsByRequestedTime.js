'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reportedCases2 = require('./reportedCases');

var _reportedCases3 = _interopRequireDefault(_reportedCases2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var infectionByRequestTime = function infectionByRequestTime(day, data) {
    var _reportedCases = (0, _reportedCases3.default)(data),
        impact = _reportedCases.impact,
        severeImpact = _reportedCases.severeImpact;

    var factor = Math.floor(10 * day / 30);

    var impactX = impact.currentlyInfected * Math.pow(2, factor);
    var severeImpactX = severeImpact.currentlyInfected * Math.pow(2, factor);

    return {
        reportedCases: (0, _reportedCases3.default)(data),
        infectionByRequestTime: {
            impact: impactX,
            severeImpact: severeImpactX
        }
    };
};

// infectionByRequestTime(30);


exports.default = infectionByRequestTime;

// infectionByRequestTime = {
//     impact,
//     severeImpact
// }


// export default infectionByRequestTime;