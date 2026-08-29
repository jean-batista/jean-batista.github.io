import { FaGithub } from 'react-icons/fa';
import { LuFolderGit2 } from 'react-icons/lu';
import { Header } from '../../components/Header';
import { ProjectCard } from '../../components/ProjectCard';
import { ProjectSkeleton } from '../../components/ProjectSkeleton';
import { TechBadge } from '../../components/TechBadge';
import { TECH_BADGE_LIST } from '../../constants/badges';
import { GITHUB_URL } from '../../constants/links';
import { useGithubProjects } from '../../hooks/useGithubProjects';

export const Home = () => {
  const { repos, loading } = useGithubProjects();

  return (
    <>
      <Header />
      <main className='bg-white dark:bg-gray-900 pt-16 transition-colors duration-300'>
        <section
          id='sobre'
          className='max-w-5xl mx-auto px-6 py-20 md:py-32 flex flex-col items-start'
        >
          <p className='text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-3'>
            Olá, meu nome é
          </p>
          <h1 className='text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 transition-colors'>
            Jean Batista.
          </h1>
          <h2 className='text-3xl md:text-5xl font-bold text-gray-500 dark:text-gray-400 mb-8 transition-colors'>
            Desenvolvedor Backend.
          </h2>
          <p className='max-w-2xl text-lg text-gray-600 dark:text-gray-300 mb-10 transition-colors'>
            Sou focado na construção de APIs robustas, arquitetura de sistemas e
            integração de serviços. Gosto de resolver problemas complexos nos
            bastidores, garantindo que as aplicações sejam seguras, escaláveis e
            eficientes, do banco de dados ao deploy na nuvem.
          </p>
          <div className='flex flex-wrap gap-4'>
            <a
              href='#'
              className='flex justify-center items-center gap-2 
              border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 
              dark:text-indigo-400 px-3 py-2 rouded-md font-semibold 
              hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors cursor-pointer'
            >
              <LuFolderGit2 />
              Ver projetos
            </a>
            <a
              href={GITHUB_URL}
              className='flex justify-center items-center gap-2
            bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2
              rouded-md font-semibold hover:bg-gray-800 dark:hover-bg-gray-200 transition-colors cursor-pointer'
            >
              <FaGithub />
              Github
            </a>
          </div>
        </section>
        <section
          id='habilidades'
          className='bg-white dark:bg-gray-900 border-y border-gray-200
          dark:border-gray-800 py-16 transition-colors duration-300'
        >
          <div className='max-w-5xl mx-auto px-6'>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors'>
              <span className='text-indigo-600 dark:text-indigo-400 font-mono mr-2'>
                01.
              </span>
              Stack Tecnológico
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
              {TECH_BADGE_LIST.map((badge, index) => (
                <TechBadge key={index} icon={badge.icon} text={badge.text} />
              ))}
            </div>
          </div>
        </section>
        <section
          id='projetos'
          className='bg-white dark:bg-gray-900 border-y border-gray-200
          dark:border-gray-800 py-16 transition-colors duration-300'
        >
          <div className='max-w-5xl mx-auto px-6'>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-12 transition-colors'>
              <span className='text-indigo-600 dark:text-indigo-400 font-mono mr-2'>
                02.
              </span>
              Principais Projetos
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              {repos && !loading
                ? repos.map((project, index) => (
                    <ProjectCard
                      key={index}
                      name={project.name}
                      description={
                        project.description
                          ? project.description
                          : 'Projeto sem descrição'
                      }
                      topics={project.topics}
                      url={project.html_url}
                    />
                  ))
                : Array.from({ length: 4 }).map((_, index) => (
                    <ProjectSkeleton key={index} />
                  ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
