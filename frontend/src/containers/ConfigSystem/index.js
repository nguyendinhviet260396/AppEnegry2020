import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import GaugeChart from 'react-gauge-chart'


class ConfigSystem extends Component {

    render(){
        const data = 0.52;
        return(
            <Grid container spacing={1}>
                <GaugeChart id="gauge-chart5" 
                    nrOfLevels={20} 
                    colors={["#FF5F6D", "#FFC371","#FF000","#00CC00"]} 
                    textColor={"#111"}
                    arcWidth={0.3} 
                    percent={data} 
                    needleColor="#345243" 
                    />
            </Grid>
        )
    }
}

export default withStyles(styles)(ConfigSystem);


