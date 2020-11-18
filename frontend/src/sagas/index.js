import {fork,take,call,put,delay,takeLatest,select} from 'redux-saga/effects';//select to listTask from store
import * as alarmTypes from './../constants/alarm';
import * as authTypes from './../constants/auths';
import * as deviceTypes from './../constants/devices';
import {
    getListAlarm
    } from './../apis/alarm';
import {    
    getListUser,
    addUser,
    loginUser,
    deteleUser,     
    updateUser
    } from './../apis/auth';

import {getListData,
        updateData,
        addData,
        } from './../apis/devices';
import {STATUS_CODE} from './../constants/index';
import {showLoading,hideLoading} from './../actions/ui';
import {hideModal} from './../actions/modal';
import {
    fetchListAlarm,
    fetchListAlarmSuccess,
    fetchListAlarmFailed,
    } from './../actions/alarm';
import {
    authSignupSuccess,
    authSignupFaild,
    authLoginSuccess,
    authLoginFaild,
    checkAuthFaild,
    checkAuthSuccess,
    fetchListUserFailed,
    fetchListUserSuccess,
    setUserDeleteSucces,    
    setUserDeleteFaild,
    updateUserSuccess,
    updateUserFailed
    } from './../actions/auths';
import { refeshSolar01Failed,
        refeshSolar01Success,
        refeshSolar02Success,
        refeshSolar02Failed,
        refeshMainSuccess,
        refeshMainFailed,
        refeshFishLakeAreaSuccess,
        refeshFishLakeAreaFailed,
        refeshHouseAreaSuccess,
        refeshHouseAreaFailed,
        refeshAllAreaSuccess,
        refeshAllAreaFailed,
     } from '../actions/devices';
/**
 * B1: dispatch action fetchTask
 * B2:Call animationPlayState: 
 * B3:Kiểm tra status_code
 * Nếu thành công thì thực thi ...
 * Nếu thất bại thì thực thi gì đó....button-big
 * B4:Tắt Loadding
 * B5:thực thi công việc tiếp theo...
 */
function* watchFetchListAlarmAction(){
    while (true){
        const action = yield take(alarmTypes.FETCH_ALARM);// khi FETCH_TASK duoc dispatch thi code tu day tro xuong moi chay
        yield put(showLoading());
        const {params}=action.payload;
        console.log(params)
        const resp = yield call(getListAlarm,'api/v1/main/getalarm','alarm');
        const {status,data}= resp;
        if(status === STATUS_CODE.SUCCESS){
            yield put(fetchListAlarmSuccess(data));  
        }else{
            yield put(fetchListAlarmFailed(data));
        }
        yield delay(100);
        yield put(hideLoading());
    } 
}

function* filterAlarmSaga({payload}){
    yield delay(500);
    const {keyword} = payload;
    console.log(keyword.type)
    yield put(fetchListAlarm({
        //filter:keyword.charAt(0).toUpperCase() + keyword.slice(1),// mockAPI
        q:keyword.devicename, //json-server
        }),
    );
}

function* loginSaga({payload}){
    const {email,password}= payload;
    yield put(showLoading());
    const resp =yield call(loginUser,'api/v1/users/login',{email,password});
    const{data,status}=resp;
    if(status === STATUS_CODE.SUCCESS){
        console.log(data);
        yield put(authLoginSuccess(data));
        yield put(checkAuthSuccess());
    }else{
        yield put(checkAuthFaild());
        yield put(authLoginFaild(data));
    }
    yield delay(200);
    yield put(hideLoading());

}
function* signupSaga({payload}){
    const {name,email,password,operator}= payload;
    yield put(showLoading());
    const resp = yield call(addUser,'api/v1/users/add',{name,email,password,operator});
    const{data,status}=resp;
    if(status === STATUS_CODE.CREATED ){
        const resp = yield call(getListUser,'api/v1/users/','');
        const {status,data}= resp;
        yield delay(100);
        if(status === STATUS_CODE.SUCCESS){
         yield put(authSignupSuccess(data));
         yield put(hideModal());
        }
    }else{
         yield put(authSignupFaild(data));
    }
    yield delay(100);
    yield put(hideLoading());
}
function* updateUserSaga({payload}){
    const {name,email,password,operator}= payload;
    const userEditting = yield select(state => state.auth.userEditting);
    const {id} = userEditting;
    yield put(showLoading());
    const resp = yield call(updateUser,'api/v1/users/update',{id,name,email,password,operator});
    const{data,status}=resp;
    if(status === STATUS_CODE.UPDATED ){
        const resp = yield call(getListUser,'api/v1/users','');
        const {status,data}= resp;
        yield delay(100);
        if(status === STATUS_CODE.SUCCESS){
         yield put(updateUserSuccess(data));
         yield put(hideModal());
        }
    }else {
         yield put(updateUserFailed(data));
         
    }
    yield delay(100);
    yield put(hideLoading());
}
function* watchFetchListUserAction(){
    while (true){
        const action = yield take(authTypes.FETCH_USER);// khi FETCH_TASK duoc dispatch thi code tu day tro xuong moi chay
        yield put(showLoading());
        const {params}=action.payload;
        const resp = yield call(getListUser,'api/v1/users/',params);
        const {status,data}= resp;
        if(status === STATUS_CODE.SUCCESS){
            yield put(fetchListUserSuccess(data));  
            
        }else{
            yield put(fetchListUserFailed(data));
        }
        yield delay(50);
        yield put(hideLoading());
    } 
}

function* deleteUserSaga({payload}){
    const {id}= payload;
    yield put(showLoading());
    const reps= yield call(deteleUser,'api/v1/users',id);
    const {data,status}=reps;
    if(status === STATUS_CODE.NO_CONTENT){
        const resp = yield call(getListUser,'api/v1/users','');
        const {status,data}= resp;
        yield delay(100);
        if(status === STATUS_CODE.SUCCESS){
            yield put(setUserDeleteSucces(data));
            yield put(hideModal());
        }  
    } else {
        yield put(setUserDeleteFaild(data));
    }
    yield delay(100);
    yield put(hideLoading());
}
// refesh data leak
function* refeshAllArea(){
    // const resp = yield call(getListData,'api/v1/leak/getlast','');
    // const {status,data}= resp;
    // if(status === STATUS_CODE.SUCCESS && data.lenght !== 0){
    //     yield put(refeshLEAKSuccess(data));  
    // }else{
    //     yield put(refeshLEAKFailed(data));
    // }
    
}

// refesh data leak
function* refeshHouseArea(){
    // const resp = yield call(getListData,'api/v1/leak/getlast','');
    // const {status,data}= resp;
    // if(status === STATUS_CODE.SUCCESS && data.lenght !== 0){
    //     yield put(refeshLEAKSuccess(data));  
    // }else{
    //     yield put(refeshLEAKFailed(data));
    // }
    
}
// refesh data leak
function* refeshfishLakeArea(){
    // const resp = yield call(getListData,'api/v1/leak/getlast','');
    // const {status,data}= resp;
    // if(status === STATUS_CODE.SUCCESS && data.lenght !== 0){
    //     yield put(refeshLEAKSuccess(data));  
    // }else{
    //     yield put(refeshLEAKFailed(data));
    // }
    
}
// refesh data leak
function* refeshSolar01Area(){
    // const resp = yield call(getListData,'api/v1/leak/getlast','');
    // const {status,data}= resp;
    // if(status === STATUS_CODE.SUCCESS && data.lenght !== 0){
    //     yield put(refeshLEAKSuccess(data));  
    // }else{
    //     yield put(refeshLEAKFailed(data));
    // }
    
}
// refesh data leak
function* refeshSolar02Area(){
    // const resp = yield call(getListData,'api/v1/leak/getlast','');
    // const {status,data}= resp;
    // if(status === STATUS_CODE.SUCCESS && data.lenght !== 0){
    //     yield put(refeshLEAKSuccess(data));  
    // }else{
    //     yield put(refeshLEAKFailed(data));
    // }
    
}
function* rootSaga() {
    yield fork(watchFetchListAlarmAction);
    yield fork(watchFetchListUserAction);
    yield takeLatest(alarmTypes.FILTER_ALARM,filterAlarmSaga);
    yield takeLatest(authTypes.AUTH_LOGIN,loginSaga);
    yield takeLatest(authTypes.AUTH_SIGNUP,signupSaga)
    yield takeLatest(authTypes.SET_USER_DELETE,deleteUserSaga)  
    yield takeLatest (authTypes.UPDATE_USER,updateUserSaga)
    yield takeLatest (deviceTypes.REFESH_ALL_AREA,refeshAllArea())
    yield takeLatest (deviceTypes.REFESH_HOUSE_AREA,refeshHouseArea())
    yield takeLatest (deviceTypes.REFESH_FISH_LAKE_AREA,refeshfishLakeArea())
    yield takeLatest (deviceTypes.REFESH_SOLAR01_AREA,refeshSolar01Area())
    yield takeLatest (deviceTypes.REFESH_SOLAR02_AREA,refeshSolar02Area())
    
}

export default rootSaga;