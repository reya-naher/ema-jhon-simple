import React from 'react';

const ReviewItem = (props) => {
  const { name, quantity, key,price } = props.product
  const removeProduct = props.removeProduct
  const reviewStyle = {
    borderBottom: "1px solid lightgray",
    marginBottom: "10px",
    paddingBottom:"10px",
    marginLeft: "200px",

  }
  return (
    <div style={reviewStyle} className="review-item">
      <h3 className="product-name">{name}</h3>
      <h5>Quantity:{quantity}</h5>
      <p>Price: {price}</p>
      <br />
      <button
        
        className="main-button"
        onClick={ () => removeProduct(key) }>Remove</button>
    </div>
  );
};

export default ReviewItem;