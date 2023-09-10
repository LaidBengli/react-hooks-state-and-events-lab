import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass, setAppclass] = useState(true)
  //appClass = false ? "App dark" : "App light"
  
  function handlemode(){
   setAppclass(!appClass)
  }
  
  return (
    <div className={appClass ? "App dark " : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handlemode}>{appClass ? "Dark mode " : "Light mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
