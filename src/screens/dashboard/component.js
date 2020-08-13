/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react"

import { ScrollView } from "react-native"

import { Screen, Header, Trade } from "../../components"

const Trades = ({ navigation, trades }) => (
  <Screen>
    <Header title="Dashboard" />
    <ScrollView contentInsetAdjustmentBehavior="automatic" />
  </Screen>
)

export default Trades
