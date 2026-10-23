import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Homeview.vue'
import History from '../components/History.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History', 
    component: History
  },
  {
    path: '/vision-mission',
    name: 'VisionMission',
    component: () => import('../components/Visionmission.vue')
  },
  {
    path: '/partners',
    name: 'Partners',
    component: () => import('../components/Partner.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../components/News.vue')
  },
  {
  path: '/lis',
  name: 'LibraryInformationScience',
  component: () => import('../components/Libraryinformationscience.vue')
  },
  {
  path: '/dmia',
  name: 'DigitalMedia',
  component: () => import('../components/Digitalmedia.vue')
  },
  {
  path: '/it',
  name: 'InformationTechnology',
  component: () => import('../components/Informationtechnology.vue')
  },
  {
  path: '/cs',
  name: 'ComputerScience',
  component: () => import('../components/Computerscience.vue')
  },
  {
  path: '/contact',
  name: 'Contact',
  component: () => import('../components/Contact.vue')
  },
  {
  path: '/news',
  name: 'News',
  component: () => import('../components/News.vue')
  },
  {
  path: '/news',
  name: 'Events',
  component: () => import('../components/News.vue')
  }
]
  
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
