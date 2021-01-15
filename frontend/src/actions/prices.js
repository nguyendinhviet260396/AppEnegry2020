import * as priceConstants from './../constants/prices';

/** add price list api */
export const addprice = (params = {}) => {
  return {
    type: priceConstants.ADD_PRICE,
    payload: {
      params,
    },
  };
};
export const addpriceFailed = error => {
  return {
    type: priceConstants.ADD_PRICE_FAILED,
    payload: {
      error,
    },
  };
};
export const addpriceSuccess = data => {
  return {
    type: priceConstants.ADD_PRICE_SUCCESS,
    payload: {
      data,
    },
  };
};

/** refesh price list api */
export const refeshprice = (params = {}) => {
  return {
    type: priceConstants.REFESH_PRICE,
    payload: {
      params,
    },
  };
};
export const refeshpriceFailed = error => {
  return {
    type: priceConstants.REFESH_PRICE_FAILED,
    payload: {
      error,
    },
  };
};
export const refeshpriceSuccess = data => {
  return {
    type: priceConstants.REFESH_PRICE_SUCCESS,
    payload: {
      data,
    },
  };
};
