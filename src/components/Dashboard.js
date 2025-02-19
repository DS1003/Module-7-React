import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import withAuth from '../hoc/withAuth';
import { LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import {
    LayoutDashboard,
    ClipboardList,
    Users,
    Building2,
    GraduationCap,
    LogOut,
    Building,
    Menu,
    X,
    BellRing,
    Settings,
    ArrowRight,
    ChevronDown,
    Sparkles
} from 'lucide-react';
import logo from '../assets/logo.jpg';

// Moved data outside component to prevent unnecessary recreations
const evolutionData = [
    { name: 'Jan', Entree: 400, Sortie: 240 },
    { name: 'Fév', Entree: 300, Sortie: 139 },
    { name: 'Mar', Entree: 520, Sortie: 280 },
    { name: 'Avr', Entree: 450, Sortie: 250 },
    { name: 'Mai', Entree: 600, Sortie: 320 },
    { name: 'Juin', Entree: 580, Sortie: 250 },
];

const pieData = [
    { name: 'Zone Entrepot', value: 30, color: '#4F46E5' },
    { name: 'DMT ENTREPOT', value: 70, color: '#818CF8' }
];

const StatCard = React.memo(({ title, value, icon: Icon, delay }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            role="article"
            aria-label={`${title} statistics`}
        >
            <div className="group bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-6 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                <div className="relative flex items-center space-x-4">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold tracking-tight">{value}</h3>
                        <p className="text-blue-100 text-sm mt-1 font-medium">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
});

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
      localStorage.removeItem('isAuthenticated');
      navigate('/login');
  }, [navigate]);

  return (
      <div className="relative profile-dropdown">
          <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-3 group px-3 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-gray-100 hover:bg-white/80 transition-all duration-200"
          >
              <div className="relative w-8 h-8">
                  <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/LOGO_SONATEL_HD_FB.JPG/1200px-LOGO_SONATEL_HD_FB.JPG"
                      alt="Sonatel logo"
                      className="w-full h-full rounded-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">Sonatel</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>

          {isOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-lg py-2 z-50 border border-gray-100">
                  <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">Sonatel</p>
                      <p className="text-xs text-gray-500">sonatel@impact-rse.org</p>
                  </div>
                  <div className="py-1">
                      <button
                          onClick={() => navigate('/profile')}
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left flex items-center space-x-2 group"
                      >
                          <Settings className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                          <span>Profile Settings</span>
                      </button>
                      <button
                          onClick={() => navigate('/notifications')}
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left flex items-center space-x-2 group"
                      >
                          <BellRing className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                          <span>Notifications</span>
                      </button>
                      <button
                          onClick={handleLogout}
                          className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left flex items-center space-x-2 group"
                      >
                          <LogOut className="w-4 h-4 text-red-400 group-hover:text-red-600" />
                          <span>Déconnexion</span>
                      </button>
                  </div>
              </div>
          )}
      </div>
  );
};

// Other components remain the same but with added accessibility attributes...

const ModernChart = () => (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
        <div className="flex justify-between items-center mb-8">
            <div>
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                    Évolution des Partenariats
                </h2>
                <p className="text-gray-500 text-sm">Progression mensuelle des entrées et sorties</p>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                    <span className="text-sm text-gray-600">Entrées</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-violet-400"></div>
                    <span className="text-sm text-gray-600">Sorties</span>
                </div>
            </div>
        </div>
        <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={evolutionData}>
                    <defs>
                        <linearGradient id="colorEntree" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorSortie" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#818CF8" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#818CF8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="name" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            borderRadius: '12px',
                            border: 'none',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="Entree"
                        stroke="#4F46E5"
                        strokeWidth={3}
                        dot={{ fill: '#4F46E5', strokeWidth: 2 }}
                        activeDot={{ r: 8 }}
                        fill="url(#colorEntree)"
                    />
                    <Line
                        type="monotone"
                        dataKey="Sortie"
                        stroke="#818CF8"
                        strokeWidth={3}
                        dot={{ fill: '#818CF8', strokeWidth: 2 }}
                        activeDot={{ r: 8 }}
                        fill="url(#colorSortie)"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
);

const ModernPieChart = () => (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
        <div className="flex justify-between items-center mb-8">
            <div>
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                    Répartition des Zones
                </h2>
                <p className="text-gray-500 text-sm">Distribution par secteur</p>
            </div>
        </div>
        <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            borderRadius: '12px',
                            border: 'none',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
);

const ModernDescription = () => (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl group">
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                    <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                    RSE Sénégal - Impact RSE
                </h2>
            </div>
            <img src={logo} alt="RSE Logo" className="h-12 transform transition-transform group-hover:scale-110" />
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <p className="leading-relaxed">
                L'Initiative RSE Senegal, lancée en 2008 par le Cabinet CFPMI sarl, premier Cabinet spécialisé dans la RSE en Afrique de l'Ouest, a pour mission de promouvoir la Responsabilité Sociétale (RSE) auprès des Entreprises du Sénégal et des pays de l'Afrique de l'Ouest.
            </p>
            <div className="mt-6 flex items-center space-x-4">
                <button className="bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-lg flex items-center space-x-2 backdrop-blur-sm">
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-indigo-500 bg-white/80 backdrop-blur-sm" />
                    ))}
                </div>
            </div>
        </div>
    </div>
);


const SidebarLink = ({ icon: Icon, text, active, path, delay, isCollapsed }) => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            onClick={() => navigate(path)}
            className={`transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
        >
            <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 
                ${active
                    ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-blue-100/50 font-medium shadow-sm backdrop-blur-sm'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                } hover:scale-105`}
            >
                <div className="relative">
                    <Icon size={20} className={`transition-transform duration-300 ${active ? 'transform rotate-6' : 'group-hover:rotate-6'}`} />
                    {active && (
                        <div className="absolute -left-1 -right-1 -bottom-1 h-0.5 bg-blue-600 rounded-full animate-pulse" />
                    )}
                </div>
                {!isCollapsed && (
                    <span className="relative whitespace-nowrap">
                        {text}
                        {active && (
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-600/0 via-blue-600 to-blue-600/0 transform" />
                        )}
                    </span>
                )}
            </div>
        </div>
    );
};


const Dashboard = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentPath, setCurrentPath] = useState('/dashboard');

    const navigationItems = useMemo(() => [
        { icon: LayoutDashboard, text: "Tableau de bord", path: "/dashboard" },
        { icon: ClipboardList, text: "Journal d'activités", path: "/activities" },
        { icon: Users, text: "ONG", path: "/ong" },
        { icon: Building2, text: "Entreprise", path: "/enterprise" },
        { icon: Building, text: "Mairie", path: "/city-hall" },
        { icon: GraduationCap, text: "Milieu académique", path: "/academic" }
    ], []);

    useEffect(() => {
        setIsLoaded(true);
        setCurrentPath(window.location.pathname);
    }, []);

    const toggleSidebar = useCallback(() => {
        setIsSidebarCollapsed(prev => !prev);
    }, []);

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30">
            <aside
                className={`fixed md:relative ${isSidebarCollapsed ? 'w-20' : 'w-72'} bg-white/80 backdrop-blur-sm border-r border-gray-100 h-screen transition-all duration-300 z-30`}
                aria-label="Sidebar"
            >
                {/* Sidebar */}
                <div className={`fixed md:relative ${isSidebarCollapsed ? 'w-20' : 'w-72'} bg-white/80 backdrop-blur-sm border-r border-gray-100 h-screen transition-all duration-300 z-30`}>
                    <div className="px-6 py-8 h-full overflow-y-auto">
                        <div classNamse={`mb-10 flex items-center ${isSidebarCollapsed ? 'justify-center' : 'space-x-3'}`}>
                            <img src={logo} alt="RSE SENEGAL" className="h-14 transform transition-transform hover:scale-105" />
                            {!isSidebarCollapsed && (
                                <>
                                    <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
                                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                        RSE
                                    </span>
                                </>
                            )}
                        </div>

                        <nav className="space-y-3">
                            {navigationItems.map((item, index) => (
                                <SidebarLink
                                    key={item.path}
                                    icon={item.icon}
                                    text={item.text}
                                    path={item.path}
                                    active={currentPath === item.path}
                                    delay={100 + (index * 100)}
                                    isCollapsed={isSidebarCollapsed}
                                />
                            ))}
                        </nav>
                    </div>
                </div>
            </aside>

            <div className={`flex-1 min-h-screen relative transition-all duration-300 ${isSidebarCollapsed ? 'md:ml-20' : 'md:ml-0'}`}>
                <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm z-20">
                    <div className="flex justify-between items-center px-8 py-4">
                        <button
                            onClick={toggleSidebar}
                            className="text-gray-600 hover:text-indigo-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
                            aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                            aria-expanded={!isSidebarCollapsed}
                        >
                            {isSidebarCollapsed ? <Menu size={24} /> : <X size={24} />}
                        </button>
                        <ProfileDropdown />
                    </div>
                </header>

                <main className="p-4 md:p-8 space-y-8 transition-all duration-300">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <StatCard title="ONG" value="12" icon={Users} delay={100} />
                        <StatCard title="Entreprise" value="104" icon={Building2} delay={200} />
                        <StatCard title="Projets" value="518" icon={ClipboardList} delay={300} />
                        <StatCard title="Partenariat RSE-ONG" value="13" icon={Building} delay={400} />
                    </div>

                    {/* Charts Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                        <ModernChart />
                        <ModernPieChart />
                    </div>

                    {/* Description Section */}
                    <ModernDescription />

                    {/* Footer */}
                    <footer className="text-center text-gray-500 text-sm font-medium mt-8">
                        Copyright © Impact RSE Sénégal 2025. Tous Droits Réservés
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default withAuth(Dashboard);