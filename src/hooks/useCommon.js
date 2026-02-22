import { useState, useEffect, useCallback, useRef } from 'react';
import gsap from 'gsap';

/**
 * Hook to track window scroll position
 * @returns {number} Current scrollY position
 */
export const useWindowPosition = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return position;
};

/**
 * Hook to track mouse position
 * @returns {{x: number, y: number}} Mouse coordinates
 */
export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
};

/**
 * Hook to trigger animations based on scroll position
 * @param {number} triggerY - Scroll Y position to trigger animation
 * @param {number} resetY - Scroll Y position to reset animation (optional)
 * @returns {{doAnimate: boolean, hasAnimated: boolean, markAnimated: Function}}
 */
export const useScrollTrigger = (triggerY, resetY = null) => {
  const [doAnimate, setDoAnimate] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const scrollY = useWindowPosition();

  useEffect(() => {
    if (scrollY >= triggerY && !doAnimate && !hasAnimated) {
      setDoAnimate(true);
    }
    
    if (resetY && scrollY <= resetY) {
      setDoAnimate(false);
      setHasAnimated(false);
    }
  }, [scrollY, triggerY, resetY, doAnimate, hasAnimated]);

  const markAnimated = useCallback(() => {
    setHasAnimated(true);
    setDoAnimate(false);
  }, []);

  return { doAnimate, hasAnimated, markAnimated };
};

/**
 * Hook to animate elements with GSAP on scroll trigger
 * @param {Array} animations - Array of animation configs { ref, from, to, delay }
 * @param {boolean} trigger - Boolean to trigger animation
 * @param {boolean} hasAnimated - Boolean to prevent re-animation
 */
export const useGsapAnimation = (animations, trigger, hasAnimated) => {
  const animationRef = useRef(false);

  useEffect(() => {
    if (trigger && !hasAnimated && !animationRef.current) {
      animationRef.current = true;
      
      animations.forEach(({ ref, from, to, delay = 0 }) => {
        if (ref.current) {
          gsap.fromTo(ref.current, from, { ...to, delay });
        }
      });
    }
    
    if (!trigger) {
      animationRef.current = false;
    }
  }, [trigger, hasAnimated, animations]);
};

/**
 * Custom hook for intersection observer based animations
 * @param {Object} options - IntersectionObserver options
 * @returns {[React.RefObject, boolean]} - Ref to attach and visibility state
 */
export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, { threshold: 0.1, ...options });

    observer.observe(element);
    
    return () => observer.disconnect();
  }, [options]);

  return [ref, isInView];
};
