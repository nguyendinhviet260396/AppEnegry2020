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
import TimelineIcon from '@material-ui/icons/Timeline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Gauge from '../Gauge';
import AreaChart from '../AreaChart';
class AreaManage extends Component {
  render () {
    const {
      areaImg,
      title,
    } = this.props;
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
                <div style={{padding:'5px',fontSize:'1.3rem',fontWeight:'800'}}><LocationOnIcon style={{color:'#00CC33',fontSize:'inherit'}} />Solar EMS Project: 5kW</div>
                <img src={areaImg}
                        alt="areaImg" 
                        style={{
                        marginTop:'1%',
                        marginLeft:'5%',
                        marginRight:'5%',
                        marginBottom:'3%',
                        width:'90%',
                      }}/>
              </Grid>
        <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%'}}>
          <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><SpeedIcon style={{color:'#00CC33',fontSize:'inherit'}} />Hệ số công suất</div>
          <Gauge series={[80]}/>
        </Grid>
        <Grid item xs={12} style={{marginRight:'0.5%',marginLeft:'0.5%'}}>
          <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><AccessTimeIcon style={{color:'#00CC33',fontSize:'inherit'}} />Tần số</div>
          <Gauge series={[50]}/>
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
          <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%',minHeight:'20%'}}>
            <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><PowerSettingsNewIcon style={{color:'#00CC33',fontSize:'inherit'}} />Điện áp:</div>
            <div style={{padding:'10px',fontSize:'2.5rem',fontWeight:'800',textAlign:'center'}}>220.5 V</div>
          </Grid>
          <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%',minHeight:'20%'}}>
            <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><FlashOnIcon style={{color:'#00CC33',fontSize:'inherit'}} />Dòng điện:</div>
            <div style={{padding:'10px',fontSize:'2.5rem',fontWeight:'800',textAlign:'center'}}>3.7 A</div>
          </Grid>
          <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%',minHeight:'20%'}}>
            <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><PowerIcon style={{color:'#00CC33',fontSize:'inherit'}} />Công suất:</div>
            <div style={{padding:'10px',fontSize:'2.5rem',fontWeight:'800',textAlign:'center'}}>24.5 kW</div>
          </Grid>
          <Grid item xs={12} style={{borderBottom: '2px solid #00CC00',marginRight:'0.5%',marginLeft:'0.5%',minHeight:'20%'}}>
            <div style={{padding:'5px',fontSize:'1.5rem',fontWeight:'800'}}><EvStationIcon style={{color:'#00CC33',fontSize:'inherit'}} />Năng lượng tiêu thụ:</div>
            <div style={{padding:'10px',fontSize:'2.5rem',fontWeight:'800',textAlign:'center'}}>1.25 kWh</div>
          </Grid>
        </Grid>
    </Grid>
    )
  } 
}
AreaManage.propTypes={
    classes:PropTypes.object,
 }
export default withStyles(styles)(AreaManage);



