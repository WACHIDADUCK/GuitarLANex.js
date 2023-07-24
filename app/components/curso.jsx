

import styles from "@/app/styles/curso.module.css"
import {fetchCurso} from "@/app/utils/fetchCurso"
import Image from "next/image"


export default async function Curso() {

  const {data} = await fetchCurso()

    const {contenido, imagen, titulo} = data.attributes

    return (

        <>

            <section className={`${styles.curso} curso`}>

                
                <div className={styles.relative}>

                    <div className={styles.gradient}> </div>


                    <Image
                        className={styles.imagen}
                        src={imagen.data.attributes.url}
                        width={1200}
                        height={400}
                        alt="imagen logotipo" />


                    <div className={`contenedor ${styles.grid}`}>
                        <div className={styles.contenido}>
                            <h1 className={styles.heading}>{titulo}</h1>
                            <p>{contenido}</p>
                        </div>
                    </div>
                </div>



            </section>
        </>

    )
  }