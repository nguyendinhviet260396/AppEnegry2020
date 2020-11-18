import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PieRealTime from './../../../components/PieRealTime';
import imgUPS  from './../../../assets/images/UPS.png';
import Gauge from './../../../components/Gauge';
import AreaChart from '../../../components/AreaChart';
import { Alert, AlertTitle } from '@material-ui/lab';
import  {connect} from 'react-redux';
import * as deviceActions from './../../../actions/devices';
import {bindActionCreators} from 'redux';
import ZoomLineTimeSeries from './../../../components/ZoomLineTimeSeries';
import ColumnChartRealTime from './../../../components/ColumnChartRealTime';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PowerIcon from '@material-ui/icons/Power';
import MemoryIcon from '@material-ui/icons/Memory';
import PowerInputIcon from '@material-ui/icons/PowerInput';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import EvStationIcon from '@material-ui/icons/EvStation';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ErrorIcon from '@material-ui/icons/Error';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
class DetailUPS extends Component {
    componentDidMount(){
        
      const interval = setInterval(()=>{
        const {deviceActionsCreators} = this.props;
        const {refeshUPS,refeshUPSPOWER}=deviceActionsCreators;
        refeshUPS();
        refeshUPSPOWER();
      },1000);
      return ()=>clearInterval(interval)
    }
    handleClickSetting(){
        console.log('handleClickSetting')
    }
    renderStatus(){
        let status ={
            "name":"Normal",
            "id":"success"
            } ;
        const {classes,listUps} = this.props;
        if (listUps.length !== 0){
           if (listUps[0].status === false){
                status ={
                    "name":"Error",
                    "id":"error"
                    } 
           }
           else if (listUps[0].status === true) {
                status ={
                    "name":"Normal",
                    "id":"success"
                    } 
           } else {
            status ={
                "name":"Warning",
                "id":"warning"
                } 
           }
        }
        var result = null;
                if (status.length !== 0){
                    return (
                        <div>
                            <Alert 
                            elevation={8}
                            className={classes.Alert} 
                            variant="outlined" 
                            severity={status.id}>
                                <AlertTitle style={{fontSize: '25px',fontWeight:"bolder"}}>
                                    {status.name}
                                </AlertTitle>
                                <img src={imgUPS}
                                alt="ups" 
                                style={{
                                    width:'70%',
                                    height: '170px',
                                    marginBottom: '40px',
                                    filter: 'drop-shadow(10px 20px 10px #FF0000)',
                                }}/>
                            </Alert>
                        </div>
                    );
                }
        return result;
    }
    render() {
        const {classes,listUpsPower,listUps}=this.props;
        const dataG = [50];
        const dataP=[
            {
            "title":"Batterry",
            "value":60
            },
            {
            "title":"Bypass",
            "value":50
            }];
        const data1 = [["2020-09-23T05:00:00Z",52],["2020-09-23T05:05:00Z",25],["2020-09-23T05:10:00Z",80],["2020-09-23T08:10:00Z",50],["2020-09-24T05:00:00Z",82],["2020-09-24T08:05:00Z",32],["2020-09-24T09:10:00Z",80],["2020-09-24T12:10:00Z",20],["2020-10-02T08:05:00Z",32],["2020-10-02T09:10:00Z",80],["2020-10-02T12:10:00Z",20]];
        return (
            <Grid container spacing={1} style={{marginTop: '0.2%',margin:'0px',width:'100%',}}>
            <Grid item xs={12}  className ={classes.title} >DETAIL UNINTERRUPTIBLE POWER SUPPLY</Grid>
            <Grid container spacing={1} className={classes.viewmain}>
                <Grid item xs = {12} md={3}  className = {classes.view}>
                    <Grid container spacing={1} className={classes.view1}>
                        <Grid item xs={12}>
                            <Gauge series={dataG}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}  className={classes.text} >
                        Status Uninterruptible Power Supply 
                    </Grid>
                        <Button 
                        style={{padding: '0.1em',borderColor:'#EE0000',border:'0em'}}
                        variant='text'
                        onClick={this.handleClickSetting}>
                            {this.renderStatus()}
                        </Button>
                    <Grid item xs={12} >
                        <Grid container spacing={1}>
                            <Grid item  xs={12}>
                                <PieRealTime 
                                dataSeries={[dataP[0].value,dataP[1].value]}
                                dataLabels={[dataP[0].title,dataP[1].title]}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs = {12} md={5} className = {classes.view}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                        <AreaChart /> 
                            <ZoomLineTimeSeries data={listUpsPower}/>
                            <ColumnChartRealTime data={data1} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs = {12} md={4} className = {classes.view}>
                    <Grid container spacing={1}>
                        <Grid item xs ={12} className ={classes.text}>
                            Parameter Inputs
                        </Grid>
                        <Grid item xs={6}>
                            <Grid item xs={12} style={{fontWeight: '500',fontSize: '1.2rem',borderRadius:'10px', borderBottom:'5px',borderBottomColor:'#111'}}>
                                Imput Supply
                            </Grid>
                            <table className="table" style={{fontWeight: '300',fontSize: '1rem',textAlign:'start'}}>
                                <tbody>
                                    <tr>
                                        <td><PowerSettingsNewIcon style={{marginRight:'3%'}} />Voltage:</td>
                                        <td style={{maxWidth:'30%'}}>{listUps !==0 ? (listUps[0].involtage ? listUps[0].involtage:"NaN"):"NaN"}</td>
                                        <td style={{maxWidth:'20%'}}>V</td>
                                    </tr>
                                    <tr>
                                        <td><FlashOnIcon style={{marginRight:'3%'}} />Current:</td>
                                        <td style={{maxWidth:'30%'}}>{listUps !==0 ?  (listUps[0].involtage ? listUps[0].involtage:"NaN"):"NaN"}</td>
                                        <td style={{maxWidth:'30%'}}>A</td>
                                    </tr>
                                    <tr>
                                        <td><PowerIcon style={{marginRight:'3%'}}/>Power</td>
                                        <td style={{maxWidth:'30%'}}>{listUps !==0 ?  (listUps[0].involtage ? listUps[0].involtage:"NaN"):"NaN"}</td>
                                        <td style={{maxWidth:'30%'}}>kW</td>

                                    </tr>
                                    <tr>
                                        <td><EvStationIcon style={{marginRight:'3%'}} />Enegry </td>
                                        <td style={{maxWidth:'30%'}}>{listUps !==0 ?  (listUps[0].involtage ? listUps[0].involtage:"NaN"):"NaN"}</td>
                                        <td style={{maxWidth:'30%'}}>kWh</td>
                                    </tr>
                                    <tr>
                                        <td><AccessTimeIcon style={{marginRight:'3%'}} />Prequency</td>
                                        <td style={{maxWidth:'30%'}}>{listUps !==0 ?  (listUps[0].involtage ? listUps[0].involtage:"NaN"):"NaN"}</td>
                                        <td style={{maxWidth:'30%'}}>Hz</td>
                                    </tr>
                                    <tr>
                                        <td><BatteryChargingFullIcon style={{marginRight:'3%'}} />Battery</td>
                                        <td style={{maxWidth:'30%'}}>{listUps !==0 ?  (listUps[0].involtage ? listUps[0].involtage:"NaN"):"NaN"}</td>
                                        <td style={{maxWidth:'30%'}}>%</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid item xs={12} style={{fontWeight: '500',fontSize: '1.2rem',borderRadius:'10px', borderBottom:'5px',borderBottomColor:'#111'}}>
                                Information Uninterruptible Power Supply
                            </Grid>
                            <table className="table" style={{fontWeight: '300',fontSize: '1rem',textAlign:'start'}}>
                                <tbody>
                                    <tr>
                                        <td><HomeWorkIcon style={{marginRight:'3%'}}/>Model: 11 RT ABB</td>
                                    </tr>
                                    <tr>
                                        <td><MemoryIcon style={{marginRight:'3%'}} />Capacity: 2.2 kW</td>
                                    </tr>
                                    <tr>
                                        <td><PowerIcon style={{marginRight:'3%'}}/>Power: 220,230,240V/50,60Hz</td>
                                    </tr>
                                    <tr>
                                        <td><PowerInputIcon style={{marginRight:'3%'}} />Rated Current: 9.6,9.2.8.8 A</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Grid>
                        <Grid item xs ={12} className ={classes.text}>
                                Parameter Outputs
                        </Grid>
                        <Grid item xs={6}>
                        <table className="table" style={{fontWeight: '300',fontSize: '1rem',textAlign:'start'}}>
                                <tbody>
                                    <tr>
                                        <td><PowerSettingsNewIcon style={{marginRight:'3%'}} />Voltage:</td>
                                        <td style={{maxWidth:'30%'}}>{listUps !==0 ?  (listUps[0].involtage ? listUps[0].involtage:"NaN"):"NaN"}</td>
                                        <td style={{maxWidth:'20%'}} >V</td>
                                    </tr>
                                    <tr>
                                        <td><FlashOnIcon style={{marginRight:'3%'}} />Current:</td>
                                        <td style={{maxWidth:'30%'}}>{listUps !==0 ?  (listUps[0].involtage ? listUps[0].involtage:"NaN"):"NaN"}</td>
                                        <td style={{maxWidth:'30%'}}>A</td>
                                    </tr>
                                    <tr>
                                        <td><PowerIcon style={{marginRight:'3%'}}/>Power</td>
                                        <td style={{maxWidth:'30%'}}>{listUps !==0 ?  (listUps[0].involtage ? listUps[0].involtage:"NaN"):"NaN"}</td>
                                        <td style={{maxWidth:'30%'}}>kW</td>

                                    </tr>
                                    <tr>
                                        <td><EvStationIcon style={{marginRight:'3%'}} />Enegry </td>
                                        <td style={{maxWidth:'30%'}}>{listUps !==0 ?  (listUps[0].involtage ? listUps[0].involtage:"NaN"):"NaN"}</td>
                                        <td style={{maxWidth:'30%'}}>kWh</td>
                                    </tr>
                                    <tr>
                                        <td><AccessTimeIcon style={{marginRight:'3%'}} />Prequency</td>
                                        <td style={{maxWidth:'30%'}}>{listUps !==0 ?  (listUps[0].involtage ? listUps[0].involtage:"NaN"):"NaN"}</td>
                                        <td style={{maxWidth:'30%'}}>Hz</td>
                                    </tr>
                                    <tr>
                                        <td><BatteryChargingFullIcon style={{marginRight:'3%'}} />Battery</td>
                                        <td style={{maxWidth:'30%'}}>{listUps !==0 ?  (listUps[0].involtage ? listUps[0].involtage:"NaN"):"NaN"}</td>
                                        <td style={{maxWidth:'30%'}}>%</td>
                                    </tr>
                                    <tr>
                                        <td><WhatshotIcon style={{marginRight:'3%'}} />Temperaturn</td>
                                        <td style={{maxWidth:'30%'}}>{listUps !==0 ?  (listUps[0].involtage ? listUps[0].involtage:"NaN"):"NaN"}</td>
                                        <td style={{maxWidth:'20%'}} >*C</td>
                                    </tr>
                                    <tr>
                                        <td><MemoryIcon style={{marginRight:'3%'}} />Current:</td>
                                        <td style={{maxWidth:'30%'}}>{listUps !==0 ?  (listUps[0].involtage ? listUps[0].involtage:"NaN"):"NaN"}</td>
                                        <td style={{maxWidth:'30%'}}>A</td>
                                    </tr>
                                    <tr>
                                        <td><PowerIcon style={{marginRight:'3%'}}/>Power</td>
                                        <td style={{maxWidth:'30%'}}>{listUps !==0 ?  (listUps[0].involtage ? listUps[0].involtage:"NaN"):"NaN"}</td>
                                        <td style={{maxWidth:'30%'}}>kW</td>

                                    </tr>
                                </tbody>
                            </table>
                        </Grid>
                        <Grid item xs={6}>
                        <table className="table" style={{fontWeight: '300',fontSize: '1rem',textAlign:'start'}}>
                                <tbody>
                                    <tr>
                                        <td><ErrorIcon style={{marginRight:'3%'}} />Alarm</td>
                                        <td style={{maxWidth:'30%'}}>Battery Bad</td>
                                        <td style={{maxWidth:'20%'}} >{listUps !==0 ? (listUps[0].involtage === true ? <CheckIcon/>:<CloseIcon/>):"NaN"}</td>
                                    </tr>
                                    <tr>
                                        <td><ErrorIcon style={{marginRight:'3%'}} />Alarm</td>
                                        <td style={{maxWidth:'30%'}}>On Battery</td>
                                        <td style={{maxWidth:'20%'}} >{listUps !==0 ? (listUps[0].involtage === true ? <CheckIcon/>:<CloseIcon/>):"NaN"}</td>
                                    </tr>
                                    <tr>
                                        <td><ErrorIcon style={{marginRight:'3%'}}/>Alarm</td>
                                        <td style={{maxWidth:'30%'}}> Battery Low</td>
                                        <td style={{maxWidth:'20%'}} >{listUps !==0 ? (listUps[0].involtage === true ? <CheckIcon/>:<CloseIcon/>):"NaN"}</td>

                                    </tr>
                                    <tr>
                                        <td><ErrorIcon style={{marginRight:'3%'}} />Alarm </td>
                                        <td style={{maxWidth:'30%'}}>Input Bad</td>
                                        <td style={{maxWidth:'20%'}} >{listUps !==0 ? (listUps[0].involtage === true ? <CheckIcon/>:<CloseIcon/>):"NaN"}</td>
                                    </tr>
                                    <tr>
                                        <td><ErrorIcon style={{marginRight:'3%'}} />Alarm</td>
                                        <td style={{maxWidth:'30%'}}> Output Bad</td>
                                        <td style={{maxWidth:'20%'}} >{listUps !==0 ? (listUps[0].involtage === true ? <CheckIcon/>:<CloseIcon/>):"NaN"}</td>
                                    </tr>
                                    <tr>
                                        <td><ErrorIcon style={{marginRight:'3%'}} />Alarm</td>
                                        <td style={{maxWidth:'30%'}}>Output Overload</td>
                                        <td style={{maxWidth:'20%'}} >{listUps !==0 ? (listUps[0].involtage === true ? <CheckIcon/>:<CloseIcon/>):"NaN"}</td>
                                    </tr>
                                    <tr>
                                        <td><ErrorIcon style={{marginRight:'3%'}} />Alarm</td>
                                        <td style={{maxWidth:'30%'}}> On Bypass</td>
                                        <td style={{maxWidth:'20%'}} >{listUps !==0 ? (listUps[0].involtage === true ? <CheckIcon/>:<CloseIcon/>):"NaN"}</td>
                                    </tr>
                                    <tr>
                                        <td><ErrorIcon style={{marginRight:'3%'}}/>Alarm</td>
                                        <td style={{maxWidth:'30%'}}> Bypass Bad</td>
                                        <td style={{maxWidth:'20%'}} >{listUps !==0 ? (listUps[0].involtage === true ? <CheckIcon/>:<CloseIcon/>):"NaN"}</td>

                                    </tr>
                                    <tr>
                                        <td><ErrorIcon style={{marginRight:'3%'}} />Alarm </td>
                                        <td style={{maxWidth:'30%'}}> Charger Failed</td>
                                        <td style={{maxWidth:'20%'}} >{listUps !==0 ? (listUps[0].involtage === true ? <CheckIcon/>:<CloseIcon/>):"NaN"}</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> 
        </Grid>
        );
    }
}
DetailUPS.propTypes={
    classes:PropTypes.object,
    listUps: PropTypes.array,
    listUpsPower: PropTypes.array,
    deviceActionsCreators:PropTypes.shape({
        refeshUPS:PropTypes.func,
    }),
}   
const mapStateToProps=(state)=>{
    console.log(state.devices.listUps)
    return{
        ...state,
        listUps:state.devices.listUps,
        listUpsPower:state.devices.listUpsPower,  
    }
  };
  const mapDispatchToProps =(dispatch,props)=>{
    return{
        deviceActionsCreators: bindActionCreators(deviceActions, dispatch),
    }
  }
  export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(DetailUPS));
