import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as deviceActions from './../../../actions/devices';
import * as weatherActions from './../../../actions/weather';
import PropTypes from 'prop-types';
import solar02 from './../../../assets/images/solar2.jpg';
import AreaSolar from '../../../components/AreaSolar';
class DetailSolar2 extends Component {
  componentDidMount(){
    const interval = setInterval(()=>{
      const {deviceActionsCreators,weatherActionsCreators} = this.props;
      const {refeshSolar02,refeshPowerSolar02}=deviceActionsCreators;
      const {refeshWeather} = weatherActionsCreators;
      refeshWeather("Hanoi");
      refeshSolar02("solar_02");
      refeshPowerSolar02("solar_02");
    },1000);
    return ()=>clearInterval(interval)
  } 
  render () {
    const {listSolar02,listPowerSolar02,listWeather}=this.props;
    return (
      <AreaSolar 
      title = {"Delail Solar II"}
      data = {listSolar02}
      datapower = {listPowerSolar02}
      dataweather ={listWeather}
      project = {"Solar: SAVINA Project 15kW "}
      solarImg = {solar02}/>
    )
  } 
}
DetailSolar2.propTypes={
  classes:PropTypes.object,
  listSolar02: PropTypes.array,
  listWeather: PropTypes.array,
  listPowerSolar02: PropTypes.array,
  deviceActionsCreators:PropTypes.shape({
      refeshSolar02:PropTypes.func,
      refeshPowerSolar02:PropTypes.func,
  }),
}   
const mapStateToProps=(state)=>{
  return{
      ...state,
      listSolar02 :state.devices.listSolar02,
      listPowerSolar02 :state.devices.listPowerSolar02,
      listWeather: state.weather.listWeather,
  }
};
const mapDispatchToProps =(dispatch,props)=>{
  return{
      deviceActionsCreators: bindActionCreators(deviceActions, dispatch),
      weatherActionsCreators: bindActionCreators(weatherActions, dispatch)
  }
}
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(DetailSolar2));




