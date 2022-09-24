import Swal from 'sweetalert2';
import APICalls from "../../shared/APICalls";

const deleteSweetAlert = (values, route) => {
    Swal.fire({
        title: 'Estas seguro de esto?',
        text: "Esta accion no es reversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar esto'
      }).then((result) => {
        if (result.isConfirmed) {
            try { 
                APICalls.delete(`/${route}/${values.id}`)
                Swal.fire(
                    'Eliminado!',
                    'Se ha eliminado correctamente',
                    'success'
                ).then(() => window.location.reload())
            } catch (error) {
                Swal.fire(
                    'Error',
                    'Ha ocurrido un error al intentar eliminar',
                    'error'
                )
            }
        }
    })
}

const postSweetAlert = async (values, route) => {
    try {
        await APICalls.post(`/${route}`, values)
        Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: 'Creado con exito',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            if(route !== 'organization') {
                window.location.replace(`/backoffice/${route}`)
            }
        })
    } catch (error) {
        Swal.fire({
            position: 'bottom-end',
            icon: 'error',
            title: 'Ha ocurrido un error',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

const putSweetAlert = async (values, route) => {
    try {
        await APICalls.put(`/${route}/${values.id}`, values)
        Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: 'Editado con exito',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            if(route !== 'organization') {
                window.location.replace(`/backoffice/${route}`)
            }
        })
    } catch (error) {
        Swal.fire({
            position: 'bottom-end',
            icon: 'error',
            title: 'Ha ocurrido un error',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

const resultAlert = (text, state) => {
    Swal.fire({
        position: 'bottom-end',
        icon: state,
        title: text,
        showConfirmButton: false,
        timer: 1500
    })
}

const fileTypeAlert = () => {
    Swal.fire({
        position: 'bottom-end',
        icon: 'error',
        title: 'El formato de archivo debe ser JPG, JPEG o PNG',
        showConfirmButton: false,
        timer: 1500
    })
}

export { deleteSweetAlert, postSweetAlert, putSweetAlert, resultAlert, fileTypeAlert };