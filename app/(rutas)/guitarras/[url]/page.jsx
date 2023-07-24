


import Image from 'next/image'
import styles from "@/app/styles/guitarras.module.css"
import AgregarCarrito from '../../../components/agregarCarrito'

async function getData(url) {

    const res = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)

    if (!res.ok) {
      throw new Error('Failed to fetch Guitarra')
    }
   
    return res.json()
  }

export default async function Guitarra({params: {url}}) {

    const guitarra = await getData(url)

    const {nombre , descrpicion, precio, imagen} = guitarra.data[0].attributes


  return (

    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.url}
        alt={`Imagen guitarra ${nombre}`}
        width={600}
        height={400}
      />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descrpicion}</p>
        <p className={styles.precio}>${precio}</p>


        <AgregarCarrito
        guitarra={guitarra}
        />
        {/* <form className={styles.formulario}>

          <label htmlFor="cantidad">Cantidad:</label>

          <select id="cantidad">
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

        </form> */}

      </div>




    </div>
  )
}
