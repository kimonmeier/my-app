<script lang="ts">
	import { buzzerSound } from '$lib/audioStore';
	import soundFile from '$lib/buzzer.mp3';
	import { Sound } from 'svelte-sound';

	$buzzerSound = new Sound(soundFile);
</script>

<slot></slot>
