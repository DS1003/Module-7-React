import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import withAuth from '../hoc/withAuth';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "./ui/Dialog";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/Select";
import { Table, TableCellComponent as TableCell, TableHeadComponent as TableHead, TableHeaderComponent as TableHeader, TableBodyComponent as TableBody, TableRowComponent as TableRow } from './ui/Table';
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
    Search,
    Plus,
    MoreHorizontal,
    ChevronDown
} from 'lucide-react';
import logo from '../assets/logo.jpg';

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

const Profile = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [currentPath, setCurrentPath] = useState('/profile');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [projectsPerPage, setProjectsPerPage] = useState(5);

    const navigationItems = useMemo(() => [
        { icon: LayoutDashboard, text: "Tableau de bord", path: "/dashboard" },
        { icon: ClipboardList, text: "Journal d'activités", path: "/activities" },
        { icon: Users, text: "ONG", path: "/ong" },
        { icon: Building2, text: "Entreprise", path: "/enterprise" },
        { icon: Building, text: "Mairie", path: "/city-hall" },
        { icon: GraduationCap, text: "Milieu académique", path: "/academic" }
    ], []);

    const [projects, setProjects] = useState([
        {
            id: 1,
            name: "HELICOPTERE",
            sector: "Santé",
            launchDate: "-",
            region: "Sénégal",
            phase: "En cours",
            currentBudget: "non enregistrée",
            remainingBudget: "non enregistrée"
        },
        {
            id: 2,
            name: "DESC",
            sector: "Education",
            launchDate: "-",
            region: "Matam, Sénégal",
            phase: "Lancé",
            currentBudget: "non enregistrée",
            remainingBudget: "non enregistrée"
        },
        // ... autres projets comme dans votre capture d'écran
    ]);

    // Filtre des projets
    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.sector.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.region.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    const [newProject, setNewProject] = useState({
        name: '',
        sector: '',
        region: '',
        phase: ''
    });

    const handleAddProject = () => {
        setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
        setIsModalOpen(false);
        setNewProject({ name: '', sector: '', region: '', phase: '' });
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
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

            {/* Main Content */}
            <div className="flex-1 min-h-screen">
                {/* Header */}
                <header className="sticky top-0 bg-white shadow-sm z-20">
                    <div className="flex justify-between items-center px-6 py-4">
                        <button
                            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                            className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-50"
                        >
                            {isSidebarCollapsed ? <Menu size={20} /> : <X size={20} />}
                        </button>
                        <ProfileDropdown />
                    </div>
                </header>

                {/* Main Content */}
                <main className="p-6">
                    <div className="max-w-7xl mx-auto space-y-6">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <h1 className="text-2xl font-semibold text-gray-900">Projets Sonatel</h1>
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                                <div className="relative w-full md:w-auto">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                    <Input
                                        type="text"
                                        placeholder="Rechercher un projet..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10 w-full md:w-64 bg-white"
                                    />
                                </div>
                                <Button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-700"
                                >
                                    <Plus className="h-4 w-4 mr-2" />
                                    Nouveau projet
                                </Button>
                            </div>
                        </div>

                        {/* Projects Table */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100">

                            {/* Tableau */}
                            <div className="bg-white rounded-lg shadow">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Nom du projet</TableHead>
                                            <TableHead>Secteur</TableHead>
                                            <TableHead>Date lancement</TableHead>
                                            <TableHead>Pays/Région</TableHead>
                                            <TableHead>Phase projet</TableHead>
                                            <TableHead>Budget actuel</TableHead>
                                            <TableHead>Budget restant</TableHead>
                                            <TableHead>Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {currentProjects.map((project) => (
                                            <TableRow key={project.id}>
                                                <TableCell className="font-medium">{project.name}</TableCell>
                                                <TableCell>{project.sector}</TableCell>
                                                <TableCell>{project.launchDate}</TableCell>
                                                <TableCell>{project.region}</TableCell>
                                                <TableCell>
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium
                                                                                ${project.phase === 'En cours' ? 'bg-orange-100 text-orange-600' :
                                                            project.phase === 'Terminé' ? 'bg-green-100 text-green-600' :
                                                                'bg-blue-100 text-blue-600'}`}>
                                                        {project.phase}
                                                    </span>
                                                </TableCell>
                                                <TableCell>{project.currentBudget}</TableCell>
                                                <TableCell>{project.remainingBudget}</TableCell>
                                                <TableCell>
                                                    <Button variant="ghost" size="icon">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>

                                {/* Pagination */}
                                <div className="flex items-center justify-between px-4 py-3 border-t">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm text-gray-500">Afficher</span>
                                        <Select
                                            value={projectsPerPage.toString()}
                                            onValueChange={(value) => setProjectsPerPage(Number(value))}
                                        >
                                            <SelectTrigger className="w-16">
                                                <SelectValue>{projectsPerPage}</SelectValue>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="5">5</SelectItem>
                                                <SelectItem value="10">10</SelectItem>
                                                <SelectItem value="20">20</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <span className="text-sm text-gray-500">projets par page</span>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Button
                                            variant="outline"
                                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                            disabled={currentPage === 1}
                                        >
                                            Précédent
                                        </Button>
                                        {Array.from({ length: totalPages }, (_, i) => (
                                            <Button
                                                key={i + 1}
                                                variant={currentPage === i + 1 ? "default" : "outline"}
                                                onClick={() => setCurrentPage(i + 1)}
                                            >
                                                {i + 1}
                                            </Button>
                                        ))}
                                        <Button
                                            variant="outline"
                                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                            disabled={currentPage === totalPages}
                                        >
                                            Suivant
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Modal d'ajout de projet */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Ajouter un nouveau projet</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Nom du projet</label>
                            <Input
                                value={newProject.name}
                                onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Secteur</label>
                            <Select
                                value={newProject.sector}
                                onValueChange={(value) => setNewProject({ ...newProject, sector: value })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Sélectionner un secteur" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Santé">Santé</SelectItem>
                                    <SelectItem value="Education">Education</SelectItem>
                                    <SelectItem value="Agriculture">Agriculture</SelectItem>
                                    <SelectItem value="Environnement">Environnement</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Région</label>
                            <Input
                                value={newProject.region}
                                onChange={(e) => setNewProject({ ...newProject, region: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Phase</label>
                            <Select
                                value={newProject.phase}
                                onValueChange={(value) => setNewProject({ ...newProject, phase: value })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Sélectionner une phase" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="En cours">En cours</SelectItem>
                                    <SelectItem value="Lancé">Lancé</SelectItem>
                                    <SelectItem value="Terminé">Terminé</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                            Annuler
                        </Button>
                        <Button onClick={handleAddProject}>
                            Ajouter le projet
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default withAuth(Profile);