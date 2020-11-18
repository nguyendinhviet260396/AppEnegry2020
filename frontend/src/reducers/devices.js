import * as types from './../constants/devices';


const initialState = {
    listTempHumi:[{},{},{}],
    listPmu:[{}],
    listPmuPower:[[],[],[]],
    listAir:[{}],
    listAirPower:[[],[]],
    listAirTemp:[[],[]],
    listPdu:[{}],
    listUps:[{}],
    listUpsPower:[{}],
    listSmoke:[{}],
    listDoor:[{},{}],
    listLeak:[{}],
    listFan:[{},{},{}],

    listSolar01:[],
    listSolar02:[],
    listFishLake:[],
    listAllArea:[],
    listHouseArea:[],
    listMain:[],
}
const deviceReducer = (state=initialState,action) =>{
    switch(action.type){
        case types.REFESH_TEMPHUMI:{
            return{
                ...state,
            }
        }
        case types.REFESH_TEMPHUMI_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
                listTempHumi:data,
            }
        }
        case types.REFESH_TEMPHUMI_FAILED:{
            return {
                ...state,
            }
        }
        case types.REFESH_PMU:{
            return{
                ...state,
            }
        }
        case types.REFESH_PMU_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
               listPmu:data,
                
            }
        }
        case types.REFESH_PMU_FAILED:{
            return {
                ...state,
            }
        }
        case types.REFESH_PMUPOWER:{
            return{
                ...state,
            }
        }
        case types.REFESH_PMUPOWER_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
               listPmuPower:data,
            }
        }
        case types.REFESH_PMUPOWER_FAILED:{
            return {
                ...state,
            }
        }
        //************************************** */
        case types.REFESH_AIRPOWER:{
            return{
                ...state,
            }
        }
        case types.REFESH_AIRPOWER_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
                listAirPower:data,
            }
        }
        case types.REFESH_AIRPOWER_FAILED:{
            return {
                ...state,
            }
        }
        case types.REFESH_AIR:{
            return{
                ...state,
            }
        }
        case types.REFESH_AIR_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
               listAir:data,
            }
        }
        case types.REFESH_AIR_FAILED:{
            return {
                ...state,
            }
        }
        case types.REFESH_AIRTEMP:{
            return{
                ...state,
            }
        }
        case types.REFESH_AIRTEMP_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
                listAirTemp:data,
            }
        }
        case types.REFESH_AIRTEMP_FAILED:{
            return {
                ...state,
            }
        }
        //************************************** */
        case types.REFESH_PDU:{
            return{
                ...state,
            }
        }
        case types.REFESH_PDU_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
               listPdu:data,
                
            }
        }
        case types.REFESH_PDU_FAILED:{
            return {
                ...state,
            }
        }

        case types.REFESH_UPS:{
            return{
                ...state,
            }
        }
        case types.REFESH_UPS_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
               listUps:data,
                
            }
        }
        case types.REFESH_UPS_FAILED:{
            return {
                ...state,
            }
        }
        case types.REFESH_UPSPOWER:{
            return{
                ...state,
            }
        }
        case types.REFESH_UPSPOWER_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
               listUpsPower:data,
                
            }
        }
        case types.REFESH_UPSPOWER_FAILED:{
            return {
                ...state,
            }
        }
        case types.REFESH_LEAK:{
            return{
                ...state,
            }
        }
        case types.REFESH_LEAK_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
               listLeak:data,
                
            }
        }
        case types.REFESH_LEAK_FAILED:{
            return {
                ...state,
            }
        }
        case types.REFESH_DOOR:{
            return{
                ...state,
            }
        }
        case types.REFESH_DOOR_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
               listDoor:data,
                
            }
        }
        case types.REFESH_DOOR_FAILED:{
            return {
                ...state,
            }
        }
        case types.REFESH_SMOKE:{
            return{
                ...state,
            }
        }
        case types.REFESH_SMOKE_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
               listSmoke:data,
                
            }
        }
        case types.REFESH_SMOKE_FAILED:{
            return {
                ...state,
            }
        }
        case types.REFESH_FAN:{
            return{
                ...state,
            }
        }
        case types.REFESH_FAN_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
                listFan:data,
            }
        }
        case types.REFESH_FAN_FAILED:{
            return {
                ...state,
            }
        }
        case types.CONTROL_FAN:{
            return{
                ...state,
            }
        }
        case types.CONTROL_FAN_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
                listFan:data,
            }
        }
        case types.CONTROL_FAN_FAILED:{
            return {
                ...state,
            }
        }


        case types.REFESH_MAIN:{
            return{
                ...state,
            }
        }
        case types.REFESH_MAIN_SUCCESS:{
            const {data}=action.payload;
            console.log(data)
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




        case types.REFESH_ALL_AREA:{
            return{
                ...state,
            }
        }
        case types.REFESH_ALL_AREA_SUCCESS:{
            const {data}=action.payload;
            console.log(data)
            return {
                ...state,
                listAllArea:data,
                
            }
        }
        case types.REFESH_ALL_AREA_FAILED:{
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
            console.log(data)
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