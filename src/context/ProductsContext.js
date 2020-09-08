import React, { createContext, useReducer } from "react"
import axios from "axios"
import ProductsReducer from "./ProductsReducer"

const initialState = {
  products: [],
  error: null,
  loading: true,
  messages: [],
}
//export const GlobalContext = createContext(initialState)
export const ProductsContext = createContext(initialState)
// Provider component
//export const GlobalProvider = ({ children }) => {

export const ProductsContextProvider = ({ children }) => {
  // const [products] = useState(storeProducts)

  const [state, dispatch] = useReducer(ProductsReducer, initialState)

  // Actions
  async function getProducts() {
    console.log("getProducts")
    try {
      const response = await axios.get(`https://shopcrudfunc.azurewebsites.net/api/GetProducts`)
      dispatch({
        type: "GET_PRODUCTS",
        payload: response.data,
      })
    } catch (err) {
      dispatch({
        type: "PRODUCT_ERROR",
        payload: err,
      })
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        error: state.error,
        loading: state.loading,
        messages: state.messages,
        getProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
  // const contextValues = {
  //   products: state.products,
  //   error: state.error,
  //   loading: state.loading,
  //   messages: state.messages,
  //   getProducts,
  // }

  // return <ProductsContext.Provider value={{ contextValues }}>{children}</ProductsContext.Provider>
  //return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>
}

export default ProductsContextProvider
