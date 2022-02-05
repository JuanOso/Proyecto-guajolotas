import React, { useEffect, useState } from 'react';
import champurrado from '../assets/sabores/champurrado.png'
import arroz from '../assets/sabores/arroz con leche.png'
import chocolate from '../assets/sabores/chocolate.png'
import cafe from '../assets/sabores/cafe.png'
import verde from '../assets/sabores/verde.png'
import mole from '../assets/sabores/mole.png'
import rajas from '../assets/sabores/rajas.png'
import piña from '../assets/sabores/piña.png'
import pasas from '../assets/sabores/pasas.png'
import guayaba from '../assets/sabores/guayaba.png'
import styled from 'styled-components';


const Img = styled.img`
    width: 64px;
    height: 69px;
`

const DivContenedor =  styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 30px;
    width: 90%;
    margin-left: 5%;
`


export const Sabores =  () => {
    const categoria = sessionStorage.getItem('categoria')
    const sabor = sessionStorage.getItem('sabor')
    
  
    const renderizado = () => {
        if (categoria === 'guajolotas' || categoria === 'tamales'){
            return (<>
            <DivContenedor>
                <Img className='opacidad' id='verde' src={verde} alt=''/>
                <Img className='opacidad' id='mole' src={mole} alt=''/>
                <Img className='opacidad' id='rajas' src={rajas} alt=''/>
            </DivContenedor>
            <DivContenedor>    
                <Img className='opacidad' id='piña' src={piña} alt=''/>
                <Img className='opacidad' id='pasas' src={pasas} alt=''/>
                <Img className='opacidad' id='guayaba' src={guayaba} alt=''/>
            </DivContenedor>
            </> )
        } else return (<>
            <DivContenedor>
                <Img className='opacidad' id='champurrado' src={champurrado} alt=''/>
                <Img className='opacidad' id='arroz' src={arroz} alt=''/>
                <Img className='opacidad' id='chocolate' src={chocolate} alt=''/>
            </DivContenedor>
            <DivContenedor>    
                <Img className='opacidad' id='cafe' src={cafe} alt=''/>
            </DivContenedor>
            </>)
    }

    const [, setElegido] = useState([])
    

    useEffect(() => {
        selected()
    },)
    

    
    const selected = () => {
   
    let saborSeleccionado = document.getElementById(sabor)
        
    setElegido(saborSeleccionado.classList.remove('opacidad'))
    }
    
    
    return (
    <div>
        <h4 className='inter' style={{marginLeft: '5%'}}>Sabor</h4>
        {
            renderizado()
        }

    </div>
    );
  }


