import { connect } from "react-redux";
import Component from "./component";

export default connect(
  (state) => ({ }),

  (dispatch) => ({
    selectTrade: (trade) => dispatch({ type: "SELECT_TRADE", trade }),
    deleteTrade: (trade) => dispatch({ type: "DELETE_TRADE", trade }),
  }),
)(Component);
