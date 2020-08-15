import React, { useState } from "react"
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  useColorScheme,
} from "react-native"

import { get } from "lodash"
import { Modalize } from "react-native-modalize"

import {
  Screen,
  Header,
  Copy,
  Icon,
  CustomKeyboard,
} from "../../components"

import styles from "./styles"

const TradeForm = ({ assets, add, remove, edit, navigation }) => {

  const [trade, setTrade] = useState({ amount: 0 })
  const [price, setPrice] = useState({ price: 219 })

  const assetModal = React.createRef()
  const darkMode = useColorScheme() === "dark"

  const renderAsset = (id) => {
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

  const renderAssets = () => assets
    .map((a) => (
      <TouchableOpacity
        key={a.id}
        onPress={() => {
          setTrade({ ...trade, assetId: a.id })
          assetModal.current.close()
        }}>
        <View style={{ flexDirection: "row", alignItems: "center", margin: 5 }}>
          <Icon type={get(a, "icon", "")} textStyle={{ color: a.color || "blue" }} style={{ marginRight: 10 }} />
          <Copy>{a.name}</Copy>
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

  return (
    <TouchableWithoutFeedback onPress={() => blurInput()}>
      <Screen style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Header title="Trade Form" backBtn />

        <View style={styles.inlineStart}>
          <Copy>Amount: </Copy>
          <Copy>{trade.amount}</Copy>
        </View>

        <View style={styles.inlineStart}>
          <Copy>Price: </Copy>
          <Copy>{price.price}</Copy>
        </View>

        <View style={styles.inlineStart}>
          <Copy>Asset: </Copy>

          <TouchableOpacity
            style={[styles.selectBox, darkMode && styles.selectBoxDark]}
            onPress={() => assetModal.current.open()}>
            {renderAsset(get(trade, "assetId"))}
          </TouchableOpacity>
        </View>

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

      </Screen>
    </TouchableWithoutFeedback>
  )
}

export default TradeForm
