import { createStore, combineReducers, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import AsyncStorage from "@react-native-community/async-storage"
// import storage from "redux-persist/lib/storage"

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
// import createSagaMiddleware from "redux-saga"
// import { composeWithDevTools } from "redux-devtools-extension"

import common from "./common/reducer"
import trades from "./trades/reducer"
import assets from "./assets/reducer"
// const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};

const reducers = combineReducers({
  common,
  trades,
  assets,
})

const pReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
  pReducer,
  // composeWithDevTools(applyMiddleware(sagaMiddleware)),
)
// export const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))
export const persistor = persistStore(store)

// sagaMiddleware.run(rootSaga);
