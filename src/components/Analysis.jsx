
function Analysis() {
  return (
    <div className="p-8 space-y-8 bg-slate-50 min-h-screen">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800">Customer intelligence</h1>
          <p className="text-xs text-slate-500 mt-1">
            AI-classified sentiment, severity, and predicted causes across uploaded feedbacks.
          </p>
        </div>
      </div>

      {/* 2. BANNER YA JUU */}
      <div className="bg-[#354E4B] text-white p-8 rounded-3xl shadow-lg relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

        <div className="space-y-2 relative z-10">
          <span className="text-[10px] font-bold tracking-widest text-[#C8A857] uppercase bg-white/10 px-2.5 py-1 rounded-full">
            AWAITING UPLOAD DATA
          </span>
          <h2 className="text-xl md:text-2xl font-bold">
            No feedback data analyzed yet
          </h2>
          <p className="text-xs text-slate-300 max-w-xl">
            Please upload your feedback file on the dashboard and run analysis to populate intelligence data.
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 w-20 h-20 rounded-full shadow-inner flex-shrink-0">
          <div className="text-center">
            <span className="text-sm font-extrabold text-[#C8A857]">0%</span>
            <p className="text-[9px] text-slate-300 uppercase tracking-wider">Confidence</p>
          </div>
        </div>
      </div>

      {/* 3. CUSTOMER SENTIMENT BREAKDOWN (Bila namba za uongo) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Sentiment</span>
            <h3 className="text-lg font-bold text-slate-800">Customer sentiment breakdown</h3>
          </div>
          <span className="bg-slate-100 px-3 py-1 rounded-full text-xs font-semibold text-slate-600">0 total</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Positive Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700">
              <span>Positive</span>
              <span>0%</span>
            </div>
            <h4 className="text-3xl font-extrabold text-slate-900">0</h4>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[#354E4B] h-full rounded-full" style={{ width: '0%' }}></div>
            </div>
            <p className="text-[11px] text-slate-400">Customers expressing satisfaction</p>
          </div>

          {/* Neutral Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700">
              <span>Neutral</span>
              <span>0%</span>
            </div>
            <h4 className="text-3xl font-extrabold text-slate-900">0</h4>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[#A3B899] h-full rounded-full" style={{ width: '0%' }}></div>
            </div>
            <p className="text-[11px] text-slate-400">Informational or mixed feedback</p>
          </div>

          {/* Negative Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700">
              <span>Negative</span>
              <span>0%</span>
            </div>
            <h4 className="text-3xl font-extrabold text-slate-900">0</h4>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[#C87557] h-full rounded-full" style={{ width: '0%' }}></div>
            </div>
            <p className="text-[11px] text-slate-400">Customers reporting friction</p>
          </div>
        </div>
      </div>

      {/* 4. SEVERITY LEVELS BREAKDOWN */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <h3 className="font-bold text-base text-slate-800">Severity Levels Breakdown</h3>
        
        <div className="space-y-4 divide-y divide-slate-100">
          <div className="flex items-center gap-4 pt-2">
            <span className="w-3.5 h-3.5 rounded bg-[#354E4B] inline-block"></span>
            <div>
              <h4 className="font-bold text-sm text-slate-800">Low</h4>
              <p className="text-xs text-slate-400">0 feedbacks</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <span className="w-3.5 h-3.5 rounded bg-[#A3B899] inline-block"></span>
            <div>
              <h4 className="font-bold text-sm text-slate-800">Medium</h4>
              <p className="text-xs text-slate-400">0 feedbacks</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <span className="w-3.5 h-3.5 rounded bg-[#C87557] inline-block"></span>
            <div>
              <h4 className="font-bold text-sm text-slate-800">High / Critical</h4>
              <p className="text-xs text-slate-400">0 feedbacks</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. SEHEMU MPYA YA CAUSE OF FAILURE (AI Prediction) */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">AI Prediction</span>
          <h3 className="text-lg font-bold text-slate-800">Cause of failure</h3>
          <p className="text-xs text-slate-400">Likely root causes within negative feedbacks.</p>
        </div>

        <div className="space-y-6 pt-2">
          {/* Item 1 */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-2">
                <span className="text-slate-400 font-mono text-[10px]">01</span> Payment processing
              </span>
              <div className="flex items-center gap-4">
                <span className="text-slate-400 text-[11px]">0 feedbacks</span>
                <span className="font-bold text-slate-800">0%</span>
              </div>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[#C87557] h-full rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-2">
                <span className="text-slate-400 font-mono text-[10px]">02</span> Account access & login
              </span>
              <div className="flex items-center gap-4">
                <span className="text-slate-400 text-[11px]">0 feedbacks</span>
                <span className="font-bold text-slate-800">0%</span>
              </div>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[#354E4B] h-full rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-2">
                <span className="text-slate-400 font-mono text-[10px]">03</span> Feature limitations
              </span>
              <div className="flex items-center gap-4">
                <span className="text-slate-400 text-[11px]">0 feedbacks</span>
                <span className="font-bold text-slate-800">0%</span>
              </div>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[#354E4B] h-full rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-2">
                <span className="text-slate-400 font-mono text-[10px]">04</span> Response time
              </span>
              <div className="flex items-center gap-4">
                <span className="text-slate-400 text-[11px]">0 feedbacks</span>
                <span className="font-bold text-slate-800">0%</span>
              </div>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[#354E4B] h-full rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>

          {/* Item 5 */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-2">
                <span className="text-slate-400 font-mono text-[10px]">05</span> Other
              </span>
              <div className="flex items-center gap-4">
                <span className="text-slate-400 text-[11px]">0 feedbacks</span>
                <span className="font-bold text-slate-800">0%</span>
              </div>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[#354E4B] h-full rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Analysis;