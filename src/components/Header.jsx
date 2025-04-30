import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { toggleTheme, theme } = useTheme();

  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <h1 className="text-xl font-bold"> <a href="#top"> MK </a> </h1>
      <button onClick={toggleTheme} className="px-4 py-2 border rounded">
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

export default Header;
