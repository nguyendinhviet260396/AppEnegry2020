import * as deviceTypes from './../constants/devices';
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

// Action request house area
export const refeshPowerHouseArea =(params={})=>({
    type:deviceTypes.REFESH_POWER_HOUSE_AREA,
    payload:{
        params,
       
    }
});

export const refeshPowerHouseAreaSuccess = (data) => ({
    type: deviceTypes.REFESH_POWER_HOUSE_AREA_SUCCESS,
    payload:{
        data,
    }
});

export const refeshPowerHouseAreaFailed =(error)=>({
    
    type:deviceTypes.REFESH_POWER_HOUSE_AREA_FAILED,
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
// Action request fish lake area
export const refeshPowerFishLakeArea =(params={})=>({
    type:deviceTypes.REFESH_POWER_FISH_LAKE_AREA,
    payload:{
        params,
       
    }
});

export const refeshPowerFishLakeAreaSuccess = (data) => ({
    type: deviceTypes.REFESH_POWER_FISH_LAKE_AREA_SUCCESS,
    payload:{
        data,
    }
});

export const refeshPowerFishLakeAreaFailed =(error)=>({
    type:deviceTypes.REFESH_POWER_FISH_LAKE_AREA_FAILED,
    payload:{
        error,
    }
});

// Action request power solar01 area
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
export const refeshPowerSolar01 =(params={})=>({
    type:deviceTypes.REFESH_POWER_SOLAR01_AREA,
    payload:{
        params,
       
    }
});

export const refeshPowerSolar01Success = (data) => ({
    type: deviceTypes.REFESH_POWER_SOLAR01_AREA_SUCCESS,
    payload:{
        data,
    }
});

export const refeshPowerSolar01Failed =(error)=>({
    type:deviceTypes.REFESH_POWER_SOLAR01_AREA_FAILED,
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


// Action request power solar02 area
export const refeshPowerSolar02 =(params={})=>({
    type:deviceTypes.REFESH_POWER_SOLAR02_AREA,
    payload:{
        params,
       
    }
});

export const refeshPowerSolar02Success = (data) => ({
    type: deviceTypes.REFESH_POWER_SOLAR02_AREA_SUCCESS,
    payload:{
        data,
    }
});

export const refeshPowerSolar02Failed =(error)=>({
    type:deviceTypes.REFESH_POWER_SOLAR02_AREA_FAILED,
    payload:{
        error,
    }
});