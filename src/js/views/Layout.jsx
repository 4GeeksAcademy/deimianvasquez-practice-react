import React from 'react'
import Home from './Home.jsx'
import Todos from "./Todos.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../component/Navbar.jsx'
import Contact from './Contact.jsx'
import Details from '../component/Details.jsx'


function Layout() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Todos />} path="/lista-tareas" />
                    <Route element={<Contact />} path="/contacto" />
                    <Route element={<Details />} path="/personaje/:userId" />
                </Routes>
                <h1>Hola soy el footer</h1>
            </BrowserRouter>

        </>
    )
}

export default Layout