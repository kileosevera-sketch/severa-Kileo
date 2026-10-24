function FeedbackHistory() {
  // Zimewekwa tupu ili zionyeshe hakuna feedback wala ripoti iliyopakiwa
  const reports = [];

  return (
    <div className="mx-auto max-w-7xl space-y-7">
      
      {/* 1. HEADER SECTION (Bila Kitufe cha March) */}
      <header>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#52706A]">Report library</span>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Feedback history</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Review and export completed monthly customer intelligence reports.
        </p>
      </header>

      {/* 2. TOP BANNER / ARCHIVE CARD (Zinaonyesha 0 Reports Saved) */}
      <section className="dashboard-panel dashboard-archive-card flex flex-col justify-between gap-6 rounded-xl border border-[#DCE7DE] bg-[#F7FAF7] p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#354E4B] text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#52706A]">Monthly archive</span>
            <h2 className="mt-1 text-lg font-semibold text-slate-900">Completed analyses</h2>
            <p className="mt-1 max-w-2xl text-sm leading-5 text-slate-600">
              Saved report records will appear here when available.
            </p>
          </div>
        </div>

        <div className="border-t border-[#DCE7DE] pt-4 text-left sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 sm:text-center">
          <span className="text-2xl font-bold text-slate-900">{reports.length}</span>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500">Reports saved</p>
        </div>
      </section>

      {/* 3. TABLE SECTION (IKIWA TUPU KABISA) */}
      <section className="dashboard-panel space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#52706A]">All reports</span>
            <h2 className="mt-1 text-lg font-semibold text-slate-900">Analysis archive</h2>
            <p className="mt-1 text-sm text-slate-500">Completed single-month analysis runs.</p>
          </div>

          <button
            disabled={reports.length === 0}
            title={reports.length === 0 ? 'There are no reports to export' : undefined}
            className="flex items-center gap-2 self-start rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline-[#354E4B] disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 sm:self-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span>Export list</span>
          </button>
        </div>

        <div className="overflow-x-auto pt-2">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                <th className="py-3 px-3">REPORT PERIOD</th>
                <th className="py-3 px-3">CREATED</th>
                <th className="py-3 px-3">FEEDBACKS</th>
                <th className="py-3 px-3">SENTIMENT</th>
                <th className="py-3 px-3">CRITICAL</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {reports.length > 0 ? (
                reports.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                    {/* Report row data will be rendered here when available. */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-20 text-center">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8EFEA] text-[#354E4B]">
                        <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5m-7.5 3.75h7.5m-7.5 3.75h4.5M6 3.75h8.379c.398 0 .779.158 1.06.44l3.371 3.37c.281.282.44.663.44 1.061v11.629A1.5 1.5 0 0117.75 21.75h-11.5a1.5 1.5 0 01-1.5-1.5v-15A1.5 1.5 0 016.25 3.75z" />
                        </svg>
                      </span>
                      <p className="text-sm font-semibold text-slate-800">No reports available</p>
                      <p className="max-w-md text-sm leading-5 text-slate-500">Completed report records will be listed here when report storage is connected.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}

export default FeedbackHistory;