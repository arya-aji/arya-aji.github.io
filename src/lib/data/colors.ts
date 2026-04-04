import type { AccentColor } from '$lib/stores/theme';

/** Latte-flavor hex values for accent colors (used for inline styles outside CSS vars). */
export const accentHexMap: Record<AccentColor, string> = {
  rosewater: '#dc8a78',
  flamingo: '#dd7878',
  pink: '#ea76cb',
  mauve: '#8839ef',
  red: '#d20f39',
  maroon: '#e64553',
  peach: '#fe640b',
  yellow: '#df8e1d',
  green: '#40a02b',
  teal: '#179299',
  sky: '#04a5e5',
  sapphire: '#209fb5',
  blue: '#1e66f5',
  lavender: '#7287fd'
};

/** Mocha-flavor hex values for accent color swatches. */
export const accentSwatchMap: Record<AccentColor, string> = {
  rosewater: '#f5e0dc',
  flamingo: '#f2cdcd',
  pink: '#f5c2e7',
  mauve: '#cba6f7',
  red: '#f38ba8',
  maroon: '#eba0ac',
  peach: '#fab387',
  yellow: '#f9e2af',
  green: '#a6e3a1',
  teal: '#94e2d5',
  sky: '#89dceb',
  sapphire: '#74c7ec',
  blue: '#89b4fa',
  lavender: '#b4befe'
};

/** Tag-to-Catppuccin CSS variable color mapping for posts and projects. */
export const tagColors: Record<string, string> = {
  // Languages & frameworks
  svelte: 'var(--ctp-peach)',
  sveltekit: 'var(--ctp-flamingo)',
  python: 'var(--ctp-yellow)',
  typescript: 'var(--ctp-sky)',
  javascript: 'var(--ctp-yellow)',
  fastapi: 'var(--ctp-green)',
  docker: 'var(--ctp-sapphire)',

  // Topics
  aws: 'var(--ctp-peach)',
  lambda: 'var(--ctp-yellow)',
  debugging: 'var(--ctp-red)',
  cdk: 'var(--ctp-mauve)',
  sso: 'var(--ctp-lavender)',
  meta: 'var(--ctp-teal)',
  'web-dev': 'var(--ctp-green)',
  async: 'var(--ctp-sky)',
  async2: 'var(--ctp-sky)',
  streaming: 'var(--ctp-sapphire)',
  agno: 'var(--ctp-mauve)',
  'ai-streaming': 'var(--ctp-pink)',
  cancellation: 'var(--ctp-red)',
  redis: 'var(--ctp-red)',

  // Project-specific
  geospasial: 'var(--ctp-green)',
  bps: 'var(--ctp-blue)',
  'data-viz': 'var(--ctp-mauve)',
  dashboard: 'var(--ctp-flamingo)',
  analytics: 'var(--ctp-sapphire)',
  vercel: 'var(--ctp-text)',
  automation: 'var(--ctp-blue)',
  mobile: 'var(--ctp-teal)',
  scripting: 'var(--ctp-pink)',
  'data-visualization': 'var(--ctp-maroon)',
  'e-voting': 'var(--ctp-red)',
  web: 'var(--ctp-blue)',
  polling: 'var(--ctp-sky)',
  geocoding: 'var(--ctp-green)',
  productivity: 'var(--ctp-teal)',
  'github-pages': 'var(--ctp-overlay2)',
  portfolio: 'var(--ctp-lavender)',
  catppuccin: 'var(--ctp-mauve)'
};
