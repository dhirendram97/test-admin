import {
  FaChartBar,
  FaFileAlt,
  FaChartLine,
  FaExclamationTriangle,
} from "react-icons/fa";

const Reports = () => {
  const reportsData = [
    {
      id: 1,
      title: "Sales Overview",
      description: "Monthly sales performance and trends.",
      status: "available",
      icon: <FaChartLine className="h-8 w-8 text-blue-500" />,
      details: [
        { label: "Total Revenue", value: "$125,670", change: "+12.5%" },
        { label: "New Customers", value: "85", change: "+5.2%" },
        { label: "Conversion Rate", value: "3.4%", change: "-0.5%" },
      ],
    },
    {
      id: 2,
      title: "User Engagement",
      description: "How users are interacting with the platform.",
      status: "available",
      icon: <FaChartBar className="h-8 w-8 text-green-500" />,
      details: [
        { label: "Active Users", value: "1,250", change: "+8%" },
        { label: "Session Duration", value: "12m 45s", change: "+1m 30s" },
        { label: "Pages per Visit", value: "4.2", change: "+0.7" },
      ],
    },
    {
      id: 3,
      title: "Content Performance",
      description: "Analytics for published articles and posts.",
      status: "coming_soon",
      icon: <FaFileAlt className="h-8 w-8 text-purple-500" />,
      details: [],
    },
    {
      id: 4,
      title: "System Health",
      description: "Monitoring server status and performance.",
      status: "available",
      icon: <FaExclamationTriangle className="h-8 w-8 text-red-500" />,
      details: [
        { label: "Uptime", value: "99.98%", change: "" },
        { label: "Response Time", value: "120ms", change: "-10ms" },
        { label: "Error Rate", value: "0.05%", change: "+0.01%" },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Reports</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Analytics and insights into your data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportsData.map((report) => (
          <div
            key={report.id}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border"
          >
            <div className="flex items-center mb-4">
              <div className="mr-4">{report.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{report.title}</h3>
                <p className="text-sm text-gray-500">{report.description}</p>
              </div>
            </div>
            {report.status === "available" ? (
              <div className="space-y-3 mt-4">
                {report.details.map((detail, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{detail.label}</span>
                    <span
                      className={`font-medium ${
                        detail.change?.startsWith("+")
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {detail.value} {detail.change && `(${detail.change})`}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 mt-6">Coming Soon</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
