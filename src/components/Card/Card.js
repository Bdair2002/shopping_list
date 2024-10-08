import React from "react";
import "./Card.css";

const Card = ({ img, title, price, onAddToCart }) => {
  return (
    <div className="card">
      <img src={img} alt={title} className="card__img" />
      <h3 className="card__title">{title}</h3>
      <p className="card__price">${price}</p>
      <button className="card__button" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
