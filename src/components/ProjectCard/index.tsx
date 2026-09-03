import { FaExternalLinkAlt } from 'react-icons/fa';
import { formatProjectTitle, formatTopic } from '../../utils/formatters';
import { ProjectStausBadge } from '../ProjectStatusBadge';
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
        <div className='flex gap-3'>
          <h4
            className='text-xl font-bold group-hover:text-indigo-600 
          dark:group-hover:text-indigo-400 transition-colors'
          >
            {formatProjectTitle(name)}
          </h4>
          <ProjectStausBadge status={status} />
        </div>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400'
        >
          <FaExternalLinkAlt />
        </a>
      </div>
      <p className='text-gray-600 dark:text-gray-300 mb-6 text-sm transition-colors'>
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
