import React, { useState } from "react"
import { View, Text, TouchableOpacity, useColorScheme } from "react-native"

import palette from "../../utils/palette"
import Digit from "../digit"
import styles from "./styles"

export default ({ handlePress, setAmount, handleSubmit, del }) => {
  const darkMode = useColorScheme() === "dark"
  const [calculationMode, setCalculationMode] = useState(false)
  const [input, setInput] = useState("")

  const handleDigitPress = (digit) => {

    if (!calculationMode) {
      handlePress(digit)
    }

    setInput(input + digit)
  }

  const handleOperation = (operation) => {
    setInput(`${input} ${operation} `)
    setCalculationMode(true)
  }

  const handleClear = () => {
    setInput("")
    setAmount("0")
  }

  const calculate = () => {
    setInput(`${input} = ${eval(input)}`)
    setCalculationMode(false)

    setAmount(eval(input).toString())
  }

  return (
    <View style={[styles.wrap, darkMode && styles.wrapDark]}>

      <View style={{ alignItems: "flex-end", padding: 5 }}>
        <Text>{input}</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <View style={styles.row}>

            <Digit digit="1" handlePress={() => handleDigitPress("1")} />
            <Digit digit="2" handlePress={() => handleDigitPress("2")} />
            <Digit digit="3" handlePress={() => handleDigitPress("3")} />

          </View>

          <View style={styles.row}>
            <Digit digit="4" handlePress={() => handleDigitPress("4")} />
            <Digit digit="5" handlePress={() => handleDigitPress("5")} />
            <Digit digit="6" handlePress={() => handleDigitPress("6")} />
          </View>

          <View style={styles.row}>
            <Digit digit="7" handlePress={() => handleDigitPress("7")} />
            <Digit digit="8" handlePress={() => handleDigitPress("8")} />
            <Digit digit="9" handlePress={() => handleDigitPress("9")} />
          </View>

          <View style={styles.row}>
            <Digit digit="," handlePress={() => handleDigitPress(".")} />
            <Digit digit="0" handlePress={() => handleDigitPress("0")} />
            <Digit digit="" handlePress={() => {}} />
          </View>

        </View>

        <View>
          <Digit digit="+" handlePress={() => handleOperation("+")} small />
          <Digit digit="-" handlePress={() => handleOperation("-")} small />
          <Digit digit="x" handlePress={() => handleOperation("*")} small />
          <Digit digit="/" handlePress={() => handleOperation("/")} small />
        </View>

        <View>
          <Digit digit="C" handlePress={() => handleClear()} small />
          <Digit digit="DEL" handlePress={() => del()} small />

          <TouchableOpacity
            style={[styles.digit, !calculationMode && { backgroundColor: palette.blue }]}
            onPress={() => (calculationMode ? calculate() : handleSubmit())}>
            <Text style={{ color: !calculationMode ? "white" : "black" }}>
              { calculationMode ? "=" : "OK"}
            </Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  )

}
