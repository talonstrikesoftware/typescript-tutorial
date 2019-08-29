import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';
import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const user = new User();


console.log(user);

const company = new Company();
console.log(company);

const customMap = new CustomMap("map");
customMap.addMarker(user);
customMap.addMarker(company);

var ctx = document.getElementById('myChart').getContext('2d');
var data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: ["#FF0000", "#00FF00", "#0000FF"]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Green',
        'Blue'
    ]
};
// var canvas = document.getElementById("myChart");
// var ctx = canvas.getContext("2d");
// ctx.font = "30px Arial";
// ctx.textAlign = "center";
// ctx.fillText("Hello World", canvas.width/2, canvas.height/2); 

Chart.pluginService.register({
    beforeDraw: function (chart) {
      if (chart.config.options.elements.center) {
        //Get ctx from string
        var ctx = chart.chart.ctx;
  
        //Get options from the center object in options
        var centerConfig = chart.config.options.elements.center;
        var fontStyle = centerConfig.fontStyle || 'Arial';
        var txt = centerConfig.text;
        var color = centerConfig.color || '#000';
        var sidePadding = centerConfig.sidePadding || 20;
        var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
        //Start with a base font of 30px
        ctx.font = "30px " + fontStyle;
  
        //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
        var stringWidth = ctx.measureText(txt).width;
        var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
  
        // Find out how much the font can grow in width.
        var widthRatio = elementWidth / stringWidth;
        var newFontSize = Math.floor(30 * widthRatio);
        var elementHeight = (chart.innerRadius * 2);
  
        // Pick a new font size so it will not be larger than the height of label.
        var fontSizeToUse = Math.min(newFontSize, elementHeight);
  
        //Set font settings to draw it correctly.
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
        var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
        ctx.font = fontSizeToUse+"px " + fontStyle;
        ctx.fillStyle = color;
  
        //Draw text in center
        ctx.fillText(txt, centerX, centerY);
      }
    }
  });
  
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    plugins: [ChartDataLabels],
    options: {
        cutoutPercentage: 50,
        animation: {
            animateRotate: true
        },
        elements: {
            center: {
                text: '220',
                //color: '#36A2EB', //Default black
                fontStyle: 'Helvetica', //Default Arial
                sidePadding: 15 //Default 20 (as a percentage)
            }
        }
        // plugins: {
        //     datalabels: {
        //         formatter: function(value) {
        //             console.log("dataLabels value:",value);
        //             return "some special line";
        //         }
        //     }
        // }
    }
});


// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
