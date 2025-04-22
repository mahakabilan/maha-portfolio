import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <Header />
        <main className="p-4 space-y-12">
          <Home />
          <About />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
