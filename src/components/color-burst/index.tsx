import React, { useEffect, useState } from 'react';

const ColorBurst: React.FC = () => {
  const [colors, setColors] = useState<{ color: string; x: number; y: number }[]>([]);

  const generateRandomColor = () => {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
  };

  const handleMouseMove = (event: MouseEvent) => {
    const newColor = {
      color: generateRandomColor(),
      x: event.clientX,
      y: event.clientY,
    };
    setColors((prevColors) => [...prevColors, newColor]);

    // Remove colors after a short duration
    setTimeout(() => {
      setColors((prevColors) => prevColors.filter((_, index) => index !== 0));
    }, 300); // Adjust duration as needed
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed', // Use fixed positioning to cover the whole page
        top: 0,
        left: 0,
        width: '100vw', // Full width
        height: '100vh', // Full height
        pointerEvents: 'none', // Ignore pointer events for this div
        overflow: 'hidden',
        zIndex: 1000, // Ensure it's above other content
      }}
    >
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            height: '20px', // Adjust size as needed
            width: '20px', // Adjust size as needed
            backgroundColor: color.color,
            left: color.x,
            top: color.y,
            pointerEvents: 'none',
            opacity: 1 - index * 0.2, // Adjust opacity for fading effect
            transform: 'translate(-50%, -50%)', // Center the burst around the cursor
            animation: 'burst 0.5s ease-in-out forwards', // Use CSS for animation
          }}
        />
      ))}
    </div>
  );
};

export default ColorBurst;
