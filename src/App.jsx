import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import DashCards from './components/dashcards';
import Analysis from './components/Analysis';
import TrendsAnalysis from './components/trendsanalysis';
import FeedbackHistory from './components/FeedbackHistory';

function App() {
  const [currentTab, setCurrentTab] = useState('Home');

  return (
    <div className="flex min-h-screen bg-slate-100">
      
      {/* SIDEBAR NAVIGATION */}
      <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto p-8">
        
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