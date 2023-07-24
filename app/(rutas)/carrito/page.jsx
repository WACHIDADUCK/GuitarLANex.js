
"use client"

import ListaCarrito from "../../components/listaCarrito"
import styles from "@/app/styles/carrito.module.css"


export default function Carrito() {



  return (
    <div>
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>

        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Artículo</h2>

          <ListaCarrito/>
            

          </div>

          <aside className={styles.resumen}>
            <h3>Resumen del Pedido</h3>
            <p>Total a pagar: </p>
          </aside>
        </div>
      </main>

    </div>
  )
}
