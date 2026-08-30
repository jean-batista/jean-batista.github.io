import { Navbar } from '../Navbar';

export const Header = () => {
  return (
    <header
      className='z-50 fixed top-0 w-full bg-white dark:bg-gray-900 border-b 
      border-gray-200 dark:border-gray-800 transition-colors duration-300'
    >
      <Navbar />
    </header>
  );
};
