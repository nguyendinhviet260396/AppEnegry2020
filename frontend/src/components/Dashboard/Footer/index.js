import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import logo from './../../../assets/images/ems_logo.png';

class Footer extends Component {
    render() {
        const {classes} = this.props;
        return (
            <footer className={classes.Footer}> 
                <span ><img src={logo} alt='EmsLogo'style={{ width: '60px',marginRight: '5px'}}/></span>
                <span className={classes.itemContent}>Developed by EMS solution Copyright &copy; 2020 </span>
                {/* <span className={classes.itemContent}><a href="http://emsvietnam.com.vn/">http://emsvietnam.com.vn/</a></span> */}
            </footer>
        );
    }
}
export default withStyles(styles)(Footer);