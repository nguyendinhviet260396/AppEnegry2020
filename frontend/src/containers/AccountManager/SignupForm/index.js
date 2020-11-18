
import React, { Component } from 'react';
import { withStyles, Card, CardContent, Button, FormControlLabel, Checkbox} from '@material-ui/core';
import PropTypes from 'prop-types';
import {compose,bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../../../components/FormHelper/TextField/index';
import validate from '../../../commons/Validation/index';
import * as authActions from '../../../actions/auths';
import * as modalActions from '../../../actions/modal';
import styles from './styles';

class SignupForm extends Component {
    handleChecked=(e)=>{
        const {checked}=e.target;
        const {authActionCreators,invalid,submitting}=this.props;
        const {onButtonSubmit,offButtonSubmit}=authActionCreators;
        if(checked && !invalid && !submitting ){
            onButtonSubmit()
        }else{
            offButtonSubmit()
        }
    }
    handleCloseForm=()=>{
        const {modalActionCreators} =this.props;
        const {hideModal}=modalActionCreators;
        hideModal();
    }
    handleSubmitForm = data => {
        const {name,email,password,operator}= data;
        const {authActionCreators,userEditting}=this.props;
        const {authSignup,updateUser}=authActionCreators;
        if(userEditting && userEditting.id){
            updateUser(name,email,password,operator);
        }else{
            authSignup(name,email,password,operator);
        }  
    };
    render() {
        const {classes,
            handleSubmit,
            invalid,
            onButton,
            initialValues,
            submitting}=this.props;
            const userEditting = initialValues;   
        return(
            <div className={classes.background}>
                <div className={classes.signup}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                            <Field
                                id="name"
                                label="Name"
                                name="name"
                                className={classes.textField}
                                inputProps={{style: {fontSize: 15}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 15}}} // font size of input label
                                type="text"
                                fullWidth
                                margin="normal"
                                size="small"
                                component={renderTextField}
                                value={userEditting ? userEditting.name :''}
                                />
                                <Field
                                id="email"
                                label="Email"
                                name="email"
                                className={classes.textField}
                                inputProps={{style: {fontSize: 15}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 15}}} // font size of input label
                                type="text"
                                fullWidth
                                margin="normal"
                                component={renderTextField}
                                value={userEditting ? userEditting.email :''}
                                />
                                 <Field
                                id="operator"
                                label="operator"
                                type="operator"
                                name="operator"
                                className={classes.textField}
                                inputProps={{style: {fontSize: 15}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 15}}} // font size of input label
                                fullWidth
                                margin="normal"
                                component={renderTextField}
                                value={userEditting ? userEditting.operator :''}
                                />
                                 <Field
                                id="password"
                                label="Password"
                                type="password"
                                name="password"
                                className={classes.textField}
                                inputProps={{style: {fontSize: 15}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 15}}} // font size of input label
                                fullWidth
                                margin="normal"
                                component={renderTextField}
                                value={userEditting ? userEditting.password :''}
                                />
                                <Field
                                id="cPassWord"
                                label="ConfirmPassword"
                                type="password"
                                name="cPassword"
                                className={classes.textField}
                                inputProps={{style: {fontSize: 15}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 15}}} // font size of input label
                                fullWidth
                                margin="normal"
                                component={renderTextField}
                                value={userEditting ? userEditting.cPassword:''}
                                />
                                <FormControlLabel
                                control={ <Checkbox value="agree" />}
                                label="Tôi đã đọc và đồng ý với điều khoản !"
                                onChange={this.handleChecked}
                                className={classes.Checkbox}
                                />
                                <Button
                                className={classes.button}
                                color = "primary"
                                variant="contained"
                                type="submit"
                                disabled={onButton||submitting || invalid }
                                >
                                    Apply
                                </Button>
                                <Button
                                className={classes.button}
                                color = "secondary"
                                variant="contained"
                                type="submit"
                                onClick={this.handleCloseForm}
                                >
                                     Cancel
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

SignupForm.propTypes={
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

const FORM_USER ="TASK_USER";
const withReduxForm = reduxForm({
    form: FORM_USER,
    validate:validate,
});
const mapStateToProps=state=>{
    return{
        onButton:state.auth.onButton,
        initialValues:state.auth.userEditting,
        userEditting :state.auth.userEditting,
    }
};
const mapDispatchToProps=(dispatch,props)=>{
    return{
        authActionCreators:bindActionCreators(authActions,dispatch),
        modalActionCreators:bindActionCreators(modalActions,dispatch),
    }
};
const withConnect=connect(mapStateToProps,mapDispatchToProps);
export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm,
)(SignupForm);


