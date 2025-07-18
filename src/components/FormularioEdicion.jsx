import React, {useState, useEffect} from "react";
import "./styleFormularioProducto.css"

function FormularioEdicion ({ producto, onActualizar}){
    const [productos, setProductos] = useState(producto);

    useEffect(()=>{
        setProductos(producto)
    },[producto])
   
    const handleChance = (e) =>{
        const {name, value, type} = e.target;
        const val = type === 'number' ? Number(value) : value;
        setProductos({...productos, [name]: val});
    };

    return(
        <form  className= "formularioProducto" onSubmit={(e)=>{
            e.preventDefault()
            onActualizar(productos)
        }}>
            <h2>Editar Producto</h2>
            <div className="formGroup">
                <label>ID:</label>
                <input
                    type= "number" 
                    name = "id" 
                    value= {productos.id !== undefined && productos.id !== null ? productos.id : ''} 
                    readOnly
                />
            </div>
            <div className="formGroup">
                <label>Nombre:</label>
                <input
                    type= "text" 
                    name = "name" 
                    value= {productos.name || ''} 
                    readOnly
                />
            </div>
            <div className="formGroup">
                <label>Precio:</label>
                <input
                    type= "number" 
                    name = "price" 
                    value= {productos.price !== undefined && productos.price !== null ? productos.price : ''} 
                    onChange= {handleChance}
                    required
                    min="0"
                />
            </div>
            <div className="formGroup">
                <label>Stock:</label>
                <input
                    type= "number" 
                    name = "stock" 
                    value= {productos.stock !== undefined && productos.stock !== null ? productos.stock : ''} 
                    onChange= {handleChance}
                    required
                />
            </div>
            <div className="formGroup">
                <label>Imagen URL:</label>
                <input
                    type= "text" 
                    name = "imagen" 
                    value= {productos.imagen || ''} 
                    onChange= {handleChance}
                    required
                />
            </div>
            <div className="formGroup">
                <label>Descripcion:</label>
                <input
                    type= "text" 
                    name = "description" 
                    value= {productos.description || ''} 
                    onChange= {handleChance}
                    required
                />
            </div>
            <button className="botonGuardar" type="submit">Actualizar Producto</button>
        </form>
    )
}

export default FormularioEdicion;