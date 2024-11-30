 import {
  displayMyEquityGapsMajorGaps,
  displayStudentProgressUnits,
  displayGoalTrajectories,
  displayWhatPathDoTheyFollow,
  displayEnrollingAndGraduating
} from "./charts.js" 
 
 function displayGraph(graphId) {
    if(graphId === 1){
      // done
      displayMyEquityGapsMajorGaps(chartPlaceholder);
    } 
    else if(graphId === 2){
      // to-do
      displayStudentProgressUnits(chartPlaceholder);
    }
    else if(graphId === 3){
      // done
      displayGoalTrajectories(chartPlaceholder);
    }
    else if(graphId === 4){
      // done
      displayWhatPathDoTheyFollow(chartPlaceholder);
    }
    else if(graphId === 5){
      // to-do
      displayEnrollingAndGraduating(chartPlaceholder);
    }
    else {
      chartPlaceholder.appendChild(iframeElement);
    }
  }