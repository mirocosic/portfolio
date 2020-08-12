import { connect } from "react-redux";
import Component from "./component";

export default connect(
  (state) => ({
    assets: state.assets.items,
    darkMode: state.common.darkMode,
  }),

  (dispatch) => ({
    add: (payload) => dispatch({ type: "ADD_ASSET", payload }),
    remove: (category) => dispatch({ type: "REMOVE_ASSET", category }),
    selectAsset: (payload) => dispatch({ type: "SELECT_ASSET", payload }),
  }),
)(Component);
