import React from "react";

const ProductItem = React.memo(({ product, addToCart }) => {

  console.log("Rendering:", product.name);

  return (
    <div style={{
      border:"1px solid gray",
      padding:"10px",
      margin:"10px",
      width:"250px"
    }}>
      <h3>{product.name}</h3>

      <p>Price: ₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
});

export default ProductItem;