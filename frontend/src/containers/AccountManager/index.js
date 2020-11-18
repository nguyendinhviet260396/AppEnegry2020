import React, { Component } from 'react';
import styles from './styles';
import Button from '@material-ui/core/Button';
import {Box} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as modalActions from './../../actions/modal';
import * as userActions from './../../actions/auths';
import SignupForm from './SignupForm/index';

class AccountManager extends Component {

    componentDidMount(){
        const { userActionCreators}=this.props;
        const { fetchListUser } = userActionCreators;
        fetchListUser();

    };
    showModalDeleteUser=(user)=>{
        
        const {modalActionCreators,classes}=this.props;
        const {hideModal,showModal,changeModalTitle,changeModalContent}=modalActionCreators;
        showModal();
        changeModalTitle(' XÓA USER!');
        changeModalContent(
                        <div className={classes.modalDelete}>
                            <div className={classes.modalConfimText}>
                                Bạn chắc chắn muốn xóa {''}
                                <span className={classes.modalConfimTextBold}>{user.name}? </span>
                            </div>
                            <Box className={classes.box} mt={2}>
                                <Box ml={1}>
                                    <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    className={classes.button1}
                                    onClick={hideModal}>
                                        Hủy Bỏ
                                    </Button>   
                                </Box>
                                <Box >
                                    <Button 
                                    variant="contained"
                                    color="primary" 
                                    className={classes.button1}
                                    onClick={()=>this.handleDeleteUser(user)}>
                                        Đồng Ý
                                    </Button>
                                </Box>
                            </Box>
                        </div>
             );
    }
    handleDeleteUser(user){
        const {id}=user;
        const {userActionCreators}=this.props;
        const {setUserDelete} = userActionCreators;
        setUserDelete(id);
    }
    openForm=()=>{
        const {modalActionCreators}=this.props;
        const {showModal,changeModalTitle,changeModalContent}=modalActionCreators;
        showModal();
        changeModalTitle('THÊM MỚI ACCOUNT !');
        changeModalContent(<SignupForm/>);
    }
    showModalEditUser=(user)=>{
        console.log(user)
        const {modalActionCreators,userActionCreators}=this.props;
        const {setUserEditting} = userActionCreators;
        const {showModal,changeModalTitle,changeModalContent}=modalActionCreators;
        setUserEditting(user);
        showModal();
        changeModalTitle(' UPDATE USER!');
        changeModalContent(<SignupForm/>);
    }
    showUsers() {
        const {listUsers,classes}=this.props;
        var  users  = listUsers;
        var result = null;
        if (users.length > 0) {
            result = users.map((user, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td className={classes.textTd}>{user.name}</td>
                        <td className={classes.textTd}>{user.email}</td>
                        <td className={classes.textTd}>{user.operator}</td>
                        <td className={classes.textTd}>{user.modified_at}</td>
                        <td className={classes.textTd}>
                            <button 
                            type="button" 
                            className="btn btn-primary btn-sm" 
                            style={{ marginRight:'5px',fontSize:'100%', width: '65px',}}  
                            onClick={() =>this.showModalEditUser(user)}>
                                Edit
                            </button>
                            <button 
                            type="button" 
                            className="btn btn-danger btn-sm " 
                            style={{fontSize:'100%', marginRight:'5px', width: '65px',textAlign:"center"}}
                            onClick={() => this.showModalDeleteUser(user)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            });
        }
        return result;
    }

render(){
    const {classes}= this.props;

    return(
            <div className="container overflow-scroll overflow-auto" style={{minWidth:'100%',marginTop: '2vh',height: '82vh'}}>
                    <div className={classes.text}>Account Manager</div>
                    <div className={classes.button}>
                        <button  
                        type="button" 
                        className="btn btn-primary "
                        style={{fontSize:'100%',maxHeight:'5%',maxWidth:'30%',textAlign:'center'}}
                        onClick={this.openForm}>
                            Add account 
                        </button> 
                    </div>
                    <table className="table overflow-auto" style={{minWidth: '100%',fontSize:'100%',textAlign: 'center'}}>
                        <thead className="thead-dark" >
                            <tr >
                            <th scope="col">Stt</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Operator</th>
                            <th scope="col">Time</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showUsers()}
                        </tbody>
                    </table>
                </div>
        )
    }

}
const mapStateToProps=(state)=>{
    return{
        ...state,
        listUsers:state.auth.listUsers,
    }
};

const mapDispatchToProps =(dispatch,props)=>{
    return{
        userActionCreators:bindActionCreators(userActions,dispatch),
        modalActionCreators:bindActionCreators(modalActions,dispatch)
    }
}
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(AccountManager));


