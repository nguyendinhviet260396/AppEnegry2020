import React, { Component } from 'react';
import styles from './styles';
// import Button from '@material-ui/core/Button';
// import {Box} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from './../../actions/modal';
import * as userActions from './../../actions/auths';
import solar01 from './../../assets/images/solar3.jpg';
import solar02 from './../../assets/images/solar2.jpg';
import { Grid } from '@material-ui/core';
//import { Line } from 'react-chartjs-2';

class ConfigSystem extends Component {

    render(){
        return(
            <Grid container spacing={1}>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}>Thông tin Solar</div>
                </Grid>
                <Grid item xs = {12} md = {12}>
                    <Grid container spacing={1} >
                        <Grid item xs = {12} md = {6} style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'1%'}}>
                            <img src={solar01}
                                alt="solar01" 
                                style={{
                                    width:'80%',
                            }}/>
                            <div style={{padding:'5px',fontSize:'1.2rem',textAlign:'center',width:'80%',marginTop:'1%',border: '2px solid #00CC00',fontWeight:'600'}}>
                                <div>Solar: EMS Project</div>
                                <div>Công suất thiết kế: 5 kW</div>
                                <div>Inverter: sungrow</div>
                            </div>
                        </Grid>
                        <Grid item xs = {12} md = {6} style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'1%'}}>
                            <img src={solar02}
                                alt="solar01" 
                                style={{
                                    width:'80%',
                            }}/>
                            <div style={{padding:'5px',fontSize:'1.2rem',textAlign:'center',width:'80%',marginTop:'1%',border: '2px solid #00CC00',fontWeight:'600'}}>
                                <div>Solar: SAVINA Project</div>
                                <div>Công suất thiết kế: 18 kW</div>
                                <div>Inverter: ABB</div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                        <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}>Thông tin % năng lượng</div>
                    </Grid>
                    <Grid container spacing={1} style={{ marginTop:'1%'}}>
                        <Grid item xs={12} md ={6}>
                            <div className=" ml-5 mr-5 mb-1 fa-1x ">Công suất cung cấp Solar I</div>
                            <div className="progress ml-5 mr-5 mb-5" >
                                <div className="progress-bar bg-success" style={{width:'75%',}} >75%</div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md ={6}>
                            <div className=" ml-5 mr-5 mb-1 fa-1x ">Công suất cung cấp Solar II</div>
                            <div className="progress ml-5 mr-5 mb-5" >
                                <div className="progress-bar bg-danger" style={{width:'75%',}} >75%</div>
                            </div>
                        </Grid>
                    </Grid >
                </Grid>
            </Grid>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        ...state,
        listUsers:state.auth.listUsers,
    }
};

const mapDispatchToProps =(dispatch,props)=>{
    return{
        userActionCreators:bindActionCreators(userActions,dispatch),
        modalActionCreators:bindActionCreators(modalActions,dispatch)
    }
}
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(ConfigSystem));


