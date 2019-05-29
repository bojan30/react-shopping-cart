import React,{useContext} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {ProductsContext} from '../store/ProductsProvider';

const Nav = () => {
  const { boughtProducts } = useContext(ProductsContext)
  return (
    <div className="Nav">
      <ul className="menu">
        <li><NavLink to="/">All products</NavLink></li>
        <li><NavLink to="/phones">Phones</NavLink></li>
        <li><NavLink to="/notebooks">Notebooks</NavLink></li>
      </ul>
      <div className="cart-btn-wrapper">
        <Link to = "/cart">
          <button className=" btn cart-btn">
            <span>Cart</span><i className="fas fa-shopping-cart"></i>
          </button>
        </Link>
        <div className="count">
          {boughtProducts.length}
      </div>
      </div>
    </div>
  );
}

export default Nav;