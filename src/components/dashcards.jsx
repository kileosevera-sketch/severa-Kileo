import { useState } from 'react';
import { AlertTriangle, FileText, Search, Smile, TrendingUp, Upload } from 'lucide-react';

function DashCards({ onNavigateToAnalyze }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState('all');
  const [feedbackData, setFeedbackData] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);

      const newImportedFeedbacks = [
        { id: 'FB-0500', feedback: 'The onboarding was smooth, and the team answered every question...', source: 'Survey', date: 'Mar 31', status: 'Positive' },
        { id: 'FB-0499', feedback: 'Payment failed twice before it finally went through. Very frustrating.', source: 'Support', date: 'Mar 31', status: 'Negative' },
        { id: 'FB-0498', feedback: 'The product does what I need, but reporting could be more flexible.', source: 'Email', date: 'Mar 30', status: 'Neutral' },
        { id: 'FB-0497', feedback: 'Our account manager resolved the access issue in under an hour.', source: 'Survey', date: 'Mar 30', status: 'Positive' },
      ];

      setFeedbackData(newImportedFeedbacks);
    }
  };

  return (
    <div className="mx-auto max-w-7xl space-y-7">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#52706A]">Dashboard overview</p>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Customer intelligence</h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">
          Bring post-sale feedback together to review sentiment, identify issues, and prepare analysis.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <div className="dashboard-summary-card dashboard-metric-card flex items-center gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#E8EFEA] text-[#354E4B]"><Smile aria-hidden="true" className="h-6 w-6" /></div>
          <div>
            <h3 className="text-base font-semibold text-slate-800">Sentiment analysis</h3>
            <p className="mt-1.5 text-sm leading-5 text-slate-500">Understand customer emotion</p>
          </div>
        </div>
        <div className="dashboard-summary-card dashboard-metric-card flex items-center gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#10231F] text-teal-300"><AlertTriangle aria-hidden="true" className="h-6 w-6" /></div>
          <div>
            <h3 className="text-base font-semibold text-slate-800">Severity detection</h3>
            <p className="mt-1.5 text-sm leading-5 text-slate-500">Prioritize urgent feedback</p>
          </div>
        </div>
        <div className="dashboard-summary-card dashboard-metric-card flex items-center gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#E8EFEA] text-[#354E4B]"><Search aria-hidden="true" className="h-6 w-6" /></div>
          <div>
            <h3 className="text-base font-semibold text-slate-800">Failure prediction</h3>
            <p className="mt-1.5 text-sm leading-5 text-slate-500">Reveal likely root causes</p>
          </div>
        </div>
        <div className="dashboard-summary-card dashboard-metric-card flex items-center gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#E8EFEA] text-[#354E4B]"><TrendingUp aria-hidden="true" className="h-6 w-6" /></div>
          <div>
            <h3 className="text-base font-semibold text-slate-800">Trends analysis</h3>
            <p className="mt-1.5 text-sm leading-5 text-slate-500">Track patterns over time</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-3">
        <section className="dashboard-panel space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#52706A]">Get started</p>
            <h2 className="mt-1 text-lg font-semibold text-slate-900">Upload feedback</h2>
            <p className="mt-1 text-sm leading-5 text-slate-500">Select a file to preview sample feedback records.</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-700" htmlFor="dashboard-file-type">File format</label>
            <select
              id="dashboard-file-type"
              value={fileType}
              onChange={(e) => setFileType(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 focus:border-[#52706A] focus:outline-none focus:ring-2 focus:ring-[#A3B899]/50"
            >
              <option value="all">Any File (*.csv, *.pdf, *.xlsx, etc.)</option>
              <option value="csv">CSV File (*.csv)</option>
              <option value="pdf">PDF Document (*.pdf)</option>
              <option value="excel">Excel Spreadsheet (*.xlsx, *.xls)</option>
            </select>
          </div>

          <div className="rounded-xl border border-dashed border-[#A3B899] bg-[#F7FAF7] p-6 text-center transition-colors hover:bg-[#F1F6F1]">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#E8EFEA] text-[#354E4B]">
              <Upload aria-hidden="true" className="h-5 w-5" />
            </div>
            <p className="text-sm font-medium text-slate-800">Choose a feedback file</p>
            <p className="mt-1 text-xs text-slate-500">CSV, PDF, Excel, or text · file size is not checked in this preview</p>
            <label className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#354E4B] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2C423F] focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#354E4B]">
              <FileText aria-hidden="true" className="h-4 w-4" />
              Browse file
              <input type="file" accept=".csv,.pdf,.xlsx,.xls,.txt" className="sr-only" onChange={handleFileChange} aria-label="Choose feedback file" />
            </label>
            {selectedFile && (
              <p className="mt-3 flex items-center justify-center gap-2 truncate text-xs font-medium text-[#354E4B]">
                <FileText aria-hidden="true" className="h-4 w-4 shrink-0" />
                <span className="truncate">{selectedFile.name}</span>
              </p>
            )}
          </div>

        </section>

        <section className="dashboard-panel flex min-h-[320px] flex-col justify-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 xl:col-span-2">
          {feedbackData.length > 0 ? (
            <div className="space-y-4">
              <div className="flex flex-col gap-2 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Feedback distribution</h3>
                  <p className="mt-1 text-sm text-slate-500">Sample records grouped by source</p>
                </div>
                <span className="w-fit rounded-full bg-[#E8EFEA] px-3 py-1.5 text-xs font-semibold text-[#354E4B]">
                  {feedbackData.length} sample records
                </span>
              </div>
              <div className="space-y-3 pt-1">
                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                    <span>Survey Feedbacks</span>
                    <span className="font-bold text-slate-700">2 Records</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-[#354E4B]" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                    <span>Support Tickets</span>
                    <span className="font-bold text-slate-700">1 Record</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-[#52706A]" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                    <span>Email Feedbacks</span>
                    <span className="font-bold text-slate-700">1 Record</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-[#A3B899]" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#E8EFEA] text-[#354E4B]"><TrendingUp aria-hidden="true" className="h-5 w-5" /></span>
              <p className="text-sm font-semibold text-slate-800">Your overview will appear here</p>
              <p className="mt-1 max-w-sm text-sm leading-5 text-slate-500">Choose a feedback file to preview the sample records and their sources.</p>
            </div>
          )}
        </section>
      </div>

      <section className="dashboard-panel space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Feedback preview</h2>
          <p className="mt-1 text-sm text-slate-500">Review records before continuing to analysis.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold tracking-wider text-slate-500">
                <th className="py-3 px-2">ID</th>
                <th className="py-3 px-2">CUSTOMER FEEDBACK</th>
                <th className="py-3 px-2">SOURCE</th>
                <th className="py-3 px-2">DATE</th>
                <th className="py-3 px-2">PRE-CHECK</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              {feedbackData.length > 0 ? (
                feedbackData.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-3 py-3 font-mono text-slate-500">{row.id}</td>
                    <td className="max-w-md truncate px-3 py-3 font-medium text-slate-800">{row.feedback}</td>
                    <td className="px-3 py-3 text-slate-600">{row.source}</td>
                    <td className="px-3 py-3 text-slate-600">{row.date}</td>
                    <td className="px-3 py-3">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-semibold inline-block ${
                        row.status === 'Positive' ? 'bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200' :
                        row.status === 'Negative' ? 'bg-rose-50 text-rose-800 ring-1 ring-rose-200' : 'bg-slate-100 text-slate-700 ring-1 ring-slate-200'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-12 text-center">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8EFEA] text-[#354E4B]"><FileText aria-hidden="true" className="h-5 w-5" /></span>
                      <p className="text-sm font-medium text-slate-700">No feedback selected</p>
                      <p className="text-xs text-slate-500">Choose a file above to preview the sample records.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold text-slate-900">{feedbackData.length}</span>
            <div>
              <p className="text-sm font-semibold text-slate-800">Records in preview</p>
              <p className="text-xs text-slate-500">{feedbackData.length > 0 ? 'Sample preview only' : 'Awaiting file selection'}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500">Showing {feedbackData.length} sample records</span>
            <button
              onClick={onNavigateToAnalyze}
              disabled={feedbackData.length === 0}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-2 shadow-sm transition-all ${
                feedbackData.length > 0
                  ? 'bg-[#354E4B] hover:bg-[#2C423F] text-white cursor-pointer focus-visible:outline-[#354E4B]'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>✨</span> Continue to analysis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashCards;