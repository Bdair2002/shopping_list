import React from "react";
import Card from "../Card/Card";
import "./ProductGrid.css";

const products = [
  { id: 1, name: "Apples", price: 10, image: "./img/apple.png" },
  { id: 2, name: "Headphones", price: 125, image: "./img/headphone.png" },
  { id: 3, name: "Airpods", price: 300, image: "./img/airpod.png" },
  { id: 4, name: "Tshirt", price: 15, image: "./img/tshirt.png" },
  { id: 5, name: "Bananas", price: 7, image: "./img/banana.png" },
];

const ProductGrid = () => {
  const cards = products.map((product) => (
    <Card
      key={product.id}
      image={product.image}
      title={product.name}
      price={product.price}
      onAddToCart={() => handleAddToCart(product)}
    />
  ));
  const handleAddToCart = (product) => {
    //TODO
  };

  return <div className="product-grid">{cards}</div>;
};

export default ProductGrid;
