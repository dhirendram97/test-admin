import { lazy, Suspense, useMemo } from "react";
import { FaUsers, FaUserCheck, FaGlobe, FaRegClock } from "react-icons/fa";
import { useApi } from "../../hooks/useApi";
import { StatSkeleton, TableSkeleton } from "../../components/Skeleton";

const StatCard = lazy(() => import("../../components/StatsCard"));
const UserTable = lazy(() => import("../../components/UserTable"));

const Dashboard = () => {
  const {
    data: apiData,
    loading,
    error,
    refetch,
  } = useApi("https://reqres.in/api/users");

  const stats = useMemo(() => {
    if (!apiData) return [];
    return [
      {
        title: "Total Users",
        value: apiData.total,
        icon: FaUsers,
        change: "+12% from last month",
        changeType: "positive" as const,
      },
      {
        title: "Active Users",
        value: Math.floor(apiData.total * 0.85),
        icon: FaUserCheck,
        change: "+5% from last week",
        changeType: "positive" as const,
      },
      {
        title: "Page Views",
        value: "2.4k",
        icon: FaGlobe,
        change: "+8% from yesterday",
        changeType: "positive" as const,
      },
      {
        title: "Response Time",
        value: "0.3s",
        icon: FaRegClock,
        change: "-2% improvement",
        changeType: "positive" as const,
      },
    ];
  }, [apiData]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome back! Here's what's happening.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Suspense fallback={<StatSkeleton />} key={index}>
            <StatCard {...stat} />
          </Suspense>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-lg font-medium">Recent Users</h2>
        </div>
        <Suspense fallback={<TableSkeleton />}>
          <UserTable
            users={apiData?.data?.slice(0, 5) || []}
            loading={loading}
            error={error}
            onRetry={() => refetch(1)}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;
