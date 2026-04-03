import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type ThemeFlavor = 'latte' | 'frappe' | 'macchiato' | 'mocha';
export type AccentColor =
  | 'rosewater' | 'flamingo' | 'pink' | 'mauve'
  | 'red' | 'maroon' | 'peach' | 'yellow'
  | 'green' | 'teal' | 'sky' | 'sapphire'
  | 'blue' | 'lavender';

const THEME_KEY = 'ctp-theme';
const ACCENT_KEY = 'ctp-accent';
const BG_EFFECT_KEY = 'ctp-bg-effect';

const SNOW_EFFECT_KEY = 'ctp-snow-effect';

function getInitial<T>(key: string, fallback: T): T {
  if (browser) {
    const stored = localStorage.getItem(key);
    if (stored) return stored as T;
  }
  return fallback;
}

export const theme = writable<ThemeFlavor>(getInitial(THEME_KEY, 'mocha'));
export const accent = writable<AccentColor>(getInitial(ACCENT_KEY, 'peach'));
export const bgEffect = writable<boolean>(
  browser ? localStorage.getItem(BG_EFFECT_KEY) !== 'false' : true
);
export const snowEffect = writable<boolean>(
  browser ? localStorage.getItem(SNOW_EFFECT_KEY) === 'true' : false
);

// Transient effects — not persisted to localStorage
export const blackHoleEffect = writable<boolean>(false);
export const mouseTremorEffect = writable<boolean>(false);

// Persist to localStorage
if (browser) {
  theme.subscribe((val) => {
    localStorage.setItem(THEME_KEY, val);
    document.documentElement.setAttribute('data-theme', val);
  });

  accent.subscribe((val) => {
    localStorage.setItem(ACCENT_KEY, val);
    document.documentElement.setAttribute('data-accent', val);
  });

  bgEffect.subscribe((val) => {
    localStorage.setItem(BG_EFFECT_KEY, String(val));
  });

  snowEffect.subscribe((val) => {
    localStorage.setItem(SNOW_EFFECT_KEY, String(val));
  });
}

export const ACCENT_COLORS: AccentColor[] = [
  'rosewater', 'flamingo', 'pink', 'mauve',
  'red', 'maroon', 'peach', 'yellow',
  'green', 'teal', 'sky', 'sapphire',
  'blue', 'lavender'
];

export const THEME_FLAVORS: { value: ThemeFlavor; label: string }[] = [
  { value: 'latte', label: 'Latte' },
  { value: 'frappe', label: 'Frappé' },
  { value: 'macchiato', label: 'Macchiato' },
  { value: 'mocha', label: 'Mocha' }
];
