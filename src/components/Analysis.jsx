
function Analysis() {
  return (
    <div className="mx-auto max-w-7xl space-y-7">
      
      {/* 1. HEADER SECTION */}
      <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#52706A]">Analyze</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Customer intelligence</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            AI-classified sentiment, severity, and predicted causes across uploaded feedbacks.
          </p>
        </div>
      </header>

      {/* 2. BANNER YA JUU */}
      <section className="relative flex min-h-48 flex-col items-start justify-between gap-6 overflow-hidden rounded-xl bg-[#354E4B] p-6 text-white shadow-sm sm:flex-row sm:items-center sm:p-8">

        <div className="space-y-2 relative z-10">
          <span className="inline-flex rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#E8EFEA]">
            AWAITING UPLOAD DATA
          </span>
          <h2 className="mt-3 text-lg font-semibold sm:text-xl">
            No feedback data analyzed yet
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-200">
            Please upload your feedback file on the dashboard and run analysis to populate intelligence data.
          </p>
        </div>

        <div className="relative z-10 flex min-h-16 min-w-28 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 py-3">
          <div className="text-center">
            <span className="text-sm font-bold text-white">Not run</span>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-200">Analysis status</p>
          </div>
        </div>
      </section>

      {/* 3. CUSTOMER SENTIMENT BREAKDOWN (Bila namba za uongo) */}
      <section className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#52706A]">Sentiment</span>
            <h3 className="mt-1 text-lg font-semibold text-slate-900">Customer sentiment breakdown</h3>
          </div>
          <span className="w-fit rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">No records analyzed</span>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Positive Card */}
          <div className="dashboard-metric-card space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between text-sm font-semibold text-slate-800">
              <span>Positive</span>
              <span className="text-slate-500">Not available</span>
            </div>
            <h4 className="text-3xl font-bold text-slate-400">—</h4>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-0 rounded-full bg-[#354E4B]"></div>
            </div>
            <p className="text-xs text-slate-500">Available after feedback analysis</p>
          </div>

          {/* Neutral Card */}
          <div className="dashboard-metric-card space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between text-sm font-semibold text-slate-800">
              <span>Neutral</span>
              <span className="text-slate-500">Not available</span>
            </div>
            <h4 className="text-3xl font-bold text-slate-400">—</h4>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-0 rounded-full bg-[#A3B899]"></div>
            </div>
            <p className="text-xs text-slate-500">Available after feedback analysis</p>
          </div>

          {/* Negative Card */}
          <div className="dashboard-metric-card space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between text-sm font-semibold text-slate-800">
              <span>Negative</span>
              <span className="text-slate-500">Not available</span>
            </div>
            <h4 className="text-3xl font-bold text-slate-400">—</h4>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-0 rounded-full bg-[#C87557]"></div>
            </div>
            <p className="text-xs text-slate-500">Available after feedback analysis</p>
          </div>
        </div>
      </section>

      {/* 4. SEVERITY LEVELS BREAKDOWN */}
      <section className="dashboard-panel space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#52706A]">Severity</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">Severity levels</h3>
          <p className="mt-1 text-sm text-slate-500">Severity counts will be shown after feedback is analyzed.</p>
        </div>
        
        <div className="space-y-4 divide-y divide-slate-100">
          <div className="flex items-center gap-4 pt-2">
            <span className="h-3 w-3 shrink-0 rounded-sm bg-[#354E4B]"></span>
            <div>
              <h4 className="font-bold text-sm text-slate-800">Low</h4>
              <p className="text-xs text-slate-500">Not available</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <span className="h-3 w-3 shrink-0 rounded-sm bg-[#A3B899]"></span>
            <div>
              <h4 className="font-bold text-sm text-slate-800">Medium</h4>
              <p className="text-xs text-slate-500">Not available</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <span className="h-3 w-3 shrink-0 rounded-sm bg-[#C87557]"></span>
            <div>
              <h4 className="font-bold text-sm text-slate-800">High / Critical</h4>
              <p className="text-xs text-slate-500">Not available</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEHEMU MPYA YA CAUSE OF FAILURE (AI Prediction) */}
      <section className="dashboard-panel space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#52706A]">Failure analysis</span>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">Potential causes</h3>
          <p className="mt-1 text-sm text-slate-500">Predicted causes appear after feedback analysis is available.</p>
        </div>

          <div className="flex min-h-40 flex-col items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center">
            <p className="text-sm font-medium text-slate-700">No predicted causes available</p>
            <p className="mt-1 max-w-md text-xs leading-5 text-slate-500">
              Cause categories and risk levels will appear here only after an analysis produces results.
            </p>
          </div>
      </section>

    </div>
  );
}

export default Analysis;