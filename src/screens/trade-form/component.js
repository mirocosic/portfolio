import React, { useState } from "react"
import { View, TextInput, TouchableOpacity, TouchableWithoutFeedback, ScrollView, useColorScheme } from "react-native"
import { get } from "lodash"
import moment from "moment"
import { Modalize } from "react-native-modalize"
import { Calendar } from "react-native-calendars"

import { Screen, Header, Copy, Icon, CustomKeyboard, PrimaryButton } from "../../components"
import palette from "../../utils/palette"
import styles from "./styles"

const TradeForm = ({ assets, add, remove, edit, close, navigation, route }) => {

  const newTrade = { amount: "0", status: "open", assetId: 1 }
  const [trade, setTrade] = useState(route.params.trade || newTrade)

  const assetModal = React.createRef()
  const calendarModal = React.createRef()
  const darkMode = useColorScheme() === "dark"

  const renderAsset = (id) => {
    const asset = assets.find((a) => id === a.id)

    return (
      <View style={{ flexDirection: "row", alignItems: "center", width: 170 }}>
        <Icon
          type={get(asset, "icon", "")}
          faType="brand"
          textStyle={{ color: get(asset, "color", "blue") }}
        />
        <Copy>{asset && asset.name}</Copy>
      </View>
    )
  }

  const renderAssets = () => assets
    .map((a) => (
      <TouchableOpacity
        key={a.id}
        onPress={() => {
          setTrade({ ...trade, assetId: a.id })
          assetModal.current.close()
        }}>
        <View style={{ flexDirection: "row", alignItems: "center", margin: 5 }}>
          <Icon type={get(a, "icon", "")} textStyle={{ color: a.color || "gold" }} style={{ marginRight: 10 }} faType="brand" />
          <Copy>{`${a.name} (${a.ticker})`}</Copy>
        </View>

      </TouchableOpacity>
    ))

  const editTrade = () => {
    edit(trade)
    navigation.goBack()
  }

  const submitForm = () => {
    if (trade.id) {
      editTrade(trade)
    } else {
      add(trade)
      navigation.goBack()
    }
  }

  const deleteTrade = () => {
    remove({ id: trade.id })
    navigation.goBack()
  }

  const closeTrade = () => {
    close(trade)
    navigation.goBack()
  }

  console.log(trade)

  return (
    <TouchableWithoutFeedback onPress={() => blurInput()}>
      <Screen style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Header
          title="Trade Form"
          backBtn
          actionBtn={trade.id && <Icon type="trash-alt" />}
          actionBtnPress={() => deleteTrade(trade)}
        />

        <View style={styles.inlineStart}>
          <Copy>Amount: </Copy>
          <TextInput
            onChangeText={(value) => setTrade({ ...trade, ...{ amount: value } })}
            value={trade.amount}
            placeholder="enter amount..."
            style={[styles.textInput, darkMode && styles.textInputDark, { marginLeft: 0, padding: 10, height: 40, width: "100%" }]}
            keyboardAppearance={darkMode ? "dark" : "light"}
            keyboardType="number-pad"
            returnKeyType="done"
          />
        </View>

        <View style={styles.inlineStart}>
          <Copy>Price: </Copy>
          <TextInput
            onChangeText={(value) => setTrade({ ...trade, ...{ price: parseFloat(value) * 100 } })}
            value={trade.price / 100}
            placeholder="enter price..."
            style={[styles.textInput, darkMode && styles.textInputDark, { marginLeft: 0, padding: 10, height: 40, width: "100%" }]}
            keyboardAppearance={darkMode ? "dark" : "light"}
            keyboardType="numeric"
            returnKeyType="done"
          />
        </View>

        <View style={styles.inlineStart}>
          <Copy>Target Price: </Copy>
          <TextInput
            onChangeText={(value) => setTrade({ ...trade, ...{ targetPrice: value * 100 } })}
            value={trade.targetPrice / 100}
            placeholder="enter target..."
            style={[styles.textInput, darkMode && styles.textInputDark, { marginLeft: 0, padding: 10, height: 40, width: "100%" }]}
            keyboardAppearance={darkMode ? "dark" : "light"}
            keyboardType="numeric"
            returnKeyType="done"
          />
        </View>

        <View style={styles.inlineStart}>
          <Copy>Asset: </Copy>

          <TouchableOpacity
            style={[styles.selectBox, darkMode && styles.selectBoxDark]}
            onPress={() => assetModal.current.open()}>
            {renderAsset(get(trade, "assetId"))}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => calendarModal.current.open()}>
          <Icon
            type="calendar-alt"
            style={{ paddingLeft: 0, width: 20 }}
            textStyle={{ color: "teal", marginLeft: 0, paddingLeft: 0, width: 20 }}
            />
          <Copy>{moment(trade.timestamp).format("MMM Do YYYY")}</Copy>
        </TouchableOpacity>

        { trade.id
          && trade.status === "open"
          && <PrimaryButton label="Close Trade" onPress={() => closeTrade(trade)} />}

        <CustomKeyboard
          handlePress={(value) => setTrade({ ...trade, ...{ amount: trade.amount + value } })}
          handleSubmit={() => submitForm()}
          setAmount={(value) => setTrade({ ...trade, ...{ amount: value } })}
          del={() => setTrade({
            ...trade,
            ...{ amount: trade.amount.substring(0, trade.amount.length - 1) },
          })}
        />

        <Modalize
          adjustToContentHeight
          modalStyle={[styles.modal, darkMode && styles.modalDark]}
          ref={assetModal}>
          <ScrollView style={{ minHeight: 200, maxHeight: 400, padding: 10 }}>
            {renderAssets()}
            <TouchableOpacity
              style={{ position: "absolute", right: 10 }}
              onPress={() => assetModal.current.close()}>
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

        <Modalize
          adjustToContentHeight
          modalStyle={[styles.modal, darkMode && styles.modalDark]}
          scrollViewProps={{ scrollEnabled: false }}
          ref={calendarModal}>
          <ScrollView style={{ minHeight: 400, maxHeight: 400, padding: 10 }}>

            <Calendar
              theme={{
                monthTextColor: darkMode ? palette.blue : palette.darkGray,
                dayTextColor: darkMode ? "white" : "black",
                todayTextColor: "teal",
                calendarBackground: darkMode ? palette.darkGray : "white",
              }}
              onDayPress={(day) => {
                setTrade({ ...trade, ...{ timestamp: day.timestamp } })
                calendarModal.current.close()
              }}
            />

          </ScrollView>
        </Modalize>

      </Screen>
    </TouchableWithoutFeedback>
  )
}

export default TradeForm
