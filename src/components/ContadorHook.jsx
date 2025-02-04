//import { useState } from "react";
import { useCounter } from "./hooks/useCounter";

export const ContadorHook = () => {
  const { valor, acumular } = useCounter(100);
  return (
    <div>
      <h3>
        Contador Hook: <small>{valor}</small>
      </h3>
      <button className="Button1" onClick={() => acumular(1)}>
        Sumar (+1)
      </button>

      <button className="Button2" onClick={() => acumular(-1)}>
        Restar (-1)
      </button>
    </div>
  );
};
