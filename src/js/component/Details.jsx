import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const Details = () => {
    const { userId } = useParams()
    const navigate = useNavigate()

    const [person, setPerson] = useState({})
    const [counter, setCounter] = useState(0)

    const getPerson = async () => {
        try {
            let response = await fetch(`https://rickandmortyapi.com/api/character/${userId}`)

            if (response.ok) {
                let data = await response.json()
                setPerson(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPerson()
    }, [userId])


    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-7">
                        {
                            !person.name ?
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                :
                                <>
                                    <p>{person.name}</p>
                                    <p>{person.type}</p>
                                    <img src={person.image} alt={person.name} />
                                    <button onClick={() => navigate("/")} >Volver</button>
                                </>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Details