import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RutaProtegidaAdmin = ({ children }) => {
  const { isAuth } = useAuth();
  const userRole = localStorage.getItem("userRole");

  if (!isAuth || userRole !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RutaProtegidaAdmin;