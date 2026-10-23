
function TrendsAnalysis() {
  return (
    <div className="p-6 md:p-8 space-y-8 bg-slate-50 min-h-screen">
      
      {/* HEADER PAGE */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800">Trends & Analytics</h1>
        <p className="text-xs text-slate-500 mt-1">
          Deep dive into monthly sentiment movements and issue severity distribution.
        </p>
      </div>

      {/* GRID CONTAINER YA GRAFU MBILI ZIKIKAA PEMBENO KWA PEMBENI AU JUU NA CHINI */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* 1. SENTIMENT DISTRIBUTION BY CATEGORY */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6">
          
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">MONTHLY MOVEMENT</span>
              <h2 className="text-base md:text-lg font-bold text-slate-800">Sentiment distribution</h2>
              <p className="text-xs text-slate-400 mt-0.5">Comparative sentiment breakdown for March.</p>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-3 text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#354E4B] inline-block"></span>
                <span className="text-slate-600">Negative</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#A3B899] inline-block"></span>
                <span className="text-slate-600">Neutral</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#C87557] inline-block"></span>
                <span className="text-slate-600">Positive</span>
              </div>
            </div>
          </div>

          {/* Graph Container (Fits Perfectly) */}
          <div className="w-full bg-slate-50/70 p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center min-h-[240px] my-auto">
            <div className="flex items-end justify-center gap-6 h-48 w-full max-w-xs px-2 border-b border-slate-200/80 pb-2">
              {/* Negative Bar */}
              <div className="flex flex-col items-center gap-2 flex-1">
                <div 
                  className="w-full bg-[#354E4B] rounded-t-xl transition-all hover:opacity-90 shadow-sm" 
                  style={{ height: '35%' }}
                  title="Negative"
                ></div>
              </div>
              {/* Neutral Bar */}
              <div className="flex flex-col items-center gap-2 flex-1">
                <div 
                  className="w-full bg-[#A3B899] rounded-t-xl transition-all hover:opacity-90 shadow-sm" 
                  style={{ height: '85%' }}
                  title="Neutral"
                ></div>
              </div>
              {/* Positive Bar */}
              <div className="flex flex-col items-center gap-2 flex-1">
                <div 
                  className="w-full bg-[#C87557] rounded-t-xl transition-all hover:opacity-90 shadow-sm" 
                  style={{ height: '60%' }}
                  title="Positive"
                ></div>
              </div>
            </div>
            
            {/* Label ya Chini */}
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mt-4">MARCH</span>
          </div>

          {/* AI Insight */}
          <div className="p-3.5 rounded-2xl bg-[#EBF2EE] border border-[#D5E3DB] flex items-center gap-2.5 text-xs text-[#2B403D]">
            <span>✨</span>
            <p className="text-[11px] leading-relaxed">
              <strong className="font-bold">AI Insight:</strong> Neutral sentiment remains dominant throughout March.
            </p>
          </div>
        </div>

        {/* 2. SEVERITY FREQUENCY BY ISSUE CATEGORY */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6">
          
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">WEEKLY DISTRIBUTION</span>
              <h2 className="text-base md:text-lg font-bold text-slate-800">Severity frequency</h2>
              <p className="text-xs text-slate-400 mt-0.5">Volume and severity of reported issues.</p>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-3 text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#354E4B] inline-block"></span>
                <span className="text-slate-600">Low</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#A3B899] inline-block"></span>
                <span className="text-slate-600">Medium</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#C87557] inline-block"></span>
                <span className="text-slate-600">Critical</span>
              </div>
            </div>
          </div>

          {/* Graph Container (Fits Perfectly) */}
          <div className="w-full bg-slate-50/70 p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center min-h-[240px] my-auto">
            <div className="flex items-end justify-center gap-6 h-48 w-full max-w-xs px-2 border-b border-slate-200/80 pb-2">
              {/* Low Bar */}
              <div className="flex flex-col items-center gap-2 flex-1">
                <div 
                  className="w-full bg-[#354E4B] rounded-t-xl transition-all hover:opacity-90 shadow-sm" 
                  style={{ height: '80%' }}
                  title="Low"
                ></div>
              </div>
              {/* Medium Bar */}
              <div className="flex flex-col items-center gap-2 flex-1">
                <div 
                  className="w-full bg-[#A3B899] rounded-t-xl transition-all hover:opacity-90 shadow-sm" 
                  style={{ height: '50%' }}
                  title="Medium"
                ></div>
              </div>
              {/* Critical Bar */}
              <div className="flex flex-col items-center gap-2 flex-1">
                <div 
                  className="w-full bg-[#C87557] rounded-t-xl transition-all hover:opacity-90 shadow-sm" 
                  style={{ height: '25%' }}
                  title="Critical"
                ></div>
              </div>
            </div>

            {/* Label ya Chini */}
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mt-4">WEEK 1</span>
          </div>

          {/* Severity Note */}
          <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100 flex items-center gap-2.5 text-xs text-amber-900">
            <span>⚠️</span>
            <p className="text-[11px] leading-relaxed">
              <strong className="font-bold">Severity Summary:</strong> Most issues recorded this period fall under Low severity.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default TrendsAnalysis;