/**
 * Application constants
 */

// Google Brand Colors
export const COLORS = {
  BLUE: '#4285f4',
  RED: '#ea4335',
  YELLOW: '#fbbc04',
  GREEN: '#34a853',
  ORANGE: '#FF6B35',
  CYAN: '#00BCD4',
  PURPLE: '#9C27B0',
  MAGENTA: '#E91E63',
  DARK: '#1a1a2e',
  NAVY: '#2a2d4a',
  LIGHT: '#ffffff',
  CREAM: '#FFF5E6'
};

// Section configuration
export const SECTIONS = {
  HERO: 0,
  STATS: 1,
  LEARN: 2,
  HACK: 3,
  JOIN: 4
};

export const SECTION_NAMES = [
  'Hero',
  'Stats',
  'Learn',
  'Hack',
  'Join'
];

// Animation durations (in ms)
export const ANIMATION_DURATION = {
  FAST: 300,
  NORMAL: 600,
  SLOW: 1000,
  VERY_SLOW: 2000
};

// Easing functions
export const EASING = {
  EASE_OUT_QUAD: 'easeOutQuad',
  EASE_OUT_EXPO: 'easeOutExpo',
  EASE_IN_OUT_QUAD: 'easeInOutQuad',
  EASE_OUT_ELASTIC: 'easeOutElastic(1, .6)',
  LINEAR: 'linear'
};

// Breakpoints (in px)
export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 968,
  LARGE: 1400
};

// Scroll settings
export const SCROLL_CONFIG = {
  TOTAL_SECTIONS: 5,
  SMOOTH_SCROLL_DURATION: 1000,
  THROTTLE_DELAY: 16 // ~60fps
};

// Stats data
export const STATS_DATA = [
  { number: 5000, label: 'Developers', suffix: '+' },
  { number: 100, label: 'Speakers', suffix: '+' },
  { number: 50, label: 'Sessions', suffix: '+' },
  { number: 600, label: 'GDSCs', suffix: '+' }
];

// Event information
export const EVENT_INFO = {
  NAME: 'GDG WOW 2025',
  FULL_NAME: 'Wonder of Wonders 2025',
  DATE: 'February 15-17, 2025',
  LOCATION: 'Pan India',
  ORGANIZER: 'Google Developer Groups'
};

// Navigation links
export const NAV_LINKS = [
  { label: 'Home', section: 0, href: '#section-1' },
  { label: 'Stats', section: 1, href: '#section-2' },
  { label: 'Learn', section: 2, href: '#section-3' },
  { label: 'Hack', section: 3, href: '#section-4' },
  { label: 'Join', section: 4, href: '#section-5' }
];

// Social media links
export const SOCIAL_LINKS = {
  TWITTER: '#',
  LINKEDIN: '#',
  INSTAGRAM: '#',
  DISCORD: '#',
  GITHUB: '#'
};

// Visualization config
export const VIZ_CONFIG = {
  DOTS_COUNT: 150,
  GRID_COLS: 15,
  GRID_ROWS: 10,
  TICK_COUNT: 120,
  CONTAINER_SIZE: 600,
  PERSPECTIVE: 1500
};

// API endpoints (placeholder)
export const API_ENDPOINTS = {
  REGISTER: '/api/register',
  NEWSLETTER: '/api/newsletter',
  CONTACT: '/api/contact'
};

export default {
  COLORS,
  SECTIONS,
  SECTION_NAMES,
  ANIMATION_DURATION,
  EASING,
  BREAKPOINTS,
  SCROLL_CONFIG,
  STATS_DATA,
  EVENT_INFO,
  NAV_LINKS,
  SOCIAL_LINKS,
  VIZ_CONFIG,
  API_ENDPOINTS
};