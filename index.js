 import {
  displayMyEquityGapsMajorGaps,
  displayStudentProgressUnits,
  displayGoalTrajectories,
  displayWhatPathDoTheyFollow,
  displayEnrollingAndGraduating
} from "./charts.js" 
 
 function displayGraph(graphId) {
    if(graphId === 1){
     
      displayMyEquityGapsMajorGaps(chartPlaceholder);
    } 
    else if(graphId === 2){
     
      displayStudentProgressUnits(chartPlaceholder);
    }
    else if(graphId === 3){
      
      displayGoalTrajectories(chartPlaceholder);
    }
    else if(graphId === 4){
      
      displayWhatPathDoTheyFollow(chartPlaceholder);
    }
    else if(graphId === 5){
      
      displayEnrollingAndGraduating(chartPlaceholder);
    }
    else {
      chartPlaceholder.appendChild(iframeElement);
    }
  }