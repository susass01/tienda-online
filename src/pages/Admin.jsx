import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import FormularioProducto from "../components/FormularioProducto";
import FormularioEdicion from "../components/FormularioEdicion";
import "./styleAdmin.css";
import { useAuth } from "../context/AuthContext";

function Admin() {
  const { setIsAuth } = useContext(CartContext);
  const { userRole } = useAuth();
  const {
    productos,
    agregarProducto,
    eliminarProducto,
    actualizarProducto,
  } = useContext(AdminContext);

  const [open, setOpen] = useState(false);
  const [openEditor, setOpenEditor] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null);
  const navigate = useNavigate();

   if (userRole !== 'admin') {
  return (
    <div className="no-access">
      <h2>Acceso denegado</h2>
      <p>No tienes permisos para acceder a esta sección.</p>
    </div>
  );
}
  return (
    <>
      <Helmet>
        <title>Panel Administrativo | Mi Tienda</title>
        <meta
          name="description"
          content="Administra productos, precios e inventario de la tienda."
        />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="container">
        <ul className="nav">
          <li className="navItem">
            <button
              className="navButton"
              onClick={() => {
                setIsAuth(false);
                localStorage.removeItem("isAuth");
                navigate("/");
              }}
              aria-label="Cerrar sesión del administrador"
            >
              <i className="fa-solid fa-right-from-bracket me-1"></i> Cerrar sesión
            </button>
          </li>
        </ul>

        <h2 className="title">Panel de Administración</h2>

        <ul className="list">
          {productos.map((product) => (
            <li className="listItem" key={product.id}>
              <img
                className="listItemImage"
                src={product.imagen}
                alt={`Imagen del producto ${product.name}`}
              />
              <h4>{product.name}</h4>
              <p>Precio: ${product.price}</p>
              <div>
                <button
                  className="editButton"
                  onClick={() => {
                    setOpenEditor(true);
                    setSeleccionado(product);
                    setOpen(false);
                  }}
                  aria-label={`Editar producto ${product.name}`}
                >
                  Editar
                </button>
                <button
                  className="deleteButton"
                  onClick={() => eliminarProducto(product.id)}
                  aria-label={`Eliminar producto ${product.name}`}
                >
                  Eliminar
                </button>
                
              </div>
            </li>
          ))}
        </ul>
        <button
          className="addProductBtn"
          onClick={() => {setOpen(true);
            setOpenEditor(false);
          }}
          aria-label="Agregar nuevo producto"
        >
          Agregar Producto Nuevo
        </button>

        

        {open && (
          <FormularioProducto
            onAgregar={agregarProducto}
            cerrar={() => setOpen(false)}
          />
        )}

        {openEditor && (
          <FormularioEdicion
            producto={seleccionado}
            onActualizar={actualizarProducto}
            cerrar={() => setOpenEditor(false)}
          />
        )}

      </div>
    </>
  );
}

export default Admin;