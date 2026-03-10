import { useState, useMemo, useCallback } from "react";
import { products } from "./data/products";
import ProductList from "./components/ProductList";
import Users from "./components/User";

function App() {

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  // memoized function
  const addToCart = useCallback((product) => {
    setCart(prev => [...prev, product]);
  }, []);

  // memoized filtered products
  const filteredProducts = useMemo(() => {

    console.log("Filtering products...");

    return products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]);

  return (
    <div style={{ padding: "20px" }}>

      {/* Product Dashboard */}
      <h1>Product Dashboard</h1>

      <input
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", marginBottom: "20px" }}
      />

      <h2>Cart Items: {cart.length}</h2>

      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
      />

      <hr style={{ margin: "40px 0" }} />

      {/* Users Dashboard */}
      <h1>Users Dashboard</h1>

      <Users />

    </div>
  );
}

export default App;