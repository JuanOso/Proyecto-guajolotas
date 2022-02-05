import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Container from '../container/Inicio'
import Productos from '../container/Productos'


export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Container/>}/>
                    <Route path="/productos" element={<Productos/>}/>
                </Routes>

            </BrowserRouter>

      )
    }
}