import * as types from './../constants/prices';
const inittialState = {
  listPrice: [],
};

const priceReducer = (state = inittialState, action) => {
  switch (action.type) {
    case types.REFESH_PRICE: {
      return {
        ...state,
      };
    }
    case types.REFESH_PRICE_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listPrice: data,
      };
    }
    case types.REFESH_PRICE_FAILED: {
      return {
        ...state,
      };
    }
    case types.ADD_PRICE: {
      return {
        ...state,
      };
    }
    case types.ADD_PRICE_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
       listPrice: data,
      };
    }
    case types.ADD_PRICE_FAILED: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default priceReducer;
