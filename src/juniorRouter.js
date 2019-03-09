import VueRouter from 'vue-router'

// COMPONENT IMPORTS
import App from '@/components/App'
import Welcome from '@/components/Welcome'
import FurtherInstructions from '@/components/FurtherInstructions'
import Home from '@/views/Home'
import Forecast from '@/views/Forecast'

const appRoutes = [
    {
        path: 'welcome',
        name: 'welcome',
        component: Welcome
    },
    {
        path: 'instructions',
        name: 'instructions',
        component: FurtherInstructions
    },
    {
      path: 'home',
      name: 'home',
      component: Home
    },
    {
      path: 'forecast/:id',
      name: 'forecast',
      component: Forecast
    }
];

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/app',
      name: 'app',
      component: App,
      children: appRoutes
    },
    {
      path: '*', redirect: '/app/home'
    }
  ]
});