import React, { useContext, useEffect } from "react"
import ProductItem from "./ProductItem"
import LoadingDotsIcon from "../../components/LoadingDotsIcon"
import { ProductsContext } from "../../context/ProductsContext"
import styles from "./ProductsGrid.module.scss"

const ProductsGrid = () => {
  const { products, getProducts, loading } = useContext(ProductsContext)

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <LoadingDotsIcon />
  }

  return (
    <div className={styles.p__container}>
      <div className="row">
        <div className="col-sm-8">
          <div className="py-3">{products.length} Products</div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <input type="text" name="" placeholder="Search product" className="form-control" id="" />
          </div>
        </div>
      </div>
      <div className={styles.p__grid}>
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
      <div className={styles.p__footer}></div>
    </div>
  )
}

export default ProductsGrid
