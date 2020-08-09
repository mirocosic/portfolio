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
import { Trade } from "../../components"

const Screen = ({ navigation, trades }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>Trades list</Text>
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
      </SafeAreaView>
    </>
  )
}

export default Screen
