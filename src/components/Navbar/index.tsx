import { Logo } from '../Logo';
import { ThemeButton } from '../ThemeButton';

export const Navbar = () => {
  return (
    <nav className='max-w-5xl mx-auto flex justify-between items-center align-middle p-4'>
      <Logo />
      <ul className='flex flex-row justify-center items-center gap-7 text-sm font-semibold text-gray-600 dark:text-gray-300'>
        <div className='hidden md:flex flex-row gap-7'>
          <li className='hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'>
            <a href='#sobre'>Sobre</a>
          </li>
          <li className='hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'>
            <a href='#habilidades'>Habilidades</a>
          </li>
          <li className='hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'>
            <a href='#projetos'>Projetos</a>
          </li>
        </div>
        <li>
          <ThemeButton />
        </li>
        <li>
          <a
            href='#contato'
            className='block text-white text-sm font-medium bg-indigo-600 hover:bg-indigo-700 rounded-md px-4 py-2 transition-colors'
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};
