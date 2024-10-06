import "./Cart.css";
const Cart = ({
  onIncrement,
  onDecrement,
  cartItems,
  onRemoveFromCart,
  totalAmount,
}) => {
  return (
    <div className="cart">
      <div className="my_cart">
        <i className="fa-solid fa-cart-shopping fa-2xl"></i>
        <h2 className="cart__heading">My Cart</h2>
      </div>
      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li className="cart__item" key={item.product.id}>
              <img className="cart__item-img" src={item.product.img} alt="" />
              <div className="cart__item--info">
                <p className="cart__item-name">Name: {item.product.name}</p>
                <p className="cart__item-price">Price: ${item.product.price}</p>
                <div className="quantity_control">
                  <div className="cart__item-count">
                    Quantity:
                    <p className="quantity">{item.count}</p>
                    <button
                      onClick={() => onIncrement(item.product)}
                      className="btn increase"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onDecrement(item.product)}
                      className="btn decrease"
                    >
                      -
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onRemoveFromCart(item.product.id);
                  }}
                  className="btn remove"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalAmount}</h3>
    </div>
  );
};

export default Cart;
