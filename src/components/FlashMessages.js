import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"

function FlashMessages(props) {
  const { messages } = useContext(CartContext)
  return (
    <div className="floating-alerts">
      {messages.map((msg, index) => {
        return (
          <div key={index} className="alert alert-success text-center floating-alert shadow-sm">
            {msg}
          </div>
        )
      })}
    </div>
  )
}

export default FlashMessages
