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

import { get } from "lodash"
import { Calendar } from "react-native-calendars"
import { Modalize } from "react-native-modalize"
import Collapsible from "react-native-collapsible"
// import moment from "moment"
import { DarkModeContext } from "react-native-dark-mode"

import {
  Screen,
  Header,
  Copy,
  Icon,
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

class TradeForm extends Component {
  static contextType = DarkModeContext

  state = {
    trade: { amount: 0 },
    // transaction: this.props.selectedTrade,
  }

  assetModal = React.createRef()

  labelsModal = React.createRef()

  calendarModal = React.createRef()

  renderAsset = (id) => {
    const { assets } = this.props
    const asset = assets.find((a) => id === a.id)

    return (
      <View style={{ flexDirection: "row", alignItems: "center", width: 170 }}>
        <Icon
          type={get(asset, "icon", "")}
          textStyle={{ color: get(asset, "color", "blue") }}
        />
        <Copy>{asset && asset.name}</Copy>
      </View>
    )
  }

  renderAssets = () => {
    const { assets } = this.props
    const { trade } = this.state

    return assets
      .map((a) => (
        <TouchableOpacity
          key={a.id}
          onPress={() => {
            this.setState({ trade: { ...trade, assetId: a.id } })
            this.assetModal.current.close()
          }}>
          <View style={{ flexDirection: "row", alignItems: "center", margin: 5 }}>
            <Icon type={get(a, "icon", "")} textStyle={{ color: a.color || "blue" }} style={{ marginRight: 10 }} />
            <Copy>{a.name}</Copy>
          </View>

        </TouchableOpacity>
      ))
  }

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
          <Copy>Amount: </Copy>
          <Copy>{trade.amount}</Copy>

          <TouchableOpacity
            style={[styles.selectBox, darkMode && styles.selectBoxDark]}
            onPress={() => this.assetModal.current.open()}>
            {this.renderAsset(get(trade, "assetId"))}
          </TouchableOpacity>

          <CustomKeyboard
            handlePress={(value) => this.setState({ trade: { ...trade, ...{ amount: trade.amount + value } } })}
            handleSubmit={() => this.submitForm()}
            setAmount={(value) => this.setState({ trade: { ...trade, ...{ amount: value } } })}
            delete={() => this.setState({
              trade: {
                ...trade,
                ...{ amount: trade.amount.substring(0, trade.amount.length - 1) },
              },
            })}
          />

          <Modalize
            adjustToContentHeight
            modalStyle={[styles.modal, darkMode && styles.modalDark]}
            ref={this.assetModal}>
            <ScrollView style={{ minHeight: 200, maxHeight: 400, padding: 10 }}>
              {this.renderAssets()}
              <TouchableOpacity
                style={{ position: "absolute", right: 10 }}
                onPress={() => this.assetModal.current.close()}>
                <Icon type="times" textStyle={{ color: "teal" }} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.inline, { justifyContent: "flex-start", paddingLeft: 5 }]}
                onPress={() => navigation.navigate("AssetEdit", {})}>
                <Icon type="plus" textStyle={{ color: "teal" }} />
                <Copy style={{ fontSize: 14 }}>Add new asset</Copy>
              </TouchableOpacity>
            </ScrollView>
          </Modalize>

        </Screen>
      </TouchableWithoutFeedback>
    )
  }
}

export default TradeForm
