================================================
FILE: README.md
================================================
# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).



================================================
FILE: astro.config.mjs
================================================
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});



================================================
FILE: package.json
================================================
{
  "name": "astropage",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "astro": "^4.5.5",
    "bootstrap": "^5.3.3",
    "bootstrap-icons": "^1.11.3"
  }
}



================================================
FILE: tsconfig.json
================================================
{
  "extends": "astro/tsconfigs/base"
}



================================================
FILE: src/env.d.ts
================================================
/// <reference types="astro/client" />



================================================
FILE: src/components/Banner.astro
================================================
---
import 'bootstrap/dist/css/bootstrap.min.css';


---
<section class="conteiner  row"id="banner"  style="background: linear-gradient(45deg, #000000, #3f024e); min-height: 100vh;" >
  <div class=" w-75  m-auto ">
    <div class="conteiner-fluid col-sm border border rounded-1 ">
      <div class="backgraund-item active  border border-2 rouded  " style="background: linear-gradient(40deg, #a4028e,  #e83515)" >
        <img src="/logoNuevo.png" class="img  bg-opacity-50 d-block  w-75 m-auto  figure-img img-md  rounded " alt="fondo" >
        <h1 class="text-center text-white">¡Bienvenidos a BETELGEUSE!</h1>
        <h4 class="text-center  " style="text-shadow: 0 0 8px white;" >Bienvenidos a la web de BETELGEUSE. En BETELGEUSE, contamos con más de 8 años de experiencia dedicados a transformar tu cabello y potenciar tu estilo. Somos un salón comprometido con la excelencia, donde cada servicio se realiza con precisión y pasión. Más allá de los cortes y tratamientos de alta calidad, BETELGEUSE es un espacio pensado para que disfrutes. Relájate con videojuegos retro y buena música mientras te cuidamos, haciendo de tu visita una experiencia única y divertida. Descubre la diferencia en BETELGEUSE: profesionalismo, estilo y un ambiente inigualable. ¡Te esperamos!</h4>
        </div>
      </div>
    </div>
</section>
  


================================================
FILE: src/components/Footer.astro
================================================
---
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

---
<footer class="bg-dark text-center text-white">
  <div class="container p-4 pb-0">
    <section class="mb-6">
      <a class="btn btn-primary btn-floating m-1" style="background-color: #3b5998" href="https://www.facebook.com/Juannpeluquero/" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-facebook"></i>
      </a>

      <a class="btn btn-primary btn-floating m-1" style="background-color: #ac2bac;" href="https://www.instagram.com/juantoledopeluquero/" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-instagram"></i>
      </a>
    </section>
  </div>
  <div class="row align-items-center text-center  p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    <p class="col-md-12 ">&copy; 2024 Derechos de autor reservados:</p>
    <p class="col-md-12">BETELGEUSE</p>
    <p class="col-md-12 font-monospace " >Lopez Torres 4155, Posadas, Misiones, Argentina</p>
  </div>
</footer>



================================================
FILE: src/components/Navbar.astro
================================================
---
import 'bootstrap/dist/css/bootstrap.min.css';

---
<nav class="navbar navbar-expand-lg navbar-dark bg-dark border border-1 fixed-top  navbar-scrolled">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="/logoNuevo.png" alt="Logo" width="40" height="40" class="d-inline-block align-top">
        BETELGEUSE
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#home">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#servicios">Servicios</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link text-decoration-line-through" href="#fotos">Fotos</a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link" href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  // este script activa al menu desplegable en el navbar  para celulares
  <script>
    document.querySelector('.navbar-toggler').addEventListener('click', () => {
      document.querySelector('.navbar-collapse').classList.toggle('show');
    });
    </script>


================================================
FILE: src/components/Navbar.css
================================================
/* Estilos base para la navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    height: 50px; /* Ajusta la altura según sea necesario */
  }
  
  .navbar-brand {
    flex-grow: 1;
  }
  
  .navbar-nav {
    display: flex; /* Necesario para la visualización horizontal */
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-item {
    margin-right: 1rem; /* Ajusta el espacio entre enlaces */
  }
  
  .nav-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem; /* Ajusta el padding según sea necesario */
  }
  
  /* Ocultar la navegación por defecto en pantallas pequeñas */
  @media (max-width: 768px) {
    .navbar-nav {
      display: none;
    }
  }
  
  /* Mostrar la navegación al hacer clic en el botón "hamburguesa" */
  .navbar-toggler:hover,
  .navbar-toggler:focus {
    background-color: rgba(0, 0, 0, 0.2); /* Opcional: cambiar el color al pasar el cursor */
  }
  
  .navbar-toggler.clicked {
    background-color: transparent;
  }
  
  .navbar.expanded .navbar-nav {
    display: flex;
  }
  
  /* Estilos del botón "hamburguesa" */
  .navbar-toggler {
    display: block;
    padding: 0.5rem;
    cursor: pointer;
    border: none;
    background-color: transparent;
    outline: none;
    position: relative;
  }
  
  .navbar-toggler::before,
  .navbar-toggler::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 2px;
    background-color: white;
    transition: 0.2s ease-in-out;
  }
  
  .navbar-toggler::before {
    top: 0;
  }
  
  .navbar-toggler::after {
    bottom: 0;
  }
  
  .navbar-toggler.clicked::before {
    transform: rotate(45deg);
    top: 10px;
  }
  
  .navbar-toggler.clicked::after {
    transform: rotate(-45deg);
    bottom: 10px;
  }
  


================================================
FILE: src/pages/Contacto.astro
================================================
---
import 'bootstrap/dist/css/bootstrap.min.css';


---



<div class="conteiner-fluid card border-success mb-3 mx-5 bg-info   " id="contacto" style={{ background: 'linear-gradient(45deg, #FF8C00, #FF6347, #FF8C00)',  minHeight: '100vh'}} >
  <img class=" fondo mx-5 my-2 w-50 mx-auto " src="whatsapp.jpg " alt="">
  <div class="card-header bg-transparent border-success text-center text-white" ><h4> Reserva tu turno! </h4></div>
  <div class="card-body text-success">
    <h5 class="card-title text-center text-success">WhatsApp</h5>
    <p class="card-text text-center .text-success  " style="text-shadow: 0 0 8px white;">Si estas en tu movil o computadora con WhatsApp  abierto, podras comunicarte directamente para reservar tu turno!</p>
    
  </div>
  
  <div class="card-footer bg-transparent border-success  mx-auto">
    <a href="https://wa.me/3764674458" class="btn btn-success" target="_blank" rel="noopener noreferrer">Enviar Mensaje</a>
  </div>
  <hr class="border-success">
    <p class="card-text text-center text-success  " style="text-shadow: 0 0 8px white;">O puedes escanear el codigo QR con tu celular</p>
    <img class=" fondo mx-5 my-2 w-50 mx-auto " src="qr.jpg " alt="">
</div>


================================================
FILE: src/pages/Home.astro
================================================
---
import 'bootstrap/dist/css/bootstrap.min.css';


---
<div class="conteiner-md " id="home">
  <div class="col-md row">
    <header class="col-md col-sm bg-secondary .text-primary text-center  "> 
      <!-- <h1>header</h1> -->
    </header>    
  </div>
  <section class="conteiner-fluid row text-center ">
    <article class="col-6 bg-danger border  border-4 rouded border-info text-white ">
      <h1>Descubre lo Último en Belleza</h1>
      <p>En nuestro sitio, te esperan las últimas tendencias y promociones exclusivas. Explora nuestra gama de precios y servicios, y sumérgete en consejos expertos para el cuidado del cabello. Todo esto y más, diseñado para ti.</p>
    </article>
    <aside class="col-6 bg-danger flex-row-reverse border  border-4 rouded border-info text-light ">
      <h2>Pensando siempre en ti</h2>
      <p> te ofrecemos una experiencia confortable y única. En nuestra peluquería, disfrutarás de un servicio excepcional y comodidades que aseguran tu satisfacción durante toda la visita. Descubre las ventajas y servicios exclusivos que tenemos para ti.</p>
    </aside>
  </section>

  <section class="conteiner-fluid row mx-auto  ">
    <div  class="backgraund-item active col-sm-6 col-md-3 bg-warning border border-4 rouded border-danger  " >
      <img src="33.jpg" alt="backgraund-item " class="img-fluid border  border-2  mx-1 rounded  ">
      <h2 class="text-center">RetroGaming</h2>
      <p class="text-center">¿Listo para un cambio de look y diversión? Disfruta de nuestros juegos retro mientras esperas o te cortan el cabello. Ven y convierte la espera en un momento divertido en la peluquería, juegos aptos para todas las edades.</p>
    </div>
    <div class="backgraund-item active col-sm-6 col-md-3 bg-warning border border-4 rouded border-danger ">
      <img src="peli.jpg" alt="backgraund-item " class="img-fluid  border border-2  mx-1 rounded">
      <h2 class="text-center">Cine en la Silla</h2>
      <p>Olvida el aburrimiento durante tu espera en la peluquería con nuestra proyección de películas. Una forma perfecta de relajarte y disfrutar mientras te miman con un nuevo look. ¡Ven y descubre la diferencia!</p>
    </div>
    <div class="backgraund-item active col-sm-6 col-md-3 bg-warning border border-4 rouded border-danger ">
      <img src="commingsoon.jpeg" alt="backgraund-item " class="img-fluid  border border-2  mx-1 rounded">
      <h2 class="text-center">Novedades Tech</h2>
      <p>Explora nuestra seccion Beltelgeuse Tech: Smartwatches, parlantes Bluetooth y auriculares de calidad. Y mucho mas... </p>
    </div>
    <div class="backgraund-item active col-sm-6 col-md-3 bg-warning border border-4 rouded border-danger ">
      <img src="28.jpg" alt="backgraund-item " class="img-fluid  border border-2  mx-1 rounded">
      <h2 class="text-center">Cabello en Armonía</h2>
      <p>No solo recibirás un excelente servicio, sino que también podrás comprar nuestros productos de cuidado capilar para uso diario. Descubre nuestra selección y dale a tu cabello el cuidado que se merece.</p>
    </div>
  </section>

</div>



================================================
FILE: src/pages/index.astro
================================================
---
import Navbar from '../components/Navbar.astro';
import Banner from '../components/Banner.astro';
import Home from './Home.astro';
import Servicios from './Servicios.astro';
import Contacto from './Contacto.astro';
import Footer from '../components/Footer.astro';


---

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" type="image/svg+xml" href="/logon.ico" />
		<meta name="viewport" content="width=device-width" />
		<meta name="generator" content={Astro.generator} />
		<title>BETELGEUSE</title>
		<meta name="description" content="BELTEGEUSE Peluquería unisex en Posadas, Misiones, Argentina. Ofrecemos cortes de pelo unisex, peinados, tratamientos de aLisado , Kerarina y videojuegos retros para entretener a nuestros clientes mientras son atendidos.">
        <meta name="keywords" content="peluquería, unisex, posadas, misiones, argentina, cortes de pelo unisex, peinados, tratamientos de aLisado , Kerarina , videojuegos retros">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="robots" content="index, follow">
        <meta name="author" content="BETELGEUSE">
        <meta name="og:title" content="BETELGEUSE">
        <meta name="og:description" content="BETELGEUSE Peluquería unisex en Posadas, Misiones, Argentina. Ofrecemos cortes de pelo unisex, peinados, tratamientos Alisados y videojuegos retros para entretener a nuestros clientes mientras son atendidos.">
        <meta name="og:image" content="https://betelgeusee.netlify.app/logoNuevo.png">
        <meta name="og:url" content="https://betelgeusee.netlify.app/">
	</head>
	<>
		<Navbar/>
		<Banner/>
		<Home />
		<Servicios/>
		<Contacto/>
		<Footer/>
		

	</body>
</html>



================================================
FILE: src/pages/Servicios.astro
================================================
---
import 'bootstrap/dist/css/bootstrap.min.css';


---

<section class="conteiner-fluid p-3" id="servicios" style="background: linear-gradient(45deg, #015701, #1e651e); min-height: 100vh;">
    <div class="text-center text-light ">
        <h2>Servicios</h2>
        <p>Estos son los servicios y precios con los que contamos en nuestro local</p>
    </div>
    <div class=" conteiner-fluit row row-cols-1 row-cols-md-3  g-4 mx-auto">
        <div class="col-sm-4 col-md-4 ronded ">
          <div class="card h-100 text-center ">
            <img src="15.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Coloración</h5>
              <p class="card-text">Realza tu belleza natural y di adiós a las canas con nuestros servicios de coloración personalizados.</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Precio: $25.000</small>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-md-4 ronded">
          <div class="card h-100 text-center ">
            <img src="22.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Mechas</h5>
              <p class="card-text">Transforma tu look con nuestras mechas que aportan luz y dimensión a tu cabello, realzando tu estilo único.</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary"> Precio a partir de: $45.000</small>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-md-4 ronded">
          <div class="card h-100 text-center ">
            <img src="29.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Corte Masculino</h5>
              <p class="card-text">Para el hombre moderno que valora la elegancia y la precisión, ofrecemos cortes que definen el carácter y complementan el estilo personal.</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Precio: $10.000</small>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-md-4 ronded">
            <div class="card h-100 text-center ">
              <img src="30.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Corte Femenino</h5>
                <p class="card-text">Cada corte es una forma de expresión. Nuestros estilistas capturan tu esencia y reflejan tu personalidad con estilos que van desde lo clásico hasta lo más vanguardista.</p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">Precio $15.000</small>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-md-4 ronded">
            <div class="card h-100 text-center ">
              <img src="31.jpg" class="card-img-top  " alt="...">
              <div class="card-body">
                <h5 class="card-title">Alisado</h5>
                <p class="card-text"> Logra un cabello liso y sedoso con nuestro servicio de alisado. Técnicas avanzadas y productos de calidad para un acabado impecable y duradero.</p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">Precio a partir de: $35.000</small>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-md-4 ronded">
            <div class="card h-100 text-center ">
              <img src="32.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Keratina</h5>
                <p class="card-text">Dale a tu cabello el regalo de la suavidad y el brillo. Nuestro tratamiento de keratina reduce el frizz y mejora la manejabilidad, dejando tu cabello renovado y radiante.</p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">Precio a partir de: $30.000</small>
              </div>
            </div>
          </div>
      </div> 
</section>

<style>
  .card:hover {
  transform: scale(1.04); /* Expande la tarjeta en un 2% */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra */
  transition: transform 0.5s ease-in-out; /* Opcional: agrega una transición suave */
}

</style>

