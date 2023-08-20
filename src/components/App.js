import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  
  const [isOnLightMode, setIsOnLightMode]= useState(false);

  const appClass = isOnLightMode ? "App dark" : "App light"
  
  function hundleIsOnLightMode(){
    setIsOnLightMode(!isOnLightMode);
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={hundleIsOnLightMode}>
        {isOnLightMode ? "Light Mode":"Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App
