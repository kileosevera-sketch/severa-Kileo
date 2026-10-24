import { Info } from 'lucide-react';

const TrendsAndAnalytics = ({ data }) => {
  // Kama kuna data zitatoka kwenye props, la sivyo tutatumia 0 kwa sababu hakuna feedback iliyopakiwa
  const totalFeedback = data?.totalFeedback || 0;
  const sentiment = {
    positive: data?.sentiment?.positive || 0,
    neutral: data?.sentiment?.neutral || 0,
    negative: data?.sentiment?.negative || 0,
  };

  const severity = {
    low: data?.severity?.low || 0,
    medium: data?.severity?.medium || 0,
    critical: data?.severity?.critical || 0,
  };

  return (
    <div className="mx-auto max-w-7xl space-y-7 text-slate-800">
      
      {/* ================= SEHEMU YA JUU: ANALYSIS CARDS ================= */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        
        {/* 1. Sentiment Analysis Card */}
        <div>
          <h2 className="mb-3 text-lg font-semibold text-slate-900">
            Sentiment analysis
          </h2>
          <div className="dashboard-metric-card flex flex-wrap items-center justify-between gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            {/* Total Feedback */}
            <div className="pr-6 border-r border-slate-200">
              <span className="mb-1 block text-xs font-medium text-slate-500">
                Total Feedback
              </span>
              <span className="text-2xl font-bold text-slate-900">
                {totalFeedback > 0 ? totalFeedback : '—'}
              </span>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid min-w-0 flex-1 grid-cols-1 gap-2 sm:grid-cols-3">
              <div className="flex min-h-16 min-w-0 items-center justify-between gap-3 rounded-lg bg-emerald-50 px-4 py-3">
                <span className="text-xs font-medium text-emerald-800">Positive</span>
                <span className="text-base font-semibold text-emerald-900">
                  {totalFeedback > 0 ? `${sentiment.positive}%` : '—'}
                </span>
              </div>

              <div className="flex min-h-16 min-w-0 items-center justify-between gap-3 rounded-lg bg-[#F1F6F1] px-4 py-3">
                <span className="text-xs font-medium text-[#354E4B]">Neutral</span>
                <span className="text-base font-semibold text-[#354E4B]">
                  {totalFeedback > 0 ? `${sentiment.neutral}%` : '—'}
                </span>
              </div>

              <div className="flex min-h-16 min-w-0 items-center justify-between gap-3 rounded-lg bg-rose-50 px-4 py-3">
                <span className="text-xs font-medium text-rose-800">Negative</span>
                <span className="text-base font-semibold text-rose-900">
                  {totalFeedback > 0 ? `${sentiment.negative}%` : '—'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Severity Analysis Card */}
        <div>
          <h2 className="mb-3 text-lg font-semibold text-slate-900">
            Severity analysis
          </h2>
          <div className="dashboard-metric-card flex flex-wrap items-center justify-between gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            {/* Total Feedback */}
            <div className="pr-6 border-r border-slate-200">
              <span className="mb-1 block text-xs font-medium text-slate-500">
                Total Feedback
              </span>
              <span className="text-2xl font-bold text-slate-900">
                {totalFeedback > 0 ? totalFeedback : '—'}
              </span>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid min-w-0 flex-1 grid-cols-1 gap-2 sm:grid-cols-3">
              <div className="flex min-h-16 min-w-0 items-center justify-between gap-3 rounded-lg bg-emerald-50 px-4 py-3">
                <span className="text-xs font-medium text-emerald-800">Low</span>
                <span className="text-base font-semibold text-emerald-900">
                  {totalFeedback > 0 ? `${severity.low}%` : '—'}
                </span>
              </div>

              <div className="flex min-h-16 min-w-0 items-center justify-between gap-3 rounded-lg bg-amber-50 px-4 py-3">
                <span className="text-xs font-medium text-amber-800">Medium</span>
                <span className="text-base font-semibold text-amber-900">
                  {totalFeedback > 0 ? `${severity.medium}%` : '—'}
                </span>
              </div>

              <div className="flex min-h-16 min-w-0 items-center justify-between gap-3 rounded-lg bg-rose-50 px-4 py-3">
                <span className="text-xs font-medium text-rose-800">Critical</span>
                <span className="text-base font-semibold text-rose-900">
                  {totalFeedback > 0 ? `${severity.critical}%` : '—'}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* ================= SEHEMU YA CHINI: TRENDS & ANALYTICS ================= */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#52706A]">Trends</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
          Trends & Analytics
        </h1>
        <p className="mb-5 mt-2 text-sm leading-6 text-slate-600">
          Review sentiment and severity summaries. Time-series charts appear when detailed trend data is available.
        </p>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          
          {/* Monthly Movement Box */}
          <section className="dashboard-panel dashboard-panel--chart flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div>
              <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-semibold tracking-wider text-[#52706A]">
                  MONTHLY MOVEMENT
                </span>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-600"></span> Negative
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#A3B899]"></span> Neutral
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#354E4B]"></span> Positive
                  </span>
                </div>
              </div>

              <h3 className="text-base font-semibold text-slate-900">
                Sentiment distribution
              </h3>
              <p className="mb-4 mt-1 text-sm text-slate-500">
                Monthly time-series is not connected to this page yet.
              </p>

              {/* Chart Placeholder Area */}
              <div className="flex min-h-56 flex-col items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center">
                <Info aria-hidden="true" className="mb-2 h-5 w-5 text-[#52706A]" />
                <p className="text-sm font-medium text-slate-700">No trend series available</p>
                <p className="mt-1 max-w-sm text-xs leading-5 text-slate-500">This view currently receives summary metrics only; no monthly chart data is provided.</p>
              </div>
            </div>

            {/* AI Insight Box */}
            <div className="mt-4 flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600">
              <Info aria-hidden="true" className="h-4 w-4 shrink-0 text-[#52706A]" />
              <span>
                Insights will appear when analyzed trend data is available.
              </span>
            </div>
          </section>

          {/* Weekly Distribution Box */}
          <section className="dashboard-panel dashboard-panel--chart flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div>
              <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-semibold tracking-wider text-[#52706A]">
                  WEEKLY DISTRIBUTION
                </span>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-600"></span> Low
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span> Medium
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-600"></span> Critical
                  </span>
                </div>
              </div>

              <h3 className="text-base font-semibold text-slate-900">
                Severity frequency
              </h3>
              <p className="mb-4 mt-1 text-sm text-slate-500">
                Issue severity over time is not connected to this page yet.
              </p>

              {/* Chart Placeholder Area */}
              <div className="flex min-h-56 flex-col items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center">
                <Info aria-hidden="true" className="mb-2 h-5 w-5 text-[#52706A]" />
                <p className="text-sm font-medium text-slate-700">No severity series available</p>
                <p className="mt-1 max-w-sm text-xs leading-5 text-slate-500">This view currently receives summary metrics only; no weekly chart data is provided.</p>
              </div>
            </div>

            {/* Severity Summary Box */}
            <div className="mt-4 flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600">
              <Info aria-hidden="true" className="h-4 w-4 shrink-0 text-[#52706A]" />
              <span>
                Severity insights will appear when analyzed trend data is available.
              </span>
            </div>
          </section>

        </div>
      </div>

    </div>
  );
};

export default TrendsAndAnalytics;