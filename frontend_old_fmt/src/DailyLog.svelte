<script>
    import Tristate from "./tristate.svelte";
    // Create a component with 14 checkboxes

    import { resolutions, persons } from "./resolutions.js";

    // initialize resolution success to an array of false values of the same length as resolutions

    // default date of todays date YYYY-MM-DD (local timezone date)
    export let date = new Date().toISOString().slice(0, 10);
    export let successes = {}
    // export let successes = resolutions.map(resolution => false);
    // zip resolutions and resolutionSuccess into an array of objects

    import { writeEntry } from "./firebase.js";

    async function update_entry() {
        setTimeout(() => writeEntry(date, successes), 0); // timeout of 0 will push this to the end of the event loop
    }

    function cycle_state(state) {
        // null -> success -> failure -> success
        return state !== true;
    }


</script>

<main>
    <h2>{date}</h2>
    {#each persons as person, i}
        <h3>{person}</h3>
        <!-- iterate thru resolutions for this person -->
        {#each resolutions.filter(resolution => resolution.person === person) as resolution, i}
            <Tristate state={successes[resolution.id]} on:click={(event) => {successes[resolution.id] = cycle_state(event.detail); update_entry()}} >
                {resolution.text}
            </Tristate>
        {/each}
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
        font-size: 2.4em;
        padding: 20px;
    }
    h2 {
        margin: 0;
    }
    h3 {
        margin: 30px 0 5px 0;
    }
</style>