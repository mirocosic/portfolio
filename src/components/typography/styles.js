import { StyleSheet } from "react-native"
import { isIos } from "../../utils/os-utils"
import palette from "../../utils/palette"

// export const font = "DIN 30640 Pro"

export default StyleSheet.create({
  copy: {
    color: palette.black,
    //    fontFamily: font,
    fontSize: 14,
    top: isIos ? 3 : 0,
  },

  copyBlue: {
    //    fontFamily: font,
    top: isIos ? 3 : 0,
    color: palette.blue,
    fontSize: 14,
  },

  copyDark: {
    color: palette.white,
    fontSize: 14,
  },

  title: {
    top: isIos ? 3 : 0,
    //    fontFamily: font,
    fontSize: 18,
    padding: 5,
    color: palette.black,
  },

  titleDark: {
    fontSize: 18,
    padding: 5,
    color: palette.white,
  },
})
