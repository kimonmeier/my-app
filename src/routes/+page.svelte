<script lang="ts">
    import { buzzerSound } from '$lib/audioStore';
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<button on:click="{() => $buzzerSound.play()}">Play Sound</button>
