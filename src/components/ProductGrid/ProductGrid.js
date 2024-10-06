import React from "react";
import Card from "../Card/Card";
import "./ProductGrid.css";

const products = [
  { id: 1, name: "Apples", price: 10, img: "./img/apple.png" },
  { id: 2, name: "Headphones", price: 125, img: "./img/headphone.png" },
  { id: 3, name: "Airpods", price: 300, img: "./img/airpod.png" },
  { id: 4, name: "Tshirt", price: 15, img: "./img/tshirt.png" },
  { id: 5, name: "Bananas", price: 7, img: "./img/banana.png" },
];

const ProductGrid = ({ onAddToCart }) => {
  const cards = products.map((product) => (
    <Card
      key={product.id}
      img={product.img}
      title={product.name}
      price={product.price}
      onAddToCart={() => onAddToCart(product)}
    />
  ));

  return <div className="product-grid">{cards}</div>;
};

export default ProductGrid;
