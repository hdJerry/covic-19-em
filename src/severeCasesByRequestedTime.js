import infectionByRequestTime from './infectionsByRequestedTime';



let severeCasesByRequestedTime = infectionByRequestTime(30);

severeCasesByRequestedTime.severeCasesByRequestedTime = severeCasesByRequestedTime.infectionByRequestTime.severeImpact * 0.15;


// severeCasesByRequestedTime = infectionByRequestTime;


console.log(severeCasesByRequestedTime);



export default severeCasesByRequestedTime;