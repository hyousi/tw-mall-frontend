import React from 'react';
import './Product.css';

export default function Product(props) {
  const { name, price, unit, image } = props;

  return (
    <div className='product'>
      {/* TODO: background-image */}
      <div className="product-image"></div>
      <div className='product-name'>{name}</div>
      <div className='product-price'>{`单价：${price}元/${unit}`}</div>
      {/* TODO: add logic */}
      <button>添加</button>
    </div>
  );
}
