import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import "./Contacto.css"

function Contacto ({cart, borrarProducto}) {
    
    
    
    return(
        <>
        
        <Header borrarProducto={borrarProducto} cartItems={cart}/>

            <div className="contacto-container">
            <h2>Contáctanos</h2>
            <p>¿Tienes alguna duda, sugerencia o comentario? Completa el siguiente formulario y nos pondremos en contacto contigo.</p>

        <form className="contacto-formulario">
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre" />

            <label>Email</label>
            <input type="email" placeholder="tuemail@ejemplo.com" />

            <label>Mensaje</label>
            <textarea placeholder="Escribe tu mensaje aquí..." rows="5"></textarea>

            <button type="submit">Enviar</button>
      </form>
    </div>
        <Footer />
        </>

    )
}

export default Contacto