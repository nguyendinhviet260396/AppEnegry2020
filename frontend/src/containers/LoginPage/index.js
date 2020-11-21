
import React, { Component } from 'react';
import { withStyles, Card, CardContent, Typography, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {compose,bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import enegry from './../../assets/images/enegry.jpg';
import renderTextField from './../../components/FormHelper/TextField/index';
import validate from './../../commons/Validation/index';
import * as authActions from './../../actions/auths';
import styles from './styles';

class LoginPage extends Component {
    handleCloseForm=()=>{
        const {authActionCreators}=this.props;
        const {checkAuthFaild}=authActionCreators;
        checkAuthFaild();
        const {history}= this.props;
        history.push('/');
    }

    handleSubmitForm=(data)=>{
        const {email,password}= data;
        const {authActionCreators}=this.props;
        const {authLogin}=authActionCreators;
        authLogin(email,password);
    }
    render() {
        const {classes,
            handleSubmit,
            invalid,
            redirectToReferrer,
            submitting}=this.props;
        if (redirectToReferrer) {
            return (<Redirect to={'/admin'}/>)
              }
        return (
            <div className={classes.background}
            style={{
            backgroundImage: `url(${enegry})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',}}>
                <div className={classes.signup}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                                <div className={classes.label}>
                                    <Typography variant="caption" className={classes.typography}>
                                         Đăng nhập
                                    </Typography><br/>
                                    {/* <span styles="fontSize: 10 textAlign:center">{infAuth}</span> */}
                                </div>
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
                                />
                                <Button
                                className={classes.button}
                                color = "primary"
                                variant="contained"
                                type="submit"
                                disabled={submitting || invalid }
                                >
                                    đăng nhập
                                </Button>
                                <Button
                                className={classes.button}
                                color = "secondary"
                                variant="contained"
                                type="submit"
                                onClick={this.handleCloseForm}
                                >
                                     hủy bỏ 
                                </Button>
                            </form>
                            <div>
                                <Link to ="/">
                                    <Button >hướng dẫn đăng nhập !</Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div style={{color:'#fff', fontSize:'1.2vw',fontWeight:'500',paddingBottom:'2%'}}>
                    sales@emsvietnam.com.vn @ Địa Chỉ: Phòng 12A09, Tòa nhà 17T7, Hoàng Đạo Thúy, Quận Thanh Xuân, Hà Nội                
                </div>
            </div>
        );
    }
}

LoginPage.propTypes={
    classes:PropTypes.object,
    handleSubmit:PropTypes.func,
    invalid:PropTypes.bool,
    submitting:PropTypes.bool,
    authActionCreators:PropTypes.shape({
        onButtonSubmit:PropTypes.func,
        authLogin:PropTypes.func,
        offButtonSubmit:PropTypes.func,
    }),
}

const FORM_USER_LOGIN ="TASK_USER_LOGIN";
const withReduxForm = reduxForm({
    form: FORM_USER_LOGIN,
    validate:validate,
});
const mapStateToProps=state=>{
    return{
        redirectToReferrer:state.auth.redirectToReferrer,
        infAuth:state.auth.infAuth,
    }
};
const mapDispatchToProps=(dispatch,props)=>{
    return{
        authActionCreators:bindActionCreators(authActions,dispatch),
    }
};
const withConnect=connect(mapStateToProps,mapDispatchToProps);
export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm,
)(LoginPage);

