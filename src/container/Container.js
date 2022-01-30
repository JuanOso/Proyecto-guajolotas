import React, { Component } from "react";
import styled from "styled-components";
// import Header from "../components/Header";
// import { Lista } from "../components/Lista";
import Slider from "../components/Slider";

const DivPadre = styled.div`
    
    border: 3px solid black;
    width: 390px;
    height: 844px;
` 

export default class Container extends Component  {
    render() {
        return (
            <DivPadre className="mt-5">
                <Slider />
                {/* <Header/>
                <Lista className="altura"/> */}
            </DivPadre>

            )
    }
}