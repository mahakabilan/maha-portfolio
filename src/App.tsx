import { ThemeProvider, useTheme } from './context/ThemeContext'; // Adjust the import path
import { Home } from "./pages/home";
import './index.css'; 
import ColorBurst from "./components/color-burst";

const ThemeToggle: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div
      className={`fixed right-8 top-8 z-50 h-8 w-8 cursor-pointer rounded-full  ${
        isDarkTheme ? "bg-lightThemeGradient" : "bg-darkThemeGradient"
      } shadow-custom border-1 border-white`}
      onClick={toggleTheme}
    >
    </div>
  );

};

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <div>
          <ThemeToggle />
          <ColorBurst />
          <Home />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
