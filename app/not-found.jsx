import Link from 'next/link'
import Header from "./components/header"
import Footer from "./components/footer"

export const metadata = {
  title: 'Pagina no encontrada',
  description: 'Pagina no encontrada',
}

export default function NotFound() {
  return (
    <div>
      <Header />

      <p className='error'>Pagina No encontrada</p>
      <Link href="/" className='error-enlace'>Ir a Inicio</Link>

      <Footer />

    </div>
  )
}