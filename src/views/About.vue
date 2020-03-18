<template>
  <section id="three" class="wrapper style1">
				<div class="container">
					<div class="row">
						<div class="8u">
							<section>
								<h1 class="mb-8">Sobre mí</h1>
								<img class="image fit" src="images/about.jpg" alt="Sobre mí" />
								<p class="my-2">Bienvenido. Soy <strong>Daniel de los Reyes</strong>.</p>
                <p><strong>Dandelea</strong> es el nombre de usuario que se me asignó en la Universidad de Sevilla, y creo que me pega. Soy un desarrollador de software con experiencias en muchos lenguajes.
                Mis intereses están relacionados con las actividades de DevOps y programación Back-End, aunque tambien he programado para Front-End y me encanta dedicar tiempo libre a la programación de videojuegos.</p>
                <p class="my-2">Soy un apasionado de la tecnología, los videojuegos y el cine.
                Esta web, desarrollada de manera artesanal en mi tiempo libre intenta ser un portfolio. Para acercarme a tí y tú a mí.
                Siéntete libre de consultar las secciones, proyectos y mis <a href="#social" class="indigo" v-smooth-scroll="{ duration: 2000, offset: -50 }">redes sociales</a>.</p>
							</section>
						</div>
						<div class="4u">
							<section class="my-4">
								<h3 class="mb-8">Date una vuelta</h3>
								<p>Si quieres más información sobre mi, consulta mi <a href="/cv" class="indigo">CV</a> o contáctame en <a href="#social" class="indigo" v-smooth-scroll="{ duration: 500, offset: -50 }"> redes sociales</a>.</p>
								<ul class="actions text-center my-2">
									<li><a href="/cv" class="button special">Curriculum</a></li>
								</ul>
							</section>
							<hr />
							<section class="my-6">
								<h3>Directorio</h3>
								<ul class="alt my-2 w-full">
                  <li><router-link to="/" class="indigo">Inicio</router-link></li>
									<li><router-link to="/projects" class="indigo">Proyectos</router-link></li>
									<li><a href="mailto:danirele10@hotmail.com" class="indigo">Contacto</a></li>
								</ul>
							</section>
						</div>
					</div>
				</div>
			</section>
</template>
<script>
export default {
  name: 'About',
	metaInfo: {
    title: 'Daniel de los Reyes - Sobre mí',
  },
}
</script>