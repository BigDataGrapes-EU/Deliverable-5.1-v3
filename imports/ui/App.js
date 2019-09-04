import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import '/imports/ui/App.css';
import Barchart    from '/imports/ui/barchart/barchart.js'
import Radarchart  from '/imports/ui/radarchart/radarchart.js'
import Scatterplot from '/imports/ui/scatterplot/scatterplot.js'
import Piechart    from '/imports/ui/piechart/piechart.js'
import Timeseries  from '/imports/ui/timeseries/timeseries.js'
import monthConversions from '/imports/MonthMap.json';

import _ from 'lodash'
const Fragment = React.Fragment;
/* Import React Components */
import { Climate } from '/imports/api/tasks.js';
import { SensoryAnalysis } from "/imports/api/tasks";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // let maxTemperatureWithYear = (this.props.MaxTempPerYear).year;
    //
    // _.forEach((this.props.MaxTempPerYear).year, function (value, i) {
    //   console.log(maxTemperatureWithYear[i]);
    // });

    const BarData = {
      labels: Object.keys(this.props.DataPointsPerYear),
      //   labels: (this.props.WindSpeed).month,
      // labels: ["1900", "1950", "1999", "2050"],
      datasets: [
      //     {
      //   label: "Europe",
      //   type: "bar",
      //   backgroundColor: "green",
      //   data: [408,547,675,734],
      // }, {
      //   label: "Africa",
      //   type: "bar",
      //   backgroundColor: "red",
      //   backgroundColorHover: "#3e95cd",
      //   data: [133,221,783,2478]
      // }
          {
        label: 'Data points available per year',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: Object.values(this.props.DataPointsPerYear)
              // data: (this.props.WindSpeed).meanSpeed
      }
      ]
    };

    const RadarData = {
      labels: Object.keys(this.props.VisualSensoryFlavours),
      datasets: [
        {
          label: 'Visual',
          backgroundColor: 'rgba(255,99,132,0.4)',
          borderColor: '#FF6384',
          pointBackgroundColor: '#FF6384',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#FF6384',
          data: Object.values(this.props.VisualSensoryFlavours)
        },
        {
          label: 'Olfactory',
          backgroundColor: 'rgba(54,162,235,0.4)',
          borderColor: '#36A2EB',
          pointBackgroundColor: '#36A2EB',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#36A2EB',
          data: Object.values(this.props.OlfactorySensoryFlavours)
        },
        {
          label: 'Taste',
          backgroundColor: 'rgba(255,206,86,0.4)',
          borderColor: '#FFCE56',
          pointBackgroundColor: '#FFCE56',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#FFCE56',
          data: Object.values(this.props.TasteSensoryFlavours)
        }
      ]
    };


    let evaAndTempArray2017 = [];
    let evaAndTempArray2018 = [];
    let penmanEva = this.props.EvaAndTemp.penmanEvapotranspiration;
    let meanTemp = this.props.EvaAndTemp.meanTemperature;
    let year = this.props.EvaAndTemp.year;
    _.forEach(this.props.EvaAndTemp.NMH_POSTE, function (value, i) {
      if(year[i] == 2017){
        evaAndTempArray2017.push(
            {
              x: penmanEva[i],
              y: meanTemp[i]
            }
        );
      }else if(year[i] == 2018)
      {
        evaAndTempArray2018.push(
            {
              x: penmanEva[i],
              y: meanTemp[i]
            }
        );
      }

    });
    const ScatterData = {
      labels: ['Scatter'],
      datasets: [
        {
          label: '2018',
          fill: false,
          backgroundColor: '#FF6133',
          pointBorderColor: '#FF6133',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#FF6133',
          pointHoverBorderColor: '#FF6133',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data:evaAndTempArray2018
        },
        {
          label: '2017',
          fill: false,
          backgroundColor: '#C733FF',
          pointBorderColor: '#C733FF',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#C733FF',
          pointHoverBorderColor: '#C733FF',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data:evaAndTempArray2017
        }
      ]
    };
    const PieData = {
      labels: Object.keys(this.props.FlavorTypes),
      datasets: [{
        data: Object.values(this.props.FlavorTypes),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
    };

    const TimeData = {
      labels: (this.props.WindSpeed).month,
      datasets: [
        {
          label: 'Mean wind speed (m/s)',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#C733FF',
          borderColor: '#C733FF',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#C733FF',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#C733FF',
          pointHoverBorderColor: '#C733FF',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: (this.props.WindSpeed).meanSpeed
        },
        {
          label: 'Maximum wind speed (m/s)',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#33D1FF',
          borderColor: '#33D1FF',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#33D1FF',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#33D1FF',
          pointHoverBorderColor: '#33D1FF',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: (this.props.WindSpeed).maxSpeed
        }
      ]
    };
    return(
      <Fragment>
      <h1>Big Data Grapes Dashboard</h1>
      <div className="main-container">
        <Piechart    title="Sensory Flavor Types"        data={PieData}     />
        <Radarchart  title="Flavors per Each Type" data={RadarData}   />
        <Scatterplot title="Temperature vs Evaporation"    data={ScatterData} />
        <Timeseries  title="Wind Speed"   data={TimeData}    />
        <Barchart    title="Climate Dataset"  data={BarData}     />
      </div>
    </Fragment>
    );
    } // end of render
  } // end of class

  export default withTracker((props) => {
    // let year2017 = Climate.find({YEAR: 2017}).fetch(); //365
    let year2018 = Climate.find({YEAR: 2018}).fetch(); // 330
    let climateData = Climate.find({$or:[{YEAR: 2018},{YEAR: 2017}]}).fetch();

    let windSpeed = {
      meanSpeed: _.map(year2018, "S"),
      maxSpeed: _.map(year2018, "SX"),
      month: _.map(year2018, "MONTH"),
      day: _.map(year2018, "DAY")
    }

    // let periodWithHumidity = {
    //   humidity40: _.map(year2018, "H4"),
    //   humidity80: _.map(year2018, "H8"),
    //   humidity90: _.map(year2018, "H9"),
    //   month: _.map(year2018, "MONTH"),
    //   day: _.map(year2018, "DAY")
    // }

    let evaAndTemp = {
      penmanEvapotranspiration:_.map(climateData, "PETP"),
      meanTemperature:_.map(climateData, "MT"),
      NMH_POSTE:_.map(climateData, "NMH_POSTE"),
      year:_.map(climateData, "YEAR")
    }

    let maxTemp = {
      maxTemperature: _.map(Climate.find({}).fetch(), "XT"),
      year:_.map(climateData, "YEAR")
    }

    return {
      WindSpeed: windSpeed,
      EvaAndTemp: evaAndTemp,
      FlavorTypes:_.countBy(SensoryAnalysis.find({}).fetch(), "flavorType"),
      VisualSensoryFlavours:_.countBy(SensoryAnalysis.find({flavorType: "visual"}).fetch(), "sensoryFlavor"),
      OlfactorySensoryFlavours:_.countBy(SensoryAnalysis.find({flavorType: "olfactory"}).fetch(), "sensoryFlavor"),
      TasteSensoryFlavours:_.countBy(SensoryAnalysis.find({flavorType: "taste"}).fetch(), "sensoryFlavor"),
      // MaxTempPerYear: maxTemp
      DataPointsPerYear: _.countBy(Climate.find({}).fetch(), "YEAR")
      // Humidity: periodWithHumidity,
      // Soil:        Climate.find({}).fetch(),
    };
  })(App);
