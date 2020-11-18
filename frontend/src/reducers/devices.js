import * as types from './../constants/devices';


const initialState = {
    listSolar01:[],
    listSolar02:[],
    listFishLake:[],
    listHouseArea:[],
    listMain:[],
}
const deviceReducer = (state=initialState,action) =>{
    switch(action.type){
        case types.REFESH_MAIN:{
            return{
                ...state,
            }
        }
        case types.REFESH_MAIN_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
                listMain:data,
            }
        }
        case types.REFESH_MAIN_FAILED:{
            return {
                ...state,
            }
        }
        case types.REFESH_HOUSE_AREA:{
            return{
                ...state,
            }
        }
        case types.REFESH_HOUSE_AREA_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
                listHouseArea:data,
                
            }
        }
        case types.REFESH_HOUSE_AREA_FAILED:{
            return {
                ...state,
            }
        }
        case types.REFESH_FISH_LAKE_AREA:{
            return{
                ...state,
            }
        }
        case types.REFESH_FISH_LAKE_AREA_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
                listFishLake:data,
                
            }
        }
        case types.REFESH_FISH_LAKE_AREA_FAILED:{
            return {
                ...state,
            }
        }
        case types.REFESH_SOLAR01_AREA:{
            return{
                ...state,
            }
        }
        case types.REFESH_SOLAR01_AREA_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
                listSolar01:data,
                
            }
        }
        case types.REFESH_SOLAR01_AREA_FAILED:{
            return {
                ...state,
            }
        }
        case types.REFESH_SOLAR02_AREA:{
            return{
                ...state,
            }
        }
        case types.REFESH_SOLAR02_AREA_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
                listSolar02:data,
                
            }
        }
        case types.REFESH_SOLAR02_AREA_FAILED:{
            return {
                ...state,
            }
        }

        default:
            return {
                ...state,
            }
            
        }
};
export  default deviceReducer;