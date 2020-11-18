import React, { Component} from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import  {connect} from 'react-redux';
import * as deviceActions from './../../actions/devices';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
//import temphumiicon from '../../assets/images/temphumi-icon.png'
//import iconNomal from '../../assets/images/iconNomal.png'
//import iconWarring from '../../assets/images/iconWarring.png'
//import iconError from '../../assets/images/iconError.png';
////import iconFan from './../../assets/images/iconfan.png'; 
//import Button from '@material-ui/core/Button';
//import {Link} from 'react-router-dom';
import EvStationIcon from '@material-ui/icons/EvStation';
import EventIcon from '@material-ui/icons/Event';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import OpacityIcon from '@material-ui/icons/Opacity';
import TimelineIcon from '@material-ui/icons/Timeline';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import AreaChart from './../../components/AreaChart/index';
import Gauge from './../../components/Gauge/index';
import './main.css';

class AdminHomePage extends Component {
 
  componentDidMount(){
    const interval = setInterval(() => {
      const {deviceActionsCreators} = this.props;
      const{refeshMain} = deviceActionsCreators;

      refeshMain();
    },1000);
    return () => clearInterval(interval);
    };
    render(){
        const { classes }=this.props;
          return ( 
          <Grid 
          container 
          spacing={1} 
          className={classes.maincontainer} 
          //style={{backgroundImage: `url(${smartcabinet})`}}
          >
            <Grid item xs={12} md ={3} style={{backgroundColor:'#FFFFFF'}}>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800',textAlign:'center'}}>Calculate</div>
                </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12} style={{marginRight:'4%',marginLeft:'4%'}}>
                  <div style={{marginTop:'5px', fontSize:'1rem'}}> Thời tiết hôm nay:</div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'4%',marginLeft:'4%'}}>
                  <div className="container- pr-2 pl-2 pt-1 w-100 ">
                    <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px',marginBottom:'20%'}}>
                      <tbody>
                        <tr  >
                          <td> <WhatshotIcon style={{color:'#FF0000'}} />Nhiệt độ:</td>
                          <td>{"NaN"}</td>
                          <td>*C</td>
                        </tr>
                        <tr>
                          <td> <OpacityIcon  style = {{color:'#00CC33'}}/>Độ ẩm:</td>
                          <td>{"NaN"}</td>
                          <td>%</td>
                        </tr>
                        <tr>
                          <td><WbCloudyIcon style = {{color:'#0033FF'}}/>Chất lượng không khí:</td>
                          <td>{"NaN"}</td>
                          <td>%</td>
                        </tr>
                      </tbody>
                    </table> 
                  </div>
                </Grid>
                <Grid item xs={12} style={{marginRight:'4%',marginLeft:'4%'}}>
                  <div style={{marginTop:'5px', fontSize:'1rem'}}> Tính toán năng lượng:</div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'4%',marginLeft:'4%'}}>
                  <div className="container- pr-2 pl-2 pt-1 w-100 ">
                    <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px',marginBottom:'20%'}}>
                      <tbody>
                        <tr  >
                          <td> <EvStationIcon  style={{color:'#00CC33'}}/>Năng lượng tạo ra:</td>
                          <td>{"NaN"}</td>
                          <td>kWh</td>
                        </tr>
                        <tr>
                          <td> <EvStationIcon style={{color:'#00CC33'}}/>Năng lượng tiêu thụ:</td>
                          <td>{"NaN"}</td>
                          <td>kWh</td>
                        </tr>
                        <tr>
                          <td><EvStationIcon style={{color:'#00CC33'}}/>Năng lượng hòa lưới:</td>
                          <td>{"NaN"}</td>
                          <td>kWh</td>
                        </tr>
                      </tbody>
                    </table> 
                  </div>
                </Grid>
                <Grid item xs={12} style={{marginRight:'4%',marginLeft:'4%'}}>
                  <div style={{marginTop:'5px', fontSize:'1rem'}}> Tính toán doanh thu:</div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'4%',marginLeft:'4%'}}>
                  <div className="container- pr-2 pl-2 pt-1 w-100 ">
                    <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px',marginBottom:'20%'}}>
                      <tbody>
                        <tr  >
                          <td> <EventIcon  style = {{color:'#FF0000'}} />Ngày:</td>
                          <td>{"NaN"}</td>
                          <td>VNĐ</td>
                        </tr>
                        <tr>
                          <td> <EventIcon style = {{color:'#FF0000'}} />Tuần:</td>
                          <td>{"NaN"}</td>
                          <td>VNĐ</td>
                        </tr>
                        <tr>
                          <td><EventIcon style = {{color:'#FF0000'}} />Tháng:</td>
                          <td>{"NaN"}</td>
                          <td>VNĐ</td>
                        </tr>
                        <tr>
                          <td><EventIcon style = {{color:'#FF0000'}} />Năm:</td>
                          <td>{"NaN"}</td>
                          <td>VNĐ</td>
                        </tr>
                      </tbody>
                    </table> 
                  </div>
                </Grid>
                
              </Grid>
            </Grid>
            <Grid item xs={12} md ={6} style={{backgroundColor:'#FFFFFF'}}>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800',textAlign:'center'}}>Overview of energy consumption</div>
                </Grid>
              <Grid container spacing={1} style={{marginTop:'1%',marginBottom:'1%'}}>
                <Grid item xs={12} md={4}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                    <div style ={{        
                            textAlign: 'center',
                            fontSize: '1rem',
                            margin: '5px',
                            height:'30px',
                            width:'95%',
                            borderRadius:'5px',
                            padding:'5px',
                            border: '1px solid #00CC00',}}>
                              <EvStationIcon style={{color:'#00cc33',fontSize:'inherit'}} /> 
                        Current energy: 25.6 kW
                    </div>
                    <div style ={{        
                            textAlign: 'center',
                            fontSize: '1rem',
                            margin: '5px',
                            height:'30px',
                            width:'95%',
                            borderRadius:'5px',
                            padding:'5px',
                            border: '1px solid #00CC00',}}> 
                            <EvStationIcon style={{color:'#00cc33',fontSize:'inherit'}} /> 
                        Last day energy: 25.6 kW
                    </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                    <div style ={{        
                            textAlign: 'center',
                            fontSize: '1rem',
                            margin: '5px',
                            height:'30px',
                            width:'95%',
                            borderRadius:'5px',
                            padding:'5px',
                            border: '1px solid #00CC00',}}> 
                            <EvStationIcon style={{color:'#00cc33',fontSize:'inherit'}} /> 
                        To day energy: 25.6 kW
                    </div>
                    <div style ={{        
                            textAlign: 'center',
                            fontSize: '1rem',
                            margin: '5px',
                            height:'30px',
                            width:'95%',
                            borderRadius:'5px',
                            padding:'5px',
                            border: '1px solid #00CC00',}}> 
                            <EvStationIcon style={{color:'#00cc33',fontSize:'inherit'}} /> 
                        Last week energy: 25.6 kW
                    </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                    <div style ={{        
                            textAlign: 'center',
                            fontSize: '1rem',
                            margin: '5px',
                            height:'30px',
                            width:'95%',
                            borderRadius:'5px',
                            padding:'5px',
                            border: '1px solid #00CC00',}}> 
                            <EvStationIcon style={{color:'#00cc33',fontSize:'inherit'}} /> 
                        Total energy: 25.6 kW
                    </div>
                    <div style ={{        
                            textAlign: 'center',
                            fontSize: '1rem',
                            margin: '5px',
                            height:'30px',
                            width:'95%',
                            borderRadius:'5px',
                            padding:'5px',
                            border: '1px solid #00CC00',}}> 
                            <EvStationIcon style={{color:'#00cc33',fontSize:'inherit'}} /> 
                        Last month energy: 25.6 kW
                    </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',borderTop: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1rem'}}><TimelineIcon  style = {{color:'#00CC33'}}/>Biểu đồ phụ tải</div>
                  <AreaChart /> 
                </Grid>
              </Grid>
              <Grid container spacing={1}>
              <Grid item xs={12} style={{marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1rem'}}><TimelineIcon  style = {{color:'#00CC33'}}/>Biểu đồ năng lượng tiêu thụ</div>
                  <AreaChart /> 
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md ={3} style={{backgroundColor:'#FFFFFF'}}>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'4%',marginLeft:'4%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800',textAlign:'center'}}> Overview Solar</div>
                </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'4%',marginLeft:'4%'}}>
                  <div style={{padding:'5px',fontSize:'1rem',fontWeight:'800'}}><WbSunnyIcon  style = {{color:'#ff0000'}}/> Solar On Top I</div>
                  <Gauge series={[35]}/>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'4%',marginLeft:'4%'}}>
                  <div style={{height:'80px',textAlign:'center',fontSize:'1rem',paddingTop:'28px'}}>
                    <EvStationIcon  style = {{color:'#00CC33'}}/>
                    Total generation energy : 12.56 kWh
                  </div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'4%',marginLeft:'4%'}}>
                  <div style={{padding:'5px',fontSize:'1rem',fontWeight:'800'}}><WbSunnyIcon  style = {{color:'#ff0000'}}/> Solar On Top II</div>
                  <Gauge series={[80]}/>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'4%',marginLeft:'4%'}}>
                  <div style={{height:'80px',textAlign:'center',fontSize:'1rem',paddingTop:'28px'}}>
                    <EvStationIcon  style = {{color:'#00CC33'}}/>
                    Total generation energy : 36.8 kWh
                  </div>
                </Grid>
              </Grid>
          </Grid>
        </Grid>
        );
    }
}
AdminHomePage.propTypes={
  deviceActionsCreators: PropTypes.shape({
          refeshMain:PropTypes.func,
  }),
          listMain:PropTypes.array,

}
const mapStateToProps=(state)=>{
  console.log(state.devices.listMain)
  return{
      ...state,
  }
};

const mapDispatchToProps =(dispatch,props)=>{
  return{
      deviceActionsCreators: bindActionCreators(deviceActions, dispatch),
  }
}
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(AdminHomePage));