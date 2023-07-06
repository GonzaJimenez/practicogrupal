// const appTienda = Vue.createApp({
//     data() {
//         return {
//             suplementos: []
//         }
//     },
//     methods: {
//         obtenerSuplementos() {
//             const URL = "https://evannj.pythonanywhere.com/"

//             fetch(URL + 'suplementos')
//                 .then(response => {
//                     if (response.ok) {
//                         return response.json()
//                     } else {
//                         throw new Error('Error al obtener los suplementos.')
//                     }
//                 })
//                 .then(data => {
//                     this.suplementos = data
//                 })
//                 .catch(error => {
//                     console.log('Error:', error)
//                     alert('Error al obtener los suplementos.')
//                 })
//         }
//     },
//     mounted() {
//         this.obtenerSuplementos()
//     }
// })
// appTienda.mount('.obtenerSuplementos')


const appSuplementos = Vue.createApp({
    data() {
        return {
            suplementos: []
        }
    },
    methods: {
        obtenerSuplementos() {
            const URL = "https://evannj.pythonanywhere.com/"
            
            fetch(URL + 'suplementos')
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        throw new Error('Error al obtener los suplementos.')}
                    })
                .then(data => {
                    this.suplementos = data
                })
                .catch(error => {
                    console.log('Error:', error)
                    alert('Error al obtener los suplementos.')
                })
        },
        eliminarSuplemento(codigo) {
            const URL = "https://evannj.pythonanywhere.com/"
            fetch(URL + `suplementos/${codigo}`, { method: 'DELETE' })
                .then(response => {
                    if (response.ok) {
                            // Eliminar el producto de la lista después de eliminarlo en el servidor
                        this.suplementos = this.suplementos.filter(suplemento => suplemento.codigo !== codigo)
                        console.log('Suplemento eliminado correctamente.')}
                })
                .catch(error => {
                    console.log('Error:', error)
                    alert('Error al eliminar el suplemento.')
                })
        }
    },
    mounted(){
        this.obtenerSuplementos()
    }
})
appSuplementos.mount('.suples')

