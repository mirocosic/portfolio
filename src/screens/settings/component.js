/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react"

import {
  SafeAreaView,
  ScrollView,
  FlatList,
  Text,
  StatusBar,
} from "react-native"

import { Screen, Header, Trade } from "../../components"

import styles from "./styles"

const Trades = ({ navigation, trades }) => (
  <Screen>
    <Header title="Settings" />
    <ScrollView contentInsetAdjustmentBehavior="automatic">

      <FlatList
        data={trades}
        initialNumToRender={20}
        renderItem={({ item }) => (
          <Trade
            key={item.id}
            trade={item}
            toggleScroll={(val) => this.setState({ scrollEnabled: val })}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  </Screen>
)

export default Trades
