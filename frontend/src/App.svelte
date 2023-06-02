<script>
	import DailyLog from './DailyLog.svelte';
	import { entries } from "./firebase.js";
	$: entry_list = [...Object.values($entries)].sort((a, b) => new Date(b.date) - new Date(a.date));
</script>

<main>
	<h1>NEW YEAR'S RESOLUTIONS</h1>
	<!-- use an #each block to show each entry -->
	{#each entry_list as entry (entry.date)}
		<DailyLog date={entry.date} successes={entry.successes} />
	{/each}

</main>

<style>
	/* put the DailyLogs in a columnar flexbox with max width of 800px and flex spacing of 100px */
	main {
		display: flex;
		flex-direction: column;
		max-width: 1100px;
		margin: 100px auto;
		gap: 60px;
	}
	h1 {
		text-align: center;
		font-size: 3em;
		color: black;
		text-decoration: underline;
	}
</style>
