import React from "react";
import { Navigate } from "react-router-dom";

function RutasProtegidas ({isAuthenticated, children}) {
    console.log('¿Está autenticado?', isAuthenticated);
    if(!isAuthenticated){
        return <Navigate to='/login' replace />
    }
    return children
           
}

export default RutasProtegidas