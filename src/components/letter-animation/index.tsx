import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../../context/ThemeContext';
import './letterAnimation.css';

gsap.registerPlugin(ScrollTrigger);

interface LetterAnimationProps {
  text: string;
}

const LetterAnimation: React.FC<LetterAnimationProps> = ({ text }) => {
  const wordRefs = useRef<HTMLDivElement[]>([]);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    // Clear previous ScrollTriggers and animations
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf(wordRefs.current);

    // Set the grey color for each letter based on the theme
    wordRefs.current.forEach((word) => {
      Array.from(word.children).forEach((letter) => {
        const randomGrey = isDarkTheme ? randomLighterGrey() : randomDarkerGrey();
        gsap.set(letter, { color: randomGrey });
      });
    });

    // Animate each word when it comes into view or if it's already in view on load
    wordRefs.current.forEach((word, index) => {
      gsap.fromTo(
        word.children, // Target individual letters
        { opacity: 0, y: 50 }, // Initial state: hidden and moved down
        {
          opacity: 1,
          y: 0, // Animate to normal position
          stagger: 0.1, // Stagger the letter animations
          ease: 'power3.out',
          duration: 0.6,
          scrollTrigger: {
            trigger: word, // Trigger the animation when the word is in view
            start: 'top 50%', // Start animation when word is 80% from the top of the viewport
            toggleActions: 'play reset play reset', // Replay animation every time it comes into view
            markers: true, // Use markers for debugging if needed
            immediateRender: true, // Ensure correct animation rendering
            invalidateOnRefresh: true, // Update animation on refresh if already in view
          },
        }
      );
    });
  }, [isDarkTheme, text]);

  // Helper function to generate random lighter grey shades for dark theme
  const randomLighterGrey = () => {
    const greyValue = Math.floor(Math.random() * (220 - 170 + 1) + 170); // Lighter grey for dark mode
    return `rgb(${greyValue}, ${greyValue}, ${greyValue})`;
  };

  // Helper function to generate random darker grey shades for light theme
  const randomDarkerGrey = () => {
    const greyValue = Math.floor(Math.random() * (100 - 50 + 1) + 50); // Darker grey for light mode
    return `rgb(${greyValue}, ${greyValue}, ${greyValue})`;
  };

  return (
    <div className="letter-animation-container">
      {text.split(' ').map((word, wordIndex) => (
        <div
          key={wordIndex}
          ref={(el) => (wordRefs.current[wordIndex] = el!)} // Reference each word div
          className="word-line" // Custom class for styling each word on a new line
        >
          {word.split('').map((letter, letterIndex) => (
            <span key={letterIndex} className="letter">
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LetterAnimation;
