import React, {useState} from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import "./styleFormularioProducto.css"


function FormularioProducto ({onAgregar}) {
    const [productos, setProductos] = useState({
        name: '',
        price: '',
        stock: '',
        imagen: '',
        description: ''

    })

    const[errores, setErrores] = useState({})

    const handleChance = (e) =>{
        const {name, value} = e.target
        setProductos({...productos, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        onAgregar(productos)
        setProductos({
        name: '',
        price: '',
        stock: '',
        imagen: '',
        description: '',
        })  //Limpia el formulario
    }
    
    return (
        <form  className= "formularioProducto" onSubmit={handleSubmit}>
            <h2>Agregar Producto</h2>
            <div className="formGroup">
                <label>Nombre del producto:</label>
                <input
                    type= "text" name = "name" value= {productos.name || ''} onChange=
                    {handleChance} required />
                    {errores.name && <p style={{color: 'red'}}>
                        {errores.name}</p>}
            </div>
            <div className="formGroup">
             <label>Precio:</label>
                <input
                    type= "number" name = "price" value= {productos.price || ''} onChange=
                    {handleChance} required 
                    min="0" />
                    {errores.price && <p style={{color: 'red'}}>
                        {errores.price}</p>}
            </div>
             <div className="formGroup">
             <label>Stock:</label>
                <input
                    type= "number" name = "stock" value= {productos.stock || ''} onChange=
                    {handleChance} required 
                    min="0" />
                    {errores.stock && <p style={{color: 'red'}}>
                        {errores.stock}</p>}
            </div>
              <div className="formGroup">
                <label>Imagen URL:</label>
                <input type="text"
                    name = "imagen" value= {productos.imagen || ''} onChange=
                    {handleChance} required />
                    {errores.imagen && <p style={{color: 'red'}}>
                        {errores.imagen}</p>}
            </div>

             <div className="formGroup">
                <label>Descripcion:</label>
                <textarea
                    name = "description" value= {productos.description || ''} onChange=
                    {handleChance} required />
                    {errores.description && <p style={{color: 'red'}}>
                        {errores.description}</p>}
            </div>
            <button className="botonGuardar" type="submit">Agregar Producto</button>
        </form>
    )
    

    
}

export default FormularioProducto