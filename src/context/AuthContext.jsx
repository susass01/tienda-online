import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState ('')
        const [userRole, setUserRole] = useState(null);
        const [errors, setErrors] = useState({})
        const [isAuth, setIsAuth] = useState(false);
        const navigate = useNavigate()
        
        //const {setIsAuth} = useContext(CartContext)
    
        useEffect(() =>{
            const isAuthenticated = localStorage.getItem('isAuth') === 'true'
            const role = localStorage.getItem('userRole');
            if (isAuthenticated){
                setIsAuth(true);
                setUserRole(role);
                if(role==='admin'){
                    navigate('/admin');
                }else{
                    navigate('/')
                }
                
            }
        }, [])

        const logout = () => {
            setIsAuth(false);
            localStorage.removeItem('isAuth');
            localStorage.removeItem('userRole');
            navigate('/login');
            };

        const handleSubmit = async (e) =>{
            e.preventDefault()
            let validationErrors = {}
            if (!email) validationErrors.email = 'Email es requerido'
            if (!password) validationErrors.password = 'La contraseña es requerida'
            
            if(Object.keys(validationErrors).length > 0){
                setErrors(validationErrors)
                return
            }
            
        try{
    
            const res = await fetch('data/users.json')
            const users = await res.json()
    
            const foundUser = users.find((user) => user.email === email && user.password 
            === password)
    
            if (!foundUser) {
                setErrors({email: 'Credenciales invalidas'})
            
            }else{
                console.log('User role:', foundUser.role)

                if(foundUser.role === 'admin'){
                    setIsAuth(true);
                    setUserRole('admin');
                    localStorage.setItem('isAuth',true);
                    localStorage.setItem('userRole', 'admin');
                    navigate('/admin')
                }else{
                    setUserRole('cliente');
                    localStorage.setItem('userRole', 'cliente');
                    navigate('/')
                }
            }
        }catch(err){
            console.error('Error fetching user:', err)
            setErrors({email: 'Algo salio mal. Por favor, inténtalo mas tarde'})
        }
    };
       return (
        <AuthContext.Provider value = {{email, setEmail, password, setPassword,
            handleSubmit, errors, isAuth, setIsAuth, logout, userRole, setUserRole}}>
                {children}
            </AuthContext.Provider>

       )
}

export const useAuth = () => useContext(AuthContext);