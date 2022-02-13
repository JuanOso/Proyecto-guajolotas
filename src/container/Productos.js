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
    cursor: pointer;
 `

 const DivH = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 10%;
  width: 90%;
  margin-left:5%;
 
 `

 const Productos = () => {

  const navegar = useNavigate()


    return (
        <DivPadre>
          
          <DivH>
            <i className="fas fa-chevron-left" style={{ cursor: "pointer" }} onClick={() => navegar(`/`)}></i>
            <ImgCarrito src={carritoLogo} alt="" onClick={() => navegar(`/carrito`)}/>
          </DivH>
          <DivHijo>
            <Sabores/>
            <Combos/>
          </DivHijo>  
        </DivPadre>
    );
  }

  export default Productos
