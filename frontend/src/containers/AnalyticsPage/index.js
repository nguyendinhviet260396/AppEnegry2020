
import React, { Component } from 'react';
import { withStyles, Button} from '@material-ui/core';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form'; 
import Grid from '@material-ui/core/Grid';
import renderTextField from '../../components/FormHelper/TextField/index';
import styles from './styles';

class Analytics extends Component {
    
    handleCloseForm=()=>{
    }
    handleSubmitForm = data => {
        //const {name,email,password,operator}= data;
        console.log(data)

    };
    render() {
        const {
            handleSubmit}=this.props; 
        return(
                <div className="p-3">
                    <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                        <Grid container spacing={1} className="mr-3 p-4">
                            <Grid item xs={12}  className="textAlign: center" >
                                <label className="font-weight-bolder ">Analytics Devices</label>
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
                                    label="Type Analytics"
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
                    <Grid container spacing={1} className=" mr-4 p-4 " style={{border: '2px solid #00BFFF',minHeight:'500px'}}>
                        <label className="font-weight-bolder h6" style={{height:'fit-content',maxHeight:'40vh' }}> Result of Analytics Devices</label>
                    </Grid>
                    <Grid container spacing={1} className="mr-3 p-4 " style={{minHeight:'265px'}}>
                    </Grid>
                </div>
        );
    }
}

Analytics.propTypes={
    classes:PropTypes.object,
    handleSubmit:PropTypes.func,
    invalid:PropTypes.bool,
    submitting:PropTypes.bool,
    onButton:PropTypes.bool,
    infauth:PropTypes.string,
    userEditting:PropTypes.object,
    authActionCreators:PropTypes.shape({
        onButtonSubmit:PropTypes.func,
        authSignup:PropTypes.func,
        offButtonSubmit:PropTypes.func,
        
    }),
}

const FORM_ANALYTICS ="TASK_ANALYTICS";
const withReduxForm = reduxForm({
    form: FORM_ANALYTICS,
});
const mapStateToProps=state=>{
    return{
        // onButton:state.auth.onButton,
        // initialValues:state.auth.userEditting,
        // userEditting :state.auth.userEditting,
    }
};
const mapDispatchToProps=(dispatch,props)=>{
    return{
        // authActionCreators:bindActionCreators(authActions,dispatch),
        // modalActionCreators:bindActionCreators(modalActions,dispatch),
    }
};
const withConnect=connect(mapStateToProps,mapDispatchToProps);
export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm,
)(Analytics);


