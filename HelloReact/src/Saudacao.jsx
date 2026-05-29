import React from 'react'

const Saudacao = ( {nome, sobrenome} ) => {
    nome = nome.toUpperCase();
    return (
    <div>
        Olá, {nome} {sobrenome}!
    </div>
  )
}

export default Saudacao
