<template>
    <footer id="footer">
        <div class="container">
            <div class="flex flex-col lg:flex-row">
                <div id="collaborations" class="w-full mb-6 lg:mb-0 lg:w-1/2">
                    <div class="row collapse-at-2">
                        <div class="6u">
                            <h3 class="mb-6">Colaboraciones en:</h3>
                            <ul class="alt">
                                <li><span class="icon tribu-icon"></span><a href="http://www.latribugamer.es/">LaTribuGamer</a></li>
                                <li><span class="icon cocodigo-icon"></span><a href="http://cocodigo.com/">Cocódigo</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="social" class="w-full lg:w-1/2">
                    <h2>Redes sociales</h2>
                    <ul class="icons flex flex-wrap">
                        <li class="my-2">
                            <a href="https://twitter.com/RockBell__">
                                <div class="text-center w-10 h-10 rounded-full bg-gray-300 hover:bg-twitter hover:text-white cursor-pointer transition duration-500 ease-in-out transform hover:scale-125">
                                    <font-awesome-icon :icon="['fab', 'twitter']" class="w-10 h-10"/>
                                </div>
                            </a>
                        </li>
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
                                <div class="text-center w-10 h-10 rounded-full bg-gray-300 hover:bg-gmail hover:text-white cursor-pointer transition duration-500 ease-in-out transform hover:scale-125">
                                    <font-awesome-icon icon="paper-plane" class="w-10 h-10"/>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <ul class="copyright">
                <li>© Daniel de los Reyes Leal 2017 - 2020.</li>
                <li>Design: <a href="http://templated.co">TEMPLATED</a></li>
            </ul>
        </div>
    </footer>
</template>

<script>
import '@/assets/css/main.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter, faLinkedin, faGithub, faPaperPlane)
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
    @apply py-20 ;
}

</style>