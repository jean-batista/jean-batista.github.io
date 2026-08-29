export const ProjectSkeleton = () => {
  return (
    <article
      className='animate-pulse bg-white dark:bg-gray-800 p-8 rounded-lg border 
    border-gray-200 dark:border-gray-700 shadow-sm flex flex-col h-full w-full'
    >
      <div className='flex justify-between items-start mb-4'>
        <div className='h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2'></div>
        <div className='h-5 w-5 bg-gray-300 dark:bg-gray-700 rounded'></div>
      </div>

      <div className='space-y-3 mb-6'>
        <div className='h-4 bg-gray-200 dark:bg-gray-600 rounded w-full'></div>
        <div className='h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6'></div>
        <div className='h-4 bg-gray-200 dark:bg-gray-600 rounded w-4/6'></div>
      </div>

      <div className='flex flex-wrap gap-2 mt-auto'>
        <div className='h-6 w-16 bg-gray-200 dark:bg-gray-600 rounded'></div>
        <div className='h-6 w-20 bg-gray-200 dark:bg-gray-600 rounded'></div>
        <div className='h-6 w-14 bg-gray-200 dark:bg-gray-600 rounded'></div>
      </div>
    </article>
  );
};
