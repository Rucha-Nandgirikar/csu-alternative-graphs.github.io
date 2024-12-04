
// Alternate_Chart: 1
// export function displayMyEquityGapsMajorGaps(chartPlaceholder) {

//   const canvasElement = document.createElement("canvas");
//   canvasElement.id = "MyEquityGaps";
//   canvasElement.style.border = "1px solid black";
//   canvasElement.style.padding = "10px";
//   canvasElement.style.margin = "auto";
//   canvasElement.style.height = "400px";
//   canvasElement.style.width = "600px";
//   // chartPlaceholder.appendChild(canvasElement);

//   const url1 = "https://studentresearch.dashboards.calstate.edu/api/equity-gaps/my-equity-gaps/major-gaps";
//   const params1 = {
//     'campus': "Pomona",
//     'student_type': "freshmen",
//     'outcome': "6th-Year Graduation",
//     'gap_type': "firstgen",
//   };
//   // Construct the query string from the parameters
//   const queryString1 = new URLSearchParams(params1).toString();

//   // Append the query string to the URL
//   const fullUrl1 = `${url1}?${queryString1}`;

//   fetch(fullUrl1, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(response => response.json())
//     .then(data => {

//       const chartWrapper = document.createElement("div");
//       chartWrapper.style.display = "flex";
//       chartWrapper.style.height = "50%";
//       chartWrapper.style.width = "35%";
//       chartWrapper.style.marginLeft = "15%";

//       const canvasElementMajorAtEntry = document.createElement("canvas");
//       canvasElementMajorAtEntry.id = "majorAtEntryChart";
//       canvasElementMajorAtEntry.width = "50px";  // Set width (optional)
//       canvasElementMajorAtEntry.height = "100px"; // Set height (optional)
//       chartWrapper.appendChild(canvasElementMajorAtEntry);

//       const canvasElementLastMajorHeld = document.createElement("canvas");
//       canvasElementLastMajorHeld.id = "lastMajorHeldChart";
//       canvasElementLastMajorHeld.width = "50px";  // Set width (optional)
//       canvasElementLastMajorHeld.height = "100px"; // Set height (optional)
//       chartWrapper.appendChild(canvasElementLastMajorHeld);

//       chartPlaceholder.appendChild(chartWrapper);

//       // Extract data for "Major At Entry"
//       const majorAtEntryLabels = [data[0].major1, data[0].major2, data[0].major3, data[0].major4, data[0].major5];
//       const majorAtEntryData = [data[0].n_major1_addtl, data[0].n_major2_addtl, data[0].n_major3_addtl, data[0].n_major4_addtl, data[0].n_major5_addtl];
//       const majorAtEntryTotal = majorAtEntryData.reduce((sum, value) => sum + value, 0);

//       // Extract data for "Last Major Held"
//       const lastMajorHeldLabels = [data[1].major1, data[1].major2, data[1].major3, data[1].major4, data[1].major5];
//       const lastMajorHeldData = [data[1].n_major1_addtl, data[1].n_major2_addtl, data[1].n_major3_addtl, data[1].n_major4_addtl, data[1].n_major5_addtl];
//       const lastMajorHeldTotal = lastMajorHeldData.reduce((sum, value) => sum + value, 0);

//       // Plot "Major At Entry" Bar Chart
//       const ctx1 = document.getElementById('majorAtEntryChart').getContext('2d');
//       new Chart(ctx1, {
//         type: 'bar',
//         data: {
//           labels: majorAtEntryLabels,
//           datasets: [{
//             label: 'Number of Students',
//             data: majorAtEntryData,
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1
//           }]
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//             title: {
//               display: true,
//               text: `By Major at Entry (Total: ${majorAtEntryTotal} Students)`
//             }
//           },
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           }
//         }
//       });

//       // Plot "Last Major Held" Bar Chart
//       const ctx2 = document.getElementById('lastMajorHeldChart').getContext('2d');
//       new Chart(ctx2, {
//         type: 'bar',
//         data: {
//           labels: lastMajorHeldLabels,
//           datasets: [{
//             label: 'Number of Students',
//             data: lastMajorHeldData,
//             backgroundColor: 'rgba(153, 102, 255, 0.2)',
//             borderColor: 'rgba(153, 102, 255, 1)',
//             borderWidth: 1
//           }]
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//             title: {
//               display: true,
//               text: `By Major Last Held (Total: ${lastMajorHeldTotal} Students)`
//             }
//           },
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           }
//         }
//       });
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }


// export function displayMyEquityGapsMajorGaps(chartPlaceholder) {

//   // Create a parent canvas element
//   const canvasElement = document.createElement("div");
//   canvasElement.id = "MyEquityGaps";
//   canvasElement.style.border = "1px solid black";
//   canvasElement.style.padding = "10px";
//   canvasElement.style.margin = "auto";
//   canvasElement.style.height = "400px";
//   canvasElement.style.width = "800px";
//   canvasElement.style.display = "flex";
//   canvasElement.style.flexDirection = "column";
//   canvasElement.style.alignItems = "center";

//   // Append canvasElement to chartPlaceholder
//   chartPlaceholder.appendChild(canvasElement);

//   // Add title to the canvas element
//   const titleElement = document.createElement("h3");
//   titleElement.innerText = "Close the Gap";
//   titleElement.style.textAlign = "center";
//   canvasElement.appendChild(titleElement);

//   // Create a wrapper for the charts
//   const chartWrapper = document.createElement("div");
//   chartWrapper.style.display = "flex";
//   chartWrapper.style.justifyContent = "space-around";
//   chartWrapper.style.width = "100%";
//   canvasElement.appendChild(chartWrapper);

//   // Create individual canvas elements for the charts
//   const canvasElementMajorAtEntry = document.createElement("canvas");
//   canvasElementMajorAtEntry.id = "majorAtEntryChart";
//   canvasElementMajorAtEntry.style.height = "300px";
//   canvasElementMajorAtEntry.style.width = "400px";
//   chartWrapper.appendChild(canvasElementMajorAtEntry);

//   const canvasElementLastMajorHeld = document.createElement("canvas");
//   canvasElementLastMajorHeld.id = "lastMajorHeldChart";
//   canvasElementLastMajorHeld.style.height = "300px";
//   canvasElementLastMajorHeld.style.width = "400px";
//   chartWrapper.appendChild(canvasElementLastMajorHeld);

//   // Fetch data and plot the charts
//   const url1 = "https://studentresearch.dashboards.calstate.edu/api/equity-gaps/my-equity-gaps/major-gaps";
//   const params1 = {
//     'campus': "Pomona",
//     'student_type': "freshmen",
//     'outcome': "6th-Year Graduation",
//     'gap_type': "firstgen",
//   };
//   const queryString1 = new URLSearchParams(params1).toString();
//   const fullUrl1 = `${url1}?${queryString1}`;

//   fetch(fullUrl1, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(response => response.json())
//     .then(data => {

//       // Extract data for "Major At Entry"
//       const majorAtEntryLabels = [data[0].major1, data[0].major2, data[0].major3, data[0].major4, data[0].major5];
//       const majorAtEntryData = [data[0].n_major1_addtl, data[0].n_major2_addtl, data[0].n_major3_addtl, data[0].n_major4_addtl, data[0].n_major5_addtl];
//       const majorAtEntryTotal = majorAtEntryData.reduce((sum, value) => sum + value, 0);

//       // Extract data for "Last Major Held"
//       const lastMajorHeldLabels = [data[1].major1, data[1].major2, data[1].major3, data[1].major4, data[1].major5];
//       const lastMajorHeldData = [data[1].n_major1_addtl, data[1].n_major2_addtl, data[1].n_major3_addtl, data[1].n_major4_addtl, data[1].n_major5_addtl];
//       const lastMajorHeldTotal = lastMajorHeldData.reduce((sum, value) => sum + value, 0);

//       // Plot "Major At Entry" Bar Chart
//       const ctx1 = document.getElementById('majorAtEntryChart').getContext('2d');
//       new Chart(ctx1, {
//         type: 'bar',
//         data: {
//           labels: majorAtEntryLabels,
//           datasets: [{
//             label: 'Number of Students',
//             data: majorAtEntryData,
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1
//           }]
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//             title: {
//               display: true,
//               text: `By Major at Entry (Total: ${majorAtEntryTotal} Students)`
//             }
//           },
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           }
//         }
//       });

//       // Plot "Last Major Held" Bar Chart
//       const ctx2 = document.getElementById('lastMajorHeldChart').getContext('2d');
//       new Chart(ctx2, {
//         type: 'bar',
//         data: {
//           labels: lastMajorHeldLabels,
//           datasets: [{
//             label: 'Number of Students',
//             data: lastMajorHeldData,
//             backgroundColor: 'rgba(153, 102, 255, 0.2)',
//             borderColor: 'rgba(153, 102, 255, 1)',
//             borderWidth: 1
//           }]
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//             title: {
//               display: true,
//               text: `By Major Last Held (Total: ${lastMajorHeldTotal} Students)`
//             }
//           },
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           }
//         }
//       });
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }

export function displayMyEquityGapsMajorGaps(chartPlaceholder) {
  // Create a parent canvas element
  const canvasElement = document.createElement("div");
  canvasElement.id = "MyEquityGaps";
  canvasElement.style.border = "1px solid black";
  canvasElement.style.padding = "10px";
  canvasElement.style.margin = "auto";
  canvasElement.style.height = "500px"; // Increase height to fit both charts
  canvasElement.style.width = "800px"; // Ensure width accommodates both charts
  canvasElement.style.display = "flex";
  canvasElement.style.flexDirection = "column"; // Arrange title and charts vertically
  canvasElement.style.alignItems = "center";

  // Append canvasElement to chartPlaceholder
  chartPlaceholder.appendChild(canvasElement);

  // Add title to the canvas element
  const titleElement = document.createElement("h3");
  titleElement.innerText = "Close the Gap";
  titleElement.style.textAlign = "center";
  titleElement.style.marginBottom = "20px"; // Add spacing between title and charts
  canvasElement.appendChild(titleElement);

  // Create a wrapper for the charts
  const chartWrapper = document.createElement("div");
  chartWrapper.style.display = "flex";
  chartWrapper.style.justifyContent = "center"; // Space out the two charts
  chartWrapper.style.width = "50%";
  chartWrapper.style.height = "50%"; // Ensure wrapper takes full height
  chartWrapper.style.flexGrow = "1"; // Allow charts to fill available space
  canvasElement.appendChild(chartWrapper);

  // Create individual canvas elements for the charts
  const canvasElementMajorAtEntry = document.createElement("canvas");
  canvasElementMajorAtEntry.id = "majorAtEntryChart";
  canvasElementMajorAtEntry.style.flex = "1"; // Make the chart responsive
  canvasElementMajorAtEntry.style.margin = "10px"; // Add spacing around the charts
  chartWrapper.appendChild(canvasElementMajorAtEntry);

  const canvasElementLastMajorHeld = document.createElement("canvas");
  canvasElementLastMajorHeld.id = "lastMajorHeldChart";
  canvasElementLastMajorHeld.style.flex = "1"; // Make the chart responsive
  canvasElementLastMajorHeld.style.margin = "10px"; // Add spacing around the charts
  chartWrapper.appendChild(canvasElementLastMajorHeld);

  // Fetch data and plot the charts
  const url1 = "https://studentresearch.dashboards.calstate.edu/api/equity-gaps/my-equity-gaps/major-gaps";
  const params1 = {
    'campus': "Pomona",
    'student_type': "freshmen",
    'outcome': "6th-Year Graduation",
    'gap_type': "firstgen",
  };
  const queryString1 = new URLSearchParams(params1).toString();
  const fullUrl1 = `${url1}?${queryString1}`;

  fetch(fullUrl1, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {

      // Extract data for "Major At Entry"
      const majorAtEntryLabels = [data[0].major1, data[0].major2, data[0].major3, data[0].major4, data[0].major5];
      const majorAtEntryData = [data[0].n_major1_addtl, data[0].n_major2_addtl, data[0].n_major3_addtl, data[0].n_major4_addtl, data[0].n_major5_addtl];
      const majorAtEntryTotal = majorAtEntryData.reduce((sum, value) => sum + value, 0);

      // Extract data for "Last Major Held"
      const lastMajorHeldLabels = [data[1].major1, data[1].major2, data[1].major3, data[1].major4, data[1].major5];
      const lastMajorHeldData = [data[1].n_major1_addtl, data[1].n_major2_addtl, data[1].n_major3_addtl, data[1].n_major4_addtl, data[1].n_major5_addtl];
      const lastMajorHeldTotal = lastMajorHeldData.reduce((sum, value) => sum + value, 0);

      // Plot "Major At Entry" Bar Chart
      const ctx1 = document.getElementById('majorAtEntryChart').getContext('2d');
      new Chart(ctx1, {
        type: 'bar',
        data: {
          labels: majorAtEntryLabels,
          datasets: [{
            label: 'Number of Students',
            data: majorAtEntryData,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: `By Major at Entry (Total: ${majorAtEntryTotal} Students)`
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      // Plot "Last Major Held" Bar Chart
      const ctx2 = document.getElementById('lastMajorHeldChart').getContext('2d');
      new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: lastMajorHeldLabels,
          datasets: [{
            label: 'Number of Students',
            data: lastMajorHeldData,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: `By Major Last Held (Total: ${lastMajorHeldTotal} Students)`
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}




export function displayWhatPathDoTheyFollow(chartPlaceholder)
{
  // student-progress-units
  // const url = "https://studentresearch.dashboards.calstate.edu/api/faculty-dashboard/student-progress-units/what-paths-do-they-follow/chart-data";
    // const params = {
    //   'campus': "*CSU System",
    //   'college': "School of Arts & Humanities",
    //   'major': "*All Majors",
    //   'cohort': 2019,
    //   'student_type': "freshmen",
    //   'gap_type': "firstgen",
    // };

    const url = "https://studentresearch.dashboards.calstate.edu/api/faculty-dashboard/what-paths-do-they-follow/chart-data?campus=Bakersfield&college=School%20of%20Arts%20%26%20Humanities&major=Art&flowOption=1";

    // Construct the query string from the parameters
    //  const queryString = new URLSearchParams(params).toString();

    // Append the query string to the URL
     const fullUrl = `${url}`
    // queryString;

    const canvasElement = document.createElement("canvas");
    // const h4Element = document.createElement("h4");
    // h4Element.innerText = "4) graduation-initiative/goal-trajectories"; 
    canvasElement.id = "myPieChart";
    canvasElement.style.border = "1px solid black";
    canvasElement.style.padding = "10px";
    canvasElement.style.margin = "auto";
    canvasElement.style.height = "400px";
    canvasElement.style.width = "600px";
    // canvasElement.appendChild(h4Element);
    chartPlaceholder.appendChild(canvasElement);

    fetch(fullUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
    })
      .then(response => response.json())
      .then(data => {
         // Extract the total number of students
         const totalStudents = data.nodes[0].totalStudents;

         // Extract labels and data
         const labels = data.seriesData.map(item => `${item.from} to ${item.to}`);
         const weights = data.seriesData.map(item => (item.weight / totalStudents) * 100); // Calculate percentage
 
         // Create the pie chart
         const ctx = document.getElementById('myPieChart').getContext('2d');
         const myPieChart = new Chart(ctx, {
             type: 'pie',
             data: {
                 labels: labels,
                 datasets: [{
                     data: weights,
                     backgroundColor: [
                         'rgba(255, 99, 132, 0.2)',
                         'rgba(54, 162, 235, 0.2)',
                         'rgba(255, 206, 86, 0.2)',
                         'rgba(75, 192, 192, 0.2)',
                         'rgba(153, 102, 255, 0.2)'
                     ],
                     borderColor: [
                         'rgba(255, 99, 132, 1)',
                         'rgba(54, 162, 235, 1)',
                         'rgba(255, 206, 86, 1)',
                         'rgba(75, 192, 192, 1)',
                         'rgba(153, 102, 255, 1)'
                     ],
                     borderWidth: 1
                 }]
             },
             options: {
                 responsive: true,
                 maintainAspectRatio: false,
                 plugins: {
                     legend: {
                         position: 'top',
                     },
                     title: {
                      display: true,
                      text: [
                        'CSU Major Migration for all First-time Full-time Freshmen who Graduated in 2021, 2022, or 2023',
                        `School of Arts and Humanities: ${totalStudents} students`
                    ]
                    },
                     tooltip: {
                         callbacks: {
                          title: function(tooltipItems) {
                            // Access the dataIndex and retrieve nStudents
                            const index = tooltipItems[0].dataIndex;
                            const nStudents = data.seriesData[index].nStudents;
                            const major = data.seriesData[index].from;
                            
                            // Return the heading with nStudents
                            return `From College ${major}: ${nStudents} students`;
                        },
                             label: function(tooltipItem) {
                                 const value = tooltipItem.raw.toFixed(2);
                                 const lines = [
                                  `\tApproximately ${value}% of students graduating from the School of Arts and Humanities began as`,
                                  `students in the ${tooltipItem.label}`
                              ];
                                return lines;
                             },
                         }
                     }
                 }
             }
         });


      }) .catch((error) => {
        console.error('Error:', error);
      });
}

// export function displayGoalTrajectories(chartPlaceholder)
// {
//   const url = "https://studentresearch.dashboards.calstate.edu/api/graduation-initiative/goal-trajectories/ftf_6yr_pell/ZZ";

//   const fullUrl = `${url}`;

//   const canvasElement = document.createElement("canvas");
//   canvasElement.id = "myAreaChart";
//   canvasElement.style.border = "1px solid black";
//   canvasElement.style.padding = "10px";
//   canvasElement.style.margin = "auto";
//   canvasElement.style.height = "400px";
//   canvasElement.style.width = "600px";
//   chartPlaceholder.appendChild(canvasElement);

//   fetch(fullUrl, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
      
//        // Extract the data for the chart
//        const labels = data.result.filter(item => item.PELL_GAP !== null).map(item => `${item.COHORT} - ${parseInt(item.COHORT) + 6}`);
//        const nonPellData = data.result.map(item => item.FTF_6YR_GRAD_NONPELL);
//        const pellData = data.result.map(item => item.FTF_6YR_GRAD_PELL);

//        // Create the area chart
//        const ctx = document.getElementById('myAreaChart').getContext('2d');
//        const myAreaChart = new Chart(ctx, {
//            type: 'line', // Use 'line' type with fill for area chart
//            data: {
//                labels: labels,
//                datasets: [
//                    {
//                        label: 'Non-Pell Students',
//                        data: nonPellData,
//                        backgroundColor: 'rgba(75, 192, 192, 0.4)',
//                        borderColor: 'rgba(75, 192, 192, 1)',
//                        fill: true,
//                        tension: 0.3
//                    },
//                    {
//                        label: 'Pell Students',
//                        data: pellData,
//                        backgroundColor: 'rgba(153, 102, 255, 0.4)',
//                        borderColor: 'rgba(153, 102, 255, 1)',
//                        fill: true,
//                        tension: 0.3
//                    }
//                ]
//            },
//            options: {
//                responsive: true,
//                maintainAspectRatio: false,
//                scales: {
//                    x: {
//                        title: {
//                            display: true,
//                            text: 'Cohorts'
//                        }
//                    },
//                    y: {
//                        beginAtZero: true,
//                        title: {
//                            display: true,
//                            text: 'Percentage of Students'
//                        }
//                    }
//                },
//                plugins: {
//                    tooltip: {
//                        callbacks: {
//                            label: function(tooltipItem) {
//                                return `${tooltipItem.dataset.label}: ${tooltipItem.raw}%`;
//                            }
//                        }
//                    }
//                }
//            }
//        });


//     }) .catch((error) => {
//       console.error('Error:', error);
//     });

// }

// export function displayEnrollingAndGraduating(chartPlaceholder){

//     // Parent container for the image and tooltip
//     const container = document.getElementById('chartPlaceholder2'); // Replace with your container ID


//     // Create the main container
//     const imageContainer = document.createElement('div');
//     imageContainer.className = 'image-container';
//     imageContainer.style.position = 'relative';
//     imageContainer.style.width = '600px';
//     imageContainer.style.height = 'auto';

//     // Add the image
//     const img = document.createElement('img');
//     img.src = 'containment.png'; // Replace with your image URL
//     img.alt = 'Containment Diagram';
//     img.style.width = '100%';
//     img.style.height = 'auto';
//     imageContainer.appendChild(img);

//     // Tooltip element
//     const tooltip = document.createElement('div');
//     tooltip.className = 'tooltip';
//     tooltip.style.position = 'absolute';
//     tooltip.style.display = 'none';
//     tooltip.style.backgroundColor = '#000';
//     tooltip.style.color = '#fff';
//     tooltip.style.padding = '5px';
//     tooltip.style.borderRadius = '5px';
//     tooltip.style.fontSize = '12px';
//     container.appendChild(tooltip);

// // Hover areas without colors
// const hoverAreasData = [
//   { class: 'hover-applied', tooltip: '4574 Applied' },
//   { class: 'hover-admitted', tooltip: '2968 Admitted' },
//   { class: 'hover-enrolled', tooltip: '497 Enrolled' },
//   { class: 'hover-persisted', tooltip: '444 Persisted' }
// ];

// hoverAreasData.forEach(areaData => {
//   const area = document.createElement('div');
//   area.className = `hover-area ${areaData.class}`;
//   area.style.margin = '10px';
//   area.style.padding = '10px';
//   area.style.cursor = 'pointer';
//   area.style.border = '1px solid transparent'; // Optional: add a border for debugging layout
//   container.appendChild(area);

//   // Add event listeners for tooltip functionality
//   area.addEventListener('mouseenter', function () {
//     tooltip.textContent = areaData.tooltip;
//     tooltip.style.display = 'block';
//   });

//   area.addEventListener('mousemove', function (e) {
//     tooltip.style.left = e.pageX + 10 + 'px';
//     tooltip.style.top = e.pageY + 10 + 'px';
//   });

//   area.addEventListener('mouseleave', function () {
//     tooltip.style.display = 'none';
//   });
// });

   
//     chartPlaceholder.appendChild(imageContainer);
// }

// export function displayGoalTrajectories(chartPlaceholder) {
//   const url = "https://studentresearch.dashboards.calstate.edu/api/graduation-initiative/goal-trajectories/ftf_6yr_pell/ZZ";

//   const fullUrl = `${url}`;

//   const canvasElement = document.createElement("canvas");
//   canvasElement.id = "myAreaChart";
//   canvasElement.style.border = "1px solid black";
//   canvasElement.style.padding = "10px";
//   canvasElement.style.margin = "auto";
//   canvasElement.style.height = "400px";
//   canvasElement.style.width = "600px";
//   chartPlaceholder.appendChild(canvasElement);

//   fetch(fullUrl, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       // Extract the data for the chart
//       const filteredData = data.result.filter(item => item.PELL_GAP !== null);
//       const labels = filteredData.map(item => `${item.COHORT} - ${parseInt(item.COHORT) + 6}`);
//       const nonPellData = filteredData.map(item => item.FTF_6YR_GRAD_NONPELL);
//       const pellData = filteredData.map(item => item.FTF_6YR_GRAD_PELL);
//       const differenceData = filteredData.map(item => (item.FTF_6YR_GRAD_NONPELL - item.FTF_6YR_GRAD_PELL).toFixed(1));

//       // Create the area chart
//       const ctx = document.getElementById('myAreaChart').getContext('2d');
//       const myAreaChart = new Chart(ctx, {
//         type: 'line', // Use 'line' type with fill for area chart
//         data: {
//           labels: labels,
//           datasets: [
//             {
//               label: 'Non-Pell Students',
//               data: nonPellData,
//               backgroundColor: 'rgba(75, 192, 192, 0.4)',
//               borderColor: 'rgba(75, 192, 192, 1)',
//               fill: true,
//               tension: 0.3
//             },
//             {
//               label: 'Pell Students',
//               data: pellData,
//               backgroundColor: 'rgba(153, 102, 255, 0.4)',
//               borderColor: 'rgba(153, 102, 255, 1)',
//               fill: true,
//               tension: 0.3
//             }
//           ]
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           scales: {
//             x: {
//               title: {
//                 display: true,
//                 text: 'Cohorts'
//               }
//             },
//             y: {
//               beginAtZero: true,
//               title: {
//                 display: true,
//                 text: 'Percentage of Students'
//               }
//             }
//           },
//           plugins: {
//             title: {
//               display: true,
//               text: [
//                 "Pell & Non-Pell Equity Gap Goal",
//                 "Hover over the chart to view detailed Pell Gap information."
//               ],
//               font: {
//                 size: 16
//               },
//               padding: {
//                 top: 10,
//                 bottom: 20
//               }
//             },
//             tooltip: {
//               callbacks: {
//                 label: function (tooltipItem) {
//                   const datasetIndex = tooltipItem.datasetIndex;
//                   const dataIndex = tooltipItem.dataIndex;

//                   if (datasetIndex === 0) { // Non-Pell Students
//                     return `Non-Pell Students: ${tooltipItem.raw}%`;
//                   } else if (datasetIndex === 1) { // Pell Students
//                     const difference = differenceData[dataIndex];
//                     return `Pell Students: ${tooltipItem.raw}%\nDifference: ${difference}%`;
//                   }
//                 }
//               }
//             }
//           }
//         }
//       });
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }

export function displayGoalTrajectories(chartPlaceholder) {
  const url = "https://studentresearch.dashboards.calstate.edu/api/graduation-initiative/goal-trajectories/ftf_6yr_pell/ZZ";

  const fullUrl = `${url}`;
 
  const canvasElement = document.createElement("canvas");
  // const h4Element = document.createElement("h4");
  // h4Element.innerText = "3) graduation-initiative/goal-trajectories"; 
  canvasElement.id = "myAreaChart";
  canvasElement.style.border = "1px solid black";
  canvasElement.style.padding = "10px";
  canvasElement.style.margin = "auto";
  canvasElement.style.height = "400px";
  canvasElement.style.width = "600px";
  // chartPlaceholder.appendChild(h4Element);
  chartPlaceholder.appendChild(canvasElement);

  fetch(fullUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      // Extract the data for the chart
      const filteredData = data.result.filter(item => item.PELL_GAP !== null);
      const labels = filteredData.map(item => `${item.COHORT} - ${parseInt(item.COHORT) + 6}`);
      const nonPellData = filteredData.map(item => item.FTF_6YR_GRAD_NONPELL);
      const pellData = filteredData.map(item => item.FTF_6YR_GRAD_PELL);
      const pellGapDifference = filteredData.map(item => item.PELL_GAP_DIFF ? item.PELL_GAP_DIFF.toFixed(2) : "N/A");

      // Create the area chart
      const ctx = document.getElementById('myAreaChart').getContext('2d');
      const myAreaChart = new Chart(ctx, {
        type: 'line', // Use 'line' type with fill for area chart
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Non-Pell Students',
              data: nonPellData,
              backgroundColor: 'rgba(75, 192, 192, 0.4)',
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: true,
              tension: 0.3
            },
            {
              label: 'Pell Students',
              data: pellData,
              backgroundColor: 'rgba(153, 102, 255, 0.4)',
              borderColor: 'rgba(153, 102, 255, 1)',
              fill: true,
              tension: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Cohorts'
              }
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Percentage of Students'
              }
            }
          },
          plugins: {
            title: {
              display: true,
              text: [
                "Pell & Non-Pell Equity Gap Goal",
                // "Hover over the chart to view detailed Pell Gap information."
              ],
              font: {
                size: 16
              },
              padding: {
                top: 10,
                bottom: 20
              }
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  const datasetIndex = tooltipItem.datasetIndex;
                  const dataIndex = tooltipItem.dataIndex;

                  if (datasetIndex === 0) { // Non-Pell Students
                    return `Non-Pell Students: ${tooltipItem.raw}%`;
                  } else if (datasetIndex === 1) { // Pell Students
                    const gapDiff = pellGapDifference[dataIndex];
                    return `Pell Students: ${tooltipItem.raw}%`;
                  }
                }
              }
            }
          }
        }
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}



// export function displayEnrollingAndGraduating(chartPlaceholder) {

//    const canvasElement = document.createElement("canvas");
//     canvasElement.id = "myPieChart";
//     canvasElement.style.border = "1px solid black";
//     canvasElement.style.padding = "10px";
//     canvasElement.style.margin = "auto";
//     canvasElement.style.height = "400px";
//     canvasElement.style.width = "600px";
//     chartPlaceholder.appendChild(canvasElement);

//   // Create the main container
//   const imageContainer = document.createElement('div');
//   imageContainer.className = 'image-container';
//   imageContainer.style.position = 'relative';
//   imageContainer.style.width = '600px';
//   imageContainer.style.height = 'auto';

//   // Add the image
//   const img = document.createElement('img');
//   img.src = '/enrolling-and-graduating.png'; // Replace with your image URL
//   img.alt = 'Containment Diagram';
//   img.style.width = '100%';
//   img.style.height = 'auto';
//   imageContainer.appendChild(img);

//   // Tooltip element
//   const tooltip = document.createElement('div');
//   tooltip.className = 'tooltip';
//   tooltip.style.position = 'absolute';
//   tooltip.style.display = 'none';
//   tooltip.style.backgroundColor = '#000';
//   tooltip.style.color = '#fff';
//   tooltip.style.padding = '5px';
//   tooltip.style.borderRadius = '5px';
//   tooltip.style.fontSize = '12px';
//   imageContainer.appendChild(tooltip); // Append tooltip to imageContainer

//   // Hover areas
//   const hoverAreasData = [
//     { class: 'hover-applied', tooltip: '4574 Applied' },
//     { class: 'hover-admitted', tooltip: '2968 Admitted' },
//     { class: 'hover-enrolled', tooltip: '497 Enrolled' },
//     { class: 'hover-persisted', tooltip: '444 Persisted' }
//   ];

//   // hoverAreasData.forEach(areaData => {
//   //   const area = document.createElement('div');
//   //   area.className = `hover-area ${areaData.class}`;
//   //   area.style.margin = '10px'; // Optional
//   //   area.style.padding = '10px'; // Optional
//   //   area.style.cursor = 'pointer';
//   //   area.style.border = '1px solid transparent'; // Optional for debugging
//   //   imageContainer.appendChild(area); // Append hover areas to imageContainer

//   //   // Add event listeners for tooltip functionality
//   //   area.addEventListener('mouseenter', function () {
//   //     tooltip.textContent = areaData.tooltip;
//   //     tooltip.style.display = 'block';
//   //   });

//   //   area.addEventListener('mousemove', function (e) {
//   //     tooltip.style.left = e.pageX + 10 + 'px';
//   //     tooltip.style.top = e.pageY + 10 + 'px';
//   //   });

//   //   area.addEventListener('mouseleave', function () {
//   //     tooltip.style.display = 'none';
//   //   });
//   // });

//   // Append the entire imageContainer to the chartPlaceholder
//   chartPlaceholder.appendChild(imageContainer);
// }

// export function displayEnrollingAndGraduating(chartPlaceholder) {
//   // Create the main container
//   // const imageContainer = document.createElement('div');
//   // imageContainer.className = 'image-container';
//   // imageContainer.style.position = 'relative';
//   // imageContainer.style.width = '600px';
//   // imageContainer.style.height = 'auto';
//   // imageContainer.style.display = 'flex'; 

//   const canvasElement = document.createElement("canvas");
//   canvasElement.id = "myEnrollingAndGraduating";
//   canvasElement.style.border = "1px solid black";
//   canvasElement.style.padding = "10px";
//   canvasElement.style.margin = "auto";
//   canvasElement.style.height = "400px";
//   canvasElement.style.width = "600px";
//   canvasElement.style.display = "flex";
//   chartPlaceholder.appendChild(canvasElement);

//   // Add the image
//   const img = document.createElement('img');
//   img.src = '/enrollig-and-graduating.png'; // Replace with your image URL
//   img.alt = 'Containment Diagram';
//   img.style.width = '100%';
//   img.style.height = 'auto';
//   imageContainer.appendChild(img);

//   // Tooltip element
//   const tooltip = document.createElement('div');
//   tooltip.className = 'tooltip';
//   tooltip.style.position = 'absolute';
//   tooltip.style.display = 'none';
//   tooltip.style.backgroundColor = '#000';
//   tooltip.style.color = '#fff';
//   tooltip.style.padding = '5px';
//   tooltip.style.borderRadius = '5px';
//   tooltip.style.fontSize = '12px';
//   imageContainer.appendChild(tooltip); // Append tooltip to imageContainer

//   // Hover areas
//   const hoverAreasData = [
//     { class: 'hover-applied', tooltip: '4574 Applied' },
//     { class: 'hover-admitted', tooltip: '2968 Admitted' },
//     { class: 'hover-enrolled', tooltip: '497 Enrolled' },
//     { class: 'hover-persisted', tooltip: '444 Persisted' }
//   ];

//   hoverAreasData.forEach(areaData => {
//     const area = document.createElement('div');
//     area.className = `hover-area ${areaData.class}`;
//     area.style.margin = '10px'; // Optional
//     area.style.padding = '10px'; // Optional
//     area.style.cursor = 'pointer';
//     area.style.border = '1px solid transparent'; // Optional for debugging
//     imageContainer.appendChild(area); // Append hover areas to imageContainer

//     // Add event listeners for tooltip functionality
//     area.addEventListener('mouseenter', function () {
//       tooltip.textContent = areaData.tooltip;
//       tooltip.style.display = 'block';
//     });

//     area.addEventListener('mousemove', function (e) {
//       tooltip.style.left = e.pageX + 10 + 'px';
//       tooltip.style.top = e.pageY + 10 + 'px';
//     });

//     area.addEventListener('mouseleave', function () {
//       tooltip.style.display = 'none';
//     });
//   });

//   // Append the entire imageContainer to the chartPlaceholder
//   chartPlaceholder.appendChild(imageContainer);
// }


// export function displayEnrollingAndGraduating(chartPlaceholder) {
//   // Create the main container (canvas element)
//   const canvasElement = document.createElement("div");
  
//   canvasElement.id = "myEnrollingAndGraduating";
//   canvasElement.style.border = "1px solid black";
//   canvasElement.style.padding = "10px";
//   canvasElement.style.margin = "auto";
//   canvasElement.style.height = "500px"; // Increased height for image and hover areas
//   canvasElement.style.width = "600px";
//   canvasElement.style.display = "flex";
//   canvasElement.style.flexDirection = "column";
//   canvasElement.style.alignItems = "center"; // Center elements horizontally
//   canvasElement.style.position = "relative"; // Required for absolute positioning of tooltips
  
//   chartPlaceholder.appendChild(canvasElement);

//   // Create the image container
//   const imageContainer = document.createElement('div');
//   imageContainer.className = 'image-container';
//   imageContainer.style.position = 'relative';
//   imageContainer.style.width = '100%';
//   imageContainer.style.height = 'auto';
//   imageContainer.style.display = 'flex';

//   // Add the image
//   const img = document.createElement('img');
//   img.src = 'enrolling-and-graduating.png'; // Replace with your image URL
//   img.alt = 'Containment Diagram';
//   img.style.width = '100%';
//   img.style.height = 'auto';
//   imageContainer.appendChild(img);

//   // Tooltip element
//   const tooltip = document.createElement('div');
//   tooltip.className = 'tooltip';
//   tooltip.style.position = 'absolute';
//   tooltip.style.display = 'none';
//   tooltip.style.backgroundColor = '#000';
//   tooltip.style.color = '#fff';
//   tooltip.style.padding = '5px';
//   tooltip.style.borderRadius = '5px';
//   tooltip.style.fontSize = '12px';
//   tooltip.style.pointerEvents = 'none'; // Prevent interference with mouse events
//   canvasElement.appendChild(tooltip); // Append tooltip to canvasElement

  // Hover areas
  // const hoverAreasData = [
  //   { class: 'hover-applied', tooltip: '4574 Applied', left: '10%', top: '10%' },
  //   { class: 'hover-admitted', tooltip: '2968 Admitted', left: '30%', top: '30%' },
  //   { class: 'hover-enrolled', tooltip: '497 Enrolled', left: '50%', top: '50%' },
  //   { class: 'hover-persisted', tooltip: '444 Persisted', left: '70%', top: '70%' }
  // ];

  // hoverAreasData.forEach(areaData => {
  //   const area = document.createElement('div');
  //   area.className = `hover-area ${areaData.class}`;
  //   area.style.position = 'absolute';
  //   area.style.left = areaData.left;
  //   area.style.top = areaData.top;
  //   area.style.width = '50px'; // Define size of hover areas
  //   area.style.height = '50px';
  //   area.style.cursor = 'pointer';
  //   area.style.border = '1px solid transparent'; // Optional for debugging
  //   imageContainer.appendChild(area); // Append hover areas to imageContainer

  //   // Add event listeners for tooltip functionality
  //   area.addEventListener('mouseenter', function () {
  //     tooltip.textContent = areaData.tooltip;
  //     tooltip.style.display = 'block';
  //   });

  //   area.addEventListener('mousemove', function (e) {
  //     tooltip.style.left = e.pageX + 10 + 'px';
  //     tooltip.style.top = e.pageY + 10 + 'px';
  //   });

  //   area.addEventListener('mouseleave', function () {
  //     tooltip.style.display = 'none';
  //   });
  // });

  // Append the imageContainer to the canvasElement
  // canvasElement.appendChild(imageContainer);
// }

// export function displayEnrollingAndGraduating(chartPlaceholder) {
//   // Create and configure the canvas element
//   const canvas = document.createElement("canvas");
//   canvas.id = "myEnrollingAndGraduating";
//   canvas.style.border = "1px solid black";
//   canvas.style.padding = "10px";
//   canvas.style.margin = "auto";
//   canvas.style.height = "400px";
//   canvas.style.width = "600px";
//   chartPlaceholder.appendChild(canvas);

//   // Create and configure the tooltip element
//   const tooltip = document.createElement("div");
//   tooltip.className = "tooltip";
//   tooltip.style.position = "absolute";
//   tooltip.style.display = "none";
//   tooltip.style.backgroundColor = "#000";
//   tooltip.style.color = "#fff";
//   tooltip.style.padding = "5px";
//   tooltip.style.borderRadius = "5px";
//   tooltip.style.fontSize = "12px";
//   tooltip.style.pointerEvents = "none"; // Prevent interaction interference
//   chartPlaceholder.appendChild(tooltip);

//   // Get canvas context
//   const ctx = canvas.getContext("2d");

//   // Load and draw the PNG image on the canvas
//   const img = new Image();
//   img.src = "enrolling-and-graduating.png"; // Replace with the actual image URL
//   img.onload = () => {
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//   };

//   // Handle mouse move to update the tooltip dynamically
//   canvas.addEventListener("mousemove", (event) => {
//       const rect = canvas.getBoundingClientRect();
//       const x = event.clientX - rect.left;
//       const y = event.clientY - rect.top;

//       // Get pixel data at mouse hover position
//       const pixelData = ctx.getImageData(x, y, 1, 1).data;
//       const [r, g, b, a] = pixelData; // Red, Green, Blue, Alpha values

//       // If the alpha channel is 0, it means no pixel data (transparent region)
//       if (a === 0) {
//           tooltip.style.display = "none";
//           return;
//       }

//       // Display tooltip and update its content
//       tooltip.style.left = `${event.pageX + 10}px`;
//       tooltip.style.top = `${event.pageY + 10}px`;
//       tooltip.style.display = "block";
//       tooltip.innerHTML = `
//           Pixel Color: rgba(${r}, ${g}, ${b}, ${(a / 255).toFixed(2)})<br>
//           Coordinates: (${x.toFixed(0)}, ${y.toFixed(0)})
//       `;
//   });

//   // Hide tooltip when the mouse leaves the canvas
//   canvas.addEventListener("mouseout", () => {
//       tooltip.style.display = "none";
//   });
// }

export function displayEnrollingAndGraduating(chartPlaceholder) {
  // Tooltip data mapped to the regions
  const tooltipData = [
      {
          tooltip_title: "4,574 freshmen applied",
          tooltip_point1: "Up 2.1% from the prior year",
          region: { x: 131, y: 97, width: 331, height: 100 } // Region 1
      },
      {
          tooltip_title: "65% of applicants admitted",
          tooltip_point1: "Down 3.7 percentage points from the prior year (102 less)",
          region: { x: 147, y: 213, width: 296, height: 36 } // Region 2
      },
      {
          tooltip_title: "17% of applicants enrolled",
          tooltip_point1: "Down 2.9 percentage points from the prior year (106 less)",
          region: { x: 160, y: 260, width: 260, height: 30 } // Region 3
      },
      {
          tooltip_title: "89% of those enrolled persisted 1 year",
          tooltip_point1: "Down 1.2 percentage points from the prior year (102 less)",
          region: { x: 174, y: 305, width: 242, height: 10 } // Region 4
      },
      {
          tooltip_title: "81% of those who persisted graduated in 6 years",
          tooltip_point1: "Down 2.5 percentage points from the prior year (96 less)",
          region: { x: 190, y: 320, width: 211, height: 25 } // Region 5
      }
  ];

  // Create and configure the canvas element
  const canvas = document.createElement("canvas");
  canvas.id = "myEnrollingAndGraduating";
  canvas.style.border = "1px solid black";
  canvas.style.height = "400px";
  canvas.style.width = "600px";
  canvas.style.display = "flex"; 
  canvas.style.justifySelf = "center";
  chartPlaceholder.appendChild(canvas);

  // Create and configure the tooltip element
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.style.position = "absolute";
  tooltip.style.display = "none";
  tooltip.style.backgroundColor = "#333"; // Darker background for compact style
  tooltip.style.color = "#fff";
  tooltip.style.padding = "5px 8px"; // Reduced padding for compactness
  tooltip.style.borderRadius = "4px"; // Slightly rounded corners
  tooltip.style.fontSize = "11px"; // Smaller font size for compactness
  tooltip.style.pointerEvents = "none";
  tooltip.style.whiteSpace = "normal"; // Allow line wrapping
  tooltip.style.maxWidth = "200px"; // Limit the width of the tooltip
  chartPlaceholder.appendChild(tooltip);

  const ctx = canvas.getContext("2d");

  // Load and draw the PNG image on the canvas
  const img = new Image();
  img.src = "enrolling-and-graduating.png"; // Replace with the actual image URL
  img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  // Event listener for mousemove to detect regions
  canvas.addEventListener("mousemove", (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Check if the pointer is in any defined region
      const hoveredRegion = tooltipData.find(regionData => {
          const { x: rx, y: ry, width, height } = regionData.region;
          return x >= rx && x <= rx + width && y >= ry && y <= ry + height;
      });

      if (hoveredRegion) {
          // Show tooltip for the hovered region
          tooltip.style.left = `${event.pageX + 10}px`;
          tooltip.style.top = `${event.pageY + 10}px`;
          tooltip.style.display = "block";

          tooltip.innerHTML = `
              <div style="font-size: 13px; font-weight: bold; margin-bottom: 3px;">
                  ${hoveredRegion.tooltip_title}
              </div>
              <div style="font-size: 11px;">
                  ${hoveredRegion.tooltip_point1 || ""}
              </div>
          `;
      } else {
          tooltip.style.display = "none";
      }
  });

  // Hide tooltip on mouseout
  canvas.addEventListener("mouseout", () => {
      tooltip.style.display = "none";
  });
}




export function displayStudentProgressUnits(chartPlaceholder)
{
  let h4Element = document.createElement("h4");
  h4Element.innerText = "Cannot embed alternative graph(faculty-dashboard/student-progress-units) iframe due to security issues"; // or use h4Element.textContent
  chartPlaceholder.appendChild(h4Element);

  // let iframeElement = document.createElement("iframe");
  // iframeElement.src = `https://studentresearch.dashboards.calstate.edu/faculty-dashboard/student-progress-units`;
  // iframeElement.width = "150%";
  // iframeElement.height = "100%";
  // iframeElement.style.transform = "scale(0.50)";
  // iframeElement.style.transformOrigin = "20% top"
  // iframeElement.style.marginBottom = "-400px";
  // iframeElement.style.border = "none";
  // chartPlaceholder.appendChild(iframeElement);
}
