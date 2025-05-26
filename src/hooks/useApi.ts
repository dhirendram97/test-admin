import { useEffect, useState } from "react";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export const useApi = (url: string) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  const fetchData = async (pageNumber: number = 1) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${url}?page=${pageNumber}`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      const result: ApiResponse = await response.json();
      setData(result);
      setPage(pageNumber);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Load initial page
  }, [url]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
    page,
    setPage: fetchData, // external pagination
  };
};
