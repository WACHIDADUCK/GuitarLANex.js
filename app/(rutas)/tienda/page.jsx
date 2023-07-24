

import Guitarra from "../../components/guitarra"
import styles from "../../styles/grid.module.css"
import {getGuitarras} from "../../utils/serverGuitarras"

export const metadata = {
  title: 'GuitarLA - Tienda',
  description: 'Blog de música, venta de guitarras, consejos, GuitarLA',
}


export default async function Tienda() {

  const {data: guitarras} = await getGuitarras()

    return (
  
      <>
  
        <main className="contenedor">

          <h1 className="heading">Nuestra Colección</h1>

          <div className={styles.grid}>
            {guitarras?.map(guitarra => (
              <Guitarra
                key={guitarra.id}
                guitarra={guitarra.attributes}
              />

            ))}

          </div>
      
     

        </main>
      </>
  
    )
  }
  
