import initialState from "./initial-state"
import { makeUUID } from "../../utils/helper-gnomes"

const trades = (state = initialState, action) => {

  const trade = action.trade || {}
  // const { timestamp, accountId, fromAccountId, amount, type, note, categoryId, labels, parentTransactionId, currency } = transaction
  const newId = makeUUID()

  switch (action.type) {

    case "ADD_TRADE":
      return {
        ...state,
        entries: [
          ...state.entries,
          {
            ...trade,
            id: newId,
          },

        ],
      }

    case "SELECT_TRADE":
      return {
        ...state,
        selectedTrade: action.trade,
      }

    default:
      return state
  }
}

export default trades
