import { BiCopyright } from 'react-icons/bi';
import { SOCIAL_LIST } from '../../constants/social';
import { EMAIL_URL } from '../../constants/links';

export const Footer = () => {
  return (
    <footer
      id='contato'
      className='bg-gray-900 dark:bg-black text-white py-16 text-center transition-colors duration-300'
    >
      <div className='max-w-3xl mx-auto px-6'>
        <p className='text-indigo-400 font-mono text-sm mb-4'>
          03. O que vem agora?
        </p>
        <h2 className='text-3xl md:text-4xl font-bold mb-6'>Vamos conversar</h2>
        <p className='text-gray-400 mb-8 max-w-lg mx-auto'>
          Estou sempre aberto a discutir arquitetura de software, oportunidades
          no backend ou simplesmente trocar ideias sobre tecnologia.
        </p>
        <a
          href={EMAIL_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block border border-indigo-500 text-indigo-400 px-8 py-4
            rounded-md font-mono hover:bg-indigo-900/30 transition-colors'
        >
          Diga olá
        </a>
        <div className='flex justify-center items-center gap-6 mt-16'>
          {SOCIAL_LIST.map(social => (
            <a
              key={social.name}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={social.name}
              className='text-gray-500 hover:text-indigo-400 hover:-translate-y-1 transition-all duration-300'
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div
          className='flex flex-col justify-around items-center gap-3 mt-16 text-sm 
        text-gray-500 font-mono'
        >
          <p>
            Projetado e desenvolvido por{' '}
            <span className='block sm:inline text-gray-400'>Jean Batista.</span>
          </p>
          <p>
            Feito com <span className='text-gray-400'>React</span> e{' '}
            <span className='text-gray-400'>Tailwind CSS</span>.
          </p>
          <p className='flex justify-center items-center gap-2'>
            <BiCopyright /> 2026
          </p>
        </div>
      </div>
    </footer>
  );
};
