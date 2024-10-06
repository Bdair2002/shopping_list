import "./App.css";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { useState, useEffect } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const amount = cartItems.reduce(
    (total, item) => total + item.product.price * item.count,
    0
  );
  useEffect(() => {
    setTotalAmount(amount);
  }, [cartItems, amount]);
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
    const updatedCartItems = cartItems.map((item) =>
      item.product.id === product.id ? { ...item, count: item.count + 1 } : item
    );
    setCartItems(updatedCartItems);
  };
  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find(
      (item) => item.product.id === product.id
    );
    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) =>
        item.product.id === product.id
          ? { ...item, count: item.count + 1 }
          : item
      );
      setCartItems(updatedCartItems);
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
        totalAmount={totalAmount}
      />
      <Checkout totalAmount={totalAmount} />
    </div>
  );
}

export default App;
