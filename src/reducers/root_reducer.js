import { combineReducers } from "redux";
  import loginReducer from './login_reducer'
  import categoryReducer from './category_reducer'
  import productReducer from '../reducers/products_reducer'
  import cartReducer from '../reducers/cart_reducer'
  import savedOrdersReducer from '../reducers/saved_orders_reducer'

// export default combineReducers({
//     loginReducer,categoryReducer,productReducer,cartReducer,savedOrdersReducer
// });

const appReducer = combineReducers({
  /* your app’s top-level reducers */
  loginReducer: loginReducer,
  productReducer: productReducer,
  categoryReducer: categoryReducer,
  cartReducer: cartReducer,
  savedOrdersReducer:savedOrdersReducer
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === 'USER_LOGGED_OUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
