// import { createStore } from "redux";
// import rootReducer from "../reducers/root_reducer";

//   const store= createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

// export default store;

import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer";
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
 };
 
 const pReducer = persistReducer(persistConfig, rootReducer);
 
 export const store = createStore(pReducer);
 export const persistor = persistStore(store);

