import React, { Component } from "react"
import { View } from "react-native"
import { DarkModeContext } from "react-native-dark-mode"

import { Copy } from "../typography"
import { formatCurrency } from "../../utils/currency"

import styles from "./styles"

class Trade extends Component {

  static contextType = DarkModeContext

  render() {
    const { name } = this.props.asset
    const { trade } = this.props
    const darkMode = this.context === "dark"

    return (
      <View style={[styles.container, styles.inlineBetween, darkMode && styles.containerDark]}>
        <View>
          <Copy>{name}</Copy>
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

}

export default Trade
