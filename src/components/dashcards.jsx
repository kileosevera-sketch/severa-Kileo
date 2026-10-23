import React, { useState } from 'react';

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
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-2xl">😊</div>
          <div>
            <h3 className="font-semibold text-slate-800 text-sm">Sentiment Analysis</h3>
            <p className="text-xs text-slate-400">Understand customer emotion</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-2xl">⚠️</div>
          <div>
            <h3 className="font-semibold text-slate-800 text-sm">Severity Detection</h3>
            <p className="text-xs text-slate-400">Prioritize urgent feedback</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-2xl">🔍</div>
          <div>
            <h3 className="font-semibold text-slate-800 text-sm">Failure Prediction</h3>
            <p className="text-xs text-slate-400">Reveal likely root causes</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-2xl">📈</div>
          <div>
            <h3 className="font-semibold text-slate-800 text-sm">Trends Analysis</h3>
            <p className="text-xs text-slate-400">Track patterns over time</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-slate-800">Upload feedbacks</h2>

          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-500 uppercase">Aina ya Faili (Format)</label>
            <select
              value={fileType}
              onChange={(e) => setFileType(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none"
            >
              <option value="all">Any File (*.csv, *.pdf, *.xlsx, etc.)</option>
              <option value="csv">CSV File (*.csv)</option>
              <option value="pdf">PDF Document (*.pdf)</option>
              <option value="excel">Excel Spreadsheet (*.xlsx, *.xls)</option>
            </select>
          </div>

          <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 transition-colors text-center">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
            </div>
            <p className="text-xs font-medium text-slate-700 mb-0.5">Drop file here or browse</p>
            <p className="text-[10px] text-slate-400 mb-3">Max size: 25 MB</p>
            <label className="cursor-pointer">
              <input type="file" accept=".csv,.pdf,.xlsx,.xls,.txt" className="hidden" onChange={handleFileChange} />
              <span className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-100 shadow-sm inline-block">
                Browse file
              </span>
            </label>
            {selectedFile && (
              <p className="mt-2 text-[11px] text-emerald-600 font-medium truncate max-w-full">📄 {selectedFile.name}</p>
            )}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-center min-h-[220px]">
          {feedbackData.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h3 className="font-bold text-sm text-slate-800">Uploaded Feedback Distribution 📋</h3>
                  <p className="text-xs text-slate-400">Mwonekano wa idadi na chanzo cha data zilizopakiwa</p>
                </div>
                <span className="text-xs text-slate-600 font-medium bg-slate-100 px-2.5 py-1 rounded-lg">
                  Total: {feedbackData.length} Records
                </span>
              </div>
              <div className="space-y-3 pt-1">
                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                    <span>Survey Feedbacks</span>
                    <span className="font-bold text-slate-700">2 Records</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-slate-600 h-full rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                    <span>Support Tickets</span>
                    <span className="font-bold text-slate-700">1 Record</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-slate-500 h-full rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                    <span>Email Feedbacks</span>
                    <span className="font-bold text-slate-700">1 Record</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-slate-400 h-full rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center text-slate-400 py-4">
              <span className="text-3xl mb-2">📊</span>
              <p className="text-sm font-semibold text-slate-600">View Feedback Visuals</p>
              <p className="text-xs text-slate-400 max-w-sm mt-1">Upload faili lako hapo kushoto ili kuona muundo na idadi ya feedback zilizopakiwa kwenye grafu hii.</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Raw feedback preview</h2>
          <p className="text-xs text-slate-400 mt-1">Review the latest imported records before running analysis.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
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
                    <td className="py-4 px-2 text-slate-400 font-mono">{row.id}</td>
                    <td className="py-4 px-2 font-medium text-slate-800 max-w-md truncate">{row.feedback}</td>
                    <td className="py-4 px-2 text-slate-500">{row.source}</td>
                    <td className="py-4 px-2 text-slate-500">{row.date}</td>
                    <td className="py-4 px-2">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-semibold inline-block ${
                        row.status === 'Positive' ? 'bg-emerald-100 text-emerald-800' :
                        row.status === 'Negative' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-400">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <span className="text-3xl">📥</span>
                      <p className="font-medium text-sm text-slate-500">No feedbacks uploaded yet</p>
                      <p className="text-xs text-slate-400">Upload a file on the left box to preview feedbacks here.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-extrabold text-slate-800">{feedbackData.length}</span>
            <div>
              <p className="text-xs font-bold text-slate-700">Total Feedbacks Loaded</p>
              <p className="text-[11px] text-slate-400">{feedbackData.length > 0 ? 'Ready for analysis' : 'Awaiting file upload'}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">Showing {feedbackData.length} records</span>
            <button
              onClick={onNavigateToAnalyze}
              disabled={feedbackData.length === 0}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-2 shadow-sm transition-all ${
                feedbackData.length > 0
                  ? 'bg-[#354E4B] hover:bg-[#2c423f] text-white cursor-pointer active:scale-95'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>✨</span> Run Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashCards;