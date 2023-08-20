import React, { useState } from "react";

function Item({ name, category }) {
  const  [isOnCart, setIsOnCart] = useState(false)

  const hundlesIsOnCart = () => {
    setIsOnCart(!isOnCart);
  };



  return (
    <li className={isOnCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"
      onClick={hundlesIsOnCart}>
        {isOnCart ? "Remove From Cart" : "Add to Cart"}
        </button>
    </li>
  );
}

export default Item
