import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import GaugeChart from 'react-gauge-chart'


class Gauge1 extends Component {

    render(){
        const {data,id,level} = this.props;
        return(
          <GaugeChart id={id}
              nrOfLevels={level} 
              colors={["#FF5F6D", "#FFC371","#FF000","#00CC00"]} 
              textColor={"#0040FF"}
              arcWidth={0.3} 
              percent={data} 
              needleColor="#FF0000"
              arcPadding = {0.02}
              animDelay={200}
              cornerRadius={100}
              marginInPercent={0.1}
              animate={true}
              />

        )
    }
}

export default withStyles(styles)(Gauge1);