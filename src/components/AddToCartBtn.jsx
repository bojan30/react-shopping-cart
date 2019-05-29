import React, { useContext } from 'react';
import { ProductsContext } from '../store/ProductsProvider'
const AddToCartBtn = (props) => {
  const { addToCart } = useContext(ProductsContext);
  const handleClick = () => {
    addToCart(props.product);
  }
  return (
    <button className="btn add-to-cart-btn" onClick={handleClick}>
      <span>Add to cart</span>
      <i className="fas fa-shopping-cart"></i>
    </button>
  );
}

export default AddToCartBtn;