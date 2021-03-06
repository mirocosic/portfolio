import React from "react"
import { View, Image } from "react-native"
import FontAwesome, { Icons } from "react-native-fontawesome"

import money from "../../../assets/icons/money.png"
import category from "../../../assets/icons/default.png"

const icons = {
  money,
  category,
}

const resolveType = (type) => {
  if (type === "brand") {
    return "FontAwesome5Brands-Regular"
  }
  if (type === "pro") {
    return "FontAwesome5Pro-Solid"
  }
  return "FontAwesome5FreeSolid"

}

const Icon = ({ type, textStyle, style, icon, faType }) => (
  <View
    style={[
      {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        borderRadius: 20,
      },
      style,
    ]}>
    {type ? (
      <FontAwesome
        style={[{ fontSize: 16, color: "white" }, textStyle]}
        type={resolveType(faType)}>
        {Icons[type]}
      </FontAwesome>
    ) : (
      <Image
        source={icons[icon] || null}
        style={{ width: 20, height: 20, tintColor: "white" }}
      />
    )}
  </View>
)

export default Icon
