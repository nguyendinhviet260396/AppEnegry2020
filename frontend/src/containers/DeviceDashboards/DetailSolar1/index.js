import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as deviceActions from './../../../actions/devices';
import PropTypes from 'prop-types';
import solar01 from './../../../assets/images/solar3.jpg';
import AreaSolar from '../../../components/AreaSolar';
class DetailSolar1 extends Component {
  componentDidMount(){
    const interval = setInterval(()=>{
      const {deviceActionsCreators} = this.props;
      const {refeshSolar01,refeshPowerSolar01}=deviceActionsCreators;
      refeshSolar01("solar_01");
      refeshPowerSolar01("solar_01");
    },1000);
    return ()=>clearInterval(interval)
  } 
  render () {
    const {listSolar01,listPowerSolar01} = this.props;
    return (
      <AreaSolar 
      title = {"Delail Solar I"}
      data = {listSolar01}
      datapower = {listPowerSolar01}
      project = {"Solar: EMS Project 5kW "}
      solarImg = {solar01}/>
    )
  } 
}
DetailSolar1.propTypes={
  classes:PropTypes.object,
  listSolar01: PropTypes.array,
  listPowerSolar01: PropTypes.array,
  deviceActionsCreators:PropTypes.shape({
      refeshSolar01:PropTypes.func,
      refeshPowerSolar01:PropTypes.func,
  }),
}   
const mapStateToProps=(state)=>{
  console.log(state.devices.listPowerSolar01)
  return{
      ...state,
      listSolar01 :state.devices.listSolar01,
      listPowerSolar01 :state.devices.listPowerSolar01,
  }
};
const mapDispatchToProps =(dispatch,props)=>{
  return{
      deviceActionsCreators: bindActionCreators(deviceActions, dispatch),
  }
}
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(DetailSolar1));



