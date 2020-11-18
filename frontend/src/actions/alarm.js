import * as alarmConstants from './../constants/alarm';

/** alarm Fetch List api */
export const fetchListAlarm = (params={}) => {
    return {
        type: alarmConstants.FETCH_ALARM,
        payload:{
            params,
        }
    };
};
export const fetchListAlarmFailed = error => {
    return {
        type: alarmConstants.FETCH_ALARM_FAILED,
        payload: {
            error,
        }
    };
};
export const fetchListAlarmSuccess = data => {
    return {
        type: alarmConstants.FETCH_ALARM_SUCCESS,
        payload: {
            data,
        }
    };
};

export const filterAlarm = (keyword={})=>{
    return {
        type: alarmConstants.FILTER_ALARM,
        payload:{
        keyword,
        }
    }
};

/**
 * b1: fetchListtaskRequest()
 * b2: Reset state.task=[]
 * b3: dispatch fetchListTaskSuccess(data reponse)
 */
// export const fetchListTaskRequest =()=>{
//     return dispatch =>{
//         dispatch(fetchListTask());
//         taskApis
//         .getList()
//         .then(resp =>{
//             const {data}=resp;
//             dispatch(fetchListTaskSuccess(data));
//             //console.log('data:',data);
//         })
//         .catch(error =>{
//             dispatch(fetchListTaskFailed(error));
//             //console.log(error);
//         });
//     };
// };

