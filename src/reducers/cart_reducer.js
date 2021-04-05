import * as decathlonActions from '../constants/all_constants'

const initialState = {
    cartItems:[],
    cartItemsCount:0,
    cartFlag:0,
}

const cartReducer = (state = initialState, action) => {
    const newState = Object.assign({}, state);

    switch (action.type) {
        case decathlonActions.GET_CART_ITEMS:
            newState.cartItems = action.payload;
            return newState

            case decathlonActions.GET_CART_ITEMS_COUNT:
            newState.cartItemsCount = action.payload;
            return newState

            case decathlonActions.GET_CART_FLAG:
            newState.cartFlag = action.payload;
            return newState


        default:
            return state;
    }
};

export default cartReducer;