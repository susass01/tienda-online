import { useContext, useState } from "react";
import React from "react";
import "./styleProductos.css"
import { dispararSweetBasico } from "../assets/SweetAlert";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Productos ({producto, usuarioLogeado}) {
    
    
    const [cantidad, setCantidad] = useState(1);

    const{handleAddtoCart} = useContext(CartContext)

    const increase = () => setCantidad(prev => (prev < producto.stock ? prev + 1 :
        prev));
    
    const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

    const agregarAlCarrito = () => {
        dispararSweetBasico('¡Agregado!', 'Producto agregado al carrito', 'success');
  };

  const manejarAgregarCarrito = () => {
    agregarAlCarrito(); // Muestra el alert

    // Pasar cantidad seleccionada al producto
    const productoConCantidad = {
      ...producto,
      quantity: cantidad,
    };

    handleAddtoCart(productoConCantidad); // Llama a agregarCarrito con cantidad incluida
  };
        
    
    return(
        <section className="card">
            <div className="imagenContainer">
                <img src={producto.imagen} alt="" className="imagen" />
            </div>

            <h3 className="name">{producto.name}</h3>
            <p className="price">${producto.price}</p>
            <p className="description">{producto.description}</p>
            <p className="stock">{producto.stock}</p>

            <div className="cantidadContainer">
                <button className="qtyButton" onClick={decrease}>-</button>
                <span>{cantidad}</span>
                <span style={{ color: "black" }}> Total: ${cantidad * producto.price}</span>
                <button className="qtyButton" onClick={increase}>+</button>
            </div>

            <button onClick={(manejarAgregarCarrito)}>Agregar al Carrito</button>
            
            <Link to={`/productos/${producto.id}`}>Ver mas</Link>
        </section>

    )
}

export default Productos