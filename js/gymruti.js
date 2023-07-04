const templates = {
    espalda: `
        <div id="espalda" class="active">
        <h1>¿Por qué es importante ejercitar la espalda + biceps?</h1>
        <p>
            Fortalecer la espalda para un rendimiento mayor en general y evitar lesiones en ella es la clave. Este es uno de los
            grupos musculares más grandes y sobre el mismo recae parte de la actividad, tanto diaria como deportiva. <br> <br>
            Entrenar los bíceps es esencial para lograr brazos definidos y fortalecer la parte superior del cuerpo. Además de brindar beneficios estéticos, fortalecer los bíceps mejora la funcionalidad en actividades diarias y deportes que involucran los brazos.
            Al ejercitar la espalda, paralelamente activamos los biceps por lo tanto, con esta rutina rematamos este musculito que tanto nos gusta.<br><br>
            Por este motivo de te dejamos esta rutina para que entrenes estos dos musculos y los lleves al maximo.
            </p>
            
        <h3>Si recien llegaste al gimnasio, te recomiendo que calientes con esta breve <a @click="view = 'calentamiento' ">
        rutina</a>.</h3>
        <h2>¡Comenzamos con espalda!</h2>
        <ul v-for="ejercicio in ejerciciose">
        <div class="ejercicios-claves">
        <p><b>{{ejercicio.nombre}}</b>: <br> {{ejercicio.descripcion}}<br>Cantidad: <b>{{ejercicio.cantidad}}</b></p>
        <img v-bind:src="ejercicio.foto" class="gim-imagen">
                    </div>
        </ul>
        <h2>¡Terminamos con espalda! Ahora sigue biceps</h2>
        <ul v-for="ejercicio in ejerciciosb">
        <div class="ejercicios-claves">
        <p><b>{{ejercicio.nombre}}</b>: <br> {{ejercicio.descripcion}}<br>Cantidad: <b>{{ejercicio.cantidad}}</b></p>
        <img v-bind:src="ejercicio.foto" class="gim-imagen">
                    </div>
        </ul>
        <h3>Terminamos esta rutina poderosa de Espalda + Biceps.</h3>
        <p>Ten en cuenta que la recuperacion muscular aparecera dentro de 24/48hs. Vas a tener molestias leves si realizaste la rutina con los pesos ideales.<br> Lo ideal es que hagas este apartado 1 vez por semana, pero si quieres hacerlo mas de una vez ¡no hay problema! solo descansa al menos 2 dias para repetirlo.</p>
        </div>`,
    pecho: `
            <div id="pecho" class="container active">
                <h1>La importancia de entrenar el pecho + triceps</h1>                
                <p>Entrenar pecho y tríceps es importante para desarrollar una parte superior del cuerpo fuerte y equilibrada. <br> Entrenar el pecho nos permite empujar, levantar y realizar movimientos funcionales en nuestra vida cotidiana.<br>El tríceps, ubicado en la parte posterior del brazo, es clave para movimientos de empuje y estabilización. Combinar el entrenamiento de estos musculos aumenta la fuerza y mejora la apariencia física. Además, fortalecer estos músculos previene lesiones, mejora el rendimiento deportivo y favorece una postura adecuada.<br><br>
                Por este motivo de te dejamos esta rutina para que entrenes estos dos musculos y los lleves al maximo.  </p>
                <h3>Si recien llegaste al gimnasio, te recomiendo que calientes con esta breve <a @click="view = 'calentamiento' ">
        rutina</a>.</h3>
        <h2>¡Comenzamos con pecho!</h2>
        <ul v-for="ejercicio in ejerciciosp">
        <div class="ejercicios-claves">
        <p><b>{{ejercicio.nombre}}</b>: <br> {{ejercicio.descripcion}}<br>Cantidad: <b>{{ejercicio.cantidad}}</b></p>
        <img v-bind:src="ejercicio.foto" class="gim-imagen">
                    </div>
        </ul>
        <h2>¡Terminamos con pecho! Ahora sigue triceps</h2>
        <ul v-for="ejercicio in ejerciciost">
        <div class="ejercicios-claves">
        <p><b>{{ejercicio.nombre}}</b>: <br> {{ejercicio.descripcion}}<br>Cantidad: <b>{{ejercicio.cantidad}}</b></p>
        <img v-bind:src="ejercicio.foto" class="gim-imagen">
                    </div>
        </ul>
        <h3>Terminamos esta rutina poderosa de Pecho + Triceps.</h3>
        <p>Ten en cuenta que la recuperacion muscular aparecera dentro de 24/48hs. Vas a tener molestias leves si realizaste la rutina con los pesos ideales.<br> Lo ideal es que hagas este apartado 1 vez por semana, pero si quieres hacerlo mas de una vez ¡no hay problema! solo descansa al menos 2 dias para repetirlo.</p>
            </div>`,
    piernas: `
            <div id="piernas" class="container active">
                <h1>Las piernas el musculo mas grande que tenemos + hombros</h1>                
                <p>El entrenamiento de piernas y hombros es imprescindible para desarrollar un cuerpo fuerte y equilibrado. Fortalecer las piernas mejora la estabilidad y la funcionalidad, mientras que trabajar los hombros promueve una postura adecuada y reduce el riesgo de lesiones. Estos entrenamientos aumentan la fuerza, la resistencia y mejoran la estética. Cabe resaltar que si no entrenamos las piernas y solo entrenamos tren superior, llegara un punto en donde nuestros musculos superiores no creceran debido al desiquilibrio con el tren inferior. Asi que ¡no salteé el dia de piernas!<br><br>
                Por este motivo de te dejamos esta rutina para que entrenes estos dos musculos y los lleves al maximo.  </p>
                <h3>Si recien llegaste al gimnasio, te recomiendo que calientes con esta breve <a @click="view = 'calentamiento' ">
        rutina</a>.</h3>
        <h2>¡Comenzamos con piernas!</h2>
        <ul v-for="ejercicio in ejerciciospi">
        <div class="ejercicios-claves">
        <p><b>{{ejercicio.nombre}}</b>: <br> {{ejercicio.descripcion}}<br>Cantidad: <b>{{ejercicio.cantidad}}</b></p>
        <img v-bind:src="ejercicio.foto" class="gim-imagen">
                    </div>
        </ul>
        <h2>¡Terminamos con piernas! Ahora sigue hombros</h2>
        <ul v-for="ejercicio in ejerciciosh">
        <div class="ejercicios-claves">
        <p><b>{{ejercicio.nombre}}</b>: <br> {{ejercicio.descripcion}}<br>Cantidad: <b>{{ejercicio.cantidad}}</b></p>
        <img v-bind:src="ejercicio.foto" class="gim-imagen">
                    </div>
        </ul>
        <h3>Terminamos esta rutina poderosa de Piernas + Hombros.</h3>
        <p>Ten en cuenta que la recuperacion muscular aparecera dentro de 24/48hs. Vas a tener molestias leves si realizaste la rutina con los pesos ideales.<br> Lo ideal es que hagas este apartado 1 vez por semana, pero si quieres hacerlo mas de una vez ¡no hay problema! solo descansa al menos 2 dias para repetirlo.</p>
            </div>`,
    calentamiento: `
            <div id="calentamiento" class="container active">
            <h1>Calentamiento general</h1>
            <h4>¡Comenzamos!</h4>
            <p>Realizaremos los siguientes ejercicios sin descanso uno despues del otro, luego recien <b>descansamos</b>.</p>
            <ul v-for="calentamiento in calentamientos">
            <li>
            <div class="ejercicios-claves">
                        <p><b>{{calentamiento.nombre}}</b>: <br>
                        Cantidad: <b>{{calentamiento.cantidad}}</b><br>
                        {{calentamiento.descripcion}}</p>
                        
                         <img v-bind:src="calentamiento.foto" class="gim-imagen">           </div>
                    </li>                
            </ul>
            <p>¡Ahora si descansamos 45 segundos! volvemos a realizar este circuito hasta completar las 4 series.</p>
            </div>`
}

var app = new Vue({
    el: "#app",
    data: {
        view: 'calentamiento',
    },
    components: {
        espalda: {
            data: function () {
                return {

                    ejerciciose: [{
                        nombre: "Jalon al pecho",
                        descripcion: "Este ejercicio es fundamental para una espalda firme y sin problemas vertebrales. Si eres principiante no te exijas " +
                            "demasiado, pon un peso con el cual puedas manejar las 40 repeticiones. No debes llegar " +
                            "fatigado a la última serie ya que la rutina no termina en este ejercicio. Este tip de " +
                            "\"autoregular\" los pesos es fundamental para la progresión y evitar lesiones. Utilízalo en todos " +
                            "los ejercicios.",
                        foto: "img/Rutinas/Jalón-al-pecho.jpg",
                        cantidad: "4x10"
                    },
                    {
                        nombre: "Remo con barra",
                        descripcion: "Agarramos la barra (como se muestra en la imagen) y la jalamos hacia nosotros. La técnica en este " +
                            "ejercicio es fundamental debido a la carga generada en nuestra zona lumbar. Si sentimos pinchazos o " +
                            "dolor en nuestra columna, estamos realizando mal el ejercicio. Consulta con el entrenador de " +
                            "turno para perfeccionar el movimiento y evitar lesiones.",
                        foto: "img/Rutinas/Remada-com-barra.jpg",
                        cantidad: "3x10"
                    },
                    {
                        nombre: "Remo en polea baja",
                        descripcion: "Este ejercicio, al realizarlo en máquina, no requiere tanta perfección en la técnica. Si " +
                            "mantenemos nuestra espalda recta o semi-recta durante todo el recorrido, evitaremos posibles " +
                            "dolores causados por una mala postura.",
                        foto: "img/Rutinas/remo-en-polea-baja.jpg",
                        cantidad: "4x8"
                    }],
                    ejerciciosb: [
                        {
                            nombre: "Curl con barra",
                            descripcion: "Mantenemos una postura erguida, sin exageraciones, y realizamos las series especificadas. Si no " +
                                "podemos alcanzar el peso deseado, simplemente lo reducimos. No necesitamos llamar la atención de " +
                                "nadie, nos estamos enfocando en nosotros mismos. Un leve penduleo está permitido cuando llegamos " +
                                "a la cuarta serie y estamos en la octava repetición, ya que necesitamos un pequeño impulso para " +
                                "alcanzar nuestro objetivo.",
                            foto: "img/Rutinas/biceps-con-barra.jpg",
                            cantidad: "3x10"
                        },
                        {
                            nombre: "Curl martillo con mancuernas",
                            descripcion: "Similar al ejercicio anterior, pero con un agarre distinto y utilizando mancuernas. Mantenemos " +
                                "la misma postura correcta y el leve penduleo también es una opción para ayudar en las últimas " +
                                "repeticiones.",
                            foto: "img/Rutinas/biceps-martillo.jpg",
                            cantidad: "3x8"
                        },
                        {
                            nombre: "Curl concentrado con mancuernas",
                            descripcion: "Este ejercicio es uno de los mejores para trabajar nuestros bíceps. Intentamos imitar la imagen " +
                                "para lograr una técnica óptima y evitar posibles dolores de espalda. Recuerda regular el peso, ya " +
                                "que este ejercicio consume mucha fuerza y energía.",
                            foto: "img/Rutinas/biceps-concentrado.jgp.webp",
                            cantidad: "3x8"
                        }
                    ]
                }
            },
            props: [],
            template: templates.espalda
        },
        pecho: {
            data: function () {
                return {
                    ejerciciosp: [{
                        nombre: "Press banca plana con barra",
                        descripcion: "Nos recostamos como muestra la imagen y bajamos la barra a la altura de los pezones lentamente, la subimos con fuerza explosiva para un mejor desarrollo de nuestros pectorales. Intentaremos hacer \"retraccion escapular\" no es facil y tampoco obligatoria, pero se logra con practica y de esta manera evitamos una posible lesión de hombros.",
                        foto: "img/Rutinas/banco-plano.jpg",
                        cantidad: "4x8"
                    },
                    {
                        nombre: "Press inclinado con mancuernas",
                        descripcion: "Buscamos un banco a 45º y subiremos las mancuernas a la altura de nuestro pectoral como se muestra en la imagen, cuando descendemos las mancuernas no deben pasar por debajo de la altura del hombro. Si podemos hacer \"retraccion escapular\" mucho mejor.",
                        foto: "img/Rutinas/press-inclinado.jpg",
                        cantidad: "4x10"
                    },
                    {
                        nombre: "Aperturas plana con mancuernas",
                        descripcion: "Utilizamos un banco similar al primer ejercicio, bajamos las mancuernas a la altura de los pezones y flexionamos levemente el codo. Este ejercicio busca activar la mayor cantidad de fibras del pecho, no es necesario hacerlo muy pesado, basta que sintamos que nuestro pecho se estira significa que vamos bien.",
                        foto: "img/Rutinas/aperturas-plana.jpg",
                        cantidad: "4x12"
                    }],
                    ejerciciost: [{
                        nombre: "Extension de triceps con mancuernas trasnuca",
                        descripcion: "Levantaremos la pesa por encima de nuestra cabeza cuidando que nuestros codos no se abran hacia afuera, tenderan a abrirse pero nosotros debemos intentar cerrarlos lo mas que podamos.",
                        foto: "img/Rutinas/triceps-trasnuca.png",
                        cantidad: "3x12"
                    },
                    {
                        nombre: "Rompe craneos",
                        descripcion: "Como su nombre lo indica, bajaremos la barra hasta que se apolle en nuestra cabeza sin dejarla apoyar claro, luego la subiremos cuidando que no se abran nuestros codos, no sobrecarguen la barra ya que como su nombre lo indica, podemos lastimarnos.",
                        foto: "img/Rutinas/rompe-craneos.png",
                        cantidad: "4x8"
                    },
                    {
                        nombre: "Extension de triceps en polea",
                        descripcion: "Buscaremos realizar una extension de nuestros brazos sin mover nuestros hombros, de manera que solo se mueva nuestro triceps. Podemos inclinar levemente la espalda hacia delante y flexionar un poco nuestras rodillas.",
                        foto: "img/Rutinas/extension de triceps en polea.png",
                        cantidad: "3x12"
                    }]
                }
            },
            props: [],
            template: templates.pecho
        },
        piernas: {
            data: function () {
                return{
                    ejerciciospi: [
                        {
                            nombre: "Sentadilla",
                            descripcion: "Colocamos la barra en nuestros trapecios, y descendemos sin torser nuestra espalda, de manera que nuestras piernas queden a 90º, si bajamos mas no es malo, pero hay que cuidar mucho nuestra espalda. Las rodillas no deben doblarse hacia dentro, siempre siguiendo la postura de la pierna",
                            foto: "img/Rutinas/sentadilla.png",
                            cantidad: "4x8"
                        },
                        {
                            nombre: "Estocadas",
                            descripcion: "Agarramos 2 mancuernas y realizamos una caminata de al menos 26 pasos totales, 13 por pierna. La idea es que la pierna con la que avanzamos realice la fuerza de levantar todo el resto del cuerpo.",
                            foto: "img/Rutinas/estocadas.png",
                            cantidad: "13x3"
                        },
                        {
                            nombre: "Prensa",
                            descripcion: "No hay mucho que explicar en este ejercicio, colocamos las piernas en forma paralela, separadas a la anchura de nuestros hombros y justo al medio de la plataforma. Mantenemos toda la espalda apollada en el respaldar, intentaremos no doblar ni fruncir la espalda porque nos generara una sobrecarga innecesaria.",
                            foto: "img/Rutinas/prensa.png",
                            cantidad: "4x8"
                        }
                    ],
                    ejerciciosh:[
                        {
                            nombre: "Press militar",
                            descripcion: "Colocaremos las manos a la anchura de nuestros hombros o quiza un poco mas, y las extenderemos. La bajaremos manteniendo los codos lo mas cerrado que podamos. En este ejercicio buscamos una tecnica optima de manera que intervengan todas las cabezas de nuestro hombro.",
                            foto: "img/Rutinas/press-militar.png",
                            cantidad: "3x12"
                        },
                        {
                            nombre: "Vuelos laterales",
                            descripcion: "Agarramos dos mancuernas, flexionamos nuestros codos un poco para no sobrecargar nuestros brazos y subimos a la altura de nuestros hombros. A la hora de bajarlas tampoco dejamos que penduleen si no que mantenemos nuestros hombros activos manteniendo las mancuernas a nuestro lado.",
                            foto: "img/Rutinas/vuelos-laterales.png",
                            cantidad: "3x12"
                        }
                    ]
                }
            },
            props: [],
            template: templates.piernas
        },
        calentamiento: {
            data: function () {
                return {
                    calentamientos: [{
                        nombre: "Abdominales con ruedita",
                        descripcion: "Con 4 nos referimos al número de series, mientras " +
                            "que 10 a la cantidad de repeticiones que vamos a realizar en cada serie. Utilizaremos esta " +
                            "sintaxis para todos los ejercicios, ¡Todavia no es hora del descanso! No es necesario que nuestra panza toque el suelo, bajamos hasta donde podamos.",
                        foto: "img/Rutinas/rueda-abdominal.jpg",
                        cantidad: "4x6"
                    }, {
                        nombre: "Superman",
                        descripcion: "Como vemos en la imagen subimos las manos y piernas simultaneamente(figura B), luego las bajamos(figura A) y repetimos el movimiento. Si en nuestro gimnasio hay una maquina para este ejercicio, adelante ¡usala!",
                        foto: "img/Rutinas/espinalesSuperman.jpg",
                        cantidad: "4x10"
                    }]
                }
            },
            props: [],
            template: templates.calentamiento
        }
    }
}

)