import React, {Component} from 'react';
import FusionCharts from 'fusioncharts';
import Widgets from "fusioncharts/fusioncharts.widgets";
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

class Cylinder extends Component {
    
    render() {
      const itemColor = '#33FF33';
      const chartConfigs = {
       type: "thermometer",
       renderAt: "chart-container",
       width: "5%",
       height: "400",
       dataFormat: "json",
       dataSource: {
          chart: {
             caption: "Temperature",
             subCaption: "Front Air",
             lowerLimit: "-10",
             upperLimit: "100",
             numberSuffix: "°C",
             thmFillColor: itemColor,
             plotToolText: "Temperature: <b>$datavalue</b> ",
             theme: "fusion"
          },
          value: "15"
       },
      //  events: {
      //     initialized: function(evt, arg) {
      //        var chartRef = evt.sender;
      //        chartRef.intervalUpdateId = setInterval(function() {
      //           var num = parseInt(Math.random() * (20 - 5 + 1) + -5);
      //           chartRef.feedData("&value=" + num);
      //        }, 2000);
      //     },
 
      //     disposed: function(evt, args) {
      //        clearInterval(evt.sender.intervalUpdateId);
      //     }
     //}
};
      //const itemColor = '#33FF33';
        return (
              <ReactFC
                {...chartConfigs}
              />
        )
    }
}
export default Cylinder;
