import { writable, derived } from 'svelte/store';
import toc from '$lib/data/toc.json'

export const location = writable({});

export const modulePages = derived(
    location,
    $location => toc.find(d => d.id == $location.t1).children.find(d => d.id == $location.m1).children
)