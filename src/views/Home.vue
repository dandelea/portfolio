<template>
  <div>
    <!-- Banner -->
    <section id="banner">
      <div class="inner">
        <h2>Daniel de los Reyes Leal</h2>
        <p>Desarrollador</p>
        <ul class="actions">
          <li><a href="/cv.pdf" class="button big special">CV</a></li>
          <li><router-link to="/projects" class="button big alt">Proyectos</router-link></li>
        </ul>
      </div>
    </section>

		<!-- One -->
    <section id="one" class="wrapper style1">
      <header class="major">
        <h2>Cosas que puedes encontrar aquí</h2>
        <!--<p>Tempus adipiscing commodo ut aliquam blandit</p>-->
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
			
		<!-- Two -->
    <section id="two" class="wrapper style2">
      <header class="major">
        <h2>Proyectos en curso...</h2>
        <!--<p>Amet nisi nunc lorem accumsan</p>-->
      </header>
      <div class="container">
        <div class="row">
          <div class="6u sm:my-6 lg:my-0">
            <section class="special">
              <img class="image fit" src="images/containers.jpg" alt="Docker Containers" />
              <h3>Mejora de proyectos pasados</h3>
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLaptop, faGamepad, faFutbol } from '@fortawesome/free-solid-svg-icons'

library.add(faLaptop, faGamepad, faFutbol)
export default {
  name: 'Home',
  components: {
    FontAwesomeIcon,
  },
  metaInfo: {
    title: 'Daniel de los Reyes - Inicio',
  },
}
</script>
