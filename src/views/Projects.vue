<template>
  <div class="container text-center w-3/4">
    <div class="flex my-6 mb-4 p-4 rounded-md bg-gray-100 items-center">
      <div class="w-1/4 relative text-center">
        <button class="bg-gray-400 hover:bg-gray-500 text-gray-700 font-bold rounded px-2 py-2" @click="invertOrder">
          <svg v-if="inverseOrder" class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          <svg v-if="!inverseOrder" class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M 10.707,7.293 10,6.586 4.343,12.243 5.757,13.657 10,9.415 l 4.243,4.242 1.414,-1.414 z"/></svg>
        </button>
      </div>
      <div class="w-3/4 relative">
        <select class="bg-gray-400 hover:bg-gray-500 font-bold border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded focus:outline-none focus:border-gray-500 focus:bg-white" id="grid-state"
          v-model="sortProductsBy" v-on:change="sortProductsBy = $event.target.value">
          <option value="name">Nombre</option>
          <option value="start_date">Fecha de inicio</option>
          <option value="end_date">Fecha de fin</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="flex my-6 mb-4">
      <div class="w-4/5">
        <div class="w-full lg:flex my-6 rounded border-solid border border-gray-300" v-for="(project, project_i) in projects" :key="project_i">
          <div
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden cursor-pointer"
            :style="`background-image: url('images/projects/${project.image_urls[0]}')`"
            :title="project.name">
          </div>
          <!--<div
            v-for="(image, image_i) in project.image_urls"
            :key="image_i"
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden cursor-pointer"
            :class="{'hidden': image_i !== 0}"
            :style="`background-image: url('images/projects/${image}')`"
            :title="project.name">
          </div>-->
          <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-3">
              <div class="text-sm text-grey-dark flex items-center float-right py-1 px-3">
                <div v-if="project.end_date" class="flex">
                  <font-awesome-icon icon="hourglass-end" class="mx-2 my-1" />
                  {{project.end_date | date}}
                </div>
                <div v-if="!project.end_date" class="flex">
                  <font-awesome-icon icon="hourglass-half" class="mx-2 my-1" />
                  En curso
                </div>
              </div>
              <div class="text-sm text-grey-dark flex items-center py-1 px-3">
                <font-awesome-icon icon="hourglass-start" class="mx-2 my-1" />
                {{project.start_date | date}}
              </div>
              <div class="text-black font-bold text-xl mb-2">{{project.name}}</div>
              <p class="text-grey-darker text-base text-justify">{{project.description}}</p>
            </div>
            <div class="flex flex-wrap mx-2 text-center">
              <a :href="url.link" class="flex items-center m-1 mx-auto p-2"
                v-for="(url, url_i) in project.urls" :key="url_i">
                <div class="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition duration-500 ease-in-out transform hover:scale-125">
                  <font-awesome-icon :icon="url.icon" class="w-10 h-10"/>
                </div>
              </a>
              <!--<a :href="url.link" class="w-2/5 flex items-center m-1 mx-auto p-2 rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer"
                v-for="(url, url_i) in project.urls" :key="url_i">
                <div class="w-10 h-10 rounded-full mr-4 bg-gray-400">
                  <font-awesome-icon :icon="url.icon" class="w-10 h-10"/>
                </div>
                <div class="text-sm">
                  <p class="text-black leading-none">{{url.name}}</p>
                </div>
              </a>-->
            </div>
          </div>
        </div>
        <div class="w-full bg-yellow-200 rounded p-8 my-6 text-lg" v-show="!projects.length">
          <p>No hay proyectos con estas etiquetas.</p>
        </div>
      </div>
      <div class="w-1/5 ml-6 text-left items-center">
        <div class="list-group my-4">
          <button class="bg-gray-400 hover:bg-gray-500 text-gray-700 font-bold rounded px-3 py-2" @click="clearFilters" role="button">
            Limpiar filtros <font-awesome-icon icon="eraser" class="ml-3" />
          </button>
        </div>
        
        <div class="list-group my-4 flex flex-col">
          <a href="#" class="w-full px-3 py-2 font-bold border border-black hover:bg-gray-200" @click="completionFilterMode($event, 'pending')">
            <font-awesome-icon :icon="completionFilter === 'pending' ? ['far', 'check-square'] : ['far', 'square']" />
            <span class="ml-2 float-right">En curso</span>
          </a>
          <a href="#" class="w-full px-3 py-2 font-bold border border-black hover:bg-gray-200" @click="completionFilterMode($event, 'complete')">
            <font-awesome-icon :icon="completionFilter === 'complete' ? ['far', 'check-square'] : ['far', 'square']" />
            <span class="ml-2 float-right">Completos</span>
          </a>
        </div>
        <div class="list-group my-4 flex flex-col">
          <a href="#" class="w-full px-3 py-2 font-bold border border-black hover:bg-gray-200" @click="categoryFilterMode($event, 'games')">
            <font-awesome-icon :icon="categoryFilter === 'games' ? ['far', 'check-square'] : ['far', 'square']" />
            <span class="ml-2 float-right">Juegos</span>
          </a>
          <a href="#" class="w-full px-3 py-2 font-bold border border-black hover:bg-gray-200" @click="categoryFilterMode($event, 'web')">
            <font-awesome-icon :icon="categoryFilter === 'web' ? ['far', 'check-square'] : ['far', 'square']" />
            <span class="ml-2 float-right">Web</span>
          </a>
          <a href="#" class="w-full px-3 py-2 font-bold border border-black hover:bg-gray-200" @click="categoryFilterMode($event, 'ai')">
            <font-awesome-icon :icon="categoryFilter === 'ai' ? ['far', 'check-square'] : ['far', 'square']" />
            <span class="ml-2 float-right">AI</span>
          </a>
          <a href="#" class="w-full px-3 py-2 font-bold border border-black hover:bg-gray-200" @click="categoryFilterMode($event, 'hardware')">
            <font-awesome-icon :icon="categoryFilter === 'hardware' ? ['far', 'check-square'] : ['far', 'square']" />
            <span class="ml-2 float-right">Hardware</span>
          </a>
          <a href="#" class="w-full px-3 py-2 font-bold border border-black hover:bg-gray-200" @click="categoryFilterMode($event, 'android')">
            <font-awesome-icon :icon="categoryFilter === 'android' ? ['far', 'check-square'] : ['far', 'square']" />
            <span class="ml-2 float-right">Android</span>
          </a>
          <a href="#" class="w-full px-3 py-2 font-bold border border-black hover:bg-gray-200" @click="categoryFilterMode($event, 'image')">
            <font-awesome-icon :icon="categoryFilter === 'image' ? ['far', 'check-square'] : ['far', 'square']" />
            <span class="ml-2 float-right">Imagen</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from '@/assets/data/projects.json'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEraser, faHourglassStart, faHourglassHalf, faHourglassEnd, faLink, faDownload, faDesktop, faBook } from '@fortawesome/free-solid-svg-icons'
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faYoutube, faAndroid } from '@fortawesome/free-brands-svg-icons'

library.add(
  faEraser,
  faHourglassStart,
  faHourglassHalf,
  faHourglassEnd,
  faLink,
  faDownload,
  faDesktop,
  faBook,
  faSquare,
  faCheckSquare,
  faGithub,
  faYoutube,
  faAndroid
)

export default {
  name: 'Projects',
  components: {
    FontAwesomeIcon,
  },
  metaInfo: {
    title: 'Daniel de los Reyes - Proyectos',
  },
  data: function() {
    return {
      inverseOrder: true,
      sortProductsBy: 'end_date',

      categoryFilter: null,
      completionFilter: null,
    }
  },
  computed: {
    projects: function() {
      let result = projects.filter((project) => {
        
        let completionFilter = true
        if (this.completionFilter) {
          let now = moment()
          switch (this.completionFilter) {
            case 'pending':
              completionFilter = moment(project.start_date, 'YYYY-MM-DD').isBefore(now)
                && (!project.end_date || moment(project.end_date, 'YYYY-MM-DD').isAfter(now))
              break
            case 'complete':
            default:
              completionFilter = moment(project.end_date, 'YYYY-MM-DD').isBefore(now)
              break
          }
        }

        let categoryFilter = true
        if (this.categoryFilter) {
          categoryFilter = this.categoryFilter.toUpperCase() === project.category.toUpperCase()
        }

        return completionFilter && categoryFilter
      })
      result.sort((a,b) => (a[this.sortProductsBy] > b[this.sortProductsBy]) ? 1 : ((b[this.sortProductsBy] > a[this.sortProductsBy]) ? -1 : 0))
      if (this.inverseOrder) {
        result.reverse()
      }
      return result
    }
  },
  methods: {
    clearFilters: function() {
      this.categoryFilter = null
      this.completionFilter = null
    },
    categoryFilterMode: function (event, mode) {
      event.preventDefault()
      if (this.categoryFilter === mode) {
        this.categoryFilter = null;
      } else {
        this.categoryFilter = mode;
      }
    },
    completionFilterMode: function(event, mode) {
      event.preventDefault()
      if (this.completionFilter === mode) {
        this.completionFilter = null;
      } else {
        this.completionFilter = mode;
      }
    },
    invertOrder: function() {
      this.inverseOrder = !this.inverseOrder
    },
  },
}
</script>
<style lang="scss" scoped>
</style>