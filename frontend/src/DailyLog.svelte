<script>
    // Create a component with 14 checkboxes

    import { tick } from "svelte";

    import { resolutions} from "./resolutions.js";
    // initialize resolution success to an array of false values of the same length as resolutions

    // default date of todays date YYYY-MM-DD (local timezone date)
    export let date = new Date().toISOString().slice(0, 10);
    export let successes = resolutions.map(resolution => false);
    // zip resolutions and resolutionSuccess into an array of objects

    import { writeEntry} from "./firebase.js";

    async function update_entry(event) {
        setTimeout(() => writeEntry(date, successes), 0); // timeout of 0 will push this to the end of the event loop
    }


</script>

<main>
    <h1>{date}</h1>
    {#each resolutions as resolution, i}
        <label for={resolution}>
            <input type="checkbox"  on:change={update_entry}  id={resolution} bind:checked={successes[i]} />
            {resolution}
        </label>
    {/each}
</main>

<style>
    /* create a vertical flex box with left aligned content */
    main {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border: 2px solid black;
        border-radius: 5px;
        background-color: white;
    }
    label {
        display: flex;
        align-items: center;
        font-size: 1.5em;
        margin: 1em;
    }
    input {
        margin-right: 0.5em;
        /* make the checkbox bigger  while keeping it vertically aligned with the label */
        transform: scale(2);
        transform-origin: right top;
    }
    h1 {
        margin: 0.5em;
    }
</style>