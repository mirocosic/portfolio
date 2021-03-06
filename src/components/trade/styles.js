import { StyleSheet } from "react-native"
import globalStyles from "../../utils/styles"
import palette from "../../utils/palette"

export default StyleSheet.create({
  ...globalStyles,

  container: {
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 0,
    // backgroundColor: "white",
    borderColor: "gray",
    borderBottomWidth: 1,
  },

  containerDark: { backgroundColor: palette.dark },

  amount: { fontSize: 20 },

  deleteTrans: {
    width: 40,
    height: 40,
    backgroundColor: "red",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  colorCode: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },

  expense: { backgroundColor: palette.red },

  income: { backgroundColor: "green" },

  tranfer: { backgroundColor: "blue" },

  labels: { flexDirection: "row" },

  label: {
    margin: 5,
    padding: 5,
  },

  deleteButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.red,
    flex: 1,
    height: 70,
  },
})
