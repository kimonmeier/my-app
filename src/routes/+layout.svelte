<script lang="ts">
	import { Sound } from "svelte-sound";
	import soundFile from "$lib/buzzer.mp3";
	import { onMount } from "svelte";

	const help = new Sound(soundFile);

	onMount(() => {
		help.play();
	});
</script>

<slot></slot>
