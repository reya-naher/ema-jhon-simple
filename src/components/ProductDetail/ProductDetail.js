import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import { useState } from 'react';
import { useEffect } from 'react';

const ProductDetail = () => {
  const { productKey } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch('https://safe-fjord-18160.herokuapp.com/products/' + productKey)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setLoading(false)
      });
  }, [productKey])

  // console.log(product)
  return (
    <div>
      <h1>Your Product Details</h1>
      {
        loading ? <div class="loader"></div> : <Product
          showAddToCart={false}
          product={product}>
        </Product>
      }

    </div>
  );
};

export default ProductDetail;