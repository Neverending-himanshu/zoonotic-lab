import React from 'react';
import { Mail, Phone, Printer, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = 2026;

  const quickLinks = [
    { label: 'Meet the PI', route: 'pi' },
    { label: 'Research Domains', route: 'research-domains' },
    { label: 'Facilities (BSL-3 & SPF Unit)', route: 'research-facilities' },
    { label: 'Publications', route: 'publications' },
    { label: 'Datasets', route: 'datasets' },
    { label: 'Lab Projects', route: 'projects' },
    { label: 'Lab Members', route: 'members' },
    { label: 'Open Positions', route: 'news-positions' },
    { label: 'Lab Trainings', route: 'news-trainings' },
    { label: 'Collaborate with Us (Contact)', route: 'contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-sm">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Lab Identity & Address */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded bg-teal-900/60 border border-teal-700/60 flex items-center justify-center text-teal-300">
                <span className="font-serif font-bold text-base">ZDG</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-white">
                  Zoonotic Diseases Group
                </h3>
                <p className="text-xs text-slate-400">
                  ICAR-National Institute of High Security Animal Diseases (NIHSAD)
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              A premier high-containment biosafety research laboratory dedicated to emerging animal viral diseases, One Health epidemiology, pathogen genomics, and next-generation diagnostics.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  ICAR-National Institute of High Security Animal Diseases (ICAR-NIHSAD),<br />
                  Anand Nagar, Bhopal, Madhya Pradesh, India, 462022
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>+91-755-2750647 (ext. 398)</span>
              </div>
              <div className="flex items-center gap-2">
                <Printer className="w-4 h-4 text-teal-400 shrink-0" />
                <span>+91-755-2758842</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>ashwin.nihsad@gmail.com · ashwin.raut@icar.gov.in</span>
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="pt-2">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Connect with the Lab
              </div>
              <div className="flex items-center space-x-2">
                {/* LinkedIn */}
                <a
                  href="#/contact"
                  title="LinkedIn [URL to be added]"
                  className="w-8 h-8 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-teal-400 hover:bg-slate-800 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                {/* X (Twitter) */}
                <a
                  href="#/contact"
                  title="X (Twitter) [URL to be added]"
                  className="w-8 h-8 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-teal-400 hover:bg-slate-800 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#/contact"
                  title="Instagram [URL to be added]"
                  className="w-8 h-8 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-teal-400 hover:bg-slate-800 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="#/contact"
                  title="Facebook [URL to be added]"
                  className="w-8 h-8 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-teal-400 hover:bg-slate-800 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-7">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 pb-1 border-b border-slate-800">
              Quick Links for Visitors & Researchers
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2.5 gap-x-4 text-xs">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => onNavigate(link.route)}
                  className="text-left text-slate-400 hover:text-teal-300 transition-colors truncate"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://nihsad.nic.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors truncate"
              >
                <span>ICAR-NIHSAD Portal</span>
                <ExternalLink className="w-3 h-3 ml-1 shrink-0" />
              </a>
            </div>

            {/* Guiding Themes reminder */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-400">
              <div>
                <span className="font-semibold text-slate-300 block mb-1">High-Risk Biocontainment</span>
                Operational BSL-3 and ABSL-3 suites dedicated to priority pathogens: Avian Influenza H5N1, CCHF, Nipah, MERS, Ebola, and Monkeypox.
              </div>
              <div>
                <span className="font-semibold text-slate-300 block mb-1">One Health Interconnectedness</span>
                Bridging animal disease surveillance with human pandemic preparedness across India's domestic and wildlife interfaces.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-slate-950 border-t border-slate-800/90 py-4 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © {currentYear} Zoonotic Diseases Group, ICAR-National Institute of High Security Animal Diseases (NIHSAD). All rights reserved.
          </div>
          <div className="text-[11px] text-slate-400">
            Indian Council of Agricultural Research (ICAR) · Government of India
          </div>
        </div>
      </div>
    </footer>
  );
};
