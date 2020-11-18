import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ReactApexChart from "react-apexcharts";



// let timemin =new Date("2020-10-02").getTime();
// let timemax=new Date("2020-10-02").getTime()+(43200000);
class ZoomLineTimeSeries extends Component { 
    render() {
        const {data}= this.props;
        const target = 32;
        const series = [{
            name:'power',
            data:data
          }]
          const options = {
            chart: {
              id: 'area-datetime',
              type: 'line',
              zoom: {
                autoScaleYaxis: true
              }
            },
            toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                  download: true,
                  selection: true,
                  zoom: true,
                  zoomin: true,
                  zoomout: true,
                  pan: true,
                  //reset: true | '<img src="/static/icons/reset.png" width="20">',
                  customIcons: []
                },
                autoSelected: 'zoom' //tự động sử dụng tools này khi load biểu đồ
              },
              annotations: {
                yaxis: [{
                  y: target,
                  borderColor: '#FF0000',
                  label: {
                    borderColor: '#FF0000',
                    fontSize: '10px',
                    style: {
                      color: '#111',
                      background: '#FFFF00',
                    },
                    text: 'Target',
                  }
                }]
              },
            title: {
              text:"Trend Power",
              align: 'left',
              margin: 10,
              offsetX: 0,
              offsetY: 0,
              floating: false,
              style: {
                fontSize:  '16px',
                fontWeight:  'bold',
                fontFamily:  undefined,
                color:  '#263238'
              }
            },
            dataLabels: {
              enabled: false
            },
            markers: {
              size: 0,  
              style: 'hollow',
            },
            // xaxis: {
            //   type: 'datetime',
            //   //min: timemin,
            //   //max: timemax,
            // },
            xaxis: {
              type: 'datetime',
              labels: {
                datetimeFormatter: {
                  year: 'yyyy',
                  month: 'MMM \'yy',
                  day: 'dd MMM',
                  hour: 'HH:mm'
                }
              }
            },
            yaxis: {
              title: {
                text: 'power'
              },
              min: 0,
              //max: 100,
            },
            tooltip: {
              x: {
                format: 'dd-MMM-yyyy hh:mm:ss'
              }
            },
            fill: {
              //type: 'gradient',
              // gradient: {
              //   shadeIntensity: 1,
              //   opacityFrom: 0.7,
              //   opacityTo: 0.9,
              //   stops: [0, 100]
              // }
            },
            responsive: [
                {
                  breakpoint: 100,
                  options: {
                    plotOptions: {
                      bar: {
                        horizontal: false
                      }
                    },
                    legend: {
                      position: "bottom"
                    }
                  }
                }
              ]
          };
        
        return (
              <ReactApexChart
                options={options}
                series={series}
                type="line"
                height='285'
                width='100%'
              />
          );
    }
}
ZoomLineTimeSeries.propTypes={
    classes:PropTypes.object,
}   
export default withStyles(styles)(ZoomLineTimeSeries);