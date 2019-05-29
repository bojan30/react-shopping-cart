import React,{useContext} from 'react';
import {ProductsContext} from '../store/ProductsProvider';

const Cart = () => {
  const {boughtProducts,deleteFromCart} = useContext(ProductsContext);
  const totalPrice = boughtProducts.reduce((acc,currentProduct)=> {
    return acc + currentProduct.price;
  },0);
  const boughtProductsList = boughtProducts.map(product=> {
    return (
      <div key = {product.id} className="BoughtProduct">
        <div className="image">
          <img src={require(`../images/${product.src}`)} alt="" />
        </div>
        <div className="info">
          <h3>{product.name}</h3>
        </div>
        <div className="p">
          <p><strong>$ {product.price}</strong></p>
        </div>
        <button onClick = {() => {handleDelete(product.id)}} className = "btn-delete">X</button>
      </div>
    );
  })
  const handleDelete = (id) => {
    deleteFromCart(id);
  }
  if(!boughtProducts.length){
    return (
      <div className="container">
        <div className="Cart">
          <p>There are no products in your cart!</p>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="container">
        <div className="Cart">
          {boughtProductsList}
          <div className="total">
            Total: ${totalPrice}
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;