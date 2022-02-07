import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Container from '../container/Container'
import InicioProducto from '../container/InicoProducto'



export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Container />}/>
                    <Routes path="/InicoProduto" element={<InicioProducto/>}/>
                </Routes>

            </BrowserRouter>

      )
    }
}