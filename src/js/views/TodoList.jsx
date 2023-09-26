import React, { useEffect, useState } from "react";

let initialTarea = {
    label: "",
    done: false
}
let urlBase = "https://playground.4geeks.com/apis/fake/todos/user/deimian"


//create your first component
const TodoList = () => {

    const [tarea, setTarea] = useState(initialTarea)
    const [tareaLista, setTareaLista] = useState([])
    const [error, setError] = useState(false)


    const getTask = async () => {

        try {
            let response = await fetch(urlBase)
            let data = await response.json()


            if (response.ok) {
                setTareaLista(data)
            }
            if (response.status == 404) {
                createUser()
            }

        } catch (error) {
            console.log(error)
        }
    }


    const createUser = async () => {
        try {
            //cuando se hace metodo post, tiene dos parametros, 
            //1.- La url para consultar
            //2.- El objeto con los detalles

            let response = await fetch(urlBase, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify([])
            })

            if (response.ok) {
                getTask()
            }
            console.log("error revisa")

        } catch (error) {
            console.log()
        }
    }



    const handleChange = (event) => {
        setTarea({
            label: event.target.value,
            done: false
        })
    }


    const handleSaveTask = async (event) => {
        if (event.key === "Enter") {
            if (tarea.label.trim() !== "") {
                // setTareaLista([...tareaLista, tarea])
                // setTarea(initialTarea)
                // setError(false)
                try {
                    let response = await fetch(urlBase, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify([...tareaLista, tarea])
                    })

                    if (response.ok) {
                        getTask()
                        setTarea(initialTarea)
                        setError(false)
                    }

                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setError(true)
                console.log("Debes introducir una tarea valida")
            }
        }
    }

    // const deleteTask = async (id) => {
    //     let newArr = tareaLista.filter((item, index) => index != id)
    //     try {
    //         let response = await fetch(urlBase, {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(newArr)
    //         })

    //         if (response.ok) {
    //             getTask()
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }

    const deleteTask = async (id) => {
        let result = tareaLista.map((item, index) => {
            if (index == id) {
                if (item.done) {
                    item.done = false
                } else {
                    item.done = true
                }
            }
            return item
        })


        try {
            let response = await fetch(urlBase, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(result)
            })

            if (response.ok) {
                getTask()
            }
        } catch (error) {
            console.log(error)
        }

    }


    async function deleteAll() {
        try {
            let response = await fetch(urlBase, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (response.ok) {
                getTask()
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getTask()
    }, [])


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <h1>Lista de Tareas</h1>
                    {error ? <p className="alert alert-danger">Todos los campos son obligatorios</p> : ""}
                    <form onSubmit={(event) => event.preventDefault()}>
                        <input
                            type="text"
                            placeholder="Escribe una tarea"
                            className="form-control"
                            value={tarea.label}
                            name="label"
                            onChange={handleChange}
                            onKeyDown={handleSaveTask}
                        >
                        </input>
                    </form>
                    <ol>
                        {tareaLista.map((item, index) => {
                            return <li key={index} className={item.done ? "text-success incorrecto" : "text-danger"} onClick={() => deleteTask(index)}>{item.label}</li>

                        })}
                    </ol>
                    <button onClick={() => deleteAll()}>Delete All</button>
                </div>
            </div>

        </div>
    );
};

export default TodoList;

// 1.- Traese todas las tareas guardadas en db(API) --> no existe estatus 404, ready
// 2.- Crear un usario---> ready
// 3.- Guarda tareas --->  ready
// 4.- Borrar tareas cuando le doy click 
// 5.- Eliminar usuario con todas las tareas

// API 