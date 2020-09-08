export default (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      console.log("ProductsReducer: Get")
      console.log(action.payload)
      return {
        ...state,
        loading: false,
        products: action.payload,
      }
    case "PRODUCT_ERROR":
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
