import * as deviceTypes from './../constants/devices';


export const refeshTempHumi =(params={})=>({
    type:deviceTypes.REFESH_TEMPHUMI,
    payload:{
        params,
       
    }
});

export const refeshTempHumiSuccess = (data) => ({
    type: deviceTypes.REFESH_TEMPHUMI_SUCCESS,
    payload:{
        data,
    }
});

export const refeshTempHumiFailed =(error)=>({
    type:deviceTypes.REFESH_TEMPHUMI_FAILED,
    payload:{
        error,
    }
});

// Action request PMU

export const refeshPMU =(params={})=>({
    type:deviceTypes.REFESH_PMU,
    payload:{
        params,
       
    }
});

export const refeshPMUSuccess = (data) => ({
    type: deviceTypes.REFESH_PMU_SUCCESS,
    payload:{
        data,
    }
});

export const refeshPMUFailed =(error)=>({
    type:deviceTypes.REFESH_PMU_FAILED,
    payload:{
        error,
    }
});


// Action request PMU Power

export const refeshPMUPOWER =(params={})=>({
    type:deviceTypes.REFESH_PMUPOWER,
    payload:{
        params,
       
    }
});

export const refeshPMUPOWERSuccess = (data) => ({
    type: deviceTypes.REFESH_PMUPOWER_SUCCESS,
    payload:{
        data,
    }
});

export const refeshPMUPOWERFailed =(error)=>({
    type:deviceTypes.REFESH_PMUPOWER_FAILED,
    payload:{
        error,
    }
});


// Action request UPS

export const refeshUPS =(params={})=>({
    type:deviceTypes.REFESH_UPS,
    payload:{
        params,
       
    }
});

export const refeshUPSSuccess = (data) => ({
    type: deviceTypes.REFESH_UPS_SUCCESS,
    payload:{
        data,
    }
});

export const refeshUPSFailed =(error)=>({
    type:deviceTypes.REFESH_UPS_FAILED,
    payload:{
        error,
    }
});
// aAction request UPS power
export const refeshUPSPOWER =(params={})=>({
    type:deviceTypes.REFESH_UPSPOWER,
    payload:{
        params,
       
    }
});

export const refeshUPSPOWERSuccess = (data) => ({
    type: deviceTypes.REFESH_UPSPOWER_SUCCESS,
    payload:{
        data,
    }
});

export const refeshUPSPOWERFailed =(error)=>({
    type:deviceTypes.REFESH_UPSPOWER_FAILED,
    payload:{
        error,
    }
});

// Action request PDU Power


export const refeshPDU =(params={})=>({
    type:deviceTypes.REFESH_PDU,
    payload:{
        params,
       
    }
});

export const refeshPDUSuccess = (data) => ({
    type: deviceTypes.REFESH_PDU_SUCCESS,
    payload:{
        data,
    }
});

export const refeshPDUFailed =(error)=>({
    type:deviceTypes.REFESH_PDU_FAILED,
    payload:{
        error,
    }
});

// Action request PDU power
export const refeshPDUPOWER =(params={})=>({
    type:deviceTypes.REFESH_PDUPOWER,
    payload:{
        params,
       
    }
});

export const refeshPDUPOWERSuccess = (data) => ({
    type: deviceTypes.REFESH_PDUPOWER_SUCCESS,
    payload:{
        data,
    }
});

export const refeshPDUPOWERFailed =(error)=>({
    type:deviceTypes.REFESH_PDUPOWER_FAILED,
    payload:{
        error,
    }
});

// Action request AIR
export const refeshAIR =(params={})=>({
    type:deviceTypes.REFESH_AIR,
    payload:{
        params,
       
    }
});

export const refeshAIRSuccess = (data) => ({
    type: deviceTypes.REFESH_AIR_SUCCESS,
    payload:{
        data,
    }
});

export const refeshAIRFailed =(error)=>({
    type:deviceTypes.REFESH_AIR_FAILED,
    payload:{
        error,
    }
});

// Action request AIR Power
export const refeshAIRPOWER =(params={})=>({
    type:deviceTypes.REFESH_AIRPOWER,
    payload:{
        params,
       
    }
});

export const refeshAIRPOWERSuccess = (data) => ({
    type: deviceTypes.REFESH_AIRPOWER_SUCCESS,
    payload:{
        data,
    }
});

export const refeshAIRPOWERFailed =(error)=>({
    type:deviceTypes.REFESH_AIRPOWER_FAILED,
    payload:{
        error,
    }
});

// Action request AIR Setting
export const refeshAIRSETTING =(params={})=>({
    type:deviceTypes.REFESH_AIRSETTING,
    payload:{
        params,
       
    }
});

export const refeshAIRSETTINGSuccess = (data) => ({
    type: deviceTypes.REFESH_AIRSETTING_SUCCESS,
    payload:{
        data,
    }
});

export const refeshAIRSETTINGFailed =(error)=>({
    type:deviceTypes.REFESH_AIRSETTING_FAILED,
    payload:{
        error,
    }
});


// Action request AIR Temp Trend
export const refeshAIRTEMP =(params={})=>({
    type:deviceTypes.REFESH_AIRTEMP,
    payload:{
        params,
       
    }
});

export const refeshAIRTEMPSuccess = (data) => ({
    type: deviceTypes.REFESH_AIRTEMP_SUCCESS,
    payload:{
        data,
    }
});

export const refeshAIRTEMPFailed =(error)=>({
    type:deviceTypes.REFESH_AIRTEMP_FAILED,
    payload:{
        error,
    }
});

// Action request door
export const refeshDOOR =(params={})=>({
    type:deviceTypes.REFESH_DOOR,
    payload:{
        params,
       
    }
});

export const refeshDOORSuccess = (data) => ({
    type: deviceTypes.REFESH_DOOR_SUCCESS,
    payload:{
        data,
    }
});

export const refeshDOORFailed =(error)=>({
    type:deviceTypes.REFESH_DOOR_FAILED,
    payload:{
        error,
    }
});

// Action request leak
export const refeshLEAK =(params={})=>({
    type:deviceTypes.REFESH_LEAK,
    payload:{
        params,
       
    }
});

export const refeshLEAKSuccess = (data) => ({
    type: deviceTypes.REFESH_LEAK_SUCCESS,
    payload:{
        data,
    }
});

export const refeshLEAKFailed =(error)=>({
    type:deviceTypes.REFESH_LEAK_FAILED,
    payload:{
        error,
    }
});

// Action request smoke
export const refeshSMOKE =(params={})=>({
    type:deviceTypes.REFESH_SMOKE,
    payload:{
        params,
       
    }
});

export const refeshSMOKESuccess = (data) => ({
    type: deviceTypes.REFESH_SMOKE_SUCCESS,
    payload:{
        data,
    }
});

export const refeshSMOKEFailed =(error)=>({
    type:deviceTypes.REFESH_SMOKE_FAILED,
    payload:{
        error,
    }
});


// Action request fan
export const refeshFAN =(params={})=>({
    type:deviceTypes.REFESH_FAN,
    payload:{
        params,
       
    }
});

export const refeshFANSuccess = (data) => ({
    type: deviceTypes.REFESH_FAN_SUCCESS,
    payload:{
        data,
    }
});

export const refeshFANFailed =(error)=>({
    type:deviceTypes.REFESH_FAN_FAILED,
    payload:{
        error,
    }
});

// Action control fan
export const controlFAN =(device_id,control)=>({
    type:deviceTypes.CONTROL_FAN,
    payload:{
        device_id,
        control,
    }
});

export const controlFANSuccess = (data) => ({
    type: deviceTypes.CONTROL_FAN_SUCCESS,
    payload:{
        data,
    }
});

export const controlFANFailed =(error)=>({
    type:deviceTypes.CONTROL_FAN_FAILED,
    payload:{
        error,
    }
});




// ***********************************************************************
// Action request main
export const refeshMain =(params={})=>({
    type:deviceTypes.REFESH_MAIN,
    payload:{
        params,
       
    }
});

export const refeshMainSuccess = (data) => ({
    type: deviceTypes.REFESH_MAIN_SUCCESS,
    payload:{
        data,
    }
});

export const refeshMainFailed =(error)=>({
    type:deviceTypes.REFESH_MAIN_FAILED,
    payload:{
        error,
    }
});
// Action request all area
export const refeshAllArea =(params={})=>({
    type:deviceTypes.REFESH_MAIN,
    payload:{
        params,
       
    }
});

export const refeshAllAreaSuccess = (data) => ({
    type: deviceTypes.REFESH_ALL_AREA_SUCCESS,
    payload:{
        data,
    }
});

export const refeshAllAreaFailed =(error)=>({
    type:deviceTypes.REFESH_ALL_AREA_FAILED,
    payload:{
        error,
    }
});

// Action request house area
export const refeshHouseArea =(params={})=>({
    type:deviceTypes.REFESH_HOUSE_AREA,
    payload:{
        params,
       
    }
});

export const refeshHouseAreaSuccess = (data) => ({
    type: deviceTypes.REFESH_HOUSE_AREA_SUCCESS,
    payload:{
        data,
    }
});

export const refeshHouseAreaFailed =(error)=>({
    type:deviceTypes.REFESH_HOUSE_AREA_FAILED,
    payload:{
        error,
    }
});

// Action request fish lake area
export const refeshFishLakeArea =(params={})=>({
    type:deviceTypes.REFESH_FISH_LAKE_AREA,
    payload:{
        params,
       
    }
});

export const refeshFishLakeAreaSuccess = (data) => ({
    type: deviceTypes.REFESH_FISH_LAKE_AREA_SUCCESS,
    payload:{
        data,
    }
});

export const refeshFishLakeAreaFailed =(error)=>({
    type:deviceTypes.REFESH_FISH_LAKE_AREA_FAILED,
    payload:{
        error,
    }
});

// Action request solar01 area
export const refeshSolar01 =(params={})=>({
    type:deviceTypes.REFESH_SOLAR01_AREA,
    payload:{
        params,
       
    }
});

export const refeshSolar01Success = (data) => ({
    type: deviceTypes.REFESH_SOLAR01_AREA_SUCCESS,
    payload:{
        data,
    }
});

export const refeshSolar01Failed =(error)=>({
    type:deviceTypes.REFESH_SOLAR01_AREA_FAILED,
    payload:{
        error,
    }
});

// Action request solar02 area
export const refeshSolar02 =(params={})=>({
    type:deviceTypes.REFESH_SOLAR02_AREA,
    payload:{
        params,
       
    }
});

export const refeshSolar02Success = (data) => ({
    type: deviceTypes.REFESH_SOLAR02_AREA_SUCCESS,
    payload:{
        data,
    }
});

export const refeshSolar02Failed =(error)=>({
    type:deviceTypes.REFESH_SOLAR02_AREA_FAILED,
    payload:{
        error,
    }
});