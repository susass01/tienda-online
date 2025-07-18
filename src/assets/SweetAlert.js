import Swal from 'sweetalert2'

export function dispararSweetBasico(titulo, text, icono = 'success') {
    Swal.fire({
        title: titulo,
        text: text,
        icon: icono,
        confirmButtonText: 'Aceptar'
      })
}

export function dispararSweetConfirmacion(titulo, texto, icono = 'warning') {
  return Swal.fire({
    title: titulo,
    text: texto,
    icon: icono,
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true,
  })
}