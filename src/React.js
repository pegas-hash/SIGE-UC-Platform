import React, { useState } from 'react';

export default function App() {
  // State initialization matching the original dynamic viewing engine
  const [currentScreen, setCurrentScreen] = useState('studentSplash');
  const [activeTab, setActiveTab] = useState('nav-home');
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Core navigation routine mirroring the legacy `go()` and `switchTab()` actions
  const navigateTo = (hideId, showId, navActiveId) => {
    setCurrentScreen(showId);
    if (hideId === 'studentSplash') {
      setIsNavVisible(true);
    }
    if (navActiveId) {
      setActiveTab(navActiveId);
    }
  };

  const handleTabClick = (targetScreenId, tabId) => {
    setCurrentScreen(targetScreenId);
    setActiveTab(tabId);
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex justify-center items-center font-['Inter'] antialiased">
      <div className="w-[410px] h-[840px] bg-white rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden relative">
        
         {currentScreen === 'studentSplash' && (
          <div 
            id="studentSplash" 
            className="bg-[#1e6091] text-white flex-1 flex flex-col justify-center items-center cursor-pointer text-center gap-5"
            onClick={() => navigateTo('studentSplash', 'studentDashboard', 'nav-home')}
          >
            <img src="/images/slide4.png" style={{ height: '120px', width: '120px' }} alt="SIGE-UC Graphic" />
            <h1 className="text-xl">
              <span className="block font-semibold text-xl mt-0.5">Bienvenue Stranger Boy sur SIGE-UC app</span>
            </h1>
          </div>
        )}

         {currentScreen === 'studentDashboard' && (
          <div id="studentDashboard" className="flex flex-col h-100 w-100 flex-1 overflow-hidden">
            <header className="flex justify-between items-center px-6 py-5 bg-white flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 flex h-10 rounded-full bg-[#e2e8f0] text-xl text-[#1e3a8a] flex-center">
                  <i className="fa-solid fa-user"></i>
                </div>
                <div>
                  <h2 className="text-[14px] text-[#1e293b] font-bold">Stranger Boy</h2>
                  <p className="text-[11px] text-[#64748b]">Étudiant</p>
                </div>
              </div>
              <button className="bg-none border-none text-[20px] text-[#64748b]">
                <i className="fa-regular fa-bell"></i>
              </button>
            </header>
            
            <main className="bg-[#f4f7fc] flex-1 rounded-t-[28px] p-6 overflow-y-auto pb-[90px]">
              <h2 className="text-[20px] text-[#0f172a] font-bold leading-[1.3]">Découvrez les salons<br />hybrides</h2>
              <p className="text-[12px] text-[#64748b] mt-1">Découvrez les programmes, rencontrez des universités et commencez un voyage éducationnel.</p>

              <div className="flex justify-between items-center my-5 mb-3">
                <h3 className="text-[16px] color-[#0f172a] font-bold">Prochains Salons</h3>
                <a href="#" onClick={(e) => { e.preventDefault(); handleTabClick('agendaDashboard', 'nav-agenda'); }} className="text-[12px] text-[#2563eb] no-underline">Voir tout</a>
              </div>
              
              <div className="bg-gradient-to-t from-black/60 to-black/40 bg-[#cbd5e1] rounded-2xl p-4 text-white flex flex-col gap-2 min-h-[160px] justify-end relative overflow-hidden cursor-pointer" onClick={() => navigateTo('studentDashboard', 'agendaDetails', 'nav-agenda')}>
                <img src="" className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-0" alt="" />
                <h4 className="font-semibold text-sm">SIGE-UC 1ère Édition</h4>
                <p className="text-xs"><i className="fa-regular fa-calendar mr-1"></i> 21 Juillet 2026</p>
                <p className="text-xs"><i className="fa-solid fa-location-dot mr-1"></i> Hôtel Djeuga palace</p>
                <button className="bg-[#ef4444] text-white border-none py-1.5 px-3 rounded text-[11px] font-semibold cursor-pointer align-self-start self-start">Rejoindre</button>
              </div>

              <div className="flex justify-between items-center my-5 mb-3">
                <h3 className="text-[16px] color-[#0f172a] font-bold">Top Universités</h3>
                <a href="#" onClick={(e) => { e.preventDefault(); handleTabClick('searchDashboard', 'nav-search'); }} className="text-[12px] text-[#2563eb] no-underline">Explorer tout</a>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="bg-[#0c4a6e] text-white rounded-xl p-[14px_16px] flex justify-between items-center">
                  <div><h4 className="text-[13px] font-semibold">ESSEC BUSINESS SCHOOL</h4><p className="text-[11px] opacity-70 mt-0.5">Ville, Pays</p></div>
                  <button className="bg-white/20 border-none text-white p-[6px_14px] rounded text-[11px] cursor-pointer">Voir</button>
                </div>
                <div className="bg-[#0c4a6e] text-white rounded-xl p-[14px_16px] flex justify-between items-center">
                  <div><h4 className="text-[13px] font-semibold">SKEMA BUSINESS SCHOOL</h4><p className="text-[11px] opacity-70 mt-0.5">Ville, Pays</p></div>
                  <button className="bg-white/20 border-none text-white p-[6px_14px] rounded text-[11px] cursor-pointer">Voir</button>
                </div>
              </div>
            </main>
          </div>
        )}

          {currentScreen === 'searchDashboard' && (
          <div id="searchDashboard" className="flex flex-col h-100 w-100 flex-1 overflow-hidden">
            <header class="flex justify-between items-center px-6 py-5 bg-white flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 flex h-10 rounded-full bg-[#e2e8f0] text-xl text-[#1e3a8a] flex-center"><i className="fa-solid fa-user"></i></div>
                <div><h2 className="text-[14px] text-[#1e293b] font-bold">Stranger Boy</h2><p className="text-[11px] text-[#64748b]">Étudiant</p></div>
              </div>
            </header>
            <main className="bg-[#f4f7fc] flex-1 rounded-t-[28px] p-6 overflow-y-auto pb-[90px]">
              <div className="bg-white border border-[#e2e8f0] rounded-xl p-[12px_16px] flex items-center gap-2.5 mb-5">
                <i className="fa-solid fa-magnifying-glass text-[#94a3b8]"></i>
                <input type="text" placeholder="Rechercher Cours, Écoles..." className="border-none outline-none w-full text-[13px] text-[#1e293b]" />
              </div>

              <div className="bg-white rounded-2xl p-4 mb-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <div className="flex justify-between items-center mb-3">
                  <div><h4 className="font-bold text-[#0f172a] text-[15px]">ESSEC BUSINESS SCHOOL</h4><p className="text-[11px] text-[#64748b]">Formations disponibles</p></div>
                  <button className="bg-[#ef4444] text-white border-none p-[6px_14px] rounded-[20px] text-[11px] font-semibold cursor-pointer">Nous contacter</button>
                </div>
                <div className="w-full h-[110px] bg-[#e2e8f0] rounded-xl overflow-hidden mt-2 relative">
                  <img src="/images/info.png" className="w-full h-full object-cover absolute" alt="" />
                  <img src="" alt="Informatique Media" className="w-full h-full object-cover absolute mix-blend-normal z-10" style={{ backgroundColor: '#0f172a' }} onError={(e) => { e.target.style.background='#3b82f6' }} />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 mb-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <div className="flex justify-between items-center mb-3">
                  <div><h4 className="font-bold text-[#0f172a] text-[15px]">SKEMA BUSINESS SCHOOL</h4><p className="text-[11px] text-[#64748b]">Formations disponibles</p></div>
                  <button className="bg-[#ef4444] text-white border-none p-[6px_14px] rounded-[20px] text-[11px] font-semibold cursor-pointer">Nous contacter</button>
                </div>
                <div className="w-full h-[110px] bg-[#e2e8f0] rounded-xl overflow-hidden mt-2 relative">
                  <img src="/images/des.png" className="w-full h-full object-cover absolute" alt="" />
                  <img src="" alt="Design Media" className="w-full h-full object-cover absolute mix-blend-normal z-10" style={{ backgroundColor: '#0f172a' }} onError={(e) => { e.target.style.background='#10b981' }} />
                </div>
              </div>
            </main>
          </div>
        )}

      
       {currentScreen === 'agendaDashboard' && (
          <div id="agendaDashboard" className="flex flex-col h-100 w-100 flex-1 overflow-hidden">
            <header className="flex justify-between items-center px-6 py-5 bg-white flex-shrink-0">
              <div className="flex items-center gap-3"><div className="w-10 flex h-10 rounded-full bg-[#e2e8f0] text-xl text-[#1e3a8a] flex-center"><i className="fa-solid fa-user"></i></div><div><h2 className="text-[14px] text-[#1e293b] font-bold">Stranger Boy</h2><p className="text-[11px] text-[#64748b]">Étudiant</p></div></div>
              <button className="bg-none border-none text-[20px] text-[#64748b]"><i className="fa-regular fa-bell"></i></button>
            </header>
            <main className="bg-[#f4f7fc] flex-1 rounded-t-[28px] p-6 overflow-y-auto pb-[90px]">
              <h3 className="text-[14px] text-[#0f172a] font-bold">Juillet 2026</h3>
              <div className="flex justify-between bg-white p-[12px_6px] rounded-xl my-4 overflow-x-auto gap-1.5 [scrollbar-width:none]">
                <div className="flex flex-col items-center w-[35px] py-2 rounded-lg text-xs text-[#64748b]">J<span className="font-bold mt-1 text-[#1e293b]">13</span></div>
                <div className="flex flex-col items-center w-[35px] py-2 rounded-lg text-xs text-[#64748b]">V<span className="font-bold mt-1 text-[#1e293b]">14</span></div>
                <div className="flex flex-col items-center w-[35px] py-2 rounded-lg text-xs text-[#64748b]">S<span className="font-bold mt-1 text-[#1e293b]">15</span></div>
                <div className="flex flex-col items-center w-[35px] py-2 rounded-lg text-xs text-[#64748b]">D<span className="font-bold mt-1 text-[#1e293b]">16</span></div>
                <div className="flex flex-col items-center w-[35px] py-2 rounded-lg text-xs text-[#64748b]">L<span className="font-bold mt-1 text-[#1e293b]">17</span></div>
                <div className="flex flex-col items-center w-[35px] py-2 rounded-lg text-xs bg-[#ef4444] text-white">M<span className="font-bold mt-1 text-white">21</span></div>
                <div className="flex flex-col items-center w-[35px] py-2 rounded-lg text-xs text-[#64748b]">M<span className="font-bold mt-1 text-[#1e293b]">22</span></div>
                <div className="flex flex-col items-center w-[35px] py-2 rounded-lg text-xs text-[#64748b]">J<span className="font-bold mt-1 text-[#1e293b]">23</span></div>
              </div>

              <div className="bg-gradient-to-t from-black/60 to-black/40 bg-[#cbd5e1] rounded-2xl p-4 text-white flex flex-col gap-2 min-h-[190px] justify-end relative overflow-hidden cursor-pointer" onClick={() => navigateTo('agendaDashboard', 'agendaDetails', 'nav-agenda')}>
                <img src="/images/banna.png" className="absolute top-0 left-0 w-full h-full object-cover -z-10" alt="" />
                <img src="" className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-0" alt="" onError={(e) => e.target.style.opacity='0'} />
                <h4 className="font-semibold text-sm">01ère Édition du SIGE-UC</h4>
                <p className="text-[12px] bg-[#2563eb]/80 inline-block p-[3px_8px] rounded w-max"><i class="fa-regular fa-clock mr-1"></i> 09h - 18h</p>
                <button className="bg-[#ef4444] text-white border-none py-1.5 px-[14px] rounded text-[11px] font-semibold cursor-pointer self-end align-self-end">Voir détails</button>
              </div>
            </main>
          </div>
        )}

         {currentScreen === 'agendaDetails' && (
          <div id="agendaDetails" className="flex flex-col h-100 w-100 flex-1 overflow-hidden">
            <header className="flex justify-between items-center px-6 py-5 bg-white flex-shrink-0">
              <button onClick={() => navigateTo('agendaDetails', 'agendaDashboard', 'nav-agenda')} className="bg-none border-none text-[16px] text-[#1e293b] cursor-pointer font-medium flex items-center gap-1">
                <i className="fa-solid fa-chevron-left"></i> Retour
              </button>
            </header>
            <main className="bg-[#f4f7fc] flex-1 rounded-t-[28px] p-6 overflow-y-auto pb-[90px]">
              <div className="bg-gradient-to-t from-black/60 to-black/40 bg-[#cbd5e1] rounded-2xl p-4 text-white flex flex-col gap-2 min-h-[200px] justify-end relative overflow-hidden cursor-default">
                <img src="/images/detail.png" className="absolute top-0 left-0 w-full h-full object-cover -z-10" alt="" />
                <img src="" className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-0" alt="" onError={(e) => e.target.style.opacity='0'} />
                <h4 className="font-semibold text-sm">Salon international des grandes écoles et universités du cameroun</h4>
                <p className="text-xs"><i className="fa-solid fa-location-dot mr-1"></i> 21-22-23 Juillet 2026 - YAOUNDÉ</p>
              </div>

              <div className="bg-white rounded-2xl p-4 mt-[15px] text-[#334155] text-xs leading-[1.6]">
                <h4 className="text-[14px] text-[#0f172a] mb-1.5 font-bold">Description</h4>
                Le SIGE-UC n'est pas un simple Salon de plus. C'est un acte de foi en notre système éducatif et une réponse concrète aux orientations de la stratégie Nationale de Développement 2030 (SND30). Pour vous, dirigeants de l'enseignement supérieur, cette plateforme représente des enjeux stratégiques.
                <button className="bg-[#ef4444] text-white border-none w-full p-3 rounded-lg text-sm font-semibold cursor-pointer mt-[15px]">Participer</button>
              </div>
            </main>
          </div>
        )}

       
        {currentScreen === 'orientationDashboard' && (
          <div id="orientationDashboard" className="flex flex-col h-100 w-100 flex-1 overflow-hidden">
            <header className="flex justify-between items-center px-6 py-5 bg-white flex-shrink-0">
              <div className="flex items-center gap-3"><div className="w-10 flex h-10 rounded-full bg-[#e2e8f0] text-xl text-[#1e3a8a] flex-center"><i className="fa-solid fa-user"></i></div><div><h2 className="text-[14px] text-[#1e293b] font-bold">Stranger Boy</h2><p className="text-[11px] text-[#64748b]">Étudiant</p></div></div>
            </header>
            <main className="bg-[#f4f7fc] flex-1 rounded-t-[28px] p-6 overflow-y-auto pb-[90px]">
              <div className="bg-[#e0f2fe] rounded-[24px] p-[30px_20px] text-center mt-2.5">
                <h2 className="text-[18px] text-[#0369a1] font-extrabold leading-[1.4] mb-[25px]">Découvrez à présent la filière dans laquelle une meilleure orientation est possible</h2>
                <button className="bg-[#2563eb] text-white border-none p-[12px_35px] rounded-[25px] font-semibold text-[13px] cursor-pointer shadow-[0_4px_12px_rgba(37,99,235,0.2)]" onClick={() => alert("Lancement du test d'orientation...")}>
                  Faire un test
                </button>
              </div>
            </main>
          </div>
        )}

       
       
        {isNavVisible && (
          <div id="globalNav" className="absolute bottom-0 left-0 w-full bg-[#0f172a] flex justify-around py-3.5 z-10">
            <div id="nav-home" className={`text-[20px] cursor-pointer flex flex-col items-center gap-5 ${activeTab === 'nav-home' ? 'text-white' : 'text-[#64748b]'}`} onClick={() => handleTabClick('studentDashboard', 'nav-home')}>
              <i className="fa-solid fa-house"></i>
            </div>
            <div id="nav-search" className={`text-[20px] cursor-pointer flex flex-col items-center gap-5 ${activeTab === 'nav-search' ? 'text-white' : 'text-[#64748b]'}`} onClick={() => handleTabClick('searchDashboard', 'nav-search')}>
              <i className="fa-solid fa-compass"></i>
            </div>
            <div id="nav-agenda" className={`text-[20px] cursor-pointer flex flex-col items-center gap-5 ${activeTab === 'nav-agenda' ? 'text-white' : 'text-[#64748b]'}`} onClick={() => handleTabClick('agendaDashboard', 'nav-agenda')}>
              <i className="fa-solid fa-calendar-days"></i>
            </div>
            <div id="nav-orientation" className={`text-[20px] cursor-pointer flex flex-col items-center gap-5 ${activeTab === 'nav-orientation' ? 'text-white' : 'text-[#64748b]'}`} onClick={() => handleTabClick('orientationDashboard', 'nav-orientation')}>
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}