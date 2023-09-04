import { useState } from "react";

export const Counter = () => {
  const [prod, setProd] = useState(0);

 

  const sumarProducto = () => {
    
    setProd (prod + 1);
  }
  const restarProducto = () => {
    if (prod === 0){
      
      
    }else{
      setProd (prod - 1);
    }
    
  }

  return(
    <div>
      {prod===0 ? null : <button className="botonProd" onClick={restarProducto}>-</button>}
      
      <h2>{prod}</h2>
      <button className="botonProd" onClick={sumarProducto}>+</button>
    </div>
  )
}
