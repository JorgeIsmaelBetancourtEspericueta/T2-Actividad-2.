import { useState } from "react";

export const useCounter = (inicial = 10) => {
    const [valor, setValor] = useState(inicial); 
    const acumular = (numero) => { 
        setValor(valor + numero); 
    } 
    return {
        valor,
        acumular
    }
}
