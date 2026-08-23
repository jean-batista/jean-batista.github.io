import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light');
    if (theme === 'light') setTheme('dark');

    localStorage.setItem('theme', theme);
  };

  return (
    <button
      onClick={toggleTheme}
      className='flex justify-center items-center cursor-pointer'
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
};
