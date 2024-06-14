import { Sound } from 'svelte-sound';
import { writable } from 'svelte/store';


export const buzzerSound = writable<Sound>();