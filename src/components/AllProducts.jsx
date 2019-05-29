import React,{useContext} from 'react';
import Product from './Product';
import {ProductsContext} from '../store/ProductsProvider'; 

const AllProducts = () => {
  const {products} = useContext(ProductsContext);
  return (
    <div className="container">
      <div className="Products">
        {
          products.map(product => {
            return (
              <Product key={product.id} product={product} />
            );
          })
        }
      </div>
    </div>
  );
}

export default AllProducts;