import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Charts from 'fusioncharts/fusioncharts.charts';
// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';


// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

// STEP 2 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    id: "stockRealTimeChart1",
    type: 'RealTimeColumn',// The chart type
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        "chart": {
            "caption": "Online Transactions per 10 seconds",
            "subCaption": "HarrysSupermart.com",
            "showrealtimevalue": "1",
            "yaxismaxvalue": "100",
            "numdisplaysets": "10",
            "labeldisplay": "rotate",
            "slantLabels": "1",
            "showLegend": "0",
            "numbersuffix": " Transactions",
            "showRealTimeValue": "0",
            "theme": "fusion",
            //"exportEnabled": "1",
            // Show data khi tro chuot
            "anchorsides": "4",
            "anchorradius": "4",
            "anchorbgcolor": "C6C6FF",
            "anchorbordercolor": "0000FF",
            

        },
        "trendlines": [
            {
                "line": [
                    {
                        "startvalue": "50",
                        "valueOnRight": "0",
                        "displayvalue": "Target",
                        "color":"#FF0000",
                        "linethickness": "2",
                        "dashed": "1",
                        "dashgap": "5"
                    }
                ]
            }
        ],
        "categories": [
            {
                "category": [
                    {
                        "label": "Start"
                    }
                ]
            }
        ],
        "dataset": [
            {
                "seriesname": "",
                "alpha": "100",
                "color":"00cc00",
                "data": [
                    {
                        "value": "3"
                    }
                ]
            }
        ]
    },
      "events": {
        "initialized": function(e) {
          function addLeadingZero(num) {
            return (num <= 9) ? ("0" + num) : num;
          }
        }
      }
    }



class RealTimeColumn extends Component {

    render() {
        return (
            <ReactFC
            {...chartConfigs}/>
        );
    }
}
RealTimeColumn.propTypes={
    classes:PropTypes.object,
}   
export default withStyles(styles)(RealTimeColumn);