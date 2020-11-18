import  AxiosService from './../services/axiosService';
import {API_ENDPOINT} from './../constants/index';
import qs from 'query-string';
// const url = 'api/v1/temphumi/data_new'; => format url
export const getListData =(url,params={})=>{
    let queryParams = ''
    if(Object.keys(params).length >0){
        queryParams=`?${qs.stringify(params)}`;
    }
    return AxiosService.get(`${API_ENDPOINT}/${url}${queryParams}`)
}

// api http://localhost:3000/auths METHOD: POST
export const addData=(url,data)=>{
    return AxiosService.post(`${API_ENDPOINT}/${url}`,data)
}

// api http://localhost:3000/task/:id METHOD: PUT// truyen vao url va data
export const updateData=(url,data)=>{
    return AxiosService.put(`${API_ENDPOINT}/${url}`,data)
}

// // api http://localhost:3000/task/:id METHOD: DELETE

// export const deteleUser =(id)=>{
//     return AxiosService.delete(`${API_ENDPOINT}/${url}${id}`)
// }