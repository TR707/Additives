
<script>
	import Button from './shared/Button.svelte';
	import Header from './components/Header.svelte';
	import {everdes} from './aditivos';

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

<main>
	
	<Header />
	
	<h1>Free-cruelty additives</h1> 
	<p class="check">Type the "E" additive you want to check</p>
	<input
		placeholder="e.g.: E333a"
		type="text"
		name="E"
		bind:value = {datos}/>
										
		<Button on:click={buscar}>GO!</Button>
			{#if resultado === true}
				<p class="free">¡OK! This additive is free-cruelty</p>
				<img src="../img/corazon.png" alt="heart" class="heart"> 
			{/if}

			{#if resultado === false}
			<p class="blood">Watch out! Animal origin!</p>  
			{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
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
</style>