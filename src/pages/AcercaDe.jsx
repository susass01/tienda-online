import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import { Helmet } from "react-helmet";

function AcercaDe() {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | Electra</title>
        <meta
          name="description"
          content="Conocé más sobre Electra, la tienda de tecnología que te acerca productos innovadores, atención personalizada y envíos rápidos."
        />
        <meta name="keywords" content="Electra, sobre nosotros, tecnología, tienda online, gadgets, innovación" />
      </Helmet>

      <Header />

      <main className="container my-5">
        <h1 className="text-center text-success mb-4" aria-label="Título principal: Sobre Nosotros">Sobre Nosotros</h1>
        <p
          className="fs-5"
          style={{ whiteSpace: "pre-line", color: "#333" }}
          aria-label="Descripción sobre Electra"
        >
          En Electra, creemos que la tecnología debe estar al alcance de todos. Somos una tienda especializada en ofrecer productos innovadores, prácticos y de alta calidad para mejorar tu día a día.

          Desde nuestros inicios, nos hemos enfocado en brindar una experiencia de compra confiable, con atención personalizada, envíos rápidos y un catálogo cuidadosamente seleccionado que incluye lo último en gadgets, dispositivos inteligentes, accesorios y mucho más.

          Nuestro equipo está formado por apasionados de la tecnología que buscan constantemente nuevas tendencias para que siempre estés un paso adelante. Ya sea que busques potenciar tu trabajo, tu hogar o tu entretenimiento, aquí encontrarás las herramientas que necesitas.

          Gracias por confiar en nosotros y ser parte de esta comunidad conectada con el futuro.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default AcercaDe;