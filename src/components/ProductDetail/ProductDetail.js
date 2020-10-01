import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import { useState } from 'react';
import { useEffect } from 'react';

const ProductDetail = () => {
  const { productKey } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch('https://safe-fjord-18160.herokuapp.com/products/' + productKey)
      .then(res => res.json())
    .then(data => setProduct(data))
  },[productKey])

 // console.log(product)
  return (
    <div>
      <h1>Your Product key:{productKey}</h1>
 <Product
        showAddToCart={false}
        product={product}>
        </Product>

    </div>
  );
};

export default ProductDetail;