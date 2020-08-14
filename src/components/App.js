import React, { Component } from 'react';
import './App.css';
import Navbar from './modules/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Product from './pages/Product'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/order" component={Order}/>
            <Route path="/product" component={Product}/>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
