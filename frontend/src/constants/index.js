import AdminHomePage from '../containers/AdminHomePage';
import LoginPage from './../containers/LoginPage/index';
import ConfigSystem from './../containers/ConfigSystem/index';
import AccountManager from './../containers/AccountManager/index';
import Analytics from './../containers/AnalyticsPage/index';
import Welcom from '../containers/Welcom/index';
import AllArea from '../containers/DeviceDashboards/AllArea';
import DetailHoCa from './../containers/DeviceDashboards/DetailHoCa';
import DetailHouse from './../containers/DeviceDashboards/DetailHouse';
import DetailSolar1 from './../containers/DeviceDashboards/DetailSolar1';
import DetailSolar2 from './../containers/DeviceDashboards/DetailSolar2';
import NotPound from './../components/NotPound';
import AlarmPage from './../containers/AlarmPage/index';
export const API_ENDPOINT = 'http://192.168.201.25:3030';
//export const API_ENDPOINT = 'http://localhost:3030';

export const STATUS_CODE={
    SUCCESS:200,
    CREATED:201,
    UPDATED:202,
    ERROR :404,
    NO_CONTENT:204,
}

export const ADMIN_ROUTES=[
    {
        path:'/admin',
        name:'Home',
        exact:true,
        component:AdminHomePage,
    },
    {
        path:'/admin/alarm',
        name:'Alarm',
        exact:false,
        component:AlarmPage,

    },
    {
        path:'/admin/config',
        name:'Config system',
        exact:false,
        component: ConfigSystem,

    },
    {
        path:'/admin/account',
        name:'Account Manager',
        exact:true,
        component: AccountManager,

    },
    {
        path:'/admin/analytics',
        name:'Analytics',
        exact:false,
        component: Analytics,

    },
    {   
        path:'/admin/area',
        name:'All Area',
        exact:true,
        component:AllArea
        
    },
    {   
        path:'/admin/area/house',
        name:'Area House',
        exact:false,
        component:DetailHouse
        
    },
    {   
        path:'/admin/area/hoca',
        name:'Area Ho ca',
        exact:false,
        component:DetailHoCa
        
    },
    {   
        path:'/admin/area/santhuong',
        name:'Area San thuong',
        exact:false,
        component:NotPound
        
    },  
    {   
        path:'/admin/area/solar1',
        name:'Area Solar 1',
        exact:false,
        component:DetailSolar1
        
    },
    {   
        path:'/admin/area/solar2',
        name:'Area Solar 2',
        exact:false,
        component:DetailSolar2
        
    },
]

export const ROUTES =[
    {   
        path:'/login',
        exact:false,
        name:'đăng nhập',
        component:LoginPage
        
    },
    {   
        path:'/',
        exact:false,
        name:'welcom',
        component:Welcom
        
    },
]
