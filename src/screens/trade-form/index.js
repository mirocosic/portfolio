import { connect } from "react-redux"
import Component from "./component"

export default connect(
  (state) => ({
    darkMode: state.common.darkMode,
  }),

  (dispatch) => ({
    add: (transaction) => dispatch({ type: "ADD_TRANSACTION", transaction }),
    edit: (transaction) => dispatch({ type: "EDIT_TRANSACTION", transaction }),
    editAllRecurring: (transaction) =>
      dispatch({ type: "EDIT_ALL_RECURRING_TRANSACTIONS", transaction }),
    editFutureRecurring: (transaction) =>
      dispatch({ type: "EDIT_FUTURE_RECURRING_TRANSACTIONS", transaction }),
    remove: (transaction) =>
      dispatch({ type: "DELETE_TRANSACTION", transaction }),
    transfer: (transaction) =>
      dispatch({ type: "TRANSFER_TRANSACTION", transaction }),
    addRecurring: (options) =>
      dispatch({ type: "ADD_RECURRING_TRANSACTION", options }),
    removeAllRecurring: (transaction) =>
      dispatch({ type: "REMOVE_ALL_RECURRING_TRANSACTIONS", transaction }),
    removeFutureRecurring: (transaction) =>
      dispatch({ type: "REMOVE_FUTURE_RECURRING_TRANSACTIONS", transaction }),
    setTransferMode: (value) => dispatch({ type: "SET_TRANSFER_MODE", value }),
    clearSelectedCategory: () => dispatch({ type: "CLEAR_SELECTED_CATEGORY" }),
    attachLabel: (payload) => dispatch({ type: "ATTACH_LABEL", payload }),
    removeLabel: (label) => dispatch({ type: "REMOVE_LABEL", label }),
    changeAccountFilter: (account) =>
      dispatch({ type: "CHANGE_ACCOUNT_FILTER", account }),
    clearTransactionForm: (defaultAccount, defaultCategory) =>
      dispatch({
        type: "CLEAR_TRANSACTION_FORM",
        defaultAccount,
        defaultCategory,
      }),
  }),
)(Component)