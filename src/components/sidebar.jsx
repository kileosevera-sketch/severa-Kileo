
function Sidebar({ currentTab, setCurrentTab, isCollapsed, onToggleCollapsed, isDarkMode, onToggleTheme }) {
  const menuItems = [
    { 
      name: 'Home', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ) 
    },
    { 
      name: 'Analyze', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
        </svg>
      ) 
    },
    { 
      name: 'Trends Analysis', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a.5.5 0 00.71 0l7.234-7.234M21 7.5H15M21 7.5v6" />
        </svg>
      ) 
    },
    { 
      name: 'Feedback History', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ) 
    },
  ];

  return (
    <aside className={`dashboard-sidebar relative z-10 w-full min-w-0 shrink-0 bg-[#080B0A] p-4 text-white shadow-md transition-[width] duration-200 md:sticky md:top-0 md:flex md:min-h-screen md:flex-col md:justify-between ${isCollapsed ? 'md:w-20 md:p-3' : 'md:w-64 md:p-6'}`}>
      <div className="min-w-0">
        {/* LOGO & HEADER */}
        <div className={`mb-6 flex items-center gap-3.5 md:mb-10 ${isCollapsed ? 'md:justify-center' : ''}`}>
          <div className="w-12 h-12 rounded-2xl bg-[#10231F] text-emerald-300 flex items-center justify-center shadow-sm relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="relative inline-flex h-3 w-3 rounded-full bg-teal-400 ring-2 ring-[#080B0A]"></span>
            </span>
          </div>
          <div className={isCollapsed ? 'md:hidden' : 'md:pr-9'}>
            <h1 className="font-extrabold text-base tracking-wider text-white uppercase">AI POSTSALE</h1>
            <p className="text-[11px] text-slate-300 font-medium">Customer Intelligence</p>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className="grid min-w-0 grid-cols-[repeat(2,minmax(0,1fr))] gap-2 sm:grid-cols-4 md:grid-cols-1 md:space-y-2">
          {menuItems.map((item) => {
            const isActive = currentTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setCurrentTab(item.name)}
                aria-current={isActive ? 'page' : undefined}
                aria-label={item.name}
                title={isCollapsed ? item.name : undefined}
                className={`flex min-h-11 min-w-0 w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 sm:px-4 sm:text-sm ${
                  isActive
                  ? 'bg-emerald-400 text-[#052E2B] shadow-sm'
                  : 'text-slate-300 hover:bg-[#10231F] hover:text-white'
                } ${isCollapsed ? 'md:justify-center md:px-2' : ''}`}
              >
                <div className={`flex min-w-0 items-center gap-2.5 sm:gap-3.5 ${isCollapsed ? 'md:justify-center' : ''}`}>
                  <span className={isActive ? 'text-[#052E2B]' : 'text-slate-400'}>{item.icon}</span>
                  <span className={`truncate ${isCollapsed ? 'md:hidden' : ''}`}>{item.name}</span>
                </div>
                {isActive && !isCollapsed && <span className="w-2 h-2 rounded-full bg-[#080B0A]"></span>}
              </button>
            );
          })}
        </nav>

        <div className={`mt-4 hidden md:flex ${isCollapsed ? 'justify-center' : 'justify-end'}`}>
          <button
            type="button"
            onClick={onToggleCollapsed}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            aria-expanded={!isCollapsed}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`h-5 w-5 transition-transform ${isCollapsed ? 'rotate-180' : ''}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 19-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className="mt-5 border-t border-white/10 pt-4">
          <button
            type="button"
            role="switch"
            aria-checked={isDarkMode}
            aria-label={`${isDarkMode ? 'Dark' : 'Light'} mode. Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            onClick={onToggleTheme}
            className={`flex min-h-11 w-full items-center justify-between rounded-xl px-3 py-2 text-left transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 sm:px-4 ${isCollapsed ? 'md:justify-center md:px-2' : ''}`}
          >
            <span className={`flex items-center gap-3 text-sm font-medium ${isCollapsed ? 'md:justify-center' : ''}`}>
              {isDarkMode ? (
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5 text-teal-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              ) : (
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5 text-amber-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m9-9h-2.25M5.25 12H3m15.364 6.364l-1.591-1.591M7.227 7.227 5.636 5.636m12.728 0-1.591 1.591M7.227 16.773l-1.591 1.591M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
              )}
              <span className={isCollapsed ? 'md:hidden' : ''}>Dark mode</span>
            </span>
            <span className={`relative h-6 w-11 rounded-full transition-colors ${isCollapsed ? 'md:hidden' : ''} ${isDarkMode ? 'bg-emerald-400' : 'bg-slate-500'}`}>
              <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${isDarkMode ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </span>
          </button>
          <p className={`mt-1 pl-11 text-xs text-slate-400 ${isCollapsed ? 'md:hidden' : ''}`}>{isDarkMode ? 'On · dark brown theme' : 'Off · light theme'}</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;