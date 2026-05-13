import React, { useContext, useState } from "react";
import CartContext from "./Context";
import "../Cards.css";
import { useNavigate } from "react-router-dom";


const ReviewCart = () => {

  const [count, setCount] = useState(0);

  const { cart } = useContext(CartContext);

  const navigate=useNavigate();

  const gotosuccess=()=>{
    navigate("/successpage");
  }

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
      <button onClick={gotosuccess}>pay</button>
    </div>
  );
};

export default ReviewCart;
