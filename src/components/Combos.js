import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Carrito } from './LogicaCarrito';


const Card = styled.div`
    width: 168px;
    height: 138px;
    background-color: white;
    margin-top: 2%;
    border-radius: 20px;
    padding: 16px;
    display: flex;
`

const DivContenedor = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    margin-left: 5%;    
`

const Button = styled.button`
    background-color: rgba(250, 74, 12, 1);
    border: none;
    width: 90%;
    height: 70px;
    color: white;
    margin-left: 5%;
    border-radius: 30px;
    font-size: 17px;
    margin-top: 40px;

`

export const Combos = () => {

    let categoria = sessionStorage.getItem('categoria')
    if (categoria === 'bebidas') {
        categoria = 'guajolotas'
    } else {
        categoria = 'bebidas'
    }

    const url = `https://guajolotasejercicio.herokuapp.com/${categoria}`

    const [combo, setCombo] = useState([])
    const [valor, setValor] = useState([])

    const navegar = useNavigate()

  
    useEffect(() => {
        getCombos();
    }, [])

 
    useEffect(() => {
        setValor(sessionStorage.getItem('preseleccion'));
    }, [valor])



    const getCombos = () => {

        axios.get(url)
            .then(response => {
                setCombo(response.data)
            })
            .catch(error => {
                console.log(error)
            })

    }

 
    const validacionCheck = (p) => {
       

        if (p.checked) {
            Carrito.momentaneoSecundario(combo.find( producto => producto.sabor === p.id), 'agrega') 
        } else {
            Carrito.momentaneoSecundario(combo.find( producto => producto.sabor === p.id), 'borra')
        }
        
        setValor(sessionStorage.getItem('preseleccion'));

    }

    let textoCombo = () => {
        if (categoria !== 'bebidas'){
            return (
               'torta'
            )
        } else return 'bebida'
    }

    


    return (
        <div>

            <form className='opciones' name='opciones' onChange={(e) => {
                validacionCheck(e.target);
            }}>
                <div style={{width: "90%", marginLeft: "5%"}}>
                    <h4 className='inter'>Guajolocombo</h4>
                    <p style={{fontSize: 15}}>Selecciona la {textoCombo()} que más te guste y disfruta de tu desayuno.</p>
                </div>
                <DivContenedor>
                    {
                        combo.map(p => (
                            <Card key={p.id}>
                                <div className="d-flex flex-column col-10">
                                    <img className='' src={p.imagen} width="64px" alt="" />
                                    <span className="inter mt-1 capitalizar" style={{ fontSize: "12px" }}>{p.sabor}</span>
                                    <span className="inter mt-1" style={{ fontSize: "12px", color: "rgba(250, 74, 12, 1)" }}>+ ${p.precio} MXN</span>
                                </div>
                                <input type="checkbox" className='checks col-2' name={p.categoria} id={p.sabor} value={p.precio}></input>
                            </Card>            
                        ))
                        
                    }
                </DivContenedor>
            </form>
            <Button onClick={()=> {Carrito.nuevo_producto(); navegar(`/carrito`)}}>Agregar al carrito <span id='valorActual' className='ms-4'>${valor}.00</span></Button>
        </div>
    );
};
