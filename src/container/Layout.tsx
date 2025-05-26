import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useDarkMode } from "../hooks/useDarkMode";

const Layout = () => {
  const [isDark, setIsDark] = useDarkMode();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<string>("");

  return (
    <div
      className={`min-h-screen ${isDark ? "dark bg-gray-950" : "bg-gray-50"}`}
    >
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header
            onMenuClick={() => setSidebarOpen(true)}
            isDark={isDark}
            onThemeToggle={() => setIsDark(!isDark)}
          />
          <main className="flex-1 overflow-auto p-6">
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
