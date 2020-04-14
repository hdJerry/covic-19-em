const covid19ImpactEstimator = (data) => ({
    data,
    impact:{
        currentlyInfected: Math.floor(data.reportedCases * 10)
    },
    severeImpact : {
        currentlyInfected: Math.floor(data.reportedCases * 50)
    }
});


export default covid19ImpactEstimator;

// console.log(covid19ImpactEstimator({}));
