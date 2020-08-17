import './HelloWorld.css.proxy.js';

const defaultExport = {
	name: "HelloWorld",
	props: {
		msg: String,
	},
	data() {
		return {
			name: "wuhonglei",
		};
	},
};

import { toDisplayString as _toDisplayString, createVNode as _createVNode, createTextVNode as _createTextVNode, createStaticVNode as _createStaticVNode, openBlock as _openBlock, createBlock as _createBlock, withScopeId as _withScopeId, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "../../web_modules/vue.js"
const _withId = /*#__PURE__*/_withScopeId("data-v-bd121d6a")

_pushScopeId("data-v-bd121d6a")
const _hoisted_1 = { class: "hello" }
const _hoisted_2 = /*#__PURE__*/_createStaticVNode("<p data-v-bd121d6a> For a guide and recipes on how to configure / customize this project, <br data-v-bd121d6a>check out the <a href=\"https://cli.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-bd121d6a>vue-cli documentation</a>. </p><h3 data-v-bd121d6a>Installed CLI Plugins</h3><ul data-v-bd121d6a><li data-v-bd121d6a><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel\" target=\"_blank\" rel=\"noopener\" data-v-bd121d6a>babel</a></li><li data-v-bd121d6a><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint\" target=\"_blank\" rel=\"noopener\" data-v-bd121d6a>eslint</a></li></ul><h3 data-v-bd121d6a>Essential Links</h3><ul data-v-bd121d6a><li data-v-bd121d6a><a href=\"https://vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-bd121d6a>Core Docs</a></li><li data-v-bd121d6a><a href=\"https://forum.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-bd121d6a>Forum</a></li><li data-v-bd121d6a><a href=\"https://chat.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-bd121d6a>Community Chat</a></li><li data-v-bd121d6a><a href=\"https://twitter.com/vuejs\" target=\"_blank\" rel=\"noopener\" data-v-bd121d6a>Twitter</a></li><li data-v-bd121d6a><a href=\"https://news.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-bd121d6a>News</a></li></ul><h3 data-v-bd121d6a>Ecosystem</h3><ul data-v-bd121d6a><li data-v-bd121d6a><a href=\"https://router.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-bd121d6a>vue-router</a></li><li data-v-bd121d6a><a href=\"https://vuex.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-bd121d6a>vuex</a></li><li data-v-bd121d6a><a href=\"https://github.com/vuejs/vue-devtools#vue-devtools\" target=\"_blank\" rel=\"noopener\" data-v-bd121d6a>vue-devtools</a></li><li data-v-bd121d6a><a href=\"https://vue-loader.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-bd121d6a>vue-loader</a></li><li data-v-bd121d6a><a href=\"https://github.com/vuejs/awesome-vue\" target=\"_blank\" rel=\"noopener\" data-v-bd121d6a>awesome-vue</a></li></ul>", 7)
_popScopeId()

export const render = /*#__PURE__*/_withId(function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _createVNode("h1", null, _toDisplayString(_ctx.msg), 1),
    _createVNode("h2", null, _toDisplayString(_ctx.name), 1),
    _hoisted_2
  ]))
})

defaultExport.render = render
export default defaultExport