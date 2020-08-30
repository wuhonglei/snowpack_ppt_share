/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import confetti from 'canvas-confetti';
import { forEach } from 'lodash-es';
forEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 12, 13, 15], item => {
    console.info(item);
})

confetti.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true,
})({ particleCount: 200, spread: 200 });

import { cube } from './utils/math.js';
console.info(cube(3));

import './style/base.css';

import people from './data/people.json';
people.forEach(item => {
    console.info(item.name);
});

import mountain from './assets/mountain.jpg';
console.info(mountain)
document.body.style.backgroundImage = `url(${mountain})`;

import { test } from 'wuhonglei';
test();

console.info(new Date().toString());

const name = 'wuhonglei';
if (name.startsWith('wu')) {
    console.info(name);
}