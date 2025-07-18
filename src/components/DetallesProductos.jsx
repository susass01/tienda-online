import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./estaticos/Header";
import Footer from "./estaticos/Footer";
import { CartContext } from "../context/CartContext";
import './styleProductos.css';

function DetallesProductos() {
  const { productos } = useContext(CartContext);
  const { id } = useParams();

  const product = productos.find((producto) => producto.id == id);

  if (!product) {
    return (
      <div className="container text-center py-5">
        <h1 className="text-warning">Detalle del producto: {id}</h1>
        <p className="fs-5">Producto No Encontrado</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card text-center">
              
              <div className="imagenContainer">
                <img src={product.imagen} alt={product.name} className="imagen" />
              </div>

              <h1 className="name">{product.name}</h1>

              <p className="description">{product.description}</p>

              <p className="price">Precio: ${product.price}</p>

              <details className="mb-3">
                <summary className="fw-bold text-dark">Detalles del Producto</summary>
                <ul className="text-start mt-2 text-secondary ps-4">
                  <li>Marca: Acme</li>
                  <li>Categoría: {product.category}</li>
                  <li>SKU: {product.id * 1250}</li>
                  <li>Fecha de lanzamiento: {new Date().toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}</li>
                </ul>
              </details>

              <p className="stock">Stock: {product.stock}</p>

              {/* Botón agregar al carrito: ya lo tenés, lo colocamos aquí si querés */}
              {/* <AgregarAlCarrito producto={product} /> */}

              <Link
                to="/"
                className="btn btn-primary mt-3 px-4 fw-bold"
              >
                Volver a Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default DetallesProductos;