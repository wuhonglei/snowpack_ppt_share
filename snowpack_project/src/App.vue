<template>
	<div id="wrapper">
		<button @click="showMenu=!showMenu" v-on-clickaway="away">展开菜单</button>
		<ul v-if="showMenu">
			<li>item1</li>
			<li>item2</li>
			<li>item3</li>
		</ul>
	</div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "App",
	components: {
		HelloWorld,
	},
	mixins: [clickaway],
	data() {
		return {
			name: "wuhonglei",
			showMenu: false,
		};
	},
	created() {
		console.info("created");
	},
	methods: {
		getName() {
			return this.name + "1";
		},
		away() {
			console.info("click aray");
		},
	},
};
</script>

<style>
#wrapper {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin-top: 61px;
}

ul {
	margin-top: 8px;
	width: 200px;
	background-color: lightskyblue;
}

ul > li {
	list-style: none;
}
</style>
