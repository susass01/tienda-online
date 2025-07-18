import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import './styleEstaticos.css'; 
import Cart from "../Cart";
import { CartContext } from "../../context/CartContext";

function Header() {
  const { cart } = useContext(CartContext);
  const [isCartOpen, setCartOpen] = useState(false);

  const totalItemsInCart = Array.isArray(cart)
    ? cart.reduce((total, item) => total + item.quantity, 0)
    : 0;

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Elektra</NavLink>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink className="nav-link" to="/">Inicio</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/acercade">Sobre Nosotros</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/productos">Galería de Productos</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/admin"><i className="fa-solid fa-user-tie"></i> Admin</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/login"><i className="fa-solid fa-right-to-bracket"></i> Login</NavLink>
              </li>

              <li className="nav-item position-relative">
                <button className="btn btn-outline-dark" onClick={() => setCartOpen(true)}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
                {totalItemsInCart > 0 && (
                  <span className="cart-count badge bg-danger position-absolute top-0 start-100 translate-middle">
                    {totalItemsInCart}
                  </span>
                )}
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}

export default Header;
