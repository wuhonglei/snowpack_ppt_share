<template>
	<div id="app">
		<div v-on-clickaway="away" class="menu">
			<button @click="showMenu=!showMenu">展开菜单</button>
			<ul v-if="showMenu">
				<li>item1</li>
				<li>item2</li>
				<li>item3</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
	name: "App",
	mixins: [clickaway],
	data() {
		return {
			showMenu: false,
		};
	},
	methods: {
		away() {
			console.info("click away");
			this.showMenu = false;
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}

.menu {
	width: 250px;
	border: 1px solid #ddd;
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
