import initialState from "./initial-state"
import { makeUUID } from "../../utils/helper-gnomes"

const assets = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_ASSET":
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: makeUUID(),
            name: action.asset.name,
            type: action.asset.type,
            icon: action.asset.icon,
            color: action.asset.color,
            defaultAsset: state.items.length === 0,
          },
        ],
      }

    case "EDIT_ASSET":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== action.asset.id) return item;
          return action.asset;
        }),
      }

    case "REMOVE_ASSET":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.asset.id),
      }

    case "SET_DEFAULT_ASSET":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== action.asset.id) {
            return {
              ...item,
              defaultCategory: false,
            }
          }
          return action.asset;
        }),
      }

    case "SELECT_ASSET":
      return {
        ...state,
        selectedCategory: action.payload,
      }

    case "CLEAR_SELECTED_ASSET":
      return {
        ...state,
        selectedCategory: {},
      }

    case "CHANGE_ASSET_FILTER":
      return {
        ...state,
        assetFilter: action.asset,
      }

    case "RESET_FILTERS":
      return {
        ...state,
        assetFilter: false,
      }

    case "ERASE":
      return { ...initialState }

    default:
      return state;
  }

}

export default assets
