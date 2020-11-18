import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as deviceActions from './../../../actions/devices';
import PropTypes from 'prop-types';
import solar02 from './../../../assets/images/solar2.jpg';
import AreaSolar from '../../../components/AreaSolar';
class DetailSolar2 extends Component {
  componentDidMount(){
    const interval = setInterval(()=>{
      const {deviceActionsCreators} = this.props;
      const {refeshSolar02}=deviceActionsCreators;
      refeshSolar02("solar_02");
    },1000);
    return ()=>clearInterval(interval)
  } 
  render () {
    const {listSolar02}=this.props;
    return (
      <AreaSolar 
      title = {"Delail Solar II"}
      data = {listSolar02}
      project = {"Solar: SAVINA Project 15kW "}
      solarImg = {solar02}/>
    )
  } 
}
DetailSolar2.propTypes={
  classes:PropTypes.object,
  listSolar02: PropTypes.array,
  deviceActionsCreators:PropTypes.shape({
      refeshSolar02:PropTypes.func,
  }),
}   
const mapStateToProps=(state)=>{
  return{
      ...state,
      listSolar02:state.devices.listSolar02,
  }
};
const mapDispatchToProps =(dispatch,props)=>{
  return{
      deviceActionsCreators: bindActionCreators(deviceActions, dispatch),
  }
}
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(DetailSolar2));




