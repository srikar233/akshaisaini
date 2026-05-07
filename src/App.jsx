import React, { useEffect, useState } from "react";
import logo from "./assets/fooddeliverylogo.jpg";
import Cards from "./Cards";
import "./Components/Category.css";
import { FaCartArrowDown } from "react-icons/fa6";

const App = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4436254&lng=78.3799564&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log("Swiggy API Data:", json);

      const imgData =
        json.data.cards[0].card.card.imageGridCards.info;

      setImage(imgData);
    } catch (error) {
      console.log("Error swiggy data:", error);
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="title">Hungry-Hunt</div>
        <FaCartArrowDown className="reviewcarticon" />
        <ul className="list-items">
          <li>Home</li>
          <li>News</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </div>

      <div className="categoryandsearch">
        <div>All Items</div>

        <div>
          <ul className="category">
            <li>Biryani</li>
            <li>Pizza</li>
            <li>Gluten Free Pizza</li>
            <li>Desserts</li>
            <li>Drinks</li>
          </ul>
        </div>
      </div>

      <div className="cards-area">
        {image.map((item) => (
          <Cards
            key={item.id}
            items={{
              name: "Food-Item",
              rating: "4.5 ⭐",
              price: "$10",
              image: `https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default App;