import React, { Component} from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import  {connect} from 'react-redux';
import * as deviceActions from './../../actions/devices';
import * as weatherActions from './../../actions/weather';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import EvStationIcon from '@material-ui/icons/EvStation';
import EventIcon from '@material-ui/icons/Event';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import OpacityIcon from '@material-ui/icons/Opacity';
import TimelineIcon from '@material-ui/icons/Timeline';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import AreaChart from './../../components/AreaChart/index';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import GradeIcon from '@material-ui/icons/Grade';
import LooksIcon from '@material-ui/icons/Looks';
import SpeedIcon from '@material-ui/icons/Speed';
import Gauge from './../../components/Gauge/index';
import './main.css';

class AdminHomePage extends Component {
 
  componentDidMount(){
    const interval = setInterval(() => {
      const {deviceActionsCreators,weatherActionsCreators} = this.props;
      const {refeshWeather} = weatherActionsCreators;
      const{refeshMain} = deviceActionsCreators;
      refeshMain();
      refeshWeather("Hanoi");
    },2000);
    return () => clearInterval(interval);
    };
    render(){
        const { classes,listWeather }=this.props;
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
                  <div style={{marginTop:'5px', fontSize:'1rem'}}> Thời tiết hôm nay:  {listWeather.length !==0?listWeather[0].name+" <---> "+listWeather[0].country:"NaN"}<GradeIcon style={{color:'#FF0000'}} /> </div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'4%',marginLeft:'4%'}}>
                  <div className="container- pr-2 pl-2 pt-1 w-100 ">
                    <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px',marginBottom:'20%'}}>
                      <tbody>
                        <tr  >
                          <td> <WhatshotIcon style={{color:'#FF0000'}} />Nhiệt độ:</td>
                          <td>{listWeather.length !==0?listWeather[0].temp:"NaN"}</td>
                          <td>*C</td>
                        </tr>
                        <tr>
                          <td> <OpacityIcon  style = {{color:'#00CC33'}}/>Độ ẩm:</td>
                          <td>{listWeather.length !==0?listWeather[0].humi:"NaN"}</td>
                          <td>%</td>
                        </tr>
                        <tr>
                          <td><SpeedIcon style = {{color:'#0033FF'}}/>Tốc độ gió:</td>
                          <td>{listWeather.length !==0?listWeather[0].wind_speed:"NaN"}</td>
                          <td>km/h</td>
                        </tr>
                        <tr  >
                          <td> <AccessAlarmIcon style={{color:'#FF0000'}} />Mặt trời mọc:</td>
                          <td>{listWeather.length !==0?listWeather[0].sunrise:"NaN"}</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td> <AccessAlarmIcon  style = {{color:'#00CC33'}}/>Mặt trời lặn:</td>
                          <td>{listWeather.length !==0?listWeather[0].sunset:"NaN"}</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><LooksIcon style = {{color:'#0033FF'}}/>Bầu trời:</td>
                          <td>{listWeather.length !==0?listWeather[0].description:"NaN"}</td>
                          <td><WbCloudyIcon style = {{color:'#0033FF'}}/></td>
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
                  {/* <AreaChart />  */}
                </Grid>
              </Grid>
              <Grid container spacing={1}>
              <Grid item xs={12} style={{marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1rem'}}><TimelineIcon  style = {{color:'#00CC33'}}/>Biểu đồ năng lượng tiêu thụ</div>
                  {/* <AreaChart />  */}
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
  weatherActionsCreators: PropTypes.shape({
    refeshWeather:PropTypes.func,
    }),
    listWeather:PropTypes.array,

}
const mapStateToProps=(state)=>{
  console.log(state.weather.listWeather)
  return{
      ...state,
      listWeather: state.weather.listWeather,
  }
};

const mapDispatchToProps =(dispatch,props)=>{
  return{
      deviceActionsCreators: bindActionCreators(deviceActions, dispatch),
      weatherActionsCreators: bindActionCreators(weatherActions, dispatch)
  }
}
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(AdminHomePage));