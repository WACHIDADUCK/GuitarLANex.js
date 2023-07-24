
'use client';
// contexts/MyContext.js
import { createContext, useState ,useContext } from 'react';


//Exportas el componente para que los compoennetes puedan acceder
export const MyContext = createContext();




//Encapsulo al componente y a sus hijos

export const MyContextProvider = ({ children }) => {


  //Declaras las variables, funciones.... que quieras compartir

  const [carrito, setCarrito] = useState([]);



  const agregarCarrito = guitarra => {
    // Comprobar si la guitarra ya esta en el carrito...
    if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
      // Iterar para actualizar la cantidad
      const carritoActualizado = carrito.map(guitarraState => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      // Se asigna al array
      setCarrito([...carritoActualizado]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    } else {
      // En caso de que el articulo no exista, es nuevo y se agrega
      setCarrito([...carrito, guitarra]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter(producto => producto.id != id)
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map(guitarraState => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = parseInt(guitarra.cantidad)
      }
      return guitarraState
    })
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  }



  //RENDERIZADO EN LOS CHILDNRES
  return (
    <MyContext.Provider value={{ carrito, setCarrito, agregarCarrito, eliminarProducto, actualizarCantidad}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;