<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let menus;
    export let menuActivo;
</script>

<div class="container">
    <div class="row">
        <div class="col s12 aktivo">
            <div class="tabs">
                <ul>
                    {#each menus as menu}
                    <li on:click={() => dispatch('tabChange', menu)}>
                        <div class:active={menu === menuActivo} >{menu}</div>
                    </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</div>

<style>
    .tabs{
        margin-bottom: 40px;       
    }
    ul{
        display: flex; 
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    li{
        margin: 0 16px;
        font-size: 4.5vw;
        color: black;
        cursor: pointer;
    }
    .aktivo{
        color: blue;
    }
</style>