/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react"
import { FlatList } from "react-native"

import { Screen, Header, Trade } from "../../components"

const Trades = ({ navigation, trades, assets }) => (
  <Screen>
    <Header title="Trades" />
    <FlatList
      data={trades}
      initialNumToRender={20}
      renderItem={({ item }) => (
        <Trade
          key={item.id}
          trade={item}
          asset={assets.find((a) => a.id === item.assetId)}
          navigation={navigation}
          />
      )}
      keyExtractor={(item) => item.id}
      />
  </Screen>
)

export default Trades
