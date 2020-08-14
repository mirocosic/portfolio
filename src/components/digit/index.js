import React, { useState } from "react"
import { Text, TouchableOpacity, useColorScheme } from "react-native"

import styles from "./styles"

export default ({ small, handlePress, digit }) => {
  const [pressed, setPressed] = useState(false)
  const darkMode = useColorScheme() === "dark"

  return (
    <TouchableOpacity
      underlayColor="teal"
      activeOpacity={0.6}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onShowUnderlay={() => setPressed(true)}
      onHideUnderlay={() => setPressed(false)}
      style={[styles.digit, darkMode && styles.digitDark, pressed && styles.pressedDigit]}
      onPress={() => handlePress(digit)}>
      <Text style={[small ? styles.copySmall : styles.copy, darkMode && styles.copyDark, pressed && styles.pressedCopy]}>
        {digit}
      </Text>
    </TouchableOpacity>
  )
}
