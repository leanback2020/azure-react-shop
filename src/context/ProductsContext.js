import React, { createContext, useState } from "react"
import { storeProducts } from "../services/products"
export const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(storeProducts)

  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>
}

export default ProductsContextProvider
