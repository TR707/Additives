
<script>
	import Header from './components/Header.svelte';
	import { navOptions } from  './components/Nav.svelte';
	import {everdes} from './aditivos';
	import Tabs from './shared/Tabs.svelte'; 
	import Card from './shared/Card.svelte';
	import Button from './shared/Button.svelte';

	let selected = navOptions[0];	
	let intSelected = 0;	

	function changeComponent(event) {
		selected = navOptions[event.srcElement.id];
		intSelected = event.srcElement.id;
	}

	var datos = "";
	var resultado = 'pendiente';
	var reg = new RegExp(/^[E,e]-?([0-9]{3}[a-zA-Z]?|[0-9]{4})$/, 'i');

	    function buscar() {
		datos = datos.toUpperCase();
        if (reg.test(datos)) {
			if (everdes.includes(datos)) {
				resultado = true;
				} else {
					resultado = false;
				}
		} else {
			window.alert('Ups!')
		}
	}
</script>
<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'>

<main>
	<Header />
	
	<h1>Free-cruelty additives</h1> 
	<div class="container">
		<ul class="nav nav-tabs loco">
			{#each navOptions as option, i}
			<li class="nav-item">
				<button class={intSelected==i ? "nav-link active p-2 ml-1 aktivo" : "p-2 ml-1 nav-link"} on:click={changeComponent} id={i} role="tab">{option.page}</button>
			</li>
			{/each}
		</ul>
		<div class="row">
			<div class="col-sm-12">
				<div class="p-2 negro">	
					<svelte:component this={selected.component}/>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 440px;
		margin: 0 auto;
		color:black;
	}
	h1 {
		font-family: 'Patrick Hand', cursive, -apple-system, BlinkMacSystemFont, 
					 "Segoe UI", Roboto, Oxygen-Sans;
		text-transform: uppercase;
		font-size: 2.4em;
		font-weight: 100;
		color:rgb(124,252,0);
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: black;
		margin-top: 15px;
      	margin-bottom: 10px;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	.aktivo {
		color:blue;
	}
</style>