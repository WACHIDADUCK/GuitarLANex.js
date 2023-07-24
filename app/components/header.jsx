
"use client"

import Image from "next/image"
import styles from "@/app/styles/header.module.css"
import {usePathname} from "next/navigation"
import Link from "next/link"


export default function Header() {
"use client"
    const router = usePathname()

    return (


        <header className={styles.header}>

            <div className={`contenedor ${styles.barra}`}>

                <Link href={"/"}>
                <Image src="/img/logo.svg" width={300} height={40} alt="imagen logotipo" />
                </Link>

                <nav className={styles.navegacion}>

                    <Link href={"/"} className={router === "/" ? styles.active : ""}>
                        Inicio
                    </Link>

                    <Link href={"/nosotros"} className={router === "/nosotros" ? styles.active : ""}>
                        Nosotros
                    </Link>

                    <Link href={"/blog"} className={router === "/blog" ? styles.active : ""}>
                        Blog
                    </Link>

                    <Link href={"/tienda"} className={router === "/tienda" ? styles.active : ""}>
                        Tienda
                    </Link>

                    <Link href={"/carrito"}>
                    <Image  src="/img/carrito.png" width={30} height={25} alt="imagen carrito" />
                    </Link>

                </nav>

            </div>

        </header>
    )
}
