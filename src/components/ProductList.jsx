import React, { useContext, useState } from "react";
import Productos from "./Productos";
import { CartContext } from "../context/CartContext";
import "./styleProductList.css";

function ProductList({ agregarCarrito, usuarioLogeado }) {
  const { productosFiltrados, busqueda, setBusqueda } = useContext(CartContext);

  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 6;

  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  const inicio = (paginaActual - 1) * productosPorPagina;
  const productosAMostrar = productosFiltrados.slice(inicio, inicio + productosPorPagina);

  const siguientePagina = () => {
    if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1);
  };

  const paginaAnterior = () => {
    if (paginaActual > 1) setPaginaActual(paginaActual - 1);
  };

  return (
    <div className="product-list-container">
      <h2 className="titulo-galeria">🛍️ Galería de Productos</h2>

      <input
        type="text"
        className="input-busqueda"
        placeholder="🔍 Buscar productos..."
        value={busqueda}
        onChange={(e) => {
          setBusqueda(e.target.value);
          setPaginaActual(1); // Reiniciar página al filtrar
        }}
      />

      <div className="product-grid">
        {productosAMostrar.map((producto) => (
          <Productos
            key={producto.id}
            producto={producto}
            agregarCarrito={agregarCarrito}
          />
        ))}
      </div>

      <div className="paginacion">
        <button onClick={paginaAnterior} disabled={paginaActual === 1}>Anterior</button>
        <span>{paginaActual} / {totalPaginas}</span>
        <button onClick={siguientePagina} disabled={paginaActual === totalPaginas}>Siguiente</button>
      </div>
    </div>
  );
}

export default ProductList;