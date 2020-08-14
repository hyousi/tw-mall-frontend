import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {
          icon: 'fas fa-store',
          name: '商城',
          to: '/',
          exact: true,
        },
        {
          icon: 'fas fa-shopping-cart',
          name: '订单',
          to: '/order',
          exact: false,
        },
        {
          icon: 'fas fa-plus',
          name: '添加商品',
          to: '/product',
          exact: false,
        },
      ],
    };
  }

  render() {
    return (
      <nav className='nav-container'>
        {this.state.navItems.map((item, idx) => (
          <NavLink
            key={`nav-item-${idx}`}
            className='nav-item'
            exact={item.exact}
            to={item.to}>
            <i className={item.icon}></i>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    );
  }
}
