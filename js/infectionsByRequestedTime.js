'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reportedCases = require('./reportedCases');

var _reportedCases2 = _interopRequireDefault(_reportedCases);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var impact = _reportedCases2.default.impact,
    severeImpact = _reportedCases2.default.severeImpact;


console.log();

var infectionByRequestTime = function infectionByRequestTime(day) {

    var factor = Math.floor(10 * day / 30);

    var impactX = impact.currentlyInfected * Math.pow(2, factor);
    var severeImpactX = severeImpact.currentlyInfected * Math.pow(2, factor);

    return {
        reportedCases: _reportedCases2.default,
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