import React, { useState } from "react";
import './Cards.css'
const Cards = ({ items }) => {
  const [count,setCount]=useState(0);
  return (
    <div className="cards">
      <img src={items.image} alt={items.name} className="card-image" />

      <div className="card-content">
        <h3 className="card-title">{items.name}</h3>
        <p className="card-rating">{items.rating}</p>
        <p className="card-price">Price: {items.price}</p>
        <div className="addbuttons">
          {count===0 ? (
            <div className="add" onClick={()=>setCount(1)}>ADD</div>
          ):(
            <>
            <button onClick={()=>setCount(count-1)}>-</button>
            <span>{count}</span>
            <button onClick={()=>setCount(count+1)}>+</button>
            
            </>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Cards;