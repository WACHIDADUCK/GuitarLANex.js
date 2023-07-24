
import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/nosotros.module.css"

export const metadata = {
  title: 'GuitarLA - Nosotros',
  description: 'Sobre GuitarraLA, Tienda de musica',
}

export default function NosotrosPage() {
    return (
  
      <>
  
        <main className="contenedor">

          <h1 className="heading">Nosotros</h1>

          <div className={styles.contenido}>

            <Image src="/../public/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>

            <div>
              <p>El pasaje lit,ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            
            <p>"Sed ut peas et quasia sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci v</p>
            
            </div>
          </div>

        </main>
  

      </>
  
    )
  }
  