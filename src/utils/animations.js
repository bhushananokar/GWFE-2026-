import anime from 'animejs';

/**
 * Animation utilities using Anime.js
 */

// Smooth scroll to section
export const scrollToSection = (sectionIndex, duration = 1000) => {
  const targetY = sectionIndex * window.innerHeight;
  
  anime({
    targets: document.documentElement,
    scrollTop: targetY,
    duration: duration,
    easing: 'easeInOutQuad'
  });
};

// Fade in animation
export const fadeIn = (targets, options = {}) => {
  return anime({
    targets,
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutQuad',
    ...options
  });
};

// Slide up animation
export const slideUp = (targets, options = {}) => {
  return anime({
    targets,
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 800,
    easing: 'easeOutQuad',
    ...options
  });
};

// Scale in animation
export const scaleIn = (targets, options = {}) => {
  return anime({
    targets,
    opacity: [0, 1],
    scale: [0.8, 1],
    duration: 600,
    easing: 'easeOutElastic(1, .6)',
    ...options
  });
};

// Stagger animation
export const staggerAnimation = (targets, animationProps = {}, staggerDelay = 100) => {
  return anime({
    targets,
    delay: anime.stagger(staggerDelay),
    easing: 'easeOutQuad',
    ...animationProps
  });
};

// Counter animation
export const animateCounter = (element, target, duration = 2000) => {
  return anime({
    targets: element,
    innerHTML: [0, target],
    duration: duration,
    round: 1,
    easing: 'easeOutExpo'
  });
};

// Rotate animation
export const rotate = (targets, degrees = 360, options = {}) => {
  return anime({
    targets,
    rotate: degrees,
    duration: 1000,
    easing: 'easeInOutQuad',
    ...options
  });
};

// 3D transform animation
export const transform3D = (targets, transformProps = {}, options = {}) => {
  return anime({
    targets,
    duration: 600,
    easing: 'easeOutQuad',
    ...transformProps,
    ...options
  });
};

// Timeline animation
export const createTimeline = (options = {}) => {
  return anime.timeline({
    easing: 'easeOutExpo',
    ...options
  });
};

// Bounce animation
export const bounce = (targets, options = {}) => {
  return anime({
    targets,
    translateY: [
      { value: -20, duration: 300 },
      { value: 0, duration: 300 },
      { value: -10, duration: 200 },
      { value: 0, duration: 200 }
    ],
    easing: 'easeOutQuad',
    ...options
  });
};

// Pulse animation
export const pulse = (targets, options = {}) => {
  return anime({
    targets,
    scale: [1, 1.1, 1],
    duration: 1000,
    easing: 'easeInOutQuad',
    loop: true,
    ...options
  });
};

// Shake animation
export const shake = (targets, options = {}) => {
  return anime({
    targets,
    translateX: [
      { value: -10, duration: 100 },
      { value: 10, duration: 100 },
      { value: -10, duration: 100 },
      { value: 10, duration: 100 },
      { value: 0, duration: 100 }
    ],
    easing: 'easeInOutQuad',
    ...options
  });
};

export default {
  scrollToSection,
  fadeIn,
  slideUp,
  scaleIn,
  staggerAnimation,
  animateCounter,
  rotate,
  transform3D,
  createTimeline,
  bounce,
  pulse,
  shake
};