import axios from "axios"

export default {

  getTicker: () => axios({
    method: "get",
    url: "https://api.pro.coinbase.com/products/eth-eur/ticker",
  })
    .then((response) => (response && response.status === 200
      ? { success: true, data: response.data }
      : { success: false, data: null, errorCode: 0, errorMsg: "Unknown error" }))
    .catch((error) => (
      error.response
        ? {
          success: false,
          data: null,
          errorCode: error.response.data.code,
          errorMsg: error.response.data.error_message,
        }
        : { success: false, data: null, errorCode: 0, errorMsg: "Unknown error" }
    )),
}
