import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Language = 'EN' | 'ID';
const LANGUAGE_KEY = 'arya-language';

function getInitialLanguage(): Language {
  if (browser) {
    const stored = localStorage.getItem(LANGUAGE_KEY);
    if (stored === 'EN' || stored === 'ID') return stored as Language;
    
    // Auto-detect browser language
    if (navigator.language && navigator.language.toLowerCase().startsWith('id')) {
      return 'ID';
    }
  }
  return 'EN';
}

export const language = writable<Language>(getInitialLanguage());

if (browser) {
  language.subscribe((val) => {
    localStorage.setItem(LANGUAGE_KEY, val);
    document.documentElement.setAttribute('lang', val.toLowerCase());
  });
}
