import Image from 'next/image';
import styles from "../styles/carrito.module.css"

export default function Producto({producto}) {
    return (
        <div>
            <div key={producto.id} className={styles.producto}>
                <div>
                    <Image
                        src={producto.imagen}
                        alt={`Imagen guitarra ${producto.nombre}`}
                        width={250}
                        height={480}
                    />
                </div>
                <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                </div>
            </div>
        </div>
    )
}
