import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ShieldAlert, Sparkles, ExternalLink } from 'lucide-react';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

interface NavSubItem {
  label: string;
  route: string;
}

interface NavItem {
  label: string;
  route: string;
  subItems?: NavSubItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Home', route: 'home' },
    {
      label: 'Research',
      route: 'research',
      subItems: [
        { label: 'Domains', route: 'research-domains' },
        { label: 'Technologies Developed', route: 'research-tech' },
        { label: 'Facilities (BSL-3 & SPF Unit)', route: 'research-facilities' },
      ],
    },
    {
      label: 'Publications',
      route: 'publications',
      subItems: [
        { label: 'Articles', route: 'publications-articles' },
        { label: 'Book Chapters', route: 'publications-chapters' },
        { label: 'Patents', route: 'publications-patents' },
      ],
    },
    {
      label: 'Datasets',
      route: 'datasets',
      subItems: [
        { label: 'Proteome', route: 'datasets-proteome' },
        { label: 'Transcriptome', route: 'datasets-transcriptome' },
        { label: 'Viral Metagenome', route: 'datasets-metagenome' },
      ],
    },
    { label: 'Lab Projects', route: 'projects' },
    {
      label: 'Lab Members',
      route: 'members',
      subItems: [
        { label: 'Current Team', route: 'members-current' },
        { label: 'Alumni Scholars', route: 'members-alumni' },
      ],
    },
    { label: 'Gallery', route: 'gallery' },
    {
      label: 'News',
      route: 'news',
      subItems: [
        { label: 'Recent Achievements', route: 'news-achievements' },
        { label: 'Lab Trainings', route: 'news-trainings' },
        { label: 'Open Positions', route: 'news-positions' },
      ],
    },
    { label: 'Contact Us', route: 'contact' },
  ];

  const isCurrentActive = (item: NavItem) => {
    if (currentRoute === item.route) return true;
    if (item.subItems) {
      return item.subItems.some((sub) => sub.route === currentRoute);
    }
    return false;
  };

  const handleItemClick = (route: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900 border-b border-slate-800 text-slate-100 shadow-md">
      {/* Top Institutional Bar */}
      <div className="bg-slate-950/80 border-b border-slate-800/80 px-4 sm:px-6 lg:px-8 py-1.5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-200">ICAR-NIHSAD, Bhopal</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">
              National Institute of High Security Animal Diseases
            </span>
          </div>
          <div className="flex items-center space-x-3 text-[11px]">
            <button
              onClick={() => handleItemClick('news-positions')}
              className="text-amber-300 hover:text-amber-200 underline font-medium"
            >
              We are hiring
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Lab Title */}
          <button
            onClick={() => handleItemClick('home')}
            className="flex items-center space-x-3 text-left focus:outline-hidden group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 shadow-md shrink-0 group-hover:border-emerald-500 transition-colors">
              <ShieldAlert className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.6]" />
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white leading-tight group-hover:text-emerald-300 transition-colors">
                PathoGenomics Lab
              </div>
            </div>
          </button>

          {/* Desktop Navigation with dynamic active underline */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const active = isCurrentActive(item);
              const hasSub = !!item.subItems;

              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => hasSub && setOpenDropdown(item.label)}
                  onMouseLeave={() => hasSub && setOpenDropdown(null)}
                >
                  <button
                    onClick={() => handleItemClick(item.route)}
                    className={`relative inline-flex items-center px-3 py-2.5 text-xs font-medium transition-colors ${
                      active
                        ? 'text-emerald-400 font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup={hasSub ? 'true' : undefined}
                  >
                    <span>{item.label}</span>
                    {hasSub && (
                      <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                    )}

                    {/* Dynamic line under the section name that disappears when leaving (normal blue colour, no fluorescent glow) */}
                    {active && (
                      <span
                        className="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-blue-600 rounded-full transition-all duration-200"
                        aria-hidden="true"
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {hasSub && (
                    <div
                      className={`absolute left-0 mt-0 w-60 py-2 bg-slate-900 border border-slate-700/80 rounded shadow-xl transition-all duration-150 z-50 ${
                        openDropdown === item.label
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-1'
                      }`}
                    >
                      {item.subItems!.map((sub) => (
                        <button
                          key={sub.route}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleItemClick(sub.route);
                          }}
                          className={`w-full text-left px-4 py-2 text-xs transition-colors block ${
                            currentRoute === sub.route
                              ? 'bg-slate-800 text-emerald-400 font-semibold border-l-2 border-blue-600'
                              : 'text-slate-300 hover:text-white hover:bg-slate-800'
                          }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-hidden"
              aria-label="Toggle Mobile Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-800 bg-slate-900 px-4 pt-2 pb-6 space-y-1">
          {navItems.map((item) => {
            const active = isCurrentActive(item);
            const hasSub = !!item.subItems;

            return (
              <div key={item.label} className="border-b border-slate-800/60 pb-1">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleItemClick(item.route)}
                    className={`text-left py-2 px-2 text-sm font-medium w-full ${
                      active ? 'text-emerald-400 font-bold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                  {hasSub && (
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className="p-2 text-slate-400 hover:text-white"
                      aria-label={`Toggle ${item.label} sub-sections`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {hasSub && openDropdown === item.label && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-950/40 rounded my-1 border-l-2 border-blue-600">
                    {item.subItems!.map((sub) => (
                      <button
                        key={sub.route}
                        onClick={() => handleItemClick(sub.route)}
                        className={`block w-full text-left py-1.5 px-2 text-xs rounded ${
                          currentRoute === sub.route
                            ? 'text-emerald-400 font-semibold bg-slate-800'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
};
