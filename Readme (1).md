**\# Proyecto Tienda Elektra \- React**

**Descripción**

Este proyecto es una aplicación web de tienda online desarrollada con React. Permite a los usuarios navegar por un catálogo de productos tecnológicos, agregar productos a un carrito de compras, y finalizar la compra con notificaciones visuales.

Cuenta con autenticación simulada, administración de productos (panel admin), paginación, búsqueda, y mejoras en accesibilidad y SEO.

**\#\# Tecnologías utilizadas**

\- React 18  
\- React Router DOM  
\- Context API (CartContext, AuthContext, AdminContext)  
\- React Toastify (notificaciones)  
\- React Icons (iconos)  
\- Bootstrap 5 (estilos y diseño responsivo)  
\- FontAwesome (iconos)  
\- Vite (bundler y entorno de desarrollo)  
\- CSS personalizado para estilos específicos

\---

**\#\# Estructura del proyecto**

\- \`/src\`  
  \- \`/components\` \- Componentes estaticos  (Header, Footer) Componentes reutilizables(Cart, Detalles del Producto, ProductList, Formularios, etc.)  
  \- \`/context\` \- Contextos para manejo de estado global (Carrito, Autenticación, Administración)  
  \- \`/pages\` \- Páginas principales (Home, Galería de productos, Admin, AcercaDe, etc.)  
  \- \`/assets\` \- Recursos estáticos (imágenes, íconos, gif de carga)

\---

**\#\# Funcionalidades principales**

**Navegación:** Uso de React Router para cambiar entre páginas sin recargar.

### **Usuario Admin**

* **Agregar productos:** El administrador puede crear nuevos productos con nombre, descripción, precio y cantidad.

* **Editar productos:** Puede modificar los detalles de productos existentes.

* **Eliminar productos:** Puede eliminar productos del catálogo.

* **Gestión segura:** Acceso restringido mediante autenticación.

### **Usuario Cliente**

* **Navegar productos:** Puede ver el catálogo de productos disponibles.

* **Agregar al carrito:** Añadir productos al carrito de compra.

* **Eliminar productos del carrito:** Remover productos del carrito.

* **Finalizar compra:** Realizar la compra de los productos en el carrito.

**Notificaciones:** Uso de React Toastify para alertas de éxito y error.  
**Accesibilidad**: Uso de etiquetas \`aria-label\` en botones para mejorar experiencia de usuarios con lectores de pantalla.  
**SEO básico**: Modificación dinámica del \`\<title\>\` y \`\<meta\>\` usando React Helmet.  
**Diseño Responsivo**: Utilización de Bootstrap y CSS Grid/Flexbox para que la app se adapte a distintos tamaños de pantalla.

## **Credenciales para acceso**

**Usuario Admin:**  
Email: [admin@example.com](mailto:admin@example.com)  
Contraseña: admin123

**Usuario Cliente:**  
Email: client@example.com  
Contraseña: cliente123

