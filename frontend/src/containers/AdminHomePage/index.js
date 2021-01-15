import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as deviceActions from './../../actions/devices';
import * as weatherActions from './../../actions/weather';
import { bindActionCreators } from 'redux';
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
import RealTimeColumn from './../../components/RealTimeColumn';
import { Redirect } from 'react-router-dom';
import './main.css';

class AdminHomePage extends Component {
  componentDidMount() {
    const interval = setInterval(() => {
      const { deviceActionsCreators, weatherActionsCreators } = this.props;
      const { refeshWeather } = weatherActionsCreators;
      const {
        refeshMainLast,
        refeshMainEnegry,
        refeshMainEnegryDayly,
        refeshMainEnegryHourly,
        refeshMainEnegryWeekly,
        refeshMainEnegryMonthly,
      } = deviceActionsCreators;
      refeshMainLast('');
      refeshMainEnegry('');
      refeshMainEnegryDayly('');
      refeshMainEnegryHourly('');
      refeshMainEnegryWeekly('');
      refeshMainEnegryMonthly('');
      refeshWeather('Hanoi');
    }, 1000);
    return () => clearInterval(interval);
  }
  render() {
    const {
      classes,
      listWeather,
      listMainEnegry,
      listMainLast,
      listMainEnegryHourly,
      listMainEnegryDayly,
      listMainEnegryWeekly,
      listMainEnegryMonthly,
      redirectToReferrer,
    } = this.props;
    if (
      redirectToReferrer === false &&
      localStorage.getItem('token:') === null
    ) {
      return <Redirect to="/" />;
    }

    return (
      <Grid container spacing={1} className={classes.maincontainer}>
        <Grid item xs={12} md={3} style={{ backgroundColor: '#FFFFFF' }}>
          <Grid
            item
            xs={12}
            style={{
              borderBottom: '2px solid #00CC00',
              marginRight: '0.5%',
              marginLeft: '0.5%',
            }}
          >
            <div
              style={{
                padding: '5px',
                fontSize: '1.5rem',
                fontWeight: '800',
                textAlign: 'center',
              }}
            >
              Tính toán
            </div>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} style={{ marginRight: '4%', marginLeft: '4%' }}>
              <div style={{ marginTop: '5px', fontSize: '1rem' }}>
                
                Thời tiết hôm nay:
                {listWeather.length !== 0
                  ? listWeather[0].name + ' <---> ' + listWeather[0].country
                  : 'NaN'}
                <GradeIcon style={{ color: '#FF0000' }} />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                borderBottom: '2px solid #00CC00',
                marginRight: '4%',
                marginLeft: '4%',
              }}
            >
              <div className="container- pr-2 pl-2 pt-1 w-100 ">
                <table
                  className="table table-sm table-hover"
                  style={{
                    color: '#111',
                    fontSize: '1rem',
                    borderRadius: '10px',
                    marginBottom: '20%',
                  }}
                >
                  <tbody>
                    <tr>
                      <td>
                        
                        <WhatshotIcon style={{ color: '#FF0000' }} />
                        Nhiệt độ:
                      </td>
                      <td>
                        {listWeather.length !== 0 ? listWeather[0].temp : 'NaN'}
                      </td>
                      <td>*C</td>
                    </tr>
                    <tr>
                      <td>
                        
                        <OpacityIcon style={{ color: '#00CC33' }} />
                        Độ ẩm:
                      </td>
                      <td>
                        {listWeather.length !== 0 ? listWeather[0].humi : 'NaN'}
                      </td>
                      <td>%</td>
                    </tr>
                    <tr>
                      <td>
                        <SpeedIcon style={{ color: '#0033FF' }} />
                        Tốc độ gió:
                      </td>
                      <td>
                        {listWeather.length !== 0
                          ? listWeather[0].wind_speed
                          : 'NaN'}
                      </td>
                      <td>km/h</td>
                    </tr>
                    <tr>
                      <td>
                        
                        <AccessAlarmIcon style={{ color: '#00CC33' }} />
                        Mặt trời mọc:
                      </td>
                      <td>
                        {listWeather.length !== 0
                          ? listWeather[0].sunrise
                          : 'NaN'}
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        
                        <AccessAlarmIcon style={{ color: '#FF0000' }} />
                        Mặt trời lặn:
                      </td>
                      <td>
                        {listWeather.length !== 0
                          ? listWeather[0].sunset
                          : 'NaN'}
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <LooksIcon style={{ color: '#0033FF' }} />
                        Bầu trời:
                      </td>
                      <td>
                        {listWeather.length !== 0
                          ? listWeather[0].description
                          : 'NaN'}
                      </td>
                      <td>
                        <WbCloudyIcon style={{ color: '#0033FF' }} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Grid>
            <Grid item xs={12} style={{ marginRight: '4%', marginLeft: '4%' }}>
              <div style={{ marginTop: '5px', fontSize: '1rem' }}>
                
                Tính toán năng lượng:
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                borderBottom: '2px solid #00CC00',
                marginRight: '4%',
                marginLeft: '4%',
              }}
            >
              <div className="container- pr-2 pl-2 pt-1 w-100 ">
                <table
                  className="table table-sm table-hover"
                  style={{
                    color: '#111',
                    fontSize: '1rem',
                    borderRadius: '10px',
                    marginBottom: '20%',
                  }}
                >
                  <tbody>
                    <tr>
                      <td>
                        
                        <EvStationIcon style={{ color: '#00CC33' }} />
                        Năng lượng tạo ra:
                      </td>
                      <td>
                        {listMainLast.length !== 0
                          ? (
                              listMainLast[0][0].enegry +
                              listMainLast[1][0].enegry
                            ).toFixed(2)
                          : 'NaN'}
                      </td>
                      <td>kWh</td>
                    </tr>
                    <tr>
                      <td>
                        
                        <EvStationIcon style={{ color: '#00CC33' }} />
                        Năng lượng tiêu thụ:
                      </td>
                      <td>
                        {listMainLast.length !== 0
                          ? listMainLast[2][0].totalactiveennegry.toFixed(2)
                          : 'NaN'}
                      </td>
                      <td>kWh</td>
                    </tr>
                    <tr>
                      <td>
                        <EvStationIcon style={{ color: '#00CC33' }} />
                        Năng lượng hòa lưới:
                      </td>
                      <td>
                        {listMainLast.length !== 0
                          ? (
                              -listMainLast[2][0].totalactiveennegry +
                              listMainLast[0][0].enegry +
                              listMainLast[1][0].enegry
                            ).toFixed(2)
                          : 'NaN'}
                      </td>
                      <td>kWh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Grid>
            <Grid item xs={12} style={{ marginRight: '4%', marginLeft: '4%' }}>
              <div style={{ marginTop: '5px', fontSize: '1rem' }}>
                
                Tính toán doanh thu:
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                borderBottom: '2px solid #00CC00',
                marginRight: '4%',
                marginLeft: '4%',
              }}
            >
              <div className="container- pr-2 pl-2 pt-1 w-100 ">
                <table
                  className="table table-sm table-hover"
                  style={{
                    color: '#111',
                    fontSize: '1rem',
                    borderRadius: '10px',
                    marginBottom: '20%',
                  }}
                >
                  <tbody>
                    <tr>
                      <td>
                        
                        <EventIcon style={{ color: '#FF0000' }} />
                        Ngày:
                      </td>
                      <td>{'NaN'}</td>
                      <td>VNĐ</td>
                    </tr>
                    <tr>
                      <td>
                        
                        <EventIcon style={{ color: '#FF0000' }} />
                        Tuần:
                      </td>
                      <td>{'NaN'}</td>
                      <td>VNĐ</td>
                    </tr>
                    <tr>
                      <td>
                        <EventIcon style={{ color: '#FF0000' }} />
                        Tháng:
                      </td>
                      <td>{'NaN'}</td>
                      <td>VNĐ</td>
                    </tr>
                    <tr>
                      <td>
                        <EventIcon style={{ color: '#FF0000' }} />
                        Năm:
                      </td>
                      <td>{'NaN'}</td>
                      <td>VNĐ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} style={{ backgroundColor: '#FFFFFF' }}>
          <Grid
            item
            xs={12}
            style={{
              borderBottom: '2px solid #00CC00',
              marginRight: '0.5%',
              marginLeft: '0.5%',
            }}
          >
            <div
              style={{
                padding: '5px',
                fontSize: '1.5rem',
                fontWeight: '800',
                textAlign: 'center',
              }}
            >
              Tổng quan năng lượng tiêu thụ
            </div>
          </Grid>
          <Grid
            container
            spacing={1}
            style={{ marginTop: '1%', marginBottom: '1%' }}
          >
            <Grid item xs={12} md={4}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <div
                    style={{
                      textAlign: 'center',
                      fontSize: '1rem',
                      margin: '5px',
                      height: '30px',
                      width: '95%',
                      borderRadius: '5px',
                      padding: '5px',
                      border: '1px solid #00CC00',
                    }}
                  >
                    <EvStationIcon
                      style={{ color: '#00cc33', fontSize: 'inherit' }}
                    />
                    Giờ trước:
                    {listMainEnegryHourly.length !== 0
                      ? listMainEnegryHourly[0].totalactiveennegry
                      : 'NaN'}
                    kWh
                  </div>
                  <div
                    style={{
                      textAlign: 'center',
                      fontSize: '1rem',
                      margin: '5px',
                      height: '30px',
                      width: '95%',
                      borderRadius: '5px',
                      padding: '5px',
                      border: '1px solid #00CC00',
                    }}
                  >
                    <EvStationIcon
                      style={{ color: '#00cc33', fontSize: 'inherit' }}
                    />
                    Hôm qua:
                    {listMainEnegryDayly.length !== 0
                      ? listMainEnegryDayly[0].totalactiveennegry
                      : 'NaN'}
                    kWh
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <div
                    style={{
                      textAlign: 'center',
                      fontSize: '1rem',
                      margin: '5px',
                      height: '30px',
                      width: '95%',
                      borderRadius: '5px',
                      padding: '5px',
                      border: '1px solid #00CC00',
                    }}
                  >
                    <EvStationIcon
                      style={{ color: '#00cc33', fontSize: 'inherit' }}
                    />
                    Hôm nay:
                    {listMainEnegryDayly.length !== 0
                      ? listMainEnegryDayly[0].totalactiveennegry
                      : 'NaN'}
                    kWh
                  </div>
                  <div
                    style={{
                      textAlign: 'center',
                      fontSize: '1rem',
                      margin: '5px',
                      height: '30px',
                      width: '95%',
                      borderRadius: '5px',
                      padding: '5px',
                      border: '1px solid #00CC00',
                    }}
                  >
                    <EvStationIcon
                      style={{ color: '#00cc33', fontSize: 'inherit' }}
                    />
                    Tuần trước:
                    {listMainEnegryWeekly.length !== 0
                      ? listMainEnegryWeekly[0].totalactiveennegry
                      : 'NaN'}
                    kWh
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <div
                    style={{
                      textAlign: 'center',
                      fontSize: '1rem',
                      margin: '5px',
                      height: '30px',
                      width: '95%',
                      borderRadius: '5px',
                      padding: '5px',
                      border: '1px solid #00CC00',
                    }}
                  >
                    <EvStationIcon
                      style={{ color: '#00cc33', fontSize: 'inherit' }}
                    />
                    Tổng hiện tại:
                    {listMainLast.length !== 0
                      ? listMainLast[2][0].totalactiveennegry
                      : 'NaN'}
                    kWh
                  </div>
                  <div
                    style={{
                      textAlign: 'center',
                      fontSize: '1rem',
                      margin: '5px',
                      height: '30px',
                      width: '95%',
                      borderRadius: '5px',
                      padding: '5px',
                      border: '1px solid #00CC00',
                    }}
                  >
                    <EvStationIcon
                      style={{ color: '#00cc33', fontSize: 'inherit' }}
                    />
                    Tháng trước:
                    {listMainEnegryMonthly.length !== 0
                      ? listMainEnegryMonthly[0].totalactiveennegry
                      : 'NaN'}
                    kWh
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              style={{
                borderBottom: '2px solid #00CC00',
                borderTop: '2px solid #00CC00',
                marginRight: '0.5%',
                marginLeft: '0.5%',
              }}
            >
              <div style={{ padding: '5px', fontSize: '1rem' }}>
                <TimelineIcon style={{ color: '#00CC33' }} />
                Biểu đồ phụ tải
              </div>
              <AreaChart
                data={listMainEnegry.length !== 0 ? listMainEnegry[0] : []}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              style={{
                borderBottom: '2px solid #00CC00',
                marginRight: '0.5%',
                marginLeft: '0.5%',
              }}
            >
              <div style={{ padding: '5px', fontSize: '1rem' }}>
                <TimelineIcon style={{ color: '#00CC33' }} />
                Biểu đồ năng lượng tiêu thụ
              </div>
              <RealTimeColumn
                data={listMainEnegry.length !== 0 ? listMainEnegry[1] : []}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3} style={{ backgroundColor: '#FFFFFF' }}>
          <Grid
            item
            xs={12}
            style={{
              borderBottom: '2px solid #00CC00',
              marginRight: '4%',
              marginLeft: '4%',
            }}
          >
            <div
              style={{
                padding: '5px',
                fontSize: '1.5rem',
                fontWeight: '800',
                textAlign: 'center',
              }}
            >
              
              Tổng quan năng lượng mặt trời
            </div>
          </Grid>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              style={{
                borderBottom: '2px solid #00CC00',
                marginRight: '4%',
                marginLeft: '4%',
              }}
            >
              <div
                style={{ padding: '5px', fontSize: '1rem', fontWeight: '800' }}
              >
                <WbSunnyIcon style={{ color: '#ff0000' }} />
                Năng lượng mặt trời I
              </div>
              <Gauge
                series={[
                  listMainLast.length !== 0
                    ? (listMainLast[0][0].power / 50).toFixed(2)
                    : 0,
                ]}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                borderBottom: '2px solid #00CC00',
                marginRight: '4%',
                marginLeft: '4%',
              }}
            >
              <div
                style={{
                  height: '80px',
                  textAlign: 'center',
                  fontSize: '1rem',
                  paddingTop: '28px',
                }}
              >
                <EvStationIcon style={{ color: '#00CC33' }} />
                Tổng năng lượng tạo ra :{' '}
                {listMainLast.length !== 0 ? listMainLast[0][0].enegry : 0} kWh
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                borderBottom: '2px solid #00CC00',
                marginRight: '4%',
                marginLeft: '4%',
              }}
            >
              <div
                style={{ padding: '5px', fontSize: '1rem', fontWeight: '800' }}
              >
                <WbSunnyIcon style={{ color: '#ff0000' }} /> Năng lượng mặt trời
                II
              </div>
              <Gauge
                series={[
                  listMainLast.length !== 0
                    ? (listMainLast[1][0].power / 80).toFixed(2)
                    : 0,
                ]}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                borderBottom: '2px solid #00CC00',
                marginRight: '4%',
                marginLeft: '4%',
              }}
            >
              <div
                style={{
                  height: '80px',
                  textAlign: 'center',
                  fontSize: '1rem',
                  paddingTop: '28px',
                }}
              >
                <EvStationIcon style={{ color: '#00CC33' }} />
                Tổng năng lượng tạo ra :{' '}
                {listMainLast.length !== 0 ? listMainLast[1][0].enegry : 0} kWh
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
AdminHomePage.propTypes = {
  deviceActionsCreators: PropTypes.shape({
    refeshMainLast: PropTypes.func,
  }),
  listMainLast: PropTypes.array,
  listMainEnegry: PropTypes.array,
  listMainEnegryHourly: PropTypes.array,
  listMainEnegryDayly: PropTypes.array,
  listMainEnegryWeekly: PropTypes.array,
  listMainEnegryMonthly: PropTypes.array,
  redirectToReferrer: PropTypes.bool,
  weatherActionsCreators: PropTypes.shape({
    refeshWeather: PropTypes.func,
  }),
  listWeather: PropTypes.array,
};
const mapStateToProps = state => {
  console.log(state.devices);
  return {
    ...state,
    listWeather: state.weather.listWeather,
    listMainLast: state.devices.listMainLast,
    listMainEnegry: state.devices.listMainEnegry,
    listMainEnegryHourly: state.devices.listMainEnegryHourly,
    listMainEnegryDayly: state.devices.listMainEnegryDayly,
    listMainEnegryWeekly: state.devices.listMainEnegryWeekly,
    listMainEnegryMonthly: state.devices.listMainEnegryMonthly,
    redirectToReferrer: state.auth.redirectToReferrer,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    deviceActionsCreators: bindActionCreators(deviceActions, dispatch),
    weatherActionsCreators: bindActionCreators(weatherActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(AdminHomePage),
);
