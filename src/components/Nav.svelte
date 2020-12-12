<script context="module">

    import Castel from './Castel.svelte';
    import UK from './UK.svelte';
    import { createEventDispatcher } from 'svelte';
    import Button from "../shared/Button.svelte";
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

    export const navOptions = [
        { page: 'Castellano',   component: Castel },
        { page: 'English',   component: UK }, 
    ];
    </script>
