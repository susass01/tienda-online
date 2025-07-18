import React, { useContext } from "react";
import './styleCart.css';
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";

function Cart({ isOpen, onClose }) {
  const { cart, handleDeleteFromCart, clearCart } = useContext(CartContext);

  const totalCarrito = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

const handleFinalizarCompra = () => {
  if (cart.length === 0) {
    toast.error(
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <FaExclamationCircle color="#dc3545" size={20} />
    <span>El carrito está vacío. Agrega productos para finalizar la compra.</span>
  </div>,
  {
    position: "top-right",
    autoClose: 3000,
  }
);
    return;
  }

  toast.success(
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <FaCheckCircle color="#28a745" size={20} />
      <span>¡Compra realizada con éxito!</span>
    </div>,
    {
      position: "top-right",
      autoClose: 3000,
    }
  );

  clearCart();
  onClose();
};

  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2 style={{ color: "black" }}>Carrito de Compras</h2>
        <button onClick={onClose} className="close-button" aria-label="Cerrar carrito">X</button>
      </div>
      <div className="car-content">
        {cart.length === 0 ? (
          <p style={{ color: "black" }}>El carrito está vacío</p>
        ) : (
          <ul className="cart-item">
            {cart.map((item) => (
              <li key={item.id} style={{ color: "black", marginBottom: "10px" }}>
                <strong>{item.name}</strong>
                <br />
                Precio Unitario: ${item.price}
                <br />
                Cantidad: {item.quantity}
                <br />
                Subtotal: ${item.price * item.quantity}
                <br />
                <button
                  onClick={() => handleDeleteFromCart(item)}
                  aria-label={`Eliminar ${item.name} del carrito`}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        )}

        {cart.length > 0 && (
          <div style={{ color: "black", marginTop: "16px" }}>
            <hr />
            <h3>Total: ${totalCarrito.toFixed(2)}</h3>

            <button
              onClick={handleFinalizarCompra}
              className="btn btn-primary mt-3"
              aria-label="Finalizar compra"
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;