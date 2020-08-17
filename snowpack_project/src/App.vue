<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
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
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: lightgreen;
	margin-top: 61px;
}
</style>
