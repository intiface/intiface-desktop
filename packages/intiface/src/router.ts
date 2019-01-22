import Vue from 'vue';
import Router from 'vue-router';
import ServerPanel from './components/ServerPanel/ServerPanel';
import AboutPanel from './components/AboutPanel/AboutPanel';
import SettingsPanel from './components/SettingsPanel/SettingsPanel';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/server',
      name: 'Server',
      component: ServerPanel
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsPanel
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPanel
    },
  ],
});
