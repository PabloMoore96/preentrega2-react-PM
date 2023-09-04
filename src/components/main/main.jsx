import { useState } from "react";
import "./mstyles.css";

function ItemListContainer({ greetings }) {
  const [saludo, setSaludo] = useState(greetings);

  function changeGreeting() {
    setSaludo("Hola Gente, esta es mi tienda online en React :D");
  }

  return (
    <div className="item-list-container">
      <Content saludo={saludo} changeGreeting={changeGreeting} />
    </div>
  );
}

function Content({ saludo, changeGreeting }) {
  return (
    <>
      <p>{saludo}</p>
      <button onClick={changeGreeting}>Press me</button>
    </>
  );
}

export default ItemListContainer;