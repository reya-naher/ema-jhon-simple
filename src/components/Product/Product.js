import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
  //console.log(props)
  const { name, img, seller, stock, price, key } = props.product
  // console.log(props.product)
  return (
    <div className="product">
      
      <div>
        <img src={img} alt=""/>
      </div>
      <div>
        <h5 className="product-name">
          <Link to={"/product/"+key}>{name}</Link></h5>
        <br />
        <p><small>by: {seller}</small></p>
        <p>${price}</p>
        <p><small>Only {stock} left in stock - Order soon</small></p>
        { props.showAddToCart && <button
          className="main-button"
          onClick={() => props.handleProduct(props.product)}>  <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
          </button>}
      </div>

    </div>
  );
};

export default Product;