import reportedCases from './reportedCases';





const infectionByRequestTime = (day,data) => {
    
    let {
        impact,
        severeImpact
    } = reportedCases(data);
    let factor = Math.floor(
        (10 * day) / 30
    );

    let impactX = impact.currentlyInfected * (Math.pow(2, factor))
    let severeImpactX = severeImpact.currentlyInfected * (Math.pow(2, factor));

    return {
        reportedCases:reportedCases(data),
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




