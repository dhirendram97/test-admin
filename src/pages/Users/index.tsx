import { useMemo, useState, lazy, Suspense } from "react";
import { FaSearch } from "react-icons/fa";
import { useApi } from "../../hooks/useApi";
import Pagination from "../../components/Pagination";

const UserTable = lazy(() => import("../../components/UserTable"));

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: apiData,
    loading,
    error,
    refetch,
  } = useApi("https://reqres.in/api/users");

  const filteredUsers = useMemo(() => {
    if (!apiData?.data) return [];
    return apiData.data.filter(
      (user) =>
        `${user.first_name} ${user.last_name}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [apiData?.data, searchTerm]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Users</h1>
          <p>Manage your user base</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add User
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <div className="relative max-w-md">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg w-full"
            />
          </div>
        </div>

        <Suspense
          fallback={<div className="text-center py-10">Loading...</div>}
        >
          <UserTable
            users={searchTerm ? filteredUsers : apiData?.data || []}
            loading={loading}
            error={error}
            onRetry={() => refetch(currentPage)}
          />

          {!searchTerm && apiData && (
            <Pagination
              currentPage={currentPage}
              totalPages={apiData.total_pages}
              onPageChange={(page) => {
                setCurrentPage(page);
                refetch(page);
              }}
            />
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default Users;
