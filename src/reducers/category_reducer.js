import * as decathlonActions from '../constants/all_constants'

const initialState = {
    categorySelected:'',
    getSelectedProductDeatils:{},
}

const categoryReducer = (state = initialState, action) => {
    const newState = Object.assign({}, state);
  
    switch (action.type) {
      case decathlonActions.GET_SELECTED_CATEGORY_PRODUCTS:
          newState.categorySelected = action.payload;
        return newState

        case decathlonActions.GET_SELECTED_PRODUCT_DETAILS:
          newState.getSelectedProductDeatils = action.payload;
        return newState

  
      default:
        return state;
    }
  };
  
  export default categoryReducer;