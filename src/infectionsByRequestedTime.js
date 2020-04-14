import reportedCases from './reportedCases';


const infectionByRequestTime = (day, data) => {
  const {
    impact,
    severeImpact
  } = reportedCases(data);
  const factor = Math.floor(
    (10 * day) / 30
  );

  const impactX = impact.currentlyInfected * (2 ** factor);
  const severeImpactX = severeImpact.currentlyInfected * (2 ** factor);

  return {
    reportedCases: reportedCases(data),
    infectionByRequestTime: {
      impact: impactX,
      severeImpact: severeImpactX
    }
  };
};

// infectionByRequestTime(30);


export default infectionByRequestTime;


// infectionByRequestTime = {
//     impact,
//     severeImpact
// }


// export default infectionByRequestTime;
