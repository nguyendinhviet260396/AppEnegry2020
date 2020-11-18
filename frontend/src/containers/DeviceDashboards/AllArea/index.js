import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import hocaImg from './../../../assets/images/hoca.jpg';
import santhuongImg from './../../../assets/images/santhuong.jpg';
import solar01 from './../../../assets/images/solar3.jpg';
import solar02 from './../../../assets/images/solar2.jpg';
import homeImg from './../../../assets/images/home.jpg';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EvStationIcon from '@material-ui/icons/EvStation';
import PowerIcon from '@material-ui/icons/Power';
// import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CropRotateIcon from '@material-ui/icons/CropRotate';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import PublicIcon from '@material-ui/icons/Public';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';
class AllArea extends Component {
  render () {
    return (
          <Grid container spacing={1} style= {{width:'100%'}} >
            <Grid item xs={12} md = {6} >
              <Grid item xs={12} md = {12} style={{borderBottom: '2px solid #00CC00'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><PublicIcon style ={{color:'#00CC33'}} />Giám sát tổng quát</div>
                  </Grid>
              <Grid container spacing={1} style={{marginTop:'1%',marginBottom:'2%'}}>
                  <Grid item xs={12} md = {12} style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'1%'}}>
                    <div style={{padding:'5px',fontSize:'1.3rem',textAlign:'center',width:'90%',marginTop:'1%',borderBottom: '2px solid #00CC00',fontWeight:'600'}}>
                        <div><HomeIcon style ={{color:'#00CC33'}} />Home</div>
                      </div>
                      <Link 
                      to="/admin/area/house"
                      style={{marginRight:'5%',marginLeft:'5%'}}>
                      <img src={homeImg}
                        alt="solar01" 
                        style={{
                        marginTop:'2%',
                        width:'100%',
                      }}/>
                      </Link>
                      <div style={{padding:'5px',fontSize:'1.2rem',width:'90%',marginTop:'1%',border: '2px solid #00CC00',fontWeight:'600',borderRadius: '10px'}}>
                        <div><CheckCircleIcon style={{color:'#00CC33'}} />Trạng thái: Bình thường</div> 
                        <div><PowerIcon style={{color:'#00cc33'}} />Công suất hiện tại: 12.5 kW</div>
                        <div><EvStationIcon style={{color:'#00cc33'}} />Năng lượng tiêu thụ: 45.5 kWh</div>
                      </div>
                  </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md = {6}>
                <Grid item xs={12} md = {12} style={{borderBottom: '2px solid #00CC00'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><LocationOnIcon style={{color:'#00CC33'}} />Giám sát khu vực</div>
                </Grid>
                <Grid container spacing={1} style={{marginTop:'1%'}}>
                  <Grid item xs={12} md = {6} style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'1%'}}>
                    <div style={{padding:'5px',fontSize:'1.2rem',textAlign:'center',width:'80%',marginTop:'1%',border: '2px solid #00CC00',fontWeight:'500',borderRadius: '10px'}}>
                        <div><LocationOnIcon style={{color:'#00CC33'}} />Khu vực hồ cá</div>
                        <div><CheckCircleIcon style={{color:'#00CC33'}} />Trạng thái: Bình thường</div> 
                        <div><PowerIcon style={{color:'#00cc33'}} />Công suất hiện tại: 12.5 kWh</div>
                      </div>
                      <Link 
                      to="/admin/area/hoca"
                      style={{marginRight:'10%',marginLeft:'10%'}}>
                      <img src={hocaImg}
                        alt="solar01" 
                        style={{
                        marginTop:'2%',
                        width:'100%',
                      }}/>              
                      </Link>
                  </Grid>
                  <Grid item xs={12} md = {6} style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'1%'}}>
                    <div style={{padding:'5px',fontSize:'1.2rem',textAlign:'center',width:'80%',marginTop:'1%',border: '2px solid #00CC00',fontWeight:'500',borderRadius: '10px'}}>
                        <div><LocationOnIcon style={{color:'#00CC33'}} />Khu vực sân thượng</div>
                        <div><CheckCircleIcon style={{color:'#00CC33'}} />Trạng thái: Bình thường</div> 
                        <div><PowerIcon style={{color:'#00cc33'}} />Công suất hiện tại: 35.5 kWh</div>
                      </div>
                      <Link 
                      to='/admin/area/santhuong'
                      style={{marginRight:'10%',marginLeft:'10%'}}
                      >
                      <img src={santhuongImg}
                        alt="solar01" 
                        style={{
                        marginTop:'2%',
                        width:'100%',
                      }}/>
                      </Link>
                  </Grid>
                </Grid>
                <Grid item xs={12} md = {12} style={{borderBottom: '2px solid #00CC00'}}>
                  <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><WbSunnyIcon style={{color:'#FF0000'}} />Giám sát solar</div>
                </Grid>
                <Grid container spacing={1} style={{marginTop:'1%'}}>
                  <Grid item xs={12} md = {6} style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'1%'}}>
                    <div style={{padding:'5px',fontSize:'1.2rem',textAlign:'center',width:'80%',marginTop:'1%',border: '2px solid #00CC00',fontWeight:'500',borderRadius: '10px'}}>
                        <div><WbSunnyIcon style={{color:'#FF0000'}} />Solar: EMS Project</div>
                        <div><BorderColorIcon style={{color:'#00CC33'}} />Công suất thiết kế: 5 kW</div> 
                        <div><CropRotateIcon style={{color:'#00CC33'}} />Inverter: sungrow</div>
                      </div>
                      <Link 
                      to="/admin/area/solar1"
                      style={{marginRight:'10%',marginLeft:'10%'}}>
                      <img src={solar01}
                        alt="solar01" 
                        style={{
                        marginTop:'2%',
                        width:'100%',
                      }}/>
                      </Link>
                      <div className=" ml-5 mr-5 mb-1 fa-1x w-75">Công suất cung cấp Solar I</div>
                        <div className="progress ml-5 mr-5 mb-5 w-75" >
                            <div className="progress-bar bg-success" style={{width:'80%',}} >80%</div>
                      </div>
                  </Grid>
                  <Grid item xs={12} md = {6} style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'1%'}}>
                    <div style={{padding:'5px',fontSize:'1.2rem',textAlign:'center',width:'80%',marginTop:'1%',border: '2px solid #00CC00',fontWeight:'500',borderRadius: '10px'}}>
                        <div><WbSunnyIcon style={{color:'#FF0000'}} />Solar: SAVINA Project</div>
                        <div><BorderColorIcon style={{color:'#00CC33'}} />Công suất thiết kế: 15.8 kW</div> 
                        <div><CropRotateIcon style={{color:'#00CC33'}} />Inverter: ABB</div>
                      </div>
                      <Link 
                      to='/admin/area/solar2'
                      style={{marginRight:'10%',marginLeft:'10%'}}>
                      <img src={solar02}
                        alt="solar01" 
                        style={{
                        marginTop:'2%',
                        width:'100%',
                      }}/>
                      </Link>
                      <div className=" ml-5 mr-5 mb-1 fa-1x w-75 ">Công suất cung cấp Solar I</div>
                        <div className="progress ml-1 mr-1 mb-1  w-75" >
                            <div className="progress-bar bg-danger" style={{width:'75%',}} >75%</div>
                      </div>
                  </Grid>
                </Grid>
            </Grid>
          </Grid>
    )
  } 
}
AllArea.propTypes={
    classes:PropTypes.object,
 }
export default withStyles(styles)(AllArea);

