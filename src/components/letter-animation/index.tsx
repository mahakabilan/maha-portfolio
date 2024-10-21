import './letterAnimation.css';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface LetterAnimationProps {
  text: string;
}

const LetterAnimation: React.FC<LetterAnimationProps> = ({ text }) => {
  const { isDarkTheme } = useTheme(); // Access theme from context
  const [letterColors, setLetterColors] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false); // Track visibility
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the animation container

  const colors = {
    light: ['#333', '#555', '#777', '#999'], // Darker shades for light theme
    dark: ['#EEE', '#CCC', '#AAA', '#888'],  // Lighter shades for dark theme
  };

  // Color generation function per letter
  const generateColors = () => {
    const newColors = text.split('').map(() => {
      return isDarkTheme
        ? colors.dark[Math.floor(Math.random() * colors.dark.length)]
        : colors.light[Math.floor(Math.random() * colors.light.length)];
    });
    setLetterColors(newColors);
  };

  // Generate new colors whenever text or theme changes
  useEffect(() => {
    generateColors();
  }, [text, isDarkTheme]);

  // Intersection Observer to track when the element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Update visibility state
      },
      { threshold: 0.1 } // Trigger when 10% of the component is in view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  if (!letterColors.length) {
    return null; // Avoid rendering if colors haven't been generated
  }

  return (
    <div ref={containerRef} className="letter-animation">
      {text.split(' ').map((word, wordIndex) => (
        <div key={wordIndex} className="word">
          {word.split('').map((letter, letterIndex) => (
            <span
              key={letterIndex}
              className={`letter ${isVisible ? 'animate' : ''}`}
              style={{
                color: letterColors[letterIndex],
                animationDelay: `${(wordIndex + letterIndex) * 0.1}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LetterAnimation;
