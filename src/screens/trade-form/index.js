import { connect } from "react-redux"
import Component from "./component"

export default connect(
  (state) => ({
    assets: state.assets.items,
    selectedTrade: state.trades.selectedTrade,
  }),

  (dispatch) => ({
    add: (trade) => dispatch({ type: "ADD_TRADE", trade }),
    edit: (trade) => dispatch({ type: "EDIT_TRADE", trade }),
    remove: (trade) => dispatch({ type: "DELETE_TRADE", trade }),
    close: (trade) => dispatch({ type: "CLOSE_TRADE", trade }),
    // transfer: (transaction) => dispatch({ type: "TRANSFER_TRANSACTION", transaction }),
    //
    // setTransferMode: (value) => dispatch({ type: "SET_TRANSFER_MODE", value }),
    // clearSelectedCategory: () => dispatch({ type: "CLEAR_SELECTED_CATEGORY" }),
    // attachLabel: (payload) => dispatch({ type: "ATTACH_LABEL", payload }),
    // removeLabel: (label) => dispatch({ type: "REMOVE_LABEL", label }),
    // changeAccountFilter: (account) => dispatch({ type: "CHANGE_ACCOUNT_FILTER", account }),
    // clearTradeForm: () => dispatch({ type: "CLEAR_TRADE_FORM" }),
  }),
)(Component)
