import React, { useState } from 'react';
import { ArrowRight, Code, Box, Cpu, Zap, Settings, Github, ChevronDown, Gauge, BookOpen, Users, Building2, Newspaper, MessageSquare, Check, ChevronRight } from 'lucide-react';

// SVG Logo Components
const TerraformLogo = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <path d="M39.1 31.9v-14l12.2-7v14l-12.2 7z" fill="#5C4EE5" />
    <path d="M24.9 38.9v-14l12.2-7v14l-12.2 7z" fill="#4040B2" />
    <path d="M12.7 31.9v-14l12.2-7v14l-12.2 7z" fill="#5C4EE5" />
    <path d="M24.9 41.9v14l12.2 7v-14l-12.2-7z" fill="#5C4EE5" />
  </svg>
);

const KubernetesLogo = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <path d="M32 4.1c-1 0-2 .2-2.9.7L10.7 14.2c-1.8 1-3 2.9-3.2 5L5.1 37.8c-.2 2.1.5 4.2 2 5.8l16.2 13.7c1.5 1.3 3.4 2 5.4 2h6.6c2 0 3.9-.7 5.4-2l16.2-13.7c1.5-1.6 2.2-3.7 2-5.8l-2.4-18.6c-.2-2.1-1.4-4-3.2-5L35.1 4.8c-.9-.5-2-.7-3.1-.7z" fill="#326CE5" />
    <path d="M32 10.8l17.8 6.5v15.4L32 39.2l-17.8-6.5V17.3L32 10.8z" fill="white" />
  </svg>
);

const DockerLogo = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <path d="M32 24.3h6.3v6.3H32z" fill="#2496ED" />
    <path d="M39.4 24.3h6.3v6.3h-6.3z" fill="#2496ED" />
    <path d="M24.6 24.3h6.3v6.3h-6.3z" fill="#2496ED" />
    <path d="M32 16.9h6.3v6.3H32z" fill="#2496ED" />
    <path d="M24.6 16.9h6.3v6.3h-6.3z" fill="#2496ED" />
    <path d="M47.9 24.3c-.9-.6-3-.9-4.6-.6-.2-1.5-1-2.8-2.4-4l-.8-.6-.6.8c-1.2 1.5-1.7 3.6-1.5 5.3-.1.4-.3.8-.5 1.2-1.2.7-3.1.9-3.6.9H9.7c-.7 4.2.4 9.7 3.3 13.4 2.5 3.1 6.2 4.7 11.1 4.7 10.7 0 18.7-4.9 22.4-13.8 1.5.1 4.6 0 6.2-3.1.1-.1.4-.8.5-1-.1-.1-1.9-.9-3.3-.9z" fill="#2496ED" />
  </svg>
);

const PrometheusLogo = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <path d="M32 7.4c-13.5 0-24.6 11-24.6 24.6S18.5 56.6 32 56.6s24.6-11 24.6-24.6S45.5 7.4 32 7.4zm0 45.2c-11.3 0-20.6-9.3-20.6-20.6S20.7 11.4 32 11.4s20.6 9.3 20.6 20.6S43.3 52.6 32 52.6z" fill="#E6522C" />
    <path d="M32 17.4c-8.1 0-14.6 6.5-14.6 14.6S23.9 46.6 32 46.6s14.6-6.5 14.6-14.6S40.1 17.4 32 17.4zm0 25.2c-5.9 0-10.6-4.7-10.6-10.6S26.1 21.4 32 21.4s10.6 4.7 10.6 10.6S37.9 42.6 32 42.6z" fill="#E6522C" />
  </svg>
);

const GitLabLogo = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <path d="M32 52.8L43.8 22H20.2L32 52.8z" fill="#E24329" />
    <path d="M32 52.8L20.2 22H9.3L32 52.8z" fill="#FC6D26" />
    <path d="M9.3 22L6.7 29.5c-.2.7.0 1.5.5 2L32 52.8 9.3 22z" fill="#FCA326" />
    <path d="M9.3 22h11L16 8.7c-.2-.7-1.2-.7-1.5 0L9.3 22z" fill="#E24329" />
    <path d="M32 52.8L43.8 22h10.9L32 52.8z" fill="#FC6D26" />
    <path d="M54.7 22l2.6 7.5c.2.7 0 1.5-.5 2L32 52.8 54.7 22z" fill="#FCA326" />
    <path d="M54.7 22h-11L48 8.7c.2-.7 1.2-.7 1.5 0L54.7 22z" fill="#E24329" />
  </svg>
);

const ArgoCDLogo = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <path d="M32 5L7 42h50L32 5z" fill="#0D67DE" />
    <path d="M32 59L7 22h50L32 59z" fill="#1EC1C8" />
  </svg>
);

const GrafanaLogo = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <path d="M32 7C18.2 7 7 18.2 7 32s11.2 25 25 25 25-11.2 25-25S45.8 7 32 7zm0 45.8c-11.5 0-20.8-9.3-20.8-20.8S20.5 11.2 32 11.2 52.8 20.5 52.8 32 43.5 52.8 32 52.8z" fill="#F46800" />
    <path d="M32 19.2c-7.1 0-12.8 5.7-12.8 12.8S24.9 44.8 32 44.8 44.8 39.1 44.8 32 39.1 19.2 32 19.2zm0 21.6c-4.9 0-8.8-4-8.8-8.8s4-8.8 8.8-8.8 8.8 4 8.8 8.8-3.9 8.8-8.8 8.8z" fill="#F46800" />
  </svg>
);

const JenkinsLogo = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12">
    <path d="M32 5C17.6 5 6 16.6 6 31s11.6 26 26 26 26-11.6 26-26S46.4 5 32 5zm0 47c-11.6 0-21-9.4-21-21s9.4-21 21-21 21 9.4 21 21-9.4 21-21 21z" fill="#D33833" />
    <path d="M32 14c-9.4 0-17 7.6-17 17s7.6 17 17 17 17-7.6 17-17-7.6-17-17-17zm0 29c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z" fill="#D33833" />
  </svg>
);


// Sous-composant pour le menu déroulant
const DropdownMenu = ({ title, icon: Icon, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 py-2 text-gray-300 hover:text-white transition-colors"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Icon className="w-4 h-4" />
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-64 py-2 bg-gray-900/95 backdrop-blur-lg rounded-lg border border-white/10 shadow-xl"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {items.map((item, index) => (
            <button
              key={index}
              className="flex flex-col w-full px-4 py-3 text-left hover:bg-white/5 transition-colors"
            >
              <span className="text-white font-medium">{item.title}</span>
              <span className="text-sm text-gray-400">{item.description}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Settings className="w-8 h-8 text-cyan-400 animate-spin-slow" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-400 rounded-full animate-pulse" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              KustomOps
            </div>
          </div>

          {/* Navigation principale */}
          <div className="hidden lg:flex items-center gap-8">
            <DropdownMenu
              title="Produit"
              icon={Box}
              items={[
                {
                  title: "Vue d'ensemble",
                  description: "Découvrez toutes nos fonctionnalités"
                },
                {
                  title: "Microservices",
                  description: "Génération et déploiement automatisés"
                },
                {
                  title: "Infrastructure",
                  description: "Gestion multi-cloud et on-premise"
                },
                {
                  title: "Monitoring",
                  description: "Supervision en temps réel"
                }
              ]}
            />

            <DropdownMenu
              title="Solutions"
              icon={Cpu}
              items={[
                {
                  title: "Entreprises",
                  description: "Pour les grandes organisations"
                },
                {
                  title: "Startups",
                  description: "Solutions adaptées aux startups"
                },
                {
                  title: "Cloud Providers",
                  description: "Intégration avec votre cloud"
                }
              ]}
            />

            <DropdownMenu
              title="Ressources"
              icon={BookOpen}
              items={[
                {
                  title: "Documentation",
                  description: "Guides et références techniques"
                },
                {
                  title: "Blog",
                  description: "Articles et actualités DevOps"
                },
                {
                  title: "Communauté",
                  description: "Forums et évènements"
                }
              ]}
            />

            <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Gauge className="w-4 h-4" />
              Tarifs
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="hidden lg:flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </button>

            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                <Users className="w-4 h-4" />
                Se connecter
              </button>

              <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-lg hover:from-cyan-500 hover:to-indigo-500 transition-all hover:shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2">
                <span>Essai gratuit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};


const TestimonialCard = ({ testimonial, className = '' }) => (
  <div className={`shrink-0 w-96 p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 mx-4 ${className}`}>
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <div className="w-10 h-1 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full" />
      </div>
      <p className="text-lg text-gray-300 mb-8 flex-grow">"{testimonial.quote}"</p>
      <div>
        <div className="font-semibold text-white mb-1">{testimonial.author}</div>
        <div className="text-sm text-gray-400">{testimonial.role}</div>
        <div className="text-sm text-cyan-400">{testimonial.company}</div>
      </div>
    </div>
  </div>
);

const ScrollingRow = ({ items, direction = 'left', speed = 'normal' }) => {
  const speedClasses = {
    slow: 'animate-scroll-slow',
    normal: 'animate-scroll-normal',
    fast: 'animate-scroll-fast'
  };

  return (
    <div className="relative flex overflow-hidden py-4 group">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
      
      {/* First row of items */}
      <div className={`flex shrink-0 items-center gap-4 ${speedClasses[speed]} ${direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'} group-hover:[animation-play-state:paused]`}>
        {items.map((item, index) => (
          <TestimonialCard key={`row1-${index}`} testimonial={item} />
        ))}
      </div>
      
      {/* Duplicate row for seamless scrolling */}
      <div className={`flex shrink-0 items-center gap-4 ${speedClasses[speed]} ${direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'} group-hover:[animation-play-state:paused]`}>
        {items.map((item, index) => (
          <TestimonialCard key={`row2-${index}`} testimonial={item} />
        ))}
      </div>
    </div>
  );
};

const AnimatedTestimonials = () => {
  const testimonials1 = [
    {
      quote: "KustomOps a révolutionné notre façon de gérer les microservices. Le gain de temps est incroyable.",
      author: "Marie L.",
      role: "DevOps Lead",
      company: "TechCorp"
    },
    {
      quote: "La flexibilité de la plateforme nous permet d'adapter notre infrastructure en temps réel.",
      author: "Thomas B.",
      role: "CTO",
      company: "StartupFlow"
    },
    {
      quote: "Le support est exceptionnel et la documentation est claire. Exactement ce dont nous avions besoin.",
      author: "Sophie M.",
      role: "Solutions Architect",
      company: "DataCloud"
    },
    {
      quote: "L'intégration avec nos outils existants a été sans faille. Une vraie réussite.",
      author: "Jean D.",
      role: "Lead Developer",
      company: "CloudScale"
    }
  ];

  const testimonials2 = [
    {
      quote: "La mise en place a été d'une simplicité déconcertante. Un vrai game-changer pour notre équipe.",
      author: "Paul R.",
      role: "Infrastructure Manager",
      company: "DevSecOps"
    },
    {
      quote: "Le monitoring en temps réel nous a permis d'anticiper plusieurs incidents critiques.",
      author: "Claire M.",
      role: "SRE Lead",
      company: "DataFlow"
    },
    {
      quote: "L'automatisation des déploiements nous fait gagner des heures chaque semaine.",
      author: "Alexandre K.",
      role: "Tech Lead",
      company: "CloudNative"
    },
    {
      quote: "La scalabilité de la solution nous a permis de gérer notre croissance sereinement.",
      author: "Emma P.",
      role: "VP Engineering",
      company: "ScaleUp"
    }
  ];

  return (
    <div className="relative z-10 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/20 to-transparent" />
      <div className="max-w-full mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Ce qu'en disent nos clients
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Découvrez pourquoi les équipes DevOps choisissent KustomOps
          </p>
        </div>
        
        <div className="space-y-8">
          <ScrollingRow items={testimonials1} direction="left" speed="normal" />
          <ScrollingRow items={testimonials2} direction="right" speed="slow" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
        }

        .animate-scroll-slow {
          animation-duration: 60s;
        }

        .animate-scroll-normal {
          animation-duration: 50s;
        }

        .animate-scroll-fast {
          animation-duration: 40s;
        }
      `}</style>
    </div>
  );
};



const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced Pattern Overlay */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%),
            radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.1) 2%, transparent 0%),
            radial-gradient(circle at 50px 50px, rgba(103, 232, 249, 0.05) 3%, transparent 0%)
          `,
          backgroundSize: '100px 100px, 100px 100px, 150px 150px'
        }} />
      </div>

      {/* Enhanced Animated Gradient Orbs */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`
            }}
          />
        ))}
      </div>

      {/* Enhanced Navigation */}
      <NavBar />

      {/* Enhanced Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-40">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-900/50 to-indigo-900/50 border border-white/10 text-sm animate-bounce">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          Nouveau : Déploiement automatisé avec monitoring temps réel
        </div>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Personnalisez vos Ops
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              comme jamais auparavant
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Une plateforme DevOps nouvelle génération qui s'adapte à votre workflow.
            Générez et déployez vos microservices en quelques clics avec une
            personnalisation totale.
          </p>
          <div className="flex items-center justify-center gap-6">
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-lg text-lg font-medium hover:from-cyan-500 hover:to-indigo-500 transition-all hover:shadow-lg hover:shadow-cyan-500/50 inline-flex items-center gap-3">
              Démarrer gratuitement
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 bg-white/5 rounded-lg text-lg font-medium hover:bg-white/10 transition-all border border-white/10 inline-flex items-center gap-3">
              Voir la démo
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Code Preview */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 -mt-20">
        <div className="rounded-xl bg-gray-900/70 backdrop-blur-xl border border-white/10 p-6 font-mono text-sm overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="ml-4 text-gray-400">Terminal</div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-cyan-400">$</span>
              <span className="text-gray-300">npx create-kustomops-app `mon-projet`</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Check className="w-4 h-4 text-green-400" />
              <span>Initialisation du projet...</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Check className="w-4 h-4 text-green-400" />
              <span>Configuration des services...</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
              <span className="text-cyan-400">Déploiement en cours...</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Features Grid with Real Tech Logos */}
      <div className="relative z-10 py-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Une plateforme complète
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Customisez chaque aspect de votre infrastructure avec des outils
              modernes et une interface intuitive
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                icon: <KubernetesLogo />,
                title: "Orchestration K8s",
                description: "Gestion native de Kubernetes avec support multi-cluster"
              },
              {
                icon: <DockerLogo />,
                title: "Conteneurisation",
                description: "Build et déploiement automatisé de conteneurs Docker"
              },
              {
                icon: <TerraformLogo />,
                title: "Infrastructure as Code",
                description: "Gestion de l'infrastructure avec Terraform intégré"
              },
              {
                icon: <ArgoCDLogo />,
                title: "GitOps Ready",
                description: "Déploiement continu avec ArgoCD et FluxCD"
              },
              {
                icon: <PrometheusLogo />,
                title: "Monitoring avancé",
                description: "Métriques temps réel avec Prometheus et Grafana"
              },
              {
                icon: <GitLabLogo />,
                title: "CI/CD intégré",
                description: "Pipelines automatisés avec GitLab CI et Jenkins"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="p-4 rounded-lg bg-gradient-to-br from-white/5 to-transparent w-fit mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-cyan-400 group-hover:translate-x-2 transition-transform">
                  <span>En savoir plus</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Stats Section with Animation */}
      <div className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Projets générés" },
              { number: "99.9%", label: "Fiabilité" },
              { number: "5min", label: "Setup moyen" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div
                key={index}
                className="relative group p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className="relative">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="relative z-10 py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/20 to-transparent" />
        <div className="max-w-4xl mx-auto text-center px-6 relative">
          <h2 className="text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Prêt à transformer
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              votre infrastructure ?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Rejoignez les équipes qui font confiance à KustomOps pour
            leurs infrastructures DevOps nouvelle génération.
          </p>
          <div className="flex items-center justify-center gap-6">
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-lg text-lg font-medium hover:from-cyan-500 hover:to-indigo-500 transition-all hover:shadow-lg hover:shadow-cyan-500/50 inline-flex items-center gap-3">
              Commencer maintenant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 bg-white/5 rounded-lg text-lg font-medium hover:bg-white/10 transition-all border border-white/10 inline-flex items-center gap-3">
              Documentation
              <Code className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* New Testimonials Section */}
      <AnimatedTestimonials />

      {/* Technology Stack Section with Real Logos */}
      <div className="relative z-10 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Stack technologique
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Une infrastructure moderne basée sur les meilleures technologies
            </p>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {[
              { name: "Kubernetes", icon: <KubernetesLogo /> },
              { name: "Docker", icon: <DockerLogo /> },
              { name: "Terraform", icon: <TerraformLogo /> },
              { name: "Prometheus", icon: <PrometheusLogo /> },
              { name: "GitLab CI", icon: <GitLabLogo /> },
              { name: "ArgoCD", icon: <ArgoCDLogo /> },
              { name: "Grafana", icon: <GrafanaLogo /> },
              { name: "Jenkins", icon: <JenkinsLogo /> }
            ].map((tech, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col items-center gap-4"
              >
                <div className="p-4 rounded-lg bg-gradient-to-br from-white/5 to-transparent group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Footer */}
      <footer className="relative z-10 pt-32 pb-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-8 h-8 text-cyan-400" />
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  KustomOps
                </div>
              </div>
              <p className="text-gray-400">
                Plateforme DevOps nouvelle génération pour vos microservices
              </p>
            </div>
            {[
              {
                title: "Produit",
                links: ["Fonctionnalités", "Prix", "Documentation", "API"]
              },
              {
                title: "Ressources",
                links: ["Blog", "Tutoriels", "Guides", "Support"]
              },
              {
                title: "Entreprise",
                links: ["À propos", "Carrières", "Contact", "Presse"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-white/10 flex justify-between items-center text-gray-400 text-sm">
            <div>© 2025 KustomOps. Tous droits réservés.</div>
            <div className="flex gap-6">
              <button className="hover:text-cyan-400 transition-colors">
                Mentions légales
              </button>
              <button className="hover:text-cyan-400 transition-colors">
                Confidentialité
              </button>
              <button className="hover:text-cyan-400 transition-colors">
                CGU
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Add keyframes for floating animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;