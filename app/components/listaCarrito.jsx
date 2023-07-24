
import Producto from "./producto"
import { useContext } from 'react';
import { MyContext } from '../(rutas)/contexts/store';
import Image from 'next/image';
import styles from "../styles/carrito.module.css"

export default function ListaCarrito() {

    const { carrito, setCarrito, agregarCarrito } = useContext(MyContext)
console.log(carrito)

    return (
        <>
            {carrito.length === 0 ? "Carrito Vacio" : (
                carrito.map(producto => {
                    <Producto
                        producto={producto}
                    />
                })
            )}
        </>
    )
}
