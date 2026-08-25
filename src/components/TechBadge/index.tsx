type TechBadgeProps = {
  icon: React.ReactNode;
  text: string;
};

export const TechBadge = ({ icon, text }: TechBadgeProps) => {
  return (
    <div
      className='flex justify-center items-center gap-2 px-4 py-2 bg-gray-100 
      dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
      rounded-md transition-colors'
    >
      <span className='shrink-0 text-gray-700 dark:text-gray-300'>{icon}</span>

      <span className='truncate text-gray-700 dark:text-gray-300 text-sm md:text-base lg:text-lg font-mono'>
        {text}
      </span>
    </div>
  );
};
