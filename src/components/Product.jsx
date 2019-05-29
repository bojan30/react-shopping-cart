import React from 'react';
import {Link} from 'react-router-dom';
import AddToCartBtn from './AddToCartBtn';

const Product = (props) => {
  return (
      <div className="Product">
        <div className="thumbnail">
          <div className="detail-link">
            <Link to={`/productDetails/${props.product.id}`} ><i className="fas fa-eye"></i></Link>
          </div>
          <img src={require(`../images/${props.product.src}`)} alt="HP-Notebook-15-Laptop-Computer"></img>
        </div>
        <Link to = {`/productDetails/${props.product.id}`}><h3 className="name">{props.product.name}</h3></Link>
        <p className="price">${props.product.price}</p>
        <AddToCartBtn product = {props.product}/>
      </div>
  );
}

export default Product;