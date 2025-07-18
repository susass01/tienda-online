import React, {useState, useEffect} from "react";
import "./styleFormularioProducto.css"

function FormularioEdicion ({ productoSeleccionado, onActualizar}){
    const [productos, setProductos] = useState(productoSeleccionado);

    useEffect(()=>{
        setProductos(productoSeleccionado)
    },[productoSeleccionado])
   
     const handleChance = (e) =>{
        const {name, value} = e.target
        setProductos({...productos, [name]: value})
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
                    value= {productos.id || ''} 
                    onChange= {handleChance}
                    readOnly
                    />
            </div>
               <div className="formGroup">
                <label>Nombre:</label>
                <input
                    type= "text" 
                    name = "name" 
                    value= {productos.name || ''} 
                    onChange= {handleChance}
                    readOnly
                    />
            </div>
              <div className="formGroup">
                <label>Precio:</label>
                <input
                    type= "number" 
                    name = "price" 
                    value= {productos.price || ''} 
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
                    value= {productos.stock || ''} 
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

export default FormularioEdicion