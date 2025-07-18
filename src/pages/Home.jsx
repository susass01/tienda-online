import React, { useContext } from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import ProductList from "../components/ProductList";
import loading from "../assets/loading.gif";
import { CartContext } from "../context/CartContext";
import "./styleHome.css";
import { Helmet } from "react-helmet";


function Home ({agregarCarrito}) {
    const {cargando} = useContext(CartContext)

    return(
        <>
            <Helmet>
                <title>Inicio | Elektra</title>
                <meta name="description" content="Tienda de tecnología con lo último en innovación: laptops, gadgets, dispositivos inteligentes y más. ¡Explora el futuro hoy con Elektra!" />
                <meta name="keywords" content="tecnología, tienda online, laptops, gadgets, Elektra, smart devices" />
            </Helmet>
        <Header/>
        <main className="homeContainer">
            <h1 className="homeTitle">💻 Bienvenido a Elektra</h1>

            <p className="homeDescription">
                Explora el futuro hoy.
                En nuestra tienda encontrarás lo último en tecnología: dispositivos inteligentes, accesorios innovadores y herramientas diseñadas para hacer tu vida más fácil, rápida y conectada.
                🛒 Desde laptops de alto rendimiento hasta gadgets que marcan tendencia, descubre productos confiables, con garantía y al mejor precio.
                🚀 ¡Impulsa tu experiencia digital con nosotros!
            </p>

        {cargando ? (
        <img className="loadingGif" src={loading} alt="loading" />
        ) : (
            <ProductList />
        )}
        </main>
        
        
        <Footer />
        </>

    )
}

export default Home