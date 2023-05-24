const templates ={
    espalda:`
    <section>
            <h1>¿Por qué es importante ejercitar la espalda?</h1>
            <p>
                Fortalecer la espalda para un buen rendimiento y evitar lesiones es fundamental. Este es uno de los
                grupos musculares más grandes y sobre el mismo recae parte de la actividad, tanto diaria como deportiva.
            </p>
            <h3>Por este motivo de te dejamos una rutina para que entrenes esa espaldota carnal.</h3>
            <ul>
                <li>
                    <h4>Peso muerto x 10,8 1B. Dominada a la barbilla con peso x 4RM, 8RM.</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/WV06PfRAXUk"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </li>
                <li>
                    <h4>Remo muerto con barra (12RM) - 2-3 x 8-10 .</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qsbJcaAneaw"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </li>
                <li>
                    <h4>Remo alto de cable con un brazo alternado O Jalón hacia abajo balanceando - 2-3 x 10-12.</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/WczI8ugTPl8"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </li>
                <li>
                    <h4>Híper Y/W Combo - 2 x 14-20 (alterna Y/W en cada repetición) .</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/uzveWBGBTWQ"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </li>
                <li>
                    <h4>Encogimiento con barra escalonado - 1 x F.</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/82b2wTNA9PM"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </li>
            </ul>
        </section>`,
        pecho: `
            <div id="pecho" class="container active">
                <h1>Pechovich</h1>
                <br>
                <p> {{parrafo2}} </p>
            </div>`,
        piernas: `
            <div id="piernas" class="container active">
                <h1>piernas</h1>
                <br>
                <p> perinas aigsdfuhasvas </p>
            </div>`,
        biceps:`
            <div id="biceps" class="container active">
                <h1>Biceps</h1>
                <p>Lorem ipsum dolor sit ametati dolorum veniam</p>
                <h2>xdxdxdxdxdxdxdxdxd</h2>
                <p>Lorem ipsum dolor sit ametati dolorum veniam</p>
            </div>`,
        triceps:`
            <div id="triceps" class="container active">
                <h1>Triceps</h1>
                <p>Lorem iAGUANTENLOSTRICEPSetati dolorum veniam</p>
                <h2>xdxdxTRICEPSdxdxdxdxdxdxd</h2>
                <p>Lorem ipsum dolor sTRICEPSati dolorum veniam</p>
            </div>`
}

var app = new Vue({
    el:"#app",
    data: {
        view:'espalda',
    },
    components: {
           espalda: {
            props: [],
            template: templates.espalda
           },
           pecho:{
            data: function(){
                return {
                    parrafo2: "lorem ipsum dolor sit amet consadasudvsb"
                }
            },
            props: [],
            template: templates.pecho
           },
           piernas:{
            props: [],
            template: templates.piernas
        },
        biceps: {
            props: [],
            template: templates.biceps
        },
        triceps:{
            props: [],
            template: templates.triceps
        }
    }
}

)