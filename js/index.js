let header = `
    <div class="h-container">
    <div class="logo">
        <a href="index.html" class="light-logo"> <img src="img/LOGO1.png" alt="logo" class=""></a>
        <a href="index.html" class="dark-logo"> <img src="img/LOGO2.png" alt="logo" class=""></a>
    </div>
    <nav class="nav-menu">
        <ul class="menu" id="menu">
            <li class="menu-item">
                <a class="menu-link" href="index.html">Inicio
                </a>
            </li>
            <li class="menu-item has-sub-menu">
                <a class="menu-link" href="disciplinas.html">Disciplinas
                    <svg class="plus-svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </a>

                <ul class="sub-menu">
                    <li class="menu-item sub-menu-item">
                        <a class="menu-link sub-menu-link" href="gimnasio.html">Gimnasio</a>
                    </li>
                    <li class="menu-item sub-menu-item">
                        <a class="menu-link sub-menu-link" href="funcional.html">Funcional</a>
                    </li>
                    <li class="menu-item sub-menu-item">
                        <a class="menu-link sub-menu-link" href="calistenia.html">Calistenia</a>
                    </li>
                </ul>
            </li>

            <li class="menu-item">
                <a class="menu-link" href="nosotros.html">Nosotros
                </a>
            </li>
            <li class="menu-item">
                <a class="menu-link" href="contacto.html">Contacto
                    <i class="fas fa-plus plus-icon"></i>
                </a>
            </li>
            <li class="menu-item">
                <a class="menu-link" href="tienda.html">Tienda
                    <i class="fas fa-plus plus-icon"></i>
                </a>
            </li>
        </ul>

    </nav>
    <div class="mode-switcher" id="theme-toggle">
        <button class="dark-mode-btn switch-inner go-light" tittle="Switch to Light Mode">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-sun">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
        </button>
        <button class="light-mode-btn switch-inner go-dark" tittle="Switch to Dark Mode">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-moon">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        </button>
    </div>
    <div class="controls-box">
        <div class="hamburger">
            <div class="_layer -top"></div>
            <div class="_layer -mid"></div>
            <div class="_layer -bottom"></div>
        </div>
    </div>
</div>
`
document.getElementById("idheader").innerHTML = header

let footer = `
<div class="divider">
            <div class="logo"></div>
        </div>
        <ul class="f-section d-list">
            <li>
                <p>Nuestras disciplinas</p>
            </li>
            <li><a href="gimnasio.html" class="f-link">Gimnasio</a></li>
            <li><a href="funcional.html" class="f-link">Funcional</a></li>
            <li><a href="calistenia.html" class="f-link">Calistenia</a></li>
        </ul>
        <ul class="f-section adopt-list">
            <li>
                <p>Entrena con nosotros!</p>
            </li>
            <li><a href="nosotros.html" class="f-link">Sobre nosotros</a></li>
            <li><a href="contacto.html" class="f-link">Contacto</a></li>
        </ul>
        <div class="subscription">
            <div class="well-cta--form">
                <div class="well-cta--text">
                    <h3>Suscribite a nuestras noticias</h3>
                    <p>Mantente al tanto de las novedades de Sanus Vita. Puedes desuscribirte en cualquier momento.</p>
                </div>
                <div class="well-cta--input">
                    <input type="text" class="input-form input-lg" placeholder="Ingresa tu email aquí">
                </div>
                <div class="well-cta--cta">
                    <a href="" class="button secondary"><strong>Subscribirse</strong></a>
                </div>
            </div>
        </div>
        <ul class="f-section social-media">
            <li>
                <p>Seguinos:</p>
            </li>
            <li><a href="">
                    <svg class="icon-social-facebook" xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-brand-facebook" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                    </svg>
                </a>
            </li>
            <li><a href=""><svg class="icon-social-instagram" xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-brand-instagram" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        <path d="M16.5 7.5l0 .01"></path>
                    </svg></a></li>
            <li>
                <a href="">
                    <svg class="icon-social-twitter" xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-brand-twitter" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z">
                        </path>
                    </svg>
                </a>
            </li>
            <li>
                <a href="">
                    <svg class="icon-social-youtube" xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-brand-youtube" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                        <path d="M10 9l5 3l-5 3z"></path>
                    </svg>
                </a>
            </li>
        </ul>
        <div class="legal-stuff">
            <span>Copyright © 2023</span>
            <a href="">Terminos y condiciones</a>
        </div>
`
document.getElementById("idfooter").innerHTML = footer