import React from 'react'
import { Alerts } from './components/Alerts'
import { ListItem } from './ListItem'

export const Prueba = () => {

    const items = [
        "Hola"
    ]

    return (
        <div className="container mt-3">
            <h1>Prueba</h1>
            <hr></hr>
            <ol>
                {
                    items.map(i => {
                        return <ListItem key={i} itemsDeZompo={i}/>;
                    })
                }
            </ol>
            <hr></hr>
            <h2>Segundo titulo</h2>
            <ul>
                <ListItem itemsDeZompo="Hola como va" />
            </ul>
            <hr></hr>
            <h3>Tercer titulo</h3>
            <Alerts msg="Mensaje" type={items.length>=2 ? "warning" : "danger"}/>
        </div>
    )
}
