


import Image from 'next/image'
import styles from "@/app/styles/blog.module.css"
import { formatearFecha } from "@/app/utils/helpers"
import Link from 'next/link'

export const metadata = {
  title: 'GuitarLA - Blog',
  description: 'Sobre GuitarraLA, Tienda de musica',
}

async function getData(url) {

  const res = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)

  if (!res.ok) {
    throw new Error('Failed to fetch Guitarra')
  }

  return res.json()
}



export default async function Guitarra({ params: { url } }) {

  const { data: post } = await getData(url)




  const { titulo, contenido, publishedAt, imagen } = post[0].attributes



  return (

    <article className={`${styles.post} ${styles.espacio}`}>
      <Image src={imagen.data.attributes.url} alt={`imagen blog ${titulo}`} width={1000} height={400} />

      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.texto}>{contenido}</p>
        <Link className={styles.enlace} href={`/blog`}>Volver a Blog</Link>
      </div>

    </article>
  )
}
