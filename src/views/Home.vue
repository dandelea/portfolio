<template>
  <div>
    <!-- Banner -->
    <section id="banner" class="py-12">
      <div class="inner">
        <h2 class="text-base md:text-3xl xl:text-5xl">Daniel de los Reyes Leal</h2>
        <p class="mb-2 md:mb-4 lg:mb-6">Full Stack Developer</p>
        <div class="flex flex-wrap justify-center mb-4 lg:mb-6">
          <div class="w-6/12 sm:w-4/12 lg:w-3/12 px-4">
            <img src="/images/me.jpg" alt="Daniel de los Reyes" class="shadow rounded-full max-w-full h-auto align-middle border-none" />
          </div>
        </div>
        <ul class="actions">
          <li>
            <div class="dropdown inline-block relative">
              <a href="/cv.pdf" class="button big special py-2 px-8 inline-flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="flex-1">CV</span>
              </a>
              <ul class="dropdown-content absolute hidden text-gray-700 left-0 right-0">
                <li class="p-0">
                  <a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/cv.pdf">Spanish</a>
                </li>
                <li class="p-0">
                  <a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/cv_en.pdf">English</a>
                </li>
              </ul>
            </div>
          </li>
          <!--<li><router-link to="/projects" class="button big alt">Proyectos</router-link></li>-->
        </ul>
      </div>
    </section>

		<!-- One -->
    <!--<section id="one" class="wrapper style1">
      <header class="major">
        <h2>Cosas que puedes encontrar aquí</h2>
        <p>Tempus adipiscing commodo ut aliquam blandit</p>
      </header>
      <div class="container">
        <div class="row">
          <div class="4u">
            <section class="special box">
              <font-awesome-icon class="icon major p-6" icon="laptop" />
              <h3 class="text-lg mb-4">Proyectos Software</h3>
              <p>Tienes una colección de proyectos que desarrollé. Eres libre de consultar el código fuente y otros recursos.</p>
            </section>
          </div>
          <div class="4u">
            <section class="special box">
              <font-awesome-icon class="icon major p-6" icon="gamepad" />
              <h3 class="text-lg mb-4">Experimentos y juegos</h3>
              <p>Experimentos con tecnologías que voy descubriendo o conceptos rápidos de juegos.</p>
            </section>
          </div>
          <div class="4u">
            <section class="special box">
              <font-awesome-icon class="icon major p-6" icon="futbol" />
              <h3 class="text-lg mb-4">Tiempo libre</h3>
              <p>Para seguir mis intereses en mi tiempo libre, consulta mis redes sociales o contáctame.</p>
            </section>
          </div>
        </div>
      </div>
    </section>
		-->

		<!-- Two -->
    <section id="two" class="wrapper style1">
      <header class="major">
        <h2>Proyectos en curso...</h2>
        <!--<p>Amet nisi nunc lorem accumsan</p>-->
      </header>
      <div class="container">
        <div class="row">
          <div class="6u sm:my-6 lg:my-0">
            <section class="special">
              <img class="image fit" src="images/containers.jpg" alt="Docker Containers" />
              <h3>Curso de Kubernetes</h3>
              <p>
                Como parte de mi estudio de Docker y Kubernetes, estoy mejorando
                proyectos web anteriores para poder ser fácilmente mantenidos en el futuro.
                Esta misma web es uno de esos prototipos de proyecto.
              </p>
              <ul class="actions mt-4">
                <li><router-link to="/projects" class="button alt">Ver otros</router-link></li>
              </ul>
            </section>
          </div>
          <div class="6u sm:my-6 lg:my-0">
            <section class="special">
              <img class="image fit" src="images/azure.jpg" alt="Microsoft Azure" />
              <h3>Certificación en Azure</h3>
              <p>Actualmente tambien me encuentro estudiando las certificaciones Microsoft Azure Fundamentals y Azure Developer Associate.</p>
              <ul class="actions mt-4">
                <li><router-link to="/projects" class="button alt">Ver otros</router-link></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { faLaptop, faGamepad, faFutbol } from '@fortawesome/free-solid-svg-icons'

//library.add(faLaptop, faGamepad, faFutbol)
export default {
  name: 'Home',
  components: {
    //FontAwesomeIcon,
  },
  metaInfo: {
    title: 'Daniel de los Reyes - Inicio',
  },
}
</script>

<style lang="scss" scoped>
.dropdown:hover > .dropdown-content {
	display: block;
}
</style>