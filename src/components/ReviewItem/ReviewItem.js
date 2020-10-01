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
      <h1 className="product-name">{name}</h1>
      <h1>Quantity:{quantity}</h1>
      <p>Price: {price}</p>
      <br />
      <button
        
        className="main-button"
        onClick={ () => removeProduct(key) }>Remove</button>
    </div>
  );
};

export default ReviewItem;