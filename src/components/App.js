import React, { Component } from 'react';
import './App.css';
import Navbar from './modules/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Mall from './pages/Mall';
import Cart from './pages/Cart';
import Product from './pages/Product';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Redirect to='/mall' />
            </Route>
            <Route path='/mall' component={Mall} />
            <Route path='/cart' component={Cart} />
            <Route path='/product' component={Product} />
            <Route path='*'>
              <Redirect to='/mall' />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
