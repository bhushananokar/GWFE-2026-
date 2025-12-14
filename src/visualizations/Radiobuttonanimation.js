import { gsap } from 'gsap';

/**
 * Radio Button Animation Handler
 * Handles the elastic GSAP animations for navigation radio buttons
 */
class RadioButtonAnimation {
  constructor() {
    this.previousContainer = null;
  }

  /**
   * Get SVG rect nodes from a container
   * @param {HTMLElement} container - The radio button group container
   * @returns {Array} Array containing shuffled blue and pink rects
   */
  getNodes(container) {
    if (!container) return [[], []];
    
    const blueRects = gsap.utils.shuffle(
      Array.from(container.querySelectorAll('.blue rect'))
    );
    const pinkRects = gsap.utils.shuffle(
      Array.from(container.querySelectorAll('.pink rect'))
    );
    
    return [blueRects, pinkRects];
  }

  /**
   * Animate the SVG rectangles
   * @param {Array} nodes - Array of [blueRects, pinkRects]
   * @param {Boolean} isChecked - Whether to animate in or out
   */
  animateRects(nodes, isChecked) {
    // Animate blue rectangles
    gsap.to(nodes[0], {
      duration: 1.6,
      ease: 'elastic.out(1, 0.3)',
      xPercent: isChecked ? 100 : -100,
      stagger: 0.01,
      overwrite: true,
      delay: 0.13
    });

    // Animate pink rectangles
    gsap.to(nodes[1], {
      duration: 1.6,
      ease: 'elastic.out(1, 0.3)',
      xPercent: isChecked ? 100 : -100,
      stagger: 0.01,
      overwrite: true
    });
  }

  /**
   * Handle tab change animation
   * @param {HTMLElement} container - The selected radio button group container
   */
  handleChange(container) {
    const nodes = this.getNodes(container);

    // Animate out the previous selection
    if (this.previousContainer && this.previousContainer !== container) {
      const prevNodes = this.getNodes(this.previousContainer);
      this.animateRects(prevNodes, false);
    }

    // Animate in the new selection
    this.animateRects(nodes, true);
    this.previousContainer = container;
  }

  /**
   * Reset the animation state
   */
  reset() {
    this.previousContainer = null;
  }
}

export default RadioButtonAnimation;