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
import Gauge from '../Gauge';
import AreaChart from '../AreaChart';
class AreaSolar extends Component {
  render () {
    const {solarImg,title,data,project} = this.props;
    console.log(data)
    return (
      <Grid container spacing={1} style={{width:'100%'}}>
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
                  <AreaChart/>
                </Grid>
                <Grid item xs={12} style={{marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><TimelineIcon style={{color:'#00CC33',fontSize:'inherit'}} />Biểu đồ năng lượng tổng</div>
                  <AreaChart/>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3}>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1rem',fontWeight:'800'}}></div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%',minHeight:'20%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><WbCloudyIcon style={{color:'#0000FF',fontSize:'inherit'}} />Thời tiết hôm nay:</div>
                  <div className="container- pr-2 pl-2 pt-1 w-100 ">
                    <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px', textAlign:'center'}}>
                      <tbody>
                        <tr>
                          <td style={{maxWidth:'20%'}}><WhatshotIcon style={{color:'#FF0000',fontSize:'inherit'}} /> Nhiệt độ:</td>
                          <td style={{maxWidth:'60%'}}>{23.5}</td>
                          <td style={{maxWidth:'20%'}}>*C</td>
                        </tr>
                        <tr>
                          <td style={{maxWidth:'20%'}}><OpacityIcon style={{color:'#00CC33',fontSize:'inherit'}} /> Độ ẩm:</td>
                          <td style={{maxWidth:'60%'}}>{80.5}</td>
                          <td style={{maxWidth:'20%'}}>%</td>
                        </tr>
                        <tr>
                          <td style={{maxWidth:'20%'}}><WbCloudyIcon style={{color:'#0000FF',fontSize:'inherit'}} /> Chất lượng không khí:</td>
                          <td style={{maxWidth:'60%'}}>{40.8}</td>
                          <td style={{maxWidth:'20%'}}>%</td>
                        </tr>
                      </tbody>
                    </table> 
                  </div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%',minHeight:'30%'}}>
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
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%',minHeight:'30%'}}>
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
                          <td>{135.5}</td>
                          <td>Kg</td>
                        </tr>
                        <tr>
                          <td><NatureIcon style={{color:'#00CC33',fontSize:'inherit'}} />Diện tích rừng </td>
                          <td>{152.6}</td>
                          <td>m2</td>
                        </tr>
                        <tr>
                          <td><BubbleChartIcon style={{color:'#000000',fontSize:'inherit'}} />Lượng than giảm:</td>
                          <td>{1568.5}</td>
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



