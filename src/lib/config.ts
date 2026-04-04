/** Centralized config for magic numbers and tunable parameters. */

export const PAGINATION = {
  posts: 4,
  projects: 6
} as const;

export const EFFECTS = {
  snow: {
    count: 60,
    durationRange: [4, 10] as const,   // seconds
    delayMax: 5,                         // seconds
    sizeRange: [6, 18] as const,         // px
    opacityRange: [0.4, 1.0] as const
  },
  tremor: {
    translationScale: 12,
    rotationScale: 3,
    decayRate: 0.92,
    scrollBoost: 15,
    maxSpeed: 120
  },
  flood: {
    riseRate: 0.3,
    driftClamp: { x: 3, rotation: 8 },
    speedRange: [0.6, 1.2] as const,
    verticalDriftRange: [0.3, 0.8] as const
  }
} as const;
