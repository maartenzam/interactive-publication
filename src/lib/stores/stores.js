import { readable, writable } from 'svelte/store';
import { browser } from '$app/environment';

export const location = writable({type: 'home'});

const checkMobile = (win) => win.innerWidth < 1024;

export const isMobile = readable(false /* <- initial value, since we don't have access to window here */, function start(set) {
  if (browser) {
    set(checkMobile(window));

    const resize = () => {
      set(checkMobile(window));
    };

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }
});