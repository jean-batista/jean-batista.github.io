import { IoSunny } from 'react-icons/io5';
import { useTheme } from '../../contexts/ThemeContext';
import { FaMoon } from 'react-icons/fa';

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
      {theme === 'dark' ? (
        <IoSunny className='text-lg' />
      ) : (
        <FaMoon className='text-lg' />
      )}
    </button>
  );
};
