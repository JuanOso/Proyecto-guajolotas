import React from 'react';
import styled from 'styled-components';
import { Combos } from '../components/Combos';
import { Sabores } from '../components/Sabores';
import { DivPadre } from './Inicio';
import carritoLogo from '../assets/carritoLogo.png'
import { useNavigate } from 'react-router-dom';



const DivHijo = styled.div`
  overflow-y: scroll;
  max-height: 550px;
  margin-top: 50%;
`

const ImgCarrito = styled.img`
    width: 24px;
    height: 24px;
    margin-top: 35px;
    margin-left: 90%;
    cursor: pointer;
 `

 const Productos = () => {

  const navegar = useNavigate()


    return (
        <DivPadre>
          <ImgCarrito src={carritoLogo} alt="" onClick={() => navegar(`/carrito`)}/>
          <DivHijo>
            <Sabores/>
            <Combos/>
          </DivHijo>  
        </DivPadre>
    );
  }

  export default Productos
