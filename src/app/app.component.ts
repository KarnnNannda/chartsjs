import Chart from 'chart.js';
import { ViewChild, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app.component.html'
})

export class DashboardComponent implements OnInit {
  @ViewChild('line') donut: ElementRef;

  range =[];
  rplus1 =[];
  rminus1 =[];
  rminus2 = [];
  rplus2 = [];
  ravg = [];
  value = [];


  constructor(
  ) { }

  ngOnInit() {
    let line = this.donut.nativeElement.getContext('2d');
    line.height = 200;
    line.width = 200;

    let dump = [{"x":1,"minus2":1,"minus1":3,"value":6,"average20":5,"plus1":7,"plus2":9},{"x":2,"minus2":1,"minus1":3,"value":6,"average20":5,"plus1":7,"plus2":9},{"x":3,"minus2":1,"minus1":3,"value":6,"average20":5,"plus1":7,"plus2":9},{"x":4,"minus2":1,"minus1":3,"value":6,"average20":5,"plus1":7,"plus2":9},{"x":5,"minus2":0.41987298107780635,"minus1":2.584936490538903,"value":1,"average20":4.75,"plus1":6.915063509461097,"plus2":9.080127018922195},{"x":6,"minus2":0.41987298107780635,"minus1":2.584936490538903,"value":6,"average20":4.75,"plus1":6.915063509461097,"plus2":9.080127018922195},{"x":7,"minus2":0.41987298107780635,"minus1":2.584936490538903,"value":6,"average20":4.75,"plus1":6.915063509461097,"plus2":9.080127018922195},{"x":8,"minus2":1,"minus1":3,"value":6,"average20":5,"plus1":7,"plus2":9},{"x":9,"minus2":1.6792857857285748,"minus1":3.4646428928642874,"value":6,"average20":5.25,"plus1":7.035357107135713,"plus2":8.820714214271426},{"x":10,"minus2":1.6792857857285748,"minus1":3.4646428928642874,"value":1,"average20":5.25,"plus1":7.035357107135713,"plus2":8.820714214271426},{"x":11,"minus2":1.6792857857285748,"minus1":3.4646428928642874,"value":6,"average20":5.25,"plus1":7.035357107135713,"plus2":8.820714214271426},{"x":12,"minus2":1.6792857857285748,"minus1":3.4646428928642874,"value":6,"average20":5.25,"plus1":7.035357107135713,"plus2":8.820714214271426},{"x":13,"minus2":1.6792857857285748,"minus1":3.4646428928642874,"value":1,"average20":5.25,"plus1":7.035357107135713,"plus2":8.820714214271426},{"x":14,"minus2":1,"minus1":3,"value":1,"average20":5,"plus1":7,"plus2":9},{"x":15,"minus2":0.41987298107780635,"minus1":2.584936490538903,"value":1,"average20":4.75,"plus1":6.915063509461097,"plus2":9.080127018922195},{"x":16,"minus2":-0.08257569495583983,"minus1":2.20871215252208,"value":1,"average20":4.5,"plus1":6.7912878474779195,"plus2":9.082575694955839},{"x":17,"minus2":-0.5196960070847281,"minus1":1.865151996457636,"value":1,"average20":4.25,"plus1":6.6348480035423645,"plus2":9.019696007084729},{"x":18,"minus2":-0.8989794855663558,"minus1":1.5505102572168221,"value":1,"average20":4,"plus1":6.449489742783178,"plus2":8.898979485566356},{"x":19,"minus2":-1.2249371855330997,"minus1":1.2625314072334501,"value":1,"average20":3.75,"plus1":6.23746859276655,"plus2":8.7249371855331},{"x":20,"minus2":-1.5,"minus1":1,"value":1,"average20":3.5,"plus1":6,"plus2":8.5}];

    const colors = {
      green: {
        fill: 'rgba(179,181,198,0.2)',

      //  stroke: '#5eb84e',
      },
      lightBlue: {
        fill : "rgba(179,181,198,0.2)",
       // stroke: '#6fccdd',
      },
      darkBlue: {
        fill: 'rgba(179,181,198,0.9)',
      //  stroke: '#3282bf',
      },
      purple: {
        fill: 'rgba(179,181,198,0.5)',
       // stroke: '#75539e',
      },
      speed: {
        fill: 'rgb(147, 219, 112)',
        // stroke: '#75539e',
      },
      avg: {
        fill: 'rgb(255,105,97)',
        // stroke: '#75539e',
      }
    };

    for (var i = 0; i < dump.length; i++) {
      // console.log(dump[i].average20);
      this.range.push(dump[i].x);
      this.rminus2.push(dump[i].minus2);
      this.rminus1.push(dump[i].minus1)
      this.rplus1.push(dump[i].plus1);
      this.rplus2.push(dump[i].plus2);
      this.ravg.push(dump[i].average20);
      this.value.push(dump[i].value);
    }

    let karaan = this.range.toString();

    let data = {
      labels: this.range,
      datasets: [

        {
          "data": this.rplus1,   // Example data
          fill: true,
          backgroundColor: colors.darkBlue.fill,

          label: "plus1"

        },

        {
          "data": this.rminus1,   // Example data
          fill: true,
          backgroundColor: colors.darkBlue.fill,

          label: "minus1"

        },
        {
          "data": this.rplus2,   // Example data
          fill: true,
          backgroundColor: colors.green.fill,

          label: "plus2"
        },

        {
          "data": this.rminus2,   // Example data
          fill: true,
          backgroundColor: colors.darkBlue.fill,

          label: "minus2"
        },
        {
          "data": this.ravg,   // Example data
          fill: false,
          backgroundColor: colors.avg.fill,

          label: "Average"
        },
        {
          "data": this.value,   // Example data
          fill: false,
          backgroundColor: colors.speed.fill,

          label: "speed"
        }


      ]
    };


    console.log(this.rminus2);

    let lineChart = new Chart(
      line,
      {
        "type": 'line',
        "data": data,
        "height":200,
        "width": 200,

        "options": {
          "responsive": true,

          scales: {
            yAxes: [{
              stacked: false,
            }]
          },
          "animation": {
            "animateScale": true,
            "animateRotate": true
          },

          "annotation": {

          }


        }
      },

    );









  }


}
