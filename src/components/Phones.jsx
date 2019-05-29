import React,{useContext} from 'react';
import Product from './Product';
import {ProductsContext} from '../store/ProductsProvider'

const Phones = () => {
  const {products} = useContext(ProductsContext);
  const phones = products.filter(product => product.category === 'phones');
  return (
    <div className="container">
      <div className="Products">
        {
          phones.map(phone => {
            return (
              <Product key={phone.id} product={phone} />
            );
          })
        }
      </div>
    </div>
  );
}

export default Phones;