import * as types from './../constants/alarm';
 const inittialState ={
     listAlarm:[],
 };

 const reducer = (state=inittialState,action)=>{
     switch (action.type) {
        case types.FETCH_ALARM:{
             return {
                 ...state,
                 listAlarm:[],
             };
        }
        case types.FETCH_ALARM_SUCCESS: {
             const {data} = action.payload;
             return {
                 ...state,
                 listAlarm:data,
             };
        }
        case types.FETCH_ALARM_FAILED: {
             return {
                 ...state,
                 listAlarm: [],
             };
        }
        default:
            return state;
     }
 }
 export default reducer;