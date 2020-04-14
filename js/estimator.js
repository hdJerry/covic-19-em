"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var covid19ImpactEstimator = function covid19ImpactEstimator(data) {
    return {
        data: data,
        impact: {
            currentlyInfected: Math.floor(data.reportedCases * 10)
        },
        severeImpact: {
            currentlyInfected: Math.floor(data.reportedCases * 50)
        }
    };
};

exports.default = covid19ImpactEstimator;

// console.log(covid19ImpactEstimator({}));