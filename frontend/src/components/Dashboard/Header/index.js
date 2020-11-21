import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import logo from './../../../assets/images/ems_logo.png';
import {Link} from 'react-router-dom';
import IconDashboard from '@material-ui/icons/Dashboard';
import IconPeople from '@material-ui/icons/People';
import IconBarChart from '@material-ui/icons/BarChart';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import ErrorIcon from '@material-ui/icons/Error';
import DirectionsIcon from '@material-ui/icons/Directions';
import './header.css';


const menuId = 'primary-search-account-menu';
const mobileMenuId = 'primary-search-account-menu-mobile';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileMoreAnchorEl:null,
            anchorEl:null,
            number:Math.floor((Math.random() * 10) + 1),
        }
    }
    handleProfileMenuOpen=(e)=>{
        this.setState({
            mobileMoreAnchorEl:e.currentTarget,
        });    
    }
    handleMobileMenuOpen=(e)=>{
        console.log('handleMobileMenuOpen');
        this.setState({
            anchorEl:e.currentTarget,
        }); 
    }
    handleMobileMenuClose=()=>{
        console.log('handleMobileMenuClose');
        this.setState({
            mobileMoreAnchorEl:null,
        }); 
    }
    handleMenuClose=(e)=>{
        console.log('handleMenuClose');
        this.setState({
            anchorEl:null,
        }); 
    }
    handleLogout=()=>{
        const {history} = this.props;
        console.log(this.props)
        localStorage.removeItem("token");
        return(
            history.push('/')
        ) 
    }
    renderMobileMenu =()=> {
        const {mobileMoreAnchorEl}=this.state;
        const isMobileMenuOpen=Boolean(mobileMoreAnchorEl);
        return(
            <Menu
                anchorEl={mobileMoreAnchorEl}
                style={{ zIndex:10000}}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
                >
                <MenuItem onClick={this.handleProfileMenuOpen} style={{fontSize:'1em'}}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                        >
                        <AccountCircle />
                    </IconButton>
                    Thông tin
                </MenuItem>
                <MenuItem onClick={this.handleLogout} style={{fontSize:'1em'}} >
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                        >
                        <AccountCircle />
                    </IconButton>
                    Đăng xuất
                </MenuItem>
            </Menu>
        );
    };
    
    render() {
        let {number} =this.state;
        const {classes}=this.props;
        return (
            <nav className="navbar navbar-expand-sm navbar-light p-1" style={{ height: '50px',backgroundColor:'#262f43'}}>
                <Link className="navbar-brand "  to='/admin'>
                    <img src={logo} alt='EmsLogo'style={{ width: '65px'}}/>
                    </Link>
                <button className="navbar-toggler d-lg-none " type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse " id="collapsibleNavId" style={{backgroundColor:'#262f43',zIndex: '1',height:'50px'}}>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active " style={{marginRight: '10px',marginLeft: '10px'}}>
                            <Link 
                            className={classes.link }  
                            style={{ textDecoration:'none'}} 
                            to='/admin'>
                                <HomeRoundedIcon className={classes.icon}/>
                                Trang chủ
                                <span className="sr-only">
                                    (current)
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item dropdown" style={{marginRight: '10px',marginLeft: '10px'}}>
                            <Link 
                            className={classes.link}  
                            style={{ textDecoration:'none',marginRight: '5px'}}        
                            to="/allarea">
                                <IconDashboard className={classes.icon} />
                                Giao diện
                            </Link>
                            <Link 
                            className="dropdown-toggle custom " 
                            to='/admin'
                            style={{ textDecoration:'none',fontSize:'100%',maxHeight: '20px'}}  
                            id="dropdownId" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false">
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="dropdownId" style={{backgroundColor:'#262f43',fontSize: 'small'}}>
                                <Link   className='dropdown-item p-0 ' to='/housearea'>  <DirectionsIcon className={classes.icon} />Toàn nhà</Link>
                                <Link   className='dropdown-item p-0 '  to='/hocaarea'> <DirectionsIcon className={classes.icon} />Hồ cá</Link>
                                <Link   className='dropdown-item p-0 '  to='/santhuongarea'> <DirectionsIcon className={classes.icon} />Sân thượng</Link>
                                <Link   className='dropdown-item p-0 '  to='/solar1area'> <DirectionsIcon className={classes.icon} />Solar I</Link>
                                <Link   className='dropdown-item p-0 '  to='/solar2area'> <DirectionsIcon className={classes.icon} />Solar II</Link>
                            </div>
                        </li>
                        <li className="nav-item" style={{marginRight: '10px',marginLeft: '10px'}}>
                            <Link 
                            className={classes.link}  
                            style={{ textDecoration:'none'}}        
                            to='/analytics'>
                                <IconBarChart className={classes.icon}/>
                                Phân tích
                            </Link>
                        </li>
                        <li className="nav-item" style={{marginRight: '10px',marginLeft: '10px'}}>
                            <Link 
                            className={classes.link}  
                            style={{ textDecoration:'none'}}  
                            to='/alarm'>
                                 <ErrorIcon className={classes.icon}/>
                                Cảnh báo
                            </Link>
                        </li>
                        <li className="nav-item" style={{marginRight: '10px',marginLeft: '10px'}}>
                            <Link 
                            className={classes.link}  
                            style={{ textDecoration:'none'}}  
                            to='/config'>
                                 <SettingsIcon className={classes.icon}/>
                                Cài đặt 
                            </Link>
                        </li>
                        <li className="nav-item" style={{marginRight: '10px',marginLeft: '10px'}}>
                            <Link 
                            className={classes.link}  
                            style={{ textDecoration:'none'}} 
                            to='/account'>
                                 <IconPeople className={classes.icon}/>
                                Tài khoản
                            </Link>
                        </li>
                    </ul>
                    <div className={classes.sectionDesktop}>
                            <IconButton aria-label="new mails" style={{color:'#F8F8FF'}} >
                                    <Link to='/alarm' style={{color: '#fff'}}>
                                        <Badge badgeContent={number+1} color="secondary">
                                        <MailIcon />
                                        </Badge>
                                    </Link>
                            </IconButton>
                            <IconButton aria-label=" new notifications" style={{color:'#F8F8FF'}}>
                                    <Link to='/alarm' style={{ color: '#fff'}}>
                                        <Badge badgeContent={number} color="secondary">
                                            <NotificationsIcon />
                                        </Badge>
                                    </Link>
                            </IconButton>
                            <IconButton
                                edge="end"
                                style={{color:'#F8F8FF',marginRight: '0px'}}
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                >
                                <AccountCircle />
                            </IconButton>
                        </div>
                    {this.renderMobileMenu()}
                </div>
            </nav>
        );
    }
}

Header.propTypes={
    mobileMoreAnchorEl:PropTypes.bool,
    anchorEl:PropTypes.bool,
    name:PropTypes.string,
    classes:PropTypes.object,
}
const mapStateToProps=null;
const mapDispatchToProps=null;
const withConnect=connect(mapDispatchToProps,mapStateToProps);
export default compose(
    withStyles(styles),
    withConnect,
    withRouter,
)(Header);
