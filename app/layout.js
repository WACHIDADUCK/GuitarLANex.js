import './styles/globals.css'

import { Inter } from 'next/font/google'
import Footer from "./components/footer"
import Header from "./components/header"
import { MyContextProvider } from './(rutas)/contexts/store'




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GuitarLA - Inicio',
  description: 'GuitarLA - Venta de guitarras y blog de música',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-ES">


      <body className={inter.className}>

        <MyContextProvider>
          <Header />

          {children}

          <Footer />
        </MyContextProvider>


      </body>



    </html>
  )
}
