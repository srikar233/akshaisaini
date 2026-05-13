import React, { useContext } from "react";
import CartContext from "../Context";
import "./Successpage.css";

const Successpage = () => {

  const { cart } = useContext(CartContext);

 

  return (
    <div className="successContainer">

      <h1 className="successTitle">
        Payment Successful
      </h1>

      <div className="Itemstable">

        {
          cart.map((item) => (

            <div className="card" key={item.id}>

              <div className="row">
                <h3>Item Name</h3>
                <h2>{item.name}</h2>
              </div>

              <div className="row">
                <h3>Price</h3>
                <p> {item.price}</p>
              </div>

            </div>
          ))
        }

      </div>

      

    </div>
  );
};

export default Successpage;