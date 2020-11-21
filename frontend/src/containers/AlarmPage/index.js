
import React, { Component } from 'react';
import { withStyles, Button} from '@material-ui/core';
import PropTypes from 'prop-types';
import {compose,bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form'; 
import Grid from '@material-ui/core/Grid';
import renderTextField from '../../components/FormHelper/TextField/index';
import * as alarmActions from './../../actions/alarm';
import styles from './styles';


class AlarmPage extends Component {

    componentDidMount(){
        // const { alarmActionCreators }=this.props;
        // const { fetchListAlarm } = alarmActionCreators;
        // fetchListAlarm();
    }
    
    handleSubmitForm = data => {
        // const {devicename,formdate,todate,type}= data;
        // const { alarmActionCreators }=this.props;
        // const { filterAlarm } = alarmActionCreators;
        // filterAlarm(data);
    };
    render() {
        const {handleSubmit}=this.props; 
        return(
                <div className="p-3 " style={{minHeight:'960px',maxHeight:'960px'}}>
                    <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                        <Grid container spacing={1} className="mr-3 p-4">
                            <Grid item xs={12}  className="textAlign: center" >
                                <label className="font-weight-bolder ">AlarmPage Devices</label>
                            </Grid>
                            <Grid item sx={12} md={3}>
                                <Field
                                    id="devicename"
                                    label="Device Name"
                                    name="devicename"
                                    inputProps={{style: {fontSize: 15}}} // font size of input text
                                    InputLabelProps={{style: {fontSize: 15}}} // font size of input label
                                    type="text"  
                                    size="small"
                                    component={renderTextField}
                                    // value={userEditting ? userEditting.name :''}
                                    />
                            </Grid>
                            <Grid item sx={12} md={3}>
                                <Field
                                    id="fromdate"
                                    label="From Date"
                                    name="fromdate"
                                    inputProps={{style: {fontSize: 15}}} // font size of input text
                                    // InputLabelProps={{}} // font size of input label
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    style: {fontSize: 15}
                                    }}
                                    size="small"
                                    component={renderTextField}
                                    // value={userEditting ? userEditting.name :''}
                                    />
                            </Grid>
                            <Grid item sx={12} md={3}>
                                <Field
                                    id="todate"
                                    label="Todate"
                                    name="todate"
                                    inputProps={{style: {fontSize: 15}}} // font size of input text
                                    // InputLabelProps={{style: {fontSize: 12}}} // font size of input label
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                        style: {fontSize: 15}
                                        }}
                                    size="small"
                                    component={renderTextField}
                                    // value={userEditting ? userEditting.name :''}
                                    />
                            </Grid>
                            <Grid item sx={12} md={3}>
                                <Field
                                    id="type"
                                    label="Type Alarm"
                                    name="type"
                                    inputProps={{style: {fontSize: 15}}} // font size of input text
                                    InputLabelProps={{style: {fontSize: 15}}} // font size of input label
                                    type="text"
                                    size="small"
                                    component={renderTextField}
                                    // value={userEditting ? userEditting.name :''}
                                    />
                            </Grid>
                            <Button
                                className="mt-3"
                                color = "primary"
                                variant="contained"
                                type="submit"
                                size='small'
                                >
                                    apply
                            </Button>
                        </Grid>
                    </form>
                    <Grid container spacing={1} className="mr-3 p-4 " style={{backgroundColor:'rgba( 0, 0, 0, 0.2)',border: '2px solid #00BFFF'}}>
                        <label className="font-weight-bolder h6" style={{height:'fit-content',maxHeight:'40vh' }}> Result of Alarm Devices</label>
                        <table className="table overflow-scroll overflow-auto text-center table-bordered table-hover table-sm data-page-size=5 ">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">stt</th>
                                    <th> Device Name</th>
                                    <th> Code</th>
                                    <th> Time</th>
                                    <th> Type</th>
                                    <th> Name</th>
                                    <th> Solution</th>
                                </tr>
                            </thead>
                                <tbody>
                                <tr>
                                        <td >1</td>
                                        <td >ups</td>
                                        <td >2</td>
                                        <td >12/09/2020 19:35:45</td>
                                        <td >Warring</td>
                                        <td >Low Battery</td>
                                        <td >Ckeck or replace battery</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td >ups</td>
                                        <td >2</td>
                                        <td >12/09/2020 19:35:45</td>
                                        <td >Warring</td>
                                        <td >Low Battery</td>
                                        <td >Ckeck or replace battery</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td >ups</td>
                                        <td >2</td>
                                        <td >12/09/2020 19:35:45</td>
                                        <td >Warring</td>
                                        <td >Low Battery</td>
                                        <td >Ckeck or replace battery</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td >ups</td>
                                        <td >2</td>
                                        <td >12/09/2020 19:35:45</td>
                                        <td >Warring</td>
                                        <td >Low Battery</td>
                                        <td >Ckeck or replace battery</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td >ups</td>
                                        <td >2</td>
                                        <td >12/09/2020 19:35:45</td>
                                        <td >Warring</td>
                                        <td >Low Battery</td>
                                        <td >Ckeck or replace battery</td>
                                    </tr>
                                     <tr>
                                        <td >1</td>
                                        <td >ups</td>
                                        <td >2</td>
                                        <td >12/09/2020 19:35:45</td>
                                        <td >Warring</td>
                                        <td >Low Battery</td>
                                        <td >Ckeck or replace battery</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td >ups</td>
                                        <td >2</td>
                                        <td >12/09/2020 19:35:45</td>
                                        <td >Warring</td>
                                        <td >Low Battery</td>
                                        <td >Ckeck or replace battery</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td >ups</td>
                                        <td >2</td>
                                        <td >12/09/2020 19:35:45</td>
                                        <td >Warring</td>
                                        <td >Low Battery</td>
                                        <td >Ckeck or replace battery</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td >ups</td>
                                        <td >2</td>
                                        <td >12/09/2020 19:35:45</td>
                                        <td >Warring</td>
                                        <td >Low Battery</td>
                                        <td >Ckeck or replace battery</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td >ups</td>
                                        <td >2</td>
                                        <td >12/09/2020 19:35:45</td>
                                        <td >Warring</td>
                                        <td >Low Battery</td>
                                        <td >Ckeck or replace battery</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td >ups</td>
                                        <td >2</td>
                                        <td >12/09/2020 19:35:45</td>
                                        <td >Warring</td>
                                        <td >Low Battery</td>
                                        <td >Ckeck or replace battery</td>
                                    </tr>
                                     <tr>
                                        <td >1</td>
                                        <td >ups</td>
                                        <td >2</td>
                                        <td >12/09/2020 19:35:45</td>
                                        <td >Warring</td>
                                        <td >Low Battery</td>
                                        <td >Ckeck or replace battery</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td >ups</td>
                                        <td >2</td>
                                        <td >12/09/2020 19:35:45</td>
                                        <td >Warring</td>
                                        <td >Low Battery</td>
                                        <td >Ckeck or replace battery</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td >ups</td>
                                        <td >2</td>
                                        <td >12/09/2020 19:35:45</td>
                                        <td >Warring</td>
                                        <td >Low Battery</td>
                                        <td >Ckeck or replace battery</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td >ups</td>
                                        <td >2</td>
                                        <td >12/09/2020 19:35:45</td>
                                        <td >Warring</td>
                                        <td >Low Battery</td>
                                        <td >Ckeck or replace battery</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td >ups</td>
                                        <td >2</td>
                                        <td >12/09/2020 19:35:45</td>
                                        <td >Warring</td>
                                        <td >Low Battery</td>
                                        <td >Ckeck or replace battery</td>
                                    </tr>
                                
                                </tbody>
                            </table>
                    </Grid>
                </div>
        );
    }
}

AlarmPage.propTypes={
    classes:PropTypes.object,
    handleSubmit:PropTypes.func,
    invalid:PropTypes.bool,
    submitting:PropTypes.bool,
    listAlarm:PropTypes.array,
    alarmActionCreators:PropTypes.shape({
        fetchListAlarm:PropTypes.func,
    }),
}

const FORM_ALARM ="TASK_ALARM";
const withReduxForm = reduxForm({
    form: FORM_ALARM,
});
const mapStateToProps=state=>{
    console.log(state.alarm.listAlarm)
    return{
        listAlarm:state.alarm.listAlarm,
    }
};
const mapDispatchToProps=(dispatch,props)=>{
    return{
        alarmActionCreators:bindActionCreators(alarmActions,dispatch),
    }
};
const withConnect=connect(mapStateToProps,mapDispatchToProps);
export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm,
)(AlarmPage);


