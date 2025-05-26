import { Activity } from "lucide-react";

const ErrorMessage = ({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) => (
  <div className="text-center p-8">
    <div className="text-red-500 mb-4">
      <Activity className="h-12 w-12 mx-auto mb-2" />
      <p className="text-lg font-medium">Oops! Something went wrong</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{message}</p>
    </div>
    <button
      onClick={onRetry}
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      Try Again
    </button>
  </div>
);

export default ErrorMessage;
