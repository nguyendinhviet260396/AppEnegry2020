import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import  { Link}  from 'react-router-dom';
import enegry from './../../assets/images/enegry.jpg';
import { Grid } from '@material-ui/core';
import ems_logo from './../../assets/images/ems_logo.png';
import './welcom.css';
class Welcom extends Component {
    render() {
        return (
            <Grid container style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            minHeight: '100vh'}}>
                <Link 
                to = '/login'
                style={{width:'100%',
                }}>
                    <Grid item xs = {12} md ={12} 
                    style={{backgroundImage: `url(${enegry})`,      
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding:'0',
                    }}
                    >
                        <div className="context">
                            <img className="element" src={ems_logo} width="10%" height="4%" alt="emslogo"/>
                        </div>
                        
                    </Grid >
                    <Grid item xs = {12} md ={12}>
                        <div className ="text" style={{color:'#FFF', fontSize:'1vw',fontWeight:'600'}}>
                                sales@emsvietnam.com.vn @ Địa Chỉ: Phòng 12A09, Tòa nhà 17T7, Hoàng Đạo Thúy, Quận Thanh Xuân, Hà Nội                
                        </div>

                    </Grid>
                </Link>
            </Grid>
        )        
    }
}
Welcom.propTypes={
    classes:PropTypes.object,
}   
export default withStyles(styles)(Welcom);