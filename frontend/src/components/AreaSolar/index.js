import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import PowerIcon from '@material-ui/icons/Power';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import EvStationIcon from '@material-ui/icons/EvStation';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SpeedIcon from '@material-ui/icons/Speed';
import MapIcon from '@material-ui/icons/Map';
import TimelineIcon from '@material-ui/icons/Timeline';
import PublicIcon from '@material-ui/icons/Public';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import OpacityIcon from '@material-ui/icons/Opacity';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import ReceiptIcon from '@material-ui/icons/Receipt';
import TodayIcon from '@material-ui/icons/Today';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import NatureIcon from '@material-ui/icons/Nature';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import GradeIcon from '@material-ui/icons/Grade';
import LooksIcon from '@material-ui/icons/Looks';
import Gauge from '../Gauge';
import AreaChart from '../AreaChart';
class AreaSolar extends Component {
  render () {
    const {solarImg,title,data,datapower,project,dataweather} = this.props;
    console.log(data)
    return (
      <Grid container spacing={1} style={{width:'100%',paddingTop:'50px'}}>
            <Grid container spacing={1} style={{maxHeight:'40px'}}>
              <Grid item xs={12} style={{marginRight:'0.5%',marginLeft:'0.5%',marginTop:'0.5%'}}>
                <div style={{fontSize:'1.5rem',fontWeight:'800',textAlign:'center'}}><MapIcon style={{color:'#00CC33',fontSize:'inherit'}} />{title}</div>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                <div style={{padding:'5px',fontSize:'1rem',fontWeight:'800',textAlign:'center'}}></div>
              </Grid>
              <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                <div style={{padding:'5px',fontSize:'1.3rem',fontWeight:'800'}}><PublicIcon style={{color:'#00CC33',fontSize:'inherit'}} />{project}</div>
                <img src={solarImg}
                        alt="solarimg" 
                        style={{
                        marginTop:'1%',
                        marginLeft:'5%',
                        marginRight:'5%',
                        marginBottom:'3%',
                        width:'90%',
                      }}/>
              </Grid>
              <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                <div style={{padding:'5px',fontSize:'1.3rem',fontWeight:'800'}}><SpeedIcon style={{color:'#00CC33',fontSize:'inherit'}} />Hệ số công suất</div>
                <Gauge series={[data.length !==0 ? data[0].frequency:"NaN"]}/>
              </Grid>
              <Grid item xs={12} style={{marginRight:'0.5%',marginLeft:'0.5%'}}>
                <div style={{padding:'5px',fontSize:'1.3rem',fontWeight:'800'}}><AccessTimeIcon style={{color:'#00CC33',fontSize:'inherit'}} />Tần số</div>
                <Gauge series={[data.length !==0 ? data[0].frequency:"NaN"]}/>
              </Grid>
            </Grid>
              <Grid item xs={12} md={6}>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.3rem',fontWeight:'800',textAlign:'center'}}></div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <Grid container spacing={1} style = {{marginTop:'2%'}}>
                    <Grid item xs={12} md = {6}>
                      <div className="container- pr-2 pl-2 pt-1 w-100 ">
                        <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px', textAlign:'center'}}>
                          <tbody>
                            <tr>
                              <td style={{maxWidth:'20%'}}> <PowerSettingsNewIcon style={{color:'#00CC33',fontSize:'inherit'}} />Điện áp:</td>
                              <td style={{maxWidth:'60%'}}>{data.length !==0 ? data[0].voltage:"NaN"}</td>
                              <td style={{maxWidth:'20%'}}>V</td>
                            </tr>
                            <tr>
                              <td style={{maxWidth:'20%'}}><PowerIcon style={{color:'#00CC33',fontSize:'inherit'}} /> Công suất:</td>
                              <td style={{maxWidth:'60%'}}>{data.length !==0 ? data[0].power:"NaN"}</td>
                              <td style={{maxWidth:'20%'}}>kW</td>
                            </tr>
                          </tbody>
                        </table> 
                      </div>
                    </Grid>
                    <Grid item xs={12} md = {6}>
                        <div className="container- pr-2 pl-2 pt-1 w-100 ">
                          <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px', textAlign:'center'}}>
                            <tbody>
                              <tr>
                                <td style={{maxWidth:'20%'}}><FlashOnIcon style={{color:'#00CC33',fontSize:'inherit'}} /> Dòng điện:</td>
                                <td style={{maxWidth:'60%'}}>{data.length !==0 ? data[0].current:"NaN"}</td>
                                <td style={{maxWidth:'20%'}}>A</td>
                              </tr>
                              <tr>
                                <td style={{maxWidth:'20%'}}><EvStationIcon style={{color:'#00CC33',fontSize:'inherit'}} /> Sản lượng:</td>
                                <td style={{maxWidth:'60%'}}>{data.length !==0 ? data[0].enegry:"NaN"}</td>
                                <td style={{maxWidth:'20%'}}>kWh</td>
                              </tr>
                            </tbody>
                          </table> 
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><TimelineIcon style={{color:'#00CC33',fontSize:'inherit'}} />Biểu đồ công suất tổng</div>
                  <AreaChart data = {datapower.length !==0 ? datapower[0]:[]}/>
                </Grid>
                <Grid item xs={12} style={{marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><TimelineIcon style={{color:'#00CC33',fontSize:'inherit'}} />Biểu đồ năng lượng tổng</div>
                  <AreaChart data = {datapower.length !==0 ? datapower[1]:[]}/>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3}>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1rem',fontWeight:'800'}}></div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%',minHeight:'20%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><WbCloudyIcon style={{color:'#0000FF',fontSize:'inherit'}} />Thời tiết hôm nay:  {dataweather.length !==0 ? dataweather[0].name+" <---> "+dataweather[0].country:"NaN"}<GradeIcon style={{color:'#FF0000'}} /></div>
                  <div className="container- pr-2 pl-2 pt-1 w-100 ">
                    <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px',marginBottom:'5%'}}>
                      <tbody>
                        <tr  >
                          <td> <WhatshotIcon style={{color:'#FF0000'}} />Nhiệt độ:</td>
                          <td>{dataweather.length !==0?dataweather[0].temp:"NaN"}</td>
                          <td>*C</td>
                        </tr>
                        <tr>
                          <td> <OpacityIcon  style = {{color:'#00CC33'}}/>Độ ẩm:</td>
                          <td>{dataweather.length !==0?dataweather[0].humi:"NaN"}</td>
                          <td>%</td>
                        </tr>
                        <tr>
                          <td><SpeedIcon style = {{color:'#0033FF'}}/>Tốc độ gió:</td>
                          <td>{dataweather.length !==0?dataweather[0].wind_speed:"NaN"}</td>
                          <td>km/h</td>
                        </tr>
                        <tr  >
                          <td> <AccessAlarmIcon style={{color:'#00CC33'}} />Mặt trời mọc:</td>
                          <td>{dataweather.length !==0?dataweather[0].sunrise:"NaN"}</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td> <AccessAlarmIcon  style = {{color:'#ff0000'}}/>Mặt trời lặn:</td>
                          <td>{dataweather.length !==0?dataweather[0].sunset:"NaN"}</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><LooksIcon style = {{color:'#0033FF'}}/>Bầu trời:</td>
                          <td>{dataweather.length !==0?dataweather[0].description:"NaN"}</td>
                          <td><WbCloudyIcon style = {{color:'#0033FF'}}/></td>
                        </tr>
                        </tbody>
                    </table> 
                  </div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%',minHeight:'26%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><ImportContactsIcon style={{color:'#00CC33',fontSize:'inherit'}} />Tính toán năng lượng:</div>
                  <div className="container- pr-2 pl-2 pt-1 w-100 ">
                    <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px', textAlign:'center'}}>
                      <tbody>
                        <tr  >
                          <td><EvStationIcon style={{color:'#00CC33',fontSize:'inherit'}} /> Năng lượng tạo ra hôm nay:</td>
                          <td>{125.6}</td>
                          <td>kWh</td>
                        </tr>
                        <tr>
                          <td><EvStationIcon style={{color:'#00CC33',fontSize:'inherit'}} />Năng lượng tiêu thụ hôm nay:</td>
                          <td>{25.6}</td>
                          <td>kWh</td>
                        </tr>
                        <tr>
                          <td><EvStationIcon style={{color:'#00CC33',fontSize:'inherit'}} />Tổng năng lượng tạo ra:</td>
                          <td>{1568.5}</td>
                          <td>kWh</td>
                        </tr>
                        <tr>
                          <td><EvStationIcon style={{color:'#00CC33',fontSize:'inherit'}} />Tổng năng lượng tiêu thụ:</td>
                          <td>{569.5}</td>
                          <td>kWh</td>
                        </tr>
                      </tbody>
                    </table> 
                  </div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%',minHeight:'26%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><ReceiptIcon style={{color:'#00CC33',fontSize:'inherit'}} />Tính toán doanh thu:</div>
                  <div className="container- pr-2 pl-2 pt-1 w-100 ">
                    <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px', textAlign:'center'}}>
                      <tbody>
                        <tr  >
                          <td> <TodayIcon style={{color:'#00CC33',fontSize:'inherit'}} />Ngày:</td>
                          <td>{"123,600"}</td>
                          <td>VNĐ</td>
                        </tr>
                        <tr>
                          <td><TodayIcon style={{color:'#00CC33',fontSize:'inherit'}} />Tuần:</td>
                          <td>{"1,256,300"}</td>
                          <td>VNĐ</td>
                        </tr>
                        <tr>
                          <td><TodayIcon style={{color:'#00CC33',fontSize:'inherit'}} />Tháng:</td>
                          <td>{"4,586,200"}</td>
                          <td>VNĐ</td>
                        </tr>
                        <tr>
                          <td><TodayIcon style={{color:'#00CC33',fontSize:'inherit'}} />Năm:</td>
                          <td>{"12,586,200"}</td>
                          <td>VNĐ</td>
                        </tr>
                      </tbody>
                    </table> 
                  </div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%',minHeight:'20%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><VpnLockIcon style={{color:'#00CC33',fontSize:'inherit'}} />Bảo vệ môi trường:</div>
                  <div className="container- pr-2 pl-2 pt-1 w-100 ">
                    <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px', textAlign:'center'}}>
                      <tbody>
                        <tr  >
                          <td><EmojiTransportationIcon style={{color:'#FF0000',fontSize:'inherit'}} /> Lượng khí CO2 giảm:</td>
                          <td>{data.length !==0 ? ((data[0].enegry)*0.997).toFixed(2):"NaN"}</td>
                          <td>Kg</td>
                        </tr>
                        <tr>
                          <td><NatureIcon style={{color:'#00CC33',fontSize:'inherit'}} />Diện tích rừng </td>
                          <td>{data.length !==0 ?((data[0].enegry)*0.4*18.5/(85.55*0.41)).toFixed(2):"NaN"}</td>
                          <td>m2</td>
                        </tr>
                        <tr>
                          <td><BubbleChartIcon style={{color:'#000000',fontSize:'inherit'}} />Lượng than giảm:</td>
                          <td>{data.length !==0 ?((data[0].enegry)*0.4).toFixed(2):"NaN"}</td>
                          <td>Kg</td>
                        </tr>
                      </tbody>
                    </table> 
                  </div>
                </Grid>
              </Grid>
          </Grid>
    )
  } 
}
AreaSolar.propTypes={
    classes:PropTypes.object,
 }
export default withStyles(styles)(AreaSolar);



