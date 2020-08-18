import React from "react"
import { View, TouchableOpacity, useColorScheme } from "react-native"
import moment from "moment"

import { Copy } from "../typography"
import { formatCurrency } from "../../utils/currency"

import styles from "./styles"

const Trade = ({ asset, trade, navigation, selectTrade }) => {

  const { ticker } = asset
  const darkMode = useColorScheme() === "dark"

  return (
    <TouchableOpacity
      onPress={() => {
        selectTrade(trade)
        navigation.navigate("TradeForm", { trade })
      }}
      style={[styles.container, styles.inlineBetween, darkMode && styles.containerDark]}
      >
      <View style={[styles.inline]}>
        <View style={{ backgroundColor: trade.status === "open" ? "yellow" : "green", width: 10, height: 100, marginRight: 5 }} />
        <View>
          <Copy>{ticker}</Copy>
          <Copy>Buy Price: {formatCurrency(trade.price)}</Copy>
          <Copy>Target Price: {formatCurrency(trade.targetPrice)}</Copy>
          <Copy>Amount: {trade.amount}</Copy>
          <Copy style={{ fontSize: 12 }}>{moment(trade.timestamp).format("D.MM.YYYY. HH:mm")}</Copy>
          { trade.note && <Copy>Note: { trade.note }</Copy> }
        </View>
      </View>

      <View>
        <Copy>+ 25,14 %</Copy>
        <Copy>+ 2.17 EUR</Copy>
      </View>
    </TouchableOpacity>
  )

}

export default Trade
