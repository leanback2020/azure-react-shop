import React, { Suspense } from "react"
import { HelmetProvider } from "react-helmet-async"
import ProductsContextProvider from "./context/ProductsContext"
import CartContextProvider from "./context/CartContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LoadingDotsIcon from "./components/LoadingDotsIcon"
import Store from "./pages/store"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Cart from "./pages/cart"

import "./App.css"

function App() {
  return (
    <HelmetProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <Router>
            <Switch>
              <Route path="/about" component={About} />

              <Route exact path="/">
                <Suspense fallback={<LoadingDotsIcon />}>
                  <Store />
                </Suspense>
              </Route>
              <Route path="/cart" component={Cart} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </HelmetProvider>
  )
}

export default App
