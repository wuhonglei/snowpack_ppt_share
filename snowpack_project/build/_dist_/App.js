import './App.css.proxy.js';

import HelloWorld from "./components/HelloWorld.js";

const defaultExport = {
	name: "App",
	components: {
		HelloWorld,
	},
	data() {
		return {
			name: "wuhonglei",
		};
  },
  created() {
    console.info('created');
  },
	methods: {
		getName() {
			return this.name + '1';
		},
	},
};

import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "../web_modules/vue.js"
import _imports_0 from './assets/logo.png.proxy.js'


const _hoisted_1 = { id: "app" }
const _hoisted_2 = /*#__PURE__*/_createVNode("img", {
  alt: "Vue logo",
  src: _imports_0
}, null, -1)

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _hoisted_2
  ]))
}

defaultExport.render = render
export default defaultExport