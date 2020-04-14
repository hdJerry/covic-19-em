import reportedCases from './reportedCases';

let {
    impact,
    severeImpact
} = reportedCases;

console.log();


const infectionByRequestTime = (day) => {

    let factor = Math.floor(
        (10 * day) / 30
    );

    let impactX = impact.currentlyInfected * (Math.pow(2, factor))
    let severeImpactX = severeImpact.currentlyInfected * (Math.pow(2, factor));

    return {
        reportedCases,
        infectionByRequestTime:{
            impact: impactX,
            severeImpact: severeImpactX
        }
    };


}

// infectionByRequestTime(30);


export default infectionByRequestTime;








// infectionByRequestTime = {
//     impact,
//     severeImpact
// }


// export default infectionByRequestTime;




