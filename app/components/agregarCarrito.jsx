
"use client";

import { MyContext } from '../(rutas)/contexts/store';
import { useContext } from 'react';
import { useState } from "react"
import styles from "@/app/styles/guitarras.module.css"

export default function AgregarCarrito({guitarra}) {

    

    const { nombre, descrpicion, precio, imagen } = guitarra.data[0].attributes
    const [cantidad, setCantidad] = useState(0)

    const { carrito, setCarrito, agregarCarrito } = useContext(MyContext)

    const handleSubmit = e => {
        e.preventDefault()

        if (cantidad < 1) {
            alert("Cantidad no válida")
            return
        }

        //Contruir un objeto
        const guitarraSeleccionada = {
            id: guitarra.data[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        // Pasando la información

        agregarCarrito(guitarraSeleccionada)
     
    }


  return (

 

    <form 
    onSubmit={handleSubmit}
    className={styles.formulario}>

      <label htmlFor="cantidad">Cantidad:</label>

      <select 
      id="cantidad"
      onChange={e => setCantidad(+e.target.value)}
      >
        <option value="0">-- Seleccione --</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <input
        type="submit"
        value="Agregar al carrito" />

    </form>


  )
}
