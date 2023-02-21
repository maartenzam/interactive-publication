import { writable, derived } from 'svelte/store';
import toc from '$lib/data/toc.json'

export const location = writable({});