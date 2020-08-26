/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from "react"
import { FlatList } from "react-native"

import { Screen, Header, Trade } from "../../components"
import api from "../../api"

const Trades = ({ navigation, trades, assets }) => {

  const [data, setData] = useState({})

  useEffect(() => {
    console.log("RUN!")
    const getData = async () => {
      const result = await api.getTicker()
      setData(result.data.price)
    }

    getData()

  }, [])

  return (
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
            currentEthPrice={data}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  )
}

export default Trades
