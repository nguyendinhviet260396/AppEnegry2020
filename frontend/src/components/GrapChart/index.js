import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ReactApexChart from "react-apexcharts";
class GrapChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
            series : [
                    {
                      name: "Load",
                      data: [
                        555,1203,6903,88,16,9326,20554,334,38,1666,2996,6472,49, 1406,238,269
                      ],
                    },
                    {
                      name: "Battery",
                      data: [28, 284, 9394, 427, 76026, 1918, 5015, 1029, 1255, 1666, 2996, 6472, 49, 1406, 238, 269],
                    },
                    {
                      name: "Bypass",
                      data: [17, 259, 1666, 2996, 6472, 49, 1406, 238, 269, 1666, 2996, 6472, 49, 1406, 238, 269],
                    },
                  ],
          options: {
            chart: {
              height: 300,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            annotations: {
                yaxis: [{
                  y: 30,
                  borderColor: '#999',
                  label: {
                    show: true,
                    text: 'Support',
                    style: {
                      color: "#fff",
                      background: '#00E396'
                    }
                  }
                }],
                xaxis: [{
                  x: new Date('14 Nov 2012').getTime(),
                  borderColor: '#999',
                  yAxisIndex: 0,
                  label: {
                    show: true,
                    text: 'Rally',
                    style: {
                      color: "#fff",
                      background: '#775DD0'
                    }
                  }
                }]
              },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z",
              "2018-09-19T07:30:00.000Z", "2018-09-19T08:30:00.000Z", "2018-09-19T09:30:00.000Z", "2018-09-19T10:30:00.000Z", "2018-09-19T11:30:00.000Z", "2018-09-19T12:30:00.000Z", "2018-09-19T13:30:00.000Z",
              "2018-09-19T14:30:00.000Z", "2018-09-19T15:30:00.000Z", "2018-09-19T16:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },
        
        
        };
      }

    render() {  
        
        return (
            <div
              style={{
                backgroundColor: "white",
                textAlign: "center",
              }}
            >
              <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="area"
                height={280}
                margin ={0}
                width='100%'
              />
            </div>
          );
    }
}
GrapChart.propTypes={
    classes:PropTypes.object,
}   
export default withStyles(styles)(GrapChart);