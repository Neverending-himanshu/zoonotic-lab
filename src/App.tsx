import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PIPage } from './pages/PIPage';
import { ResearchPage } from './pages/ResearchPage';
import { PublicationsPage } from './pages/PublicationsPage';
import { DatasetsPage } from './pages/DatasetsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { MembersPage } from './pages/MembersPage';
import { GalleryPage } from './pages/GalleryPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');

  // Sync route with URL hash for standard browser history and deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash) {
        setCurrentRoute(hash);
      } else {
        setCurrentRoute('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: string) => {
    setCurrentRoute(route);
    window.location.hash = `#/${route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentView = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'pi':
        return <PIPage onNavigate={navigateTo} />;
      case 'research':
      case 'research-domains':
        return <ResearchPage initialSubTab="domains" onNavigate={navigateTo} />;
      case 'research-tech':
        return <ResearchPage initialSubTab="technologies" onNavigate={navigateTo} />;
      case 'research-facilities':
        return <ResearchPage initialSubTab="facilities" onNavigate={navigateTo} />;
      case 'publications':
      case 'publications-articles':
        return <PublicationsPage initialSubTab="articles" onNavigate={navigateTo} />;
      case 'publications-chapters':
        return <PublicationsPage initialSubTab="chapters" onNavigate={navigateTo} />;
      case 'publications-patents':
        return <PublicationsPage initialSubTab="patents" onNavigate={navigateTo} />;
      case 'datasets':
        return <DatasetsPage initialSubTab="all" onNavigate={navigateTo} />;
      case 'datasets-proteome':
        return <DatasetsPage initialSubTab="proteome" onNavigate={navigateTo} />;
      case 'datasets-transcriptome':
        return <DatasetsPage initialSubTab="transcriptome" onNavigate={navigateTo} />;
      case 'datasets-metagenome':
        return <DatasetsPage initialSubTab="metagenome" onNavigate={navigateTo} />;
      case 'projects':
        return <ProjectsPage onNavigate={navigateTo} />;
      case 'members':
      case 'members-current':
        return <MembersPage initialSubTab="current" onNavigate={navigateTo} />;
      case 'members-alumni':
        return <MembersPage initialSubTab="alumni" onNavigate={navigateTo} />;
      case 'gallery':
        return <GalleryPage onNavigate={navigateTo} />;
      case 'news':
      case 'news-achievements':
        return <NewsPage initialSubTab="achievements" onNavigate={navigateTo} />;
      case 'news-trainings':
        return <NewsPage initialSubTab="trainings" onNavigate={navigateTo} />;
      case 'news-positions':
        return <NewsPage initialSubTab="positions" onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navbar currentRoute={currentRoute} onNavigate={navigateTo} />
      <main className="flex-1">
        {renderCurrentView()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
