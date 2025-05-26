const StatCard = ({
  title,
  value,
  icon: Icon,
  change,
  changeType,
}: {
  title: string;
  value: string | number;
  icon: React.ElementType;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
          {value}
        </p>
        {change && (
          <p
            className={`text-sm mt-1 ${
              changeType === "positive"
                ? "text-green-600"
                : changeType === "negative"
                ? "text-red-600"
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            {change}
          </p>
        )}
      </div>
      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      </div>
    </div>
  </div>
);
export default StatCard;
