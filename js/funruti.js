const templates = {
    fullbodya: `
    <div id="fullbodya" class="active">
    <h1>Entrenamiento Full Body A</h1>
    <h1>Rutina</h1>
    <div class="fullbody-gral">
    <div class="rutina-ejercicios">
        <table>
            <tr>
                <th><p>Ejercicio</p></th>
                <th><p>Serie</p></th>
                <th><p>Repeticiones</p></th>
                <th><p>Descanso</p></th>
            </tr>
            <tr v-for="ejercicio in ejerciciosa">
                <td><p>{{ejercicio.nombre}}</p></td>
                <td><p>{{ejercicio.serie}}</p></td>
                <td><p>{{ejercicio.repeticiones}}</p></td>
                <td><p>{{ejercicio.descanso}}</p></td>
            </tr>
        </table>        
    </div>
    <div class="fotos-ejercicios">
        <img class="ejercicios-funcional" src="img/funcional-pressplano.jpeg">
        <img class="ejercicios-funcional" src="img/funcional-presshombro.jpg">
        <img class="ejercicios-funcional" src="img/funcional-remobarra.jpeg">
        <img class="ejercicios-funcional" src="img/funcional-dominadaspecho.jpg">
        <img class="ejercicios-funcional" src="img/funcional-sentadillaglobet.png">
        <img class="ejercicios-funcional" src="img/funcional-pesomuertorumano.png">
        <img class="ejercicios-funcional" src="img/funcional-presspallof.jpg">
    </div>
    </div>
    </div>`,
    fullbodyb: `
    <div id="fullbodyb" class="active">
    <h1>Entrenamiento Full Body B</h1>
    <h1>Rutina</h1>
    <div class="fullbody-gral">
    <div class="rutina-ejercicios">
    <table>
        <tr>
            <th><p>Ejercicio</p></th>
            <th><p>Serie</p></th>
            <th><p>Repeticiones</p></th>
            <th><p>Descanso</p></th>
        </tr>
        <tr v-for="ejercicio in ejerciciosb">
            <td><p>{{ejercicio.nombre}}</p></td>
            <td><p>{{ejercicio.serie}}</p></td>
            <td><p>{{ejercicio.repeticiones}}</p></td>
            <td><p>{{ejercicio.descanso}}</p></td>
        </tr>
    </table>
    </div>
    <div class="fotos-ejercicios">
        <img class="ejercicios-funcional" src="img/funcional-pressplano.jpeg">
        <img class="ejercicios-funcional" src="img/funcional-presshombro.jpg">
        <img class="ejercicios-funcional" src="img/funcional-remobarra.jpeg">
        <img class="ejercicios-funcional" src="img/funcional-dominadaspecho.jpg">
        <img class="ejercicios-funcional" src="img/funcional-sentadillaglobet.png">
        <img class="ejercicios-funcional" src="img/funcional-pesomuertorumano.png">
        <img class="ejercicios-funcional" src="img/funcional-presspallof.jpg">
    </div>
    </div>        
    </div>`
}

var app = new Vue({
    el: "#app",
    data: {
        view: 'fullbodya'
    },
    components: {
        fullbodya:{
            data: function () {
                return {
                    ejerciciosa: [{
                       nombre: "Press plano con mancuernas",
                       serie: "4",
                       repeticiones: "10",
                       descanso: "1'30\""
                    },
                    {
                        nombre: "Press de hombros sentado",
                        serie: "3",
                        repeticiones: "12",
                        descanso: "1'30\""
                    },
                    {
                        nombre: "Remo con barra",
                        serie: "4",
                        repeticiones: "10",
                        descanso: "1'30\""
                    },
                    {
                        nombre: "Dominadas o jalones al pecho",
                        serie: "3",
                        repeticiones: "12",
                        descanso: "1'30\""
                    },
                    {
                        nombre: "Sentadilla Goblet",
                        serie: "4",
                        repeticiones: "10",
                        descanso: "1'30\""
                    },
                    {
                        nombre: "Peso muerto rumano",
                        serie: "4",
                        repeticiones: "10",
                        descanso: "1'30\""
                    },
                    {
                        nombre: "Press Pallof en polea",
                        serie: "4",
                        repeticiones: "10",
                        descanso: "15\""
                    },
                    
                    ]
                }
            },
            props: [],
            template: templates.fullbodya
        },
        fullbodyb:{
            data: function () {
                return {
                    ejerciciosb: [{
                        nombre: "Press de hombros sentado",
                        serie: "4",
                        repeticiones: "10",
                        descanso: "1'30\""
                    },
                    {
                        nombre: "Press plano con mancuernas",
                        serie: "3",
                        repeticiones: "12",
                        descanso: "1'30\""
                    },
                    {
                        nombre: "Dominadas o jalones al pecho",
                        serie: "4",
                        repeticiones: "10",
                        descanso: "1'30\""
                    },
                    {
                        nombre: "Remo con barra",
                        serie: "3",
                        repeticiones: "12",
                        descanso: "1'30\""
                    },
                    {
                        nombre: "Peso muerto rumano",
                        serie: "4",
                        repeticiones: "10",
                        descanso: "1'30\""
                    },
                    {
                        nombre: "Sentadilla Goblet",
                        serie: "4",
                        repeticiones: "10",
                        descanso: "1'30\""
                    },
                    {
                        nombre: "Plancha Isométrica",
                        serie: "10",
                        repeticiones: "10\"",
                        descanso: "5\"-10\""
                    },
                    
                    ]
                }
            },
            props: [],
            template: templates.fullbodyb
        }
    }
})