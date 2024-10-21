import { useTheme } from './context/ThemeContext';
import { Home } from './pages/home';
import './tailwind.css';
import ColorBurst from './components/colorBurst';


function App() {
  const { isDarkTheme, toggleTheme } = useTheme(); // Use the context properly here

  return (
    <div className="App">
      <div className="relative">
        {/* Theme toggle button */}
        <div
          className={`fixed right-8 top-8 z-50 h-8 w-8 cursor-pointer rounded-full transition-all duration-500 ${
            isDarkTheme ? "bg-lightThemeGradient" : "bg-darkThemeGradient"
          } shadow-custom border-1 border-white`}
          onClick={toggleTheme} // Use the theme toggle from the context
        ></div>

        {/* Background ColorBurst component */}
        <ColorBurst />

        {/* Main Home page */}
        <Home />
      </div>
    </div>
  );
}

export default App;
