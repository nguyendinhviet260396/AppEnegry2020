import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ReactApexChart from "react-apexcharts";
class AreaChart extends Component {
    render() {
      const {data} = this.props;
      const target = 25;
        const series = [{
            name:'power',
            data: data

           }]
          const options = {
            chart: {
              id: 'area-datetime',
              type: 'area',
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
              //text:"Trend Power",
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
            xaxis: {
              type: 'datetime',
              //max: new Date().getTime(),
            },
            yaxis: {
              title: {
                //text: 'power'
              },
              min: 0,
            },
            tooltip: {
              x: {
                format: 'dd MMM yyyy'
              }
            },
            responsive: [
              {
                breakpoint: 1,
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
            ],
            fill: {
              type: 'gradient',
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
              }
            },
          };
        
        return (
            
              <ReactApexChart
                options={options}
                series={series}
                type="area"
                height={290}
                width='100%'
              />
          );
    }
}
AreaChart.propTypes={
    classes:PropTypes.object,
}   
export default withStyles(styles)(AreaChart);