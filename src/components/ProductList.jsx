import ProductItem from "./ProductItem";

function ProductList({ products, addToCart }) {

  return (
    <div>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;