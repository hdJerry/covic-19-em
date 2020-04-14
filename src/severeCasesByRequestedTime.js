import infectionByRequestTime from './infectionsByRequestedTime';

const severeCasesByRequestedTime = (time,data)=>{

    let severeCasesByRequested = infectionByRequestTime(time,data);
    
    severeCasesByRequested.severeCasesByRequestedTime = severeCasesByRequested.infectionByRequestTime.severeImpact * 0.15;

    return severeCasesByRequested;

}



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



export default severeCasesByRequestedTime;