<template>
  <div id="app" class="">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>

import '@/assets/css/main.css'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
