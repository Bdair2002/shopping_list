import { useState } from "react";
import "./Checkout.css";
const Checkout = ({ totalAmount }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, totalAmount });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="checkout__title">Checkout</h2>
      <div className="form-group">
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className="form-group">
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-group">
        <button className="btn submit-btn" type="submit">
          Submit Order
        </button>
      </div>
    </form>
  );
};

export default Checkout;
