

/**---------- INDEX ----------*/

import Link from "next/link"
import styles from "@/app/styles/grid.module.css"
import Image from 'next/image'
import { getGuitarras } from "@/app/utils/serverGuitarras"
import { getBlogs } from "@/app/utils/serverBlog"
import ContendorGuitarras from "./components/contendorGuitarras"
import ContenedorBlog from "./components/contenedorBlog"
import Curso from "./components/curso"

export const metadata = {
  title: 'GuitarLA - Inicio',
  description: 'Sobre GuitarraLA, Tienda de musica',
}


export default async function Guitarra() {

  return (

    <main className="contenedor">

      <ContendorGuitarras />

      <Curso />

      <ContenedorBlog />



    </main>

  )
}
