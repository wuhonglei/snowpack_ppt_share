// 加载本地模块
import { counter } from '/counter.js';
import { display } from './display.js';
counter();
display();

// 加载 node_modules 模块
// import {get } from './node_modules/lodash-es/lodash.js';
// console.info(get(window, 'location'));

// 导入 url 模块
// import { forEach } from 'https://unpkg.com/lodash-es@4.17.15/lodash.js';
// forEach([1, 2, 3], item => {
//     console.info(item);
// });

// TODO 举例直接演示 import { get } from 'lodash-es'

// import './style/base.css';