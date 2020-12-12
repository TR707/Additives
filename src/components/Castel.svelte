<script>
    import { createEventDispatcher } from 'svelte';
    import Button from "../shared/Button.svelte";
    import {everdes} from "../aditivos.js";
  
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
 

<p class="check">Indica el aditivo "E" que deseas consultar</p>
<input
    placeholder="ej: E333a"
    type="text"
    name="E"
    bind:value = {datos}/>
                                    
    <Button on:click={buscar}>Enviar</Button>
        {#if resultado === true}
            <p class="free">¡OK! Este aditivo está libre de crueldad animal</p>
            <img src="../img/corazon.png" alt="heart" class="heart"> 
        {/if}

        {#if resultado === false}
        <p class="blood">¡Cuidado! ¡Origen animal!</p>  
        {/if}
 