import React from 'react'
import Navbar from '../component/Navbar.jsx';
import Greeting from '../component/Greeting.jsx';


const Home = () => {
    return (
        <>
            <Navbar />

            <Greeting deimian="Hola estoy al inicio de la web" myClass={"my-h1"} />

            <h1>Hola desde el home componente de vista</h1>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, magnam facilis dolorum atque ratione,
                quaerat id et quod eveniet voluptatum aliquid cupiditate accusamus ex veritatis in. Dolor dolorum iusto rem.</p>

            <h1>Bien y tu</h1>

            <Greeting deimian="Hola estoy al final de la web" myClass={"text-success"} />
        </>
    )
}


export default Home;
