import React, { Component } from "react"
import {
  View,
  TextInput,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Switch,
  ScrollView,
} from "react-native"

import { Calendar } from "react-native-calendars"
import Modalize from "react-native-modalize"
import Collapsible from "react-native-collapsible"
// import moment from "moment"
// import { get } from "lodash"
import { DarkModeContext } from "react-native-dark-mode"

import {
  Screen,
  Header,
  // Label,
  CustomKeyboard,
  // TransactionType,
  // PrimaryButton,
} from "../../components"

// import { Copy, CopyBlue } from "../../components/typography"
// import Icon from "../../components/icon"
import { formatCurrency } from "../../utils/currency"
import palette from "../../utils/palette"
import styles from "./styles"

class TransactionForm extends Component {
  static contextType = DarkModeContext

  state = {
    trade: {},
    // moreOptionsOpen: false,
    // transaction: this.props.selectedTrade,
  }

  catModal = React.createRef()

  labelsModal = React.createRef()

  calendarModal = React.createRef()

  submitForm = () => {
    const { add, navigation } = this.props
    const { trade } = this.state

    if (trade.id) {
      this.editTrade(trade)
    } else {
      add(trade)
      navigation.goBack()
    }
  }

  editTrade = (trade) => {
    const { navigation, edit } = this.props

    edit(trade)
    navigation.goBack()
  }

  deleteTrade = (trade) => {
    const { navigation, remove } = this.props

    remove({ id: trade.id })
    navigation.goBack()
  }

  render() {
    const { trade } = this.state
    const { navigation } = this.props
    const darkMode = this.context === "dark"

    return (
      <TouchableWithoutFeedback onPress={() => this.blurInput()}>
        <Screen style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Header title="Trade Form" backBtn />
          <CustomKeyboard handlePress={() => {}} />
        </Screen>
      </TouchableWithoutFeedback>
    )
  }
}

export default TransactionForm
