import { FaCheck, FaClock } from 'react-icons/fa';
import type { ProjectStatus } from '../../types/ProjectStatus';

type ProjectStausBadge = {
  status: ProjectStatus;
};

export const ProjectStatusBadge = ({ status }: ProjectStausBadge) => {
  const projectStatus =
    status === 'completed' ? 'Concluído' : 'Em desenvolvimento';

  const projectCompletedClasses = `border-green-700/30 text-green-700 bg-green-700/10 
    dark:border-green-500/30 dark:text-green-500 dark:bg-green-500/10`;

  const projectInProgressClasses = `border-amber-400/30 text-amber-800 bg-amber-400/10
    dark:border-amber-300/30 dark:text-amber-300 dark:bg-amber-300/10`;

  return (
    <div
      title={projectStatus}
      className={`flex justify-center items-center gap-1.5
      rounded-full text-xs border px-2 py-0.5
      ${status === 'completed' ? projectCompletedClasses : projectInProgressClasses}`}
    >
      <span>{status === 'completed' ? <FaCheck /> : <FaClock />}</span>
      <span className='hidden lg:inline'>{projectStatus}</span>
    </div>
  );
};
