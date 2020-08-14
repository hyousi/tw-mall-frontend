import React, { Component } from 'react';
import Product from '../modules/Product';
import './Mall.css';

const product_url = 'http://localhost:8080/api/products';
export default class Mall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch(product_url)
      .then((response) => response.json())
      .then((products) => this.setState({ products: products }));
  }

  render() {
    const { products } = this.state;

    return (
      <div className='product-container'>
        {products.length > 0
          ? products.map((product, idx) => (
              <Product key={`product-${idx}`} {...product} />
            ))
          : null}
      </div>
    );
  }
}
