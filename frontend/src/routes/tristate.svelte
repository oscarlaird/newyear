<script>
        import { createEventDispatcher} from "svelte";
        const dispatch = createEventDispatcher();

        export let state;
        // let states = [null, true, false];
	    // let state_idx = states.indexOf(state); // initial state idx
	    // $: state = states[state_idx];
        // $: color = {null:'black', true: 'darkgreen', false: 'red'}[state];
        const color = {undefined: 'black', null:'black', true: 'darkgreen', false: 'red'}[state];
        // $: text = {null: 'any', true: 'yes', false: 'no'}[state];
	    // function cycle_state() {
		    // // if the state is null or true, increase the index by one
            // // if the state is false, set it to true by setting state_idx to 0
            // state_idx += state === false ? -1 : 1;
	    // }

</script>

<!-- make the label have color color -->
<label style="color: {color}">
  <input on:click|preventDefault={() => dispatch('click', state)} type="checkbox" indeterminate={state===false} checked={state===true || state===false} />
    <slot></slot>
</label>

<style>
	input {
        transform: scale(2.4);
        transform-origin: bottom left;
        margin-right: 25px;
	}
    label {
      /* margin-left: 10px; */
    }
</style>
