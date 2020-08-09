import React from "react"
import { View, Text } from "react-native"

import { formatCurrency } from "../../utils/currency"

import styles from "./styles"

const Trade = ({ trade }) => {
  return (
    <View style={[styles.container, styles.inlineBetween]}>
      <View>
        <Text>{trade.name}</Text>
        <Text>{trade.asset}</Text>
        <Text>{formatCurrency(trade.price)}</Text>
        <Text>{trade.amount}</Text>
      </View>

      <View>
        <Text>+ 25,14 %</Text>
        <Text>+ 2.17 EUR</Text>
      </View>
    </View>
  )
}

export default Trade
