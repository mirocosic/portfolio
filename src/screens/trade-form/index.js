import { connect } from "react-redux"
import Component from "./component"

export default connect(
  (state) => ({
    darkMode: state.common.darkMode,
    assets: state.assets.items,
  }),

  (dispatch) => ({
    add: (trade) => dispatch({ type: "ADD_TRADE", trade }),

    edit: (transaction) => dispatch({ type: "EDIT_TRANSACTION", transaction }),

    remove: (transaction) => dispatch({ type: "DELETE_TRANSACTION", transaction }),
    transfer: (transaction) => dispatch({ type: "TRANSFER_TRANSACTION", transaction }),

    setTransferMode: (value) => dispatch({ type: "SET_TRANSFER_MODE", value }),
    clearSelectedCategory: () => dispatch({ type: "CLEAR_SELECTED_CATEGORY" }),
    attachLabel: (payload) => dispatch({ type: "ATTACH_LABEL", payload }),
    removeLabel: (label) => dispatch({ type: "REMOVE_LABEL", label }),
    changeAccountFilter: (account) => dispatch({ type: "CHANGE_ACCOUNT_FILTER", account }),
    clearTransactionForm: (defaultAccount, defaultCategory) => dispatch({
      type: "CLEAR_TRANSACTION_FORM",
      defaultAccount,
      defaultCategory,
    }),
  }),
)(Component)
