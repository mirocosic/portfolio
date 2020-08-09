import { createStore, combineReducers, applyMiddleware } from "redux"
//import { persistStore, persistReducer } from "redux-persist"
//import storage from "redux-persist/lib/storage"
//import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
//import createSagaMiddleware from "redux-saga"
//import { composeWithDevTools } from "redux-devtools-extension"

import common from "./common/reducer"
// import transactions from "./transactions/reducer"
// import categories from "./categories/reducer"
// import accounts from "./accounts/reducer"
// import labels from "./labels/reducer"
// import rootSaga from "./sagas"

//const sagaMiddleware = createSagaMiddleware();

// const persistConfig = {
//   key: "root",
//   storage,
//   stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
// };

const reducers = combineReducers({
  common,
  //   transactions,
  //   categories,
  //   accounts,
  //   labels,
})

//const pReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
  reducers,
  //composeWithDevTools(applyMiddleware(sagaMiddleware)),
)
// export const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))
//export const persistor = persistStore(store)

//sagaMiddleware.run(rootSaga);