/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react"
import { Provider } from "react-redux"
import AppNavigator from "./navigators/app-navigator"
import { store } from "./store"

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
)

export default App
