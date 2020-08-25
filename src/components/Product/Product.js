import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
  console.log(props.product)
  const { name, img, seller, stock, price } = props.product
  return (
    <div className="product">
      <div>
        <img src={img} alt="" srcset="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <br />
        <p><small>by: {seller}</small></p>
        <p>${price}</p>
        <p><small>Only {stock} left in stock - Order soon</small></p>
        <button
          className="main-button"
          onClick={() => props.handleProduct(props.product)}>  <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
      </div>

    </div>
  );
};

export default Product;