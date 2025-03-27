import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLightMode = () => {
    setIsLightMode((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isLightMode ? 'bg-white' : 'dark bg-gray-900'}`}>
      {/* Header */}
      <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Raj.dev</a>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLightMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isLightMode ? (
                <Sun className="w-5 h-5 text-gray-600" />
              ) : (
                <Moon className="w-5 h-5 text-gray-200" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ?
                <X className="w-6 h-6 text-gray-600 dark:text-gray-200" /> :
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-200" />
              }
            </button>

            <Navigation isMenuOpen={isMenuOpen} />
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <footer className="bg-gray-50 dark:bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 Raj Malpure. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
