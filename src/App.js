import "./App.css";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleDecrement = (product) => {
    const updatedCartItems = cartItems.reduce((acc, item) => {
      if (item.product.id === product.id) {
        if (item.count === 1) {
          return acc;
        }
        return [...acc, { ...item, count: item.count - 1 }];
      }
      return [...acc, item];
    }, []);

    setCartItems(updatedCartItems);
  };

  const handleIncrement = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.product.id === product.id
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  };
  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find(
      (item) => item.product.id === product.id
    );
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { product: product, count: 1 }]);
    }
  };
  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.product.id !== productId));
  };
  return (
    <div className="App">
      <h1 className="title">Shopping List </h1>
      <ProductGrid onAddToCart={handleAddToCart} />
      <Cart
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
}

export default App;
