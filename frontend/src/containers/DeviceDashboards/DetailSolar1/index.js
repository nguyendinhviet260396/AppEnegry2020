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
      const {refeshSolar01}=deviceActionsCreators;
      refeshSolar01();
    },1000);
    return ()=>clearInterval(interval)
  } 
  render () {
    return (
      <AreaSolar 
      title = {"Delail Solar I"}
      solarImg = {solar01}/>
    )
  } 
}
DetailSolar1.propTypes={
  classes:PropTypes.object,
  listSolar01: PropTypes.array,
  deviceActionsCreators:PropTypes.shape({
      refeshSolar01:PropTypes.func,
  }),
}   
const mapStateToProps=(state)=>{
  console.log(state.devices.listSolar01)
  return{
      ...state,
  }
};
const mapDispatchToProps =(dispatch,props)=>{
  return{
      deviceActionsCreators: bindActionCreators(deviceActions, dispatch),
  }
}
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(DetailSolar1));



