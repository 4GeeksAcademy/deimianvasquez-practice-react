import React from "react"
import Greeting from "../component/Greeting.jsx"
import Navbar from "../component/Navbar.jsx"

const Todos = () => {
    return (
        <>
            <h1>Hola soy el todos</h1>
            <Greeting deimian="Hola que tal desde la ruta Todos" myClass={"text-danger"} />
        </>
    )
}


export default Todos