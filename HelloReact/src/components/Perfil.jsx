import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Button } from 'react-bootstrap';

const Perfil = () => {
  let nome = "Leonardo Bravo Estácio";
  let imgUrl = "https://t4.ftcdn.net/jpg/03/08/54/37/360_F_308543787_DmPo1IELtKY9hG8E8GlW8KHEsRC7JiDN.jpg";
  let descricao = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ducimus dolorum esse repudiandae deleniti, quisquam officia dolore error. Sit rem laboriosam molestias maxime doloribus et unde saepe cumque molestiae explicabo!"; 
  return (
    <div>
      <h1>{nome}</h1>
      <img src={imgUrl} alt="" />
      <p>{descricao}</p>
      <button className='btn btn-primary'>Primary</button>
      <button className='btn btn-secondary'>Secundária</button>
      <button className='btn btn-success'>Sucesso</button>
      <button className='btn btn-warning'>Aviso</button>
      <button className='btn btn-danger'>Perigo</button>
      <button className='btn btn-info'>Informação</button>
      <a className='btn btn-dark' href="https://www.google.com.br" target='_Blank'>Google</a>
      <Button variant='secondary'>Primary React Bootstrap</Button>
    </div>
  )
}

export default Perfil
