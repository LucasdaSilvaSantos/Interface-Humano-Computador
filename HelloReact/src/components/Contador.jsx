import React, { useState } from 'react'

const Contador = () => {
    const [valor, setValor] = useState(0);
    const diminuir = () => {
        setValor(valor - 1);
        console.log(valor);
    }
    const incrementar = () => {
        setValor(valor + 1);
        console.log(valor);
    }
    return (
        <div>
            <button onClick={diminuir}>-</button>
            <span>{valor}</span>
            <button onClick={incrementar}>+</button>
        </div>
    )
}

export default Contador
