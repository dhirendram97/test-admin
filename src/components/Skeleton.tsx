const Skeleton = ({ className = "" }) => (
  <div
    className={`animate-pulse bg-gray-300 dark:bg-gray-700 rounded ${className}`}
  />
);

export const StatSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm space-y-4">
      <Skeleton className="h-5 w-1/3" />
      <Skeleton className="h-8 w-2/3" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  </div>
);

export const TableSkeleton = () => (
  <div className="divide-y divide-gray-200 dark:divide-gray-700">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="p-4 flex items-center space-x-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
    ))}
  </div>
);

export const HeaderSkeleton = () => (
  <div className="h-16 w-full px-6 py-4 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
    <Skeleton className="h-6 w-24" />
  </div>
);

export default Skeleton;
