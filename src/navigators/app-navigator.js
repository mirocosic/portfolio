import React from "react"
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { useDarkMode } from "react-native-dark-mode"

import BottomBarNavigator from "./bottom-bar-navigator"
import { Dashboard, Trades, TradeForm } from "../screens"

const Stack = createStackNavigator()

export default () => (
  <NavigationContainer theme={useDarkMode() ? DarkTheme : DefaultTheme}>
    <Stack.Navigator initialRouteName="Main" headerMode="none">
      <Stack.Screen name="Main" component={BottomBarNavigator} />
      <Stack.Screen name="TradeForm" component={TradeForm} />
    </Stack.Navigator>
  </NavigationContainer>
)
