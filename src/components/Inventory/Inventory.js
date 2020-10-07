import React from 'react';

const Inventory = () => {
  const handleAddProduct = () => {
    const products = {}
    fetch('https://safe-fjord-18160.herokuapp.com/addProduct', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(products)
    })
  }
  return (
    <div>
      <form action="">
      <p><span>Name: </span><input type="text"/></p>
      <p><span>Price: </span><input type="text"/></p>
      <p><span>Quantity: </span><input type="text"/></p>
      <p><span>Product Image </span><input type="file"/></p>
      </form>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default Inventory;