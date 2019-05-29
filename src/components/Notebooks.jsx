import React,{useContext} from 'react';
import Product from './Product';
import {ProductsContext} from '../store/ProductsProvider';

const Notebooks = () => {
  const {products} = useContext(ProductsContext);
  const notebooks = products.filter(product => product.category === 'notebooks');
  return (
    <div className="container">
      <div className="Products">
        {
          notebooks.map(notebook => {
            return (
              <Product key={notebook.id} product={notebook} />
            );
          })
        }
      </div>
    </div>
  );
}

export default Notebooks;