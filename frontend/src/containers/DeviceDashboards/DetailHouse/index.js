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
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SpeedIcon from '@material-ui/icons/Speed';
import MapIcon from '@material-ui/icons/Map';
import Gauge from './../../../components/Gauge';
import AreaChart from './../../../components/AreaChart';
import TimelineIcon from '@material-ui/icons/Timeline';
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';

class DetailHouse extends Component {
  render () {
    return (
          <Grid container spacing={1}>
            <Grid container spacing={1} style={{maxHeight:'40px'}}>
              <Grid item xs={12} style={{marginRight:'0.5%',marginLeft:'0.5%',marginTop:'0.5%'}}>
              <div style={{fontSize:'1.5rem',fontWeight:'800',textAlign:'center'}}><MapIcon style={{color:'#00CC33',fontSize:'inherit'}} />Detail the House</div>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                <div style={{padding:'5px',fontSize:'1rem',fontWeight:'800',textAlign:'center'}}></div>
              </Grid>
              <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><SpeedIcon style={{color:'#00CC33',fontSize:'inherit'}} />Hệ số công suất</div>
                <Gauge series={[80]}/>
              </Grid>
              <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><AccessTimeIcon style={{color:'#00CC33',fontSize:'inherit'}} />Tần số</div>
                <Gauge series={[50]}/>
              </Grid>
              <Grid item xs={12} style={{marginRight:'0.5%',marginLeft:'0.5%'}}>
                <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><EvStationIcon style={{color:'#00CC33',fontSize:'inherit'}} />Năng lượng tiêu thụ</div>
                <div style={{padding:'15%',fontSize:'2rem',fontWeight:'800',textAlign:'center'}}>45.86 kWh</div>
              </Grid>
            </Grid>
              <Grid item xs={12} md={6}>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800',textAlign:'center'}}></div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><CheckCircleIcon style={{color:'#00CC33',fontSize:'inherit'}} />Trạng thái</div>
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
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><PowerSettingsNewIcon style={{color:'#00CC33',fontSize:'inherit'}} />Điện áp:</div>
                  <div className="container- pr-2 pl-2 pt-1 w-100 ">
                    <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px', textAlign:'center'}}>
                      <tbody>
                        <tr>
                          <td style={{maxWidth:'20%'}}><PowerSettingsNewIcon style={{color:'#00CC33',fontSize:'inherit'}} /> Pha A</td>
                          <td style={{maxWidth:'60%'}}>{220.5}</td>
                          <td style={{maxWidth:'20%'}}>V</td>
                        </tr>
                        <tr>
                          <td style={{maxWidth:'20%'}}> <PowerSettingsNewIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha B</td>
                          <td style={{maxWidth:'60%'}}>{235.1}</td>
                          <td style={{maxWidth:'20%'}}>V</td>
                        </tr>
                        <tr>
                          <td style={{maxWidth:'20%'}}> <PowerSettingsNewIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha C</td>
                          <td style={{maxWidth:'60%'}}>{223.5}</td>
                          <td style={{maxWidth:'20%'}}>V</td>
                        </tr>
                      </tbody>
                    </table> 
                  </div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><FlashOnIcon style={{color:'#00CC33',fontSize:'inherit'}} />Dòng điện</div>
                  <div className="container- pr-2 pl-2 pt-1 w-100 ">
                    <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px', textAlign:'center'}}>
                      <tbody>
                        <tr  >
                          <td> <FlashOnIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha A</td>
                          <td>{"NaN"}</td>
                          <td>A</td>
                        </tr>
                        <tr>
                          <td><FlashOnIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha B</td>
                          <td>{"NaN"}</td>
                          <td>A</td>
                        </tr>
                        <tr>
                          <td><FlashOnIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha C</td>
                          <td>{"NaN"}</td>
                          <td>A</td>
                        </tr>
                      </tbody>
                    </table> 
                  </div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><PowerIcon style={{color:'#00CC33',fontSize:'inherit'}} />Công suất tác dụng</div>
                  <div style={{padding:'10px',fontSize:'1.2rem',fontWeight:'800',textAlign:'center'}}>35.4 kW</div>
                  <div className="container- pr-2 pl-2 pt-1 w-100 ">
                    <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px', textAlign:'center'}}>
                      <tbody>
                        <tr  >
                          <td> <PowerIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha A</td>
                          <td>{"NaN"}</td>
                          <td>kW</td>
                        </tr>
                        <tr>
                          <td><PowerIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha B</td>
                          <td>{"NaN"}</td>
                          <td>kW</td>
                        </tr>
                        <tr>
                          <td><PowerIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha C</td>
                          <td>{"NaN"}</td>
                          <td>kW</td>
                        </tr>
                      </tbody>
                    </table> 
                  </div>
                </Grid>
                <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><SwapHorizontalCircleIcon style={{color:'#00CC33',fontSize:'inherit'}} />Công suất phản kháng:</div>
                  <div style={{padding:'10px',fontSize:'1.2rem',fontWeight:'800',textAlign:'center'}}>25 kVAr</div>
                  <div className="container- pr-2 pl-2 pt-1 w-100 ">
                    <table className="table table-sm table-hover" style={{color:'#111',fontSize:'1rem',borderRadius:'10px', textAlign:'center'}}>
                      <tbody>
                        <tr  >
                          <td> <SwapHorizontalCircleIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha A</td>
                          <td>{"NaN"}</td>
                          <td>kVAr</td>
                        </tr>
                        <tr>
                          <td><SwapHorizontalCircleIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha B</td>
                          <td>{"NaN"}</td>
                          <td>kVAr</td>
                        </tr>
                        <tr>
                          <td><SwapHorizontalCircleIcon style={{color:'#00CC33',fontSize:'inherit'}} />Pha C</td>
                          <td>{"NaN"}</td>
                          <td>kVAr</td>
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
DetailHouse.propTypes={
    classes:PropTypes.object,
 }
export default withStyles(styles)(DetailHouse);


