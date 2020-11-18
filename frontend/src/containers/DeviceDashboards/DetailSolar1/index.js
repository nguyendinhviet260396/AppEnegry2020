import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import solar01 from './../../../assets/images/solar3.jpg';
import AreaSolar from '../../../components/AreaSolar';
class DetailSolar1 extends Component {
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
 }
export default withStyles(styles)(DetailSolar1);



