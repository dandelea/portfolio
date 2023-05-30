<template>
    <footer id="footer">
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div id="social">
                <h2>Redes sociales</h2>
                <ul class="icons flex flex-wrap">
                    <li class="my-2">
                        <a href="https://es.linkedin.com/in/danieldelosreyes1">
                            <div class="text-center w-10 h-10 rounded-full bg-gray-300 hover:bg-linkedin hover:text-white cursor-pointer transition duration-500 ease-in-out transform hover:scale-125">
                                <font-awesome-icon :icon="['fab', 'linkedin']" class="w-10 h-10"/>
                            </div>
                        </a>
                    </li>
                    <li class="my-2">
                        <a href="https://github.com/dandelea">
                            <div class="text-center w-10 h-10 rounded-full bg-gray-300 hover:bg-github hover:text-white cursor-pointer transition duration-500 ease-in-out transform hover:scale-125">
                                <font-awesome-icon :icon="['fab', 'github']" class="w-10 h-10"/>
                            </div>
                        </a>
                    </li>
                    <li class="my-2">
                        <a href="mailto:danirele10@hotmail.com">
                            <div class="text-center w-10 h-10 rounded-full bg-gray-300 hover:bg-gmail hover:text-white cursor-pointer transition duration-500 ease-in-out transform flex items-center justify-center hover:scale-125">
                                <font-awesome-icon icon="paper-plane" class="w-6 h-6"/>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <ul class="copyright">
                <li>© Daniel de los Reyes Leal 2017 - 2023.</li>
                <li>Design: <a href="http://templated.co">TEMPLATED</a></li>
            </ul>
        </div>
    </footer>
</template>

<script>
import '@/assets/css/main.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

library.add(faLinkedin, faGithub, faPaperPlane)
export default {
    name: 'Footer',
    components: {
        FontAwesomeIcon,
    },
}
</script>

<style lang="scss" scoped>

footer#footer {
    background: #f8f8f8;
    @apply p-12 ;
}

</style>
