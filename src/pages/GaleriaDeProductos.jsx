import React, { useContext } from 'react';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import ProductList from '../components/ProductList';
import loading from "../assets/loading.gif";
import { CartContext } from '../context/CartContext';
import { Helmet } from 'react-helmet';

function GaleriaDeProductos() {
  const {
    cart,
    productos,
    cargando,
    handleAddtoCart,
    handleDeleteFromCart
  } = useContext(CartContext);

  return (
    <>
      <Helmet>
        <title>Galería de Productos | Electra</title>
        <meta
          name="description"
          content="Explora nuestra galería de productos tecnológicos: gadgets, dispositivos inteligentes, accesorios y mucho más."
        />
        <meta name="keywords" content="Electra, productos, tienda tecnología, galería, gadgets, comprar" />
      </Helmet>

      <Header borrarProducto={handleDeleteFromCart} cartItems={cart} />

      <main aria-label="Sección principal de galería de productos" className="container my-4">
        {cargando ? (
          <img src={loading} alt="Cargando productos" />
        ) : (
          <ProductList
            agregarCarrito={handleAddtoCart}
            productos={productos}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default GaleriaDeProductos;