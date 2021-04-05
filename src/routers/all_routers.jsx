import HomeConatiner from '../conatiner-components/home_container';
import ProductsContainer from '../conatiner-components/products_container';
import Product from '../presentational-components/product';
import Cart from '../presentational-components/cart';
import CheckOut from '../presentational-components/checkout';
import Categories from '../presentational-components/categories'
import Login from '../presentational-components/login'
import PrivateRouter from './private_router';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { useState } from 'react';

function Routers() {
  const auth = useSelector((state) => state.loginReducer.auth);
  const siginFlag = useSelector((state) => state.loginReducer.siginFlag);
  const cartFlag = useSelector((state) => state.cartReducer.cartFlag);

  return (
    <Router>
      <Switch>
        {/* <Route path='/' exact render={({match}) => <Categories match={match}/> }/> */}
        <Route path="/" exact>
          {siginFlag ? (
            <Redirect to="/login" />
          ) : cartFlag ? (
            <Redirect to="/cart" />
          ) : (
                <Categories />
              )
          }
        </Route>
        <Route path="/products" exact>
          {siginFlag ? (
            <Redirect to="/login" />
          ) : cartFlag ? (
            <Redirect to="/cart" />
          ) : (
                <ProductsContainer />
              )
          }
        </Route>
        <Route path="/product" exact>
          {siginFlag ? (
            <Redirect to="/login" />
          ) : cartFlag ? (
            <Redirect to="/cart" />
          ) : (
                <Product />
              )
          }
        </Route>
        
        <Route path='/cart' exact render={({ match }) => <Cart match={match} />} />
        <Route path='/checkout' exact render={({ match }) => <CheckOut match={match} />} />
        <Route path='/login' exact render={({ match }) => <Login match={match} />} />
      </Switch>
    </Router>
  );
}

export default (Routers);
