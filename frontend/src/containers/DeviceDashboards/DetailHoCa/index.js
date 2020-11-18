import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import hocaImg from './../../../assets/images/hoca.jpg';
import AreaManage from '../../../components/AreaManage';
class DetailHoCa extends Component {
  render () {
    return (
      <AreaManage 
      title = {"CHI TIẾT VỀ HỒ CÁ"}
      areaImg = {hocaImg}/>
    )
  } 
}
DetailHoCa.propTypes={
    classes:PropTypes.object,
 }
export default withStyles(styles)(DetailHoCa);



