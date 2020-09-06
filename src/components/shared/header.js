import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { CartIcon } from "../icons"
import styles from "./header.module.scss"
import Badge from "@material-ui/core/Badge"
import { withStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
//import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"

const Header = () => {
  const { itemCount } = useContext(CartContext)

  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 3,
      border: `3px solid ${theme.palette.background.paper}`,
      padding: "0 3px",
    },
  }))(Badge)

  return (
    <header className={styles.header}>
      <Link to="/">Store</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">
        {" "}
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={itemCount} color="secondary">
            <CartIcon />
          </StyledBadge>
        </IconButton>
      </Link>
    </header>
  )
}

export default Header
