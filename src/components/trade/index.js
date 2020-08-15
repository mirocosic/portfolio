import React, { Component } from "react"
import { View, useColorScheme } from "react-native"

import { Copy } from "../typography"
import { formatCurrency } from "../../utils/currency"

import styles from "./styles"

const Trade = ({ asset, trade }) => {

  const { ticker } = asset
  const darkMode = useColorScheme() === "dark"

  return (
    <View style={[styles.container, styles.inlineBetween, darkMode && styles.containerDark]}>
      <View>
        <Copy>{ticker}</Copy>
        <Copy>Price: {formatCurrency(trade.price)}</Copy>
        <Copy>Amount: {trade.amount}</Copy>
        { trade.note && <Copy>Note: { trade.note }</Copy> }
      </View>

      <View>
        <Copy>+ 25,14 %</Copy>
        <Copy>+ 2.17 EUR</Copy>
      </View>
    </View>
  )

}

export default Trade
