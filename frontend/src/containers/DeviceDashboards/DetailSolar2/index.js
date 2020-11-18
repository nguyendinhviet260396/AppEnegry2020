import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import solar02 from './../../../assets/images/solar2.jpg';
import AreaSolar from '../../../components/AreaSolar';
class DetailSolar2 extends Component {
  render () {
    return (
      <AreaSolar 
      title = {"Delail Solar II"}
      solarImg = {solar02}/>
    )
  } 
}
DetailSolar2.propTypes={
    classes:PropTypes.object,
 }
export default withStyles(styles)(DetailSolar2);



