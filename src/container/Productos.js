import React, { Component } from 'react';
import styled from 'styled-components';
import { Combos } from '../components/Combos';
import { Sabores } from '../components/Sabores';
import { DivPadre } from './Inicio';


const DivHijo = styled.div`
  overflow-y: scroll;
  max-height: 550px;
  margin-top: 70%;
`

export default class Productos extends Component {
  render() {
    return (
        <DivPadre>
          <DivHijo>
            <Sabores/>
            <Combos/>
          </DivHijo>  
        </DivPadre>
    );
  }
}
