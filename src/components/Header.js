import React from "react";
import logo from '../assets/logo.png'
import carritoLogo from '../assets/carritoLogo.png'
/* import vector from '../assets/vector.png' */
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const ImgLogo = styled.img`
    width: 64px;
    height: 64px;
    margin-top: 20px;

`


const ImgCarrito = styled.img`
    width: 24px;
    height: 24px;
    margin-top: 35px;
    margin-right: 25px;
    cursor: pointer;
    
`
const Buscador = styled.input`
    width: 90%;
    height: 55px;
    border-radius: 30px;
    border: none;
    background: #E7E7E7;
`



export const Header = () => {

    const navegar = useNavigate()

        return (
            <div>
                <div className="d-flex justify-content-between">
                    <ImgLogo src={logo} className="ms-4" alt="" />
                    <ImgCarrito src={carritoLogo} alt="" onClick={() => navegar(`/carrito`)}/>
                </div>
                <h1 className="ms-4 mt-4 font-inter">Nada como una Guajolota para empezar el día</h1>
                <div className="d-flex justify-content-center align-items-center">
                    <Buscador className="buscador ps-4 pe-5 mt-3" placeholder="sabor de guajolota, bebida, tamales..."></Buscador>
                    <i className="fa-solid fa-magnifying-glass lupa"></i>
                </div> 
               
            </div>
        )
    }



                /* <div className="d-flex justify-content-center">
                    <Buscador className="buscador px-4 mt-3" placeholder="sabor de guajolota, bebida, tamales..."></Buscador>
                </div> */

                /* <div className="input-group mb-3 col-6">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                </div>
                <input type="text" className="form-control buscador col-5" placeholder="sabor de guajolota, bebida, tamales..." aria-label="Username" aria-describedby="basic-addon1"></input>
            </div> */