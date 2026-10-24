import { useState } from 'react';
import Sidebar from './components/sidebar';
import DashCards from './components/dashcards';
import Analysis from './components/Analysis';
import TrendsAnalysis from './components/trendsanalysis';
import FeedbackHistory from './components/FeedbackHistory';

function App() {
  const [currentTab, setCurrentTab] = useState('Home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className={`dashboard-theme ${isDarkMode ? 'theme-dark' : 'theme-light'} relative isolate flex min-h-screen flex-col bg-[#F4F7F4] md:flex-row`}>
      <div className="dashboard-background-rings" aria-hidden="true">
        <svg
          className="dashboard-background-rings__art"
          viewBox="0 0 1440 960"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <g stroke="currentColor" strokeWidth="1.5">
            <circle cx="1150" cy="210" r="170" />
            <circle cx="1150" cy="210" r="225" />
            <circle cx="1150" cy="210" r="280" />
            <circle cx="1150" cy="210" r="335" />
            <circle cx="1150" cy="210" r="390" />
            <circle cx="240" cy="790" r="190" />
            <circle cx="240" cy="790" r="250" />
            <circle cx="240" cy="790" r="310" />
            <circle cx="240" cy="790" r="370" />
            <circle cx="760" cy="540" r="300" />
            <circle cx="760" cy="540" r="360" />
          </g>
        </svg>
      </div>
      
      {/* SIDEBAR NAVIGATION */}
      <Sidebar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapsed={() => setIsSidebarCollapsed((collapsed) => !collapsed)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((darkMode) => !darkMode)}
      />

      {/* MAIN CONTENT AREA */}
      <main className="relative z-10 min-w-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-7 lg:px-10 lg:py-9">
        
        {/* Page 1: Home */}
        {currentTab === 'Home' && (
          <DashCards 
            onNavigateToAnalyze={() => setCurrentTab('Analyze')} 
          />
        )}

        {/* Page 2: Analyze */}
        {currentTab === 'Analyze' && (
          <Analysis />
        )}

        {/* Page 3: Trends Analysis */}
        {currentTab === 'Trends Analysis' && (
          <TrendsAnalysis />
        )}

        {/* Page 4: Feedback History */}
        {currentTab === 'Feedback History' && (
          <FeedbackHistory />
        )}

      </main>

    </div>
  );
}

export default App;