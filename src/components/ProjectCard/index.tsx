import { FaExternalLinkAlt } from 'react-icons/fa';
import { formatProjectTitle, formatTopic } from '../../utils/formatters';
import { ProjectStatusBadge } from '../ProjectStatusBadge';
import type { ProjectStatus } from '../../types/ProjectStatus';

type ProjectCardProps = {
  name: string;
  description: string;
  topics: Array<string>;
  status: ProjectStatus;
  url: string;
};

export const ProjectCard = ({
  name,
  description,
  topics,
  status,
  url,
}: ProjectCardProps) => {
  const projectTitle = formatProjectTitle(name);

  return (
    <article
      className='bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200
      dark:border-gray-700 shadow-sm hover-shadow-md dark:hover:shadow-indigo-900/20
      transition-all relative group'
    >
      <div
        className='flex justify-between items-center mb-4 
        text-gray-900 dark:text-white'
      >
        <div className='flex justify-between items-start gap-3 w-full'>
          <div className='flex items-center gap-3 min-w-0 flex-1'>
            <h4
              title={projectTitle}
              className='text-xl font-bold group-hover:text-indigo-600 
            dark:group-hover:text-indigo-400 transition-colors truncate'
            >
              {projectTitle}
            </h4>
            <div className='shrink-0'>
              <ProjectStatusBadge status={status} />
            </div>
          </div>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 shrink-0 mt-1'
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      <p className='text-gray-600 dark:text-gray-300 mb-6 text-sm transition-colors wrap-break-word'>
        {description}
      </p>
      <div className='flex flex-wrap gap-2 mt-auto'>
        {topics.map((topic, index) => (
          <span
            key={index}
            className='text-xs font-mono text-indigo-600 dark:text-indigo-300 bg-indigo-50 
          dark:bg-indigo-900/40 px-2 py-1 rounded transition-colors'
          >
            {formatTopic(topic)}
          </span>
        ))}
      </div>
    </article>
  );
};
