import React, {useState} from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import "./Formulario.css"

function Formulario ({cart, borrarProducto, setUser}) {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(usuario === "" || password === "" ){
            setError(true)
            return
        }
        setError(false)

        setUser([usuario])
    }
    
    return(
        <>
        <Header borrarProducto={borrarProducto} cartItems={cart}/>
            <h1>Login</h1>
            <form 
                className="formulario"
                onSubmit={handleSubmit}
                >
                <input 
                    type="text"
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                 />
                <input 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                
                />
                <button>Iniciar Sesión</button>

            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        <Footer />
        </>

    )
}

export default Formulario