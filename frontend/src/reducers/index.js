import {combineReducers} from 'redux';
import alarmReducer from './alarm';
import uiReducer from './ui';
import modalReducer from './modal';
import authReducer from './auths';
import deviceReducer from './devices';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    alarm:alarmReducer,
    ui:uiReducer,
    modal:modalReducer,
    form: formReducer,
    auth:authReducer,
    devices:deviceReducer
});
export default rootReducer;