import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Container from '../container/Inicio'
import Productos from '../container/Productos'
import VistaCarrito from '../container/VistaCarrito'


export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Container/>}/>
                    <Route path="/productos" element={<Productos/>}/>
                    <Route path="/carrito" element={<VistaCarrito/>}/>
                </Routes>

            </BrowserRouter>

      )
    }
}