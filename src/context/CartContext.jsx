import { createContext, useContext, useState, useEffect} from "react";
import { dispararSweetBasico } from "../assets/SweetAlert";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  //Estado del carrito
   
  const [cart, setCart] = useState([])
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  const [busqueda, setBusqueda] = useState("")

  //Estado de usuario y admin
    const [isAuthenticated, setIsAuth] = useState(false)

    function manejarAdmin() {
      setAdminLogeado(!adminLogeado)
    }
  
    function manejarUser(){
      setUsuarioLogeado(!usuarioLogeado)
    }

      useEffect(() => {
        const auth = localStorage.getItem("isAuth");
        if (auth === "true") {
        setIsAuth(true);
        }
      }, []);

      // Guardar estado de autenticación en localStorage cada vez que cambie
      useEffect(() => {
      localStorage.setItem("isAuth", isAuthenticated);
      }, [isAuthenticated]);

  
  //Cargar productos desde la API
  useEffect(()=>{
    fetch('https://68100d9027f2fdac24101f83.mockapi.io/productos')
    .then(respuesta => respuesta.json())
    .then(datos => {
      setTimeout(()=>{
        setProductos(datos)
        setCargando(false)
      },2000) //retardo
    })
    .catch(error => {
      console.log('Error',error)
      setCargando(false)
      setError(true)
    })

  },[])

  const productosFiltrados = productos.filter((producto)=> producto?.name.
  toLowerCase().includes(busqueda.toLocaleLowerCase()))

  //Agregar productos al carrito
  function handleAddtoCart (product) {
    const productInCart = cart.find((item) => item.id === product.id);
    const cantidadAgregada = product.quantity || 1;
    
    //Verificar stock disponible
    if (product.stock === 0){
      dispararSweetBasico("Producto sin stock disponible.");
      return;
    }

    if (productInCart){
      const nuevaCantidad = productInCart.quantity + cantidadAgregada;

      if (nuevaCantidad > product.stock){
        dispararSweetBasico("No podés agregar más de lo disponible en stock.");
        return;
      }


      setCart(
        cart.map((item) => 
        item.id === product.id 
          ? {...item,quantity: nuevaCantidad} 
          : item
        )
      );
      }else{
        if (cantidadAgregada > product.stock){
          dispararSweetBasico("La cantidad excede el stock disponible.");
          return;
        }

        setCart([...cart, {...product,quantity: cantidadAgregada}]);
      }
      };

    //Eliminar productos del carrito
    function handleDeleteFromCart (product){
      setCart (prevCart => {
        return prevCart.map(item => {
          if (item.id === product.id){
            if (item.quantity > 1) {
              return {...item, quantity: item.quantity - 1};
            }else{
              return null; // si quantity es 1, marcamos para eliminar
            }
          }else{
            return item; // si no es el producto lo dejamos igual
          }
        }).filter(item => item !== null); // Quitamos los productos nulos
      });
    };
  
    //Funcion para limpiar el carrito
    const clearCart = () => {
    setCart([]);
  };

    return(
        <CartContext.Provider value = {{
            cart, productos, busqueda, setBusqueda, productosFiltrados, cargando, error, handleAddtoCart, clearCart,
            handleDeleteFromCart, isAuthenticated, setIsAuth
        }}>
            {children}
        </CartContext.Provider>    
    )
}