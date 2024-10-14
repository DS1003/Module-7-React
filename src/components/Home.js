import React from 'react';

const Card = ({ title, description, content, icon }) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
    <div className="p-6">
      <div className="w-8 h-8 mb-4 text-purple-500">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p>{content}</p>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-purple-800 pt-20">
      <h1 className="text-white text-4xl font-bold text-center mb-12">
        Let's start
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card 
          icon="📅"
          title="Événements"
          description="Découvrez nos prochains événements"
          content="Participez à nos ateliers, conférences et rencontres passionnantes."
        />
        <Card 
          icon="👥"
          title="Communauté"
          description="Rejoignez notre communauté dynamique"
          content="Connectez-vous avec d'autres membres et partagez vos expériences."
        />
        <Card 
          icon="⚡"
          title="Ressources"
          description="Accédez à nos ressources exclusives"
          content="Explorez notre bibliothèque de tutoriels, guides et outils."
        />
      </div>
    </div>
  );
};

export default Home;