import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


export const module = 'index.js';

import { circle } from './circle_import.js';
console.info('circle', circle);

import { cube } from './main.js';
console.info(cube(3));