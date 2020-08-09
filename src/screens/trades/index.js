/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react"

import { SafeAreaView, ScrollView, View, Text, StatusBar } from "react-native"

const Screen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>Trades list</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Screen
