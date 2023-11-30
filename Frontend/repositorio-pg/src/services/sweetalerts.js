import Swal from 'sweetalert2'

export function alertaError(mensaje){
    Swal.fire({
        title: 'Oops..',
        text: mensaje,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
}

export function dialogoSuperior(icono,titulo){
    Swal.fire({
        position: "top-end",
        icon: icono,
        title: titulo,
        showConfirmButton: false,
        timer: 1500
      });
}