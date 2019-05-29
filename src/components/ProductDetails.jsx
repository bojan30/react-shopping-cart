import React,{useContext} from 'react';
import {ProductsContext} from '../store/ProductsProvider'
import AddToCartBtn from './AddToCartBtn';

const ProductDetails = (props) => {
  const id = Number(props.match.params.id);
  //find product based on id
  const {products} = useContext(ProductsContext); 
  const product = products.find(product => product.id === id);
  return (
    <div className="container">
      <div className="ProductDetails">
        <div className="image">
          <img src= {require(`../images/${product.src}`)} alt=""/>
        </div>
        <div className="info">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p><strong>$ {product.price}</strong></p>
          <AddToCartBtn product = {product}/>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;