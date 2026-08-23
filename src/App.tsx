import { ThemeProvider } from './contexts/ThemeContext';
import { Home } from './pages/home';

function App() {
  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
