import { connect } from "react-redux"
import Component from "./component"

export default connect(
  (state) => ({ trades: state.trades.entries, assets: state.assets.items }),

  (dispatch) => ({}),
)(Component)
