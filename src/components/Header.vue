<template>
  <header id="header" class="skel-layers-fixed">
    <h1><router-link to="/">Daniel de los Reyes</router-link></h1>
    <nav id="nav">
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/projects">Proyectos</router-link></li>
        <li><router-link to="/about">Sobre mí</router-link></li>
        <li><a href="mailto:danirele10@hotmail.com">Contacto</a></li>
        <li><a href="/cv.pdf" class="button special">CV</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import '@/assets/css/main.css'
export default {
    name: 'Header',
}
</script>

<style lang="scss" scoped>

</style>