<<<<<<< HEAD
import React, { useContext, useState } from "react";
import CartContext from "./Context";
import "../Cards.css";

const ReviewCart = () => {

  const [count, setCount] = useState(0);

  const { cart } = useContext(CartContext);

  return (
    <div className="reviewcartCards">

      <h1>Review Cart</h1>

      {
        cart.map((item, index) => (

          <div key={index}>

            <h2>{item.name}</h2>

            <p>{item.price}</p>

            <div className="quantity">

              <div onClick={() => setCount(count - 1)}>
                -
              </div>

              <span>{count}</span>

              <div onClick={() => setCount(count + 1)}>
                +
              </div>

            </div>

            <div>
              Total Price: {item.price};
            </div>

          </div>
        ))
      }

    </div>
  );
};

export default ReviewCart;
=======
import React from 'react'

const Reviewcart = () => {
  return (
    <div>
        
    </div>
  )
}

export default Reviewcart
>>>>>>> 8e9f9d5edffa548f49d18cacefe2569cdf6f33a3
