import { Children, createContext, useEffect, useState } from "react";
import { dispararSweetBasico, dispararSweetConfirmacion } from "../assets/SweetAlert";
import { useAuth } from "./AuthContext";

export const AdminContext = createContext()


export const AdminProvider = ({children}) => {
    const [productos, setProductos] = useState ([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false)
    const [seleccionado, setSeleccionado] = useState(null);
    const [openEditor, setOpenEditor] = useState(false);
    const { logout } = useAuth();
    const apiUrl = 'https://68100d9027f2fdac24101f83.mockapi.io/productos/'

    useEffect(() =>{
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data)=> {
                setTimeout(()=>{
                    setProductos(data);
                    setLoading(false);
                }, 2000);
            })
            .catch ((error) =>{
                console.error("Error fetching data:", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    const cargarProductos = async() => {
        try{
            const res = await fetch(apiUrl)
            const data = await res.json()
            setProductos(data)
        }catch(error){
            console.log('Error al cargar productos')
        }
    }

    const agregarProducto = async(producto) => {
        try{
            const respuesta = await fetch('https://68100d9027f2fdac24101f83.mockapi.io/productos'
                ,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
        })
        
        if(!respuesta.ok){
            throw new Error('Error al agregar producto')
        }
        const data = await respuesta.json()
        dispararSweetBasico('Producto agregado correctamente')
        cargarProductos() 
        }catch(error){
            console.log(error.message);

        }
    }

    const actualizarProducto = async(producto) => {
        try{
            const respuesta = await fetch (`${apiUrl}/${producto.id}`,
                {method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
                })
                if(!respuesta.ok) throw Error('Error al actualizar el producto')
                    const data = await respuesta.json()
                dispararSweetBasico('Producto actualizado correctamente')
                setOpenEditor(false)
                setSeleccionado(null)
                cargarProductos()
            }catch(error){
                console.log(error.message);
        }
    }

    const eliminarProducto = async (id) => {
        const confirmar = await dispararSweetConfirmacion(
    '¿Estás seguro?',
    'Esta acción no se puede deshacer'
  );
        if(confirmar){
            try{
                const respuesta = await fetch(`https://68100d9027f2fdac24101f83.mockapi.io/productos/${id}`,{
                    method:'DELETE',

                })
                if(!respuesta.ok) throw Error('Error al eliminar')
                    dispararSweetBasico('Prducto Eliminado Correctamente')
                    cargarProductos()
            }catch(error){
                dispararSweetBasico('Hubo un problema al eliminar el producto')
            }
        }
    }


    return(
        <AdminContext.Provider value={{
            productos,
            loading,
            open,
            setOpen,
            openEditor,
            setOpenEditor,
            seleccionado,
            setSeleccionado,
            agregarProducto,
            actualizarProducto,
            eliminarProducto,
        }}>
            {children}
        </AdminContext.Provider>
    )

}