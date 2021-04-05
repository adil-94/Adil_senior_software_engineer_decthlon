import * as decathlonActions from '../constants/all_constants'

const initialState = {
   savedOrders:[]
}

const savedOrdersReducer = (state = initialState, action) => {
    const newState = Object.assign({}, state);

    switch (action.type) {
        case decathlonActions.GET_SAVED_ORDERS:
            newState.savedOrders = action.payload;
            return newState

        default:
            return state;
    }
};

export default savedOrdersReducer;