/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react"
import { TouchableOpacity, ScrollView, View } from "react-native"
import { Screen, Header, Copy, Icon } from "../../components"
import styles from "./styles"

const Trades = ({ navigation }) => (
  <Screen>
    <Header title="Settings" />
    <ScrollView contentInsetAdjustmentBehavior="automatic">

      <TouchableOpacity
        onPress={() => navigation.navigate("Assets")}
        style={styles.settingWrap}>
        <View>
          <Copy>Assets</Copy>
          <Copy style={{ fontSize: 12, color: "gray", marginTop: 5 }}>
            Customize your asset groups to live track your trades
          </Copy>
        </View>

        <Icon type="chevronRight" style={{ backgroundColor: "transparent" }} textStyle={{ color: "gray" }} />
      </TouchableOpacity>

    </ScrollView>
  </Screen>
)

export default Trades
