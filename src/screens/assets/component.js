import React, { Component } from "react"
import { View, ScrollView, TouchableOpacity } from "react-native"

import { Screen, Header, Footer } from "../../components"
import Asset from "../../components/asset"
import { CopyBlue } from "../../components/typography"

class Assets extends Component {

  state = { scroll: true }

  render() {
    const { categories, navigation, selectAsset } = this.props
    const { scroll } = this.state

    return (
      <Screen>
        <Header title="Assets" backBtn />
        <ScrollView scrollEnabled={scroll}>
          <View>
            {categories
              .sort((a, b) => a.name < b.name)
              .map((a) => (
                <Asset
                  key={a.id}
                  data={a}
                  onPress={() => { selectAsset(a); navigation.goBack() }}
                  toggleScroll={(value) => this.setState({ scroll: value })}
                  navigation={navigation}
                />
              ))
              .reverse()}
          </View>
        </ScrollView>

        <Footer>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.navigate("AssetEdit", { id: false })}>
              <CopyBlue>Add new asset</CopyBlue>
            </TouchableOpacity>
          </View>
        </Footer>

      </Screen>
    )
  }
}

export default Assets
