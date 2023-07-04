const templates = {
    principiante: `
            <div id="principiante" class="active">
            <h1>Rutina de calistenia para principiantes</h1>
            <h2>¿Cómo hacer calistenia desde cero?</h2>
            <p>
                Primero hay que tomárselo con calma, debemos trazarnos objetivos concisos de acuerdo a lo que 
                nos hayamos propuesto (perder peso, mantener la figura o ganar músculo).
                <br>
            </p>
            <h3>Pero antes debes conocer unos ejercicios claves.</h3>
            <ul>
                <li v-for="ejercicio in ejercicios">
                    <div class="ejercicios-claves">
                    <p><b>{{ejercicio.nombre}}</b>: {{ejercicio.descripcion}}</p>
                    <img v-bind:src="ejercicio.foto" class="calistenia-imagen">
                    </div>
                </li>
            </ul>
            <h3>Ahora que ya conocemos los ejercicios básicos podemos comenzar con nuestra rutina</h3>
            <h4> Es importante realizar un calentamiento antes de empezar:</h4>
            <ul>
                <li v-for="calentamiento in calentamientos">
                    <p><b>{{calentamiento.ejercicio}}</b></p>            
                </li>
            </ul>
            <h1 class="titulo">Rutina</h1>
            <ul>
                <li v-for="rutinap in rutinasp">
                    <div>
                    <p class="nombre ejercicio"><b>{{rutinap.nombre}}</b></p>                    
                    </div>
                </li>
            </ul>
            </div>`,
    intermedio: `
            <div id="intermedio" class="container active">
            <h1>Rutina de calistenia intermedia</h1>
            <h2>¿Qué tiene de positivo un entrenamiento intermedio?</h2>
            <p>
                Este nivel sirve como adiestramiento e instrucción plenamente íntegra. 
                Utilizamos nuestro peso corporal dando un equilibrio a nuestra ejercitación.
            </p>
            <h4>Rutina</h4>
            <ul>
                <li v-for="rutinai in rutinasi">
                    <p><b>{{rutinai.nombre}}</b></p>            
                </li>
            </ul>
            </div>`,
    avanzado: `
            <div id="avanzado" class="container active">
                <h1>Rutina de calistenia avanzada</h1>
                <h2>¿Qué tiene de interesante un entrenamiento avanzado?</h2>                
                <p>
                    Esta serie de trabajo y entrenamiento puede entenderse también como una rutina 
                    avanzada para tonificar, realizando trabajos más esforzados, sobrepasando las dificultades e incrementando 
                    en cuanto a resultados.
                </p>
                <h4>Rutina</h4>
                <ul>
                <li v-for="rutinaa in rutinasa">
                    <p><b>{{rutinaa.nombre}}</b></p>            
                </li>
                </ul>
            </div>`
}

var app = new Vue({
    el: "#app",
    data: {
        view: 'principiante',
    },
    components: {
        principiante: {
            data: function () {
                return {
                    ejercicios: [{
                        nombre: "Flexiones, push up o lagartijas",
                        descripcion: "se trata de un ejercicio que pone a trabajar el conjunto de los pectorales mayores y menores, los deltoides frontales y posteriores al igual que los triceps simultáneamente para mayor tonificación muscular además del estimular el sistema circulatorio.",
                        foto: "img/calistenia-flexiones.webp"
                    },
                    {
                        nombre: "Sentadillas, cucliclas o squats",
                        descripcion: "este ejercicio es especial para tonificar y aumentar la masa muscular de los cuádriceps, los glúteos, los músculos inferiores de la tibia y el peroné, la parte interna de los muslos, las caderas y los gemelos.",
                        foto: "img/calistenia-sentadillas.webp"
                    },
                    {
                        nombre: "Dominada, pull up o elevación en barra",
                        descripcion: "trabaja con los músculos dorsales, los bíceps, los músculos romboides y trapezoidales, los antebrazos y los músculos de las manos.",
                        foto: "img/calistenia-dominada.webp"
                    },
                    {
                        nombre: "Elevación de piernas",
                        descripcion: "trabaja el complejo de los músculos abdominales, músculos oblicuos, los músculos intercostales, los músculos de agarre, los músculos frontales de la cadera, los cuádriceps, el cuádriceps sartorio, el serrato y el diafragma.",
                        foto: "img/calistenia-elevacionpierna.webp"
                    },
                    {
                        nombre: "Puente o bridges",
                        descripcion: "trabaja con los músculos de la parte baja de la espalda, la parte trasera de las caderas, los músculos femorales y los bíceps.",
                        foto: "img/calistenia-elevacioncadera.webp"
                    }
                    ],
                    calentamientos: [{
                        ejercicio: "Cardio a ritmo lento"
                    },
                    {
                        ejercicio: "4 rondas de sentadillas clásicas"
                    },
                    {
                        ejercicio: "5 flexiones de piernas multidireccionales."
                    },
                    {
                        ejercicio: "5 zancadas alternas."
                    }
                    ],
                    rutinasp: [{
                        nombre: "3 Dominadas supinas.",
                    },
                    {
                        nombre: "30 Segundos de Wall Sit.",                        
                    },
                    {
                        nombre: "12 Fondos de silla/banco.",
                    },
                    {
                        nombre: "8 Flexiones"
                    },
                    {
                        nombre: "2 Dominadas pronadas."
                    },
                    {
                        nombre: "3 Elevaciones de rodillas colgado de barra."
                    },
                    {
                        nombre: "7 Flexiones con los pies elevados."
                    }
                    ]
                }
            },
            props: [],
            template: templates.principiante
        },
        intermedio: {
            data: function () {
                return {
                    rutinasi: [{
                        nombre: "5 Muscle ups."
                    },
                    {
                        nombre: "7 Wide grip (agarre amplio) pull ups."
                    },
                    {
                        nombre: "10 Elevaciones de piernas."
                    },
                    {
                        nombre: "5 Wide grip chin (barbilla) ups"
                    },
                    {
                        nombre: "5 Close grip (agarre cerrado) australian pulls up."
                    }
                ],
                }
            },
            props: [],
            template: templates.intermedio
        },
        avanzado: {
            data: function () {
                return {
                    rutinasa: [{
                        nombre:"7 Flexiones verticales/invertidas."
                    },
                    {
                        nombre: "15 Wide grip (agarre amplio) pull ups."
                    },
                    {
                        nombre: "20 Fondos de triceps."
                    },
                    {
                        nombre: "10 Chin ups."
                    },
                    {
                        nombre: "20 Flexiones de brazos."
                    },
                    {
                        nombre: "6 Elevaciones de piernas."
                    },
                    {
                        nombre: "5 Sentadillas a una pierna."
                    },
                    {
                        nombre: "5 Bodyweight skull crushers."
                    }
                ],
                }
            },
            props: [],
            template: templates.avanzado
        }
    }
})