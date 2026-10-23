import React from 'react';

function FeedbackHistory() {
  // Zimewekwa tupu ili zionyeshe hakuna feedback wala ripoti iliyopakiwa
  const reports = [];

  return (
    <div className="p-8 space-y-8 bg-slate-50 min-h-screen">
      
      {/* 1. HEADER SECTION (Bila Kitufe cha March) */}
      <div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">REPORT LIBRARY</span>
        <h1 className="text-3xl font-extrabold text-slate-800 mt-0.5">Feedback history</h1>
        <p className="text-xs text-slate-500 mt-1">
          Review and export completed monthly customer intelligence reports.
        </p>
      </div>

      {/* 2. TOP BANNER / ARCHIVE CARD (Zinaonyesha 0 Reports Saved) */}
      <div className="bg-[#F4F7F4] border border-[#E2EBE4] p-6 rounded-3xl flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-2xl bg-[#354E4B] text-white flex items-center justify-center shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">MONTHLY ARCHIVE</span>
            <h2 className="text-base font-bold text-slate-800">Your intelligence compounds over time</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Every completed monthly analysis is saved here, ready to review or share with your team.
            </p>
          </div>
        </div>

        <div className="border-l border-slate-200 pl-8 pr-4 text-center hidden sm:block">
          <span className="text-3xl font-extrabold text-slate-800">{reports.length}</span>
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">reports saved</p>
        </div>
      </div>

      {/* 3. TABLE SECTION (IKIWA TUPU KABISA) */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">ALL REPORTS</span>
            <h2 className="text-lg font-bold text-slate-800">Analysis archive</h2>
            <p className="text-xs text-slate-400 mt-0.5">Completed single-month analysis runs.</p>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-semibold rounded-xl transition-colors self-start sm:self-auto">
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
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              {reports.length > 0 ? (
                reports.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                    {/* Data rows kama zingekuwepo */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-16 text-center text-slate-400">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <span className="text-3xl">📭</span>
                      <p className="font-medium text-sm text-slate-600">No feedbacks or reports uploaded yet</p>
                      <p className="text-xs text-slate-400">Upload a feedback dataset to populate analysis records here.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default FeedbackHistory;