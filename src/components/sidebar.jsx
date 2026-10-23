
function Sidebar({ currentTab, setCurrentTab }) {
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
    <aside className="w-64 min-h-screen bg-[#354E4B] text-white p-6 flex flex-col justify-between shadow-lg">
      <div>
        {/* LOGO & HEADER */}
        <div className="flex items-center gap-3.5 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-[#E8EFEA] text-[#354E4B] flex items-center justify-center shadow-sm relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8A857] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C8A857]"></span>
            </span>
          </div>
          <div>
            <h1 className="font-extrabold text-base tracking-wider text-white uppercase">AI POSTSALE</h1>
            <p className="text-[11px] text-slate-300 font-medium">Customer Intelligence</p>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = currentTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setCurrentTab(item.name)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#A3B899] text-[#2B403D] shadow-sm'
                    : 'text-slate-200 hover:bg-[#2C423F] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className={isActive ? 'text-[#2B403D]' : 'text-slate-300'}>{item.icon}</span>
                  <span>{item.name}</span>
                </div>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#354E4B]"></span>}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;