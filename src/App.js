import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import AllProducts from './components/AllProducts'
import Phones from './components/Phones'
import Notebooks from './components/Notebooks'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import {ProductsProvider} from './store/ProductsProvider';

const App = () => {
  return (
    <div className="App">
      <ProductsProvider>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component = {AllProducts}></Route>
            <Route exact path="/phones" component = {Phones}></Route>
            <Route exact path="/notebooks" component = {Notebooks}></Route>
            <Route path="/productDetails/:id" component = {ProductDetails}></Route>
            <Route path = "/cart" component = {Cart}></Route>
          </Switch>
        </BrowserRouter>
      </ProductsProvider>
    </div>
  );
}

export default App;
