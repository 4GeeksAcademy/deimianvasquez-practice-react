import React, { useEffect, useState } from 'react'
import Greeting from '../component/Greeting.jsx';
import Card from '../component/Card.jsx';


const Home = () => {
    const [character, setCharacter] = useState([])


    // //then
    // const getCharacter = () => {
    //     fetch("https://rickandmortyapi.com/api/character")
    //         .then((response) => response.json())
    //         .then((data) => setCharacter(data.results))
    //         .catch((error) => console.log(error))
    // }


    //async await
    const getCharacter = async () => {
        try {
            let response = await fetch("https://rickandmortyapi.com/api/character")
            let data = await response.json()

            setCharacter(data.results)
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        getCharacter()
    }, [])

    return (
        <>
            <div className="container">
                <Greeting deimian="Hola estoy al inicio de la web" myClass={"my-h1"} />

                <h1>Hola desde el home componente de vista</h1>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, magnam facilis dolorum atque ratione,
                    quaerat id et quod eveniet voluptatum aliquid cupiditate accusamus ex veritatis in. Dolor dolorum iusto rem.</p>

                <h1>Bien y tu</h1>

                <Greeting deimian="Hola estoy al final de la web" myClass={"text-success"} />
                <Greeting deimian='Probando el despliegue en vercel' myClass={"text-primary"} />
            </div>

            <div className="container">
                <div className="row">
                    {character.map((item) => {
                        return (
                            <Card key={item.id} character={item} />
                        )
                    })}
                </div>
            </div>

            {/* <div className='container'>
                <div className="row">
                    {
                        arr.map((item, index) => {
                            return (
                                <Card key={index} item={item} />
                            )
                        })
                    }
                </div>
            </div> */}

        </>
    )
}


export default Home;
