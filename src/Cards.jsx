import React, { useState, useContext } from "react";
import "./Cards.css";

import CartContext from "./Components/Context";

const Cards = ({ items }) => {

  const [count, setCount] = useState(0);

  // Access Context
  const { addToCart } = useContext(CartContext);

  // Increment Function
  const handleIncrement = () => {

    setCount(count + 1);
    addToCart(items);
  };

  // Decrement Function
  const handleDecrement = () => {

    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="cards">

      <img
        src={items.image}
        alt={items.name}
        className="card-image"
      />

      <div className="card-content">

        <h3 className="card-title">
          {items.name}
        </h3>

        <p className="card-rating">
          {items.rating}
        </p>

        <p className="card-price">
          Price: {items.price}
        </p>

        <div className="addbuttons">

          {count === 0 ? (

            <div
              className="add"
              onClick={() => {
                setCount(1);
                addToCart(items);
              }}
            >
              ADD
            </div>

          ) : (

            <>
              <button onClick={handleDecrement}>
                -
              </button>

              <span>{count}</span>

              <button onClick={handleIncrement}>
                +
              </button>
            </>

          )}

        </div>
      </div>
    </div>
  );
};

export default Cards;