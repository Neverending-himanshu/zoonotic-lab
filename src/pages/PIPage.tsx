import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PlaceholderFrame } from '../components/PlaceholderFrame';
import {
  piProfile,
  educationList,
  postDocProjects,
  careerTimeline,
  honorsList,
  awardsList,
  professionalRecognitions,
  achievementsByTheme,
  internationalCollaborations
} from '../data/piData';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Briefcase,
  Globe2,
  ShieldAlert,
  ChevronDown,
  Building,
  Mail,
  Phone,
  Printer,
  Calendar,
  FileCheck2
} from 'lucide-react';

interface PIPageProps {
  onNavigate: (route: string) => void;
}

export const PIPage: React.FC<PIPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'achievements' | 'timeline' | 'education' | 'honors' | 'recognitions' | 'international'>('achievements');
  const [expandedThemes, setExpandedThemes] = useState<Record<string, boolean>>({
    "Diagnostic Preparedness": true,
    "Biosafety and Biocontainment": true,
    "Surveillance and Epidemiology": true,
    "Diagnostics and Vaccine Development": true,
    "Infection Genomics": true,
    "Human Diseases": true,
    "Training and Human Resource Development": true
  });

  const toggleTheme = (theme: string) => {
    setExpandedThemes(prev => ({ ...prev, [theme]: !prev[theme] }));
  };

  return (
    <div className="space-y-10 pb-16">
      <Breadcrumbs items={[{ label: 'Meet the Principal Investigator' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* LEVEL 1: OVERVIEW HERO */}
        <section className="bg-white border border-slate-200 rounded shadow-xs p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* PI Portrait Frame (4:5 ratio per B10) */}
            <div className="lg:col-span-4 max-w-sm mx-auto lg:max-w-none w-full">
              <div className="rounded overflow-hidden border border-slate-300 shadow-sm">
                <PlaceholderFrame
                  src="/images/pi/portrait.jpg"
                  alt="Dr. Ashwin Ashok Raut, Principal Scientist"
                  ratio="4:5"
                  caption="Dr. Ashwin Ashok Raut"
                  className="w-full"
                />
                <div className="bg-slate-50 border-t border-slate-200 p-3 text-center">
                  <div className="text-xs font-semibold text-slate-800">
                    Dr. Ashwin Ashok Raut
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Principal Scientist &amp; Group Leader
                  </div>
                </div>
              </div>

              {/* Direct Communications Box */}
              <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded text-xs space-y-2 text-slate-600">
                <div className="font-semibold text-slate-800 text-[11px] uppercase tracking-wider">
                  Official Communication
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                  <a href="mailto:ashwin.nihsad@gmail.com" className="text-teal-800 hover:underline truncate">
                    ashwin.nihsad@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                  <span className="truncate">ashwin.raut@icar.gov.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                  <span>+91-755-2750647 (ext. 398)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Printer className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                  <span>+91-755-2758842</span>
                </div>
              </div>
            </div>

            {/* PI Details & Biography */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 mb-2">
                  Principal Investigator &amp; Lab Head
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                  {piProfile.name}
                </h1>
                <p className="text-base text-slate-700 font-medium mt-1">
                  {piProfile.designation}
                </p>
                <p className="text-xs sm:text-sm text-slate-500">
                  {piProfile.institute}
                </p>
              </div>

              {/* Experience and Present Work */}
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <p className="bg-slate-50/80 border-l-3 border-teal-600 p-3 rounded-r text-xs sm:text-sm">
                  <strong className="text-slate-900">Background &amp; Track Record: </strong>
                  {piProfile.experience}
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  <strong className="text-slate-900">Current Research Mandate: </strong>
                  {piProfile.presentWork}
                </p>
              </div>

              {/* Specialisation Tags */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Primary Areas of Specialisation
                </h3>
                <div className="flex flex-wrap gap-2">
                  {piProfile.specialisation.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs bg-slate-100 text-slate-800 px-3 py-1.5 rounded border border-slate-200/90 font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Quantitative Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-slate-50 border border-slate-200 rounded p-3 text-center">
                  <div className="font-serif text-xl font-bold text-teal-800">{piProfile.keyStats.extramuralFunding}</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">Extramural Funding</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded p-3 text-center">
                  <div className="font-serif text-xl font-bold text-teal-800">{piProfile.keyStats.projects} Projects</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">16 PI / 16 Co-PI</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded p-3 text-center">
                  <div className="font-serif text-xl font-bold text-teal-800">{piProfile.keyStats.publications} Papers</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">IF &gt; 170 · 1,200+ Cites</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded p-3 text-center">
                  <div className="font-serif text-xl font-bold text-teal-800">{piProfile.keyStats.datasets}</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">High-Throughput Sets</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEVEL 2: DETAILED EXPERIENCE & ACHIEVEMENTS */}
        <section className="space-y-6">
          {/* Navigation Tabs */}
          <div className="border-b border-slate-200 flex flex-wrap gap-2 text-xs sm:text-sm font-medium">
            <button
              onClick={() => setActiveTab('achievements')}
              className={`pb-3 px-3 border-b-2 font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'achievements'
                  ? 'border-teal-700 text-teal-900'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Key Achievements (7 Themes)</span>
            </button>

            <button
              onClick={() => setActiveTab('timeline')}
              className={`pb-3 px-3 border-b-2 font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'timeline'
                  ? 'border-teal-700 text-teal-900'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Career Timeline</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`pb-3 px-3 border-b-2 font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'education'
                  ? 'border-teal-700 text-teal-900'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education &amp; Post-Doc</span>
            </button>

            <button
              onClick={() => setActiveTab('honors')}
              className={`pb-3 px-3 border-b-2 font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'honors'
                  ? 'border-teal-700 text-teal-900'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Honors &amp; Awards</span>
            </button>

            <button
              onClick={() => setActiveTab('recognitions')}
              className={`pb-3 px-3 border-b-2 font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'recognitions'
                  ? 'border-teal-700 text-teal-900'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Expert Committees &amp; Memberships</span>
            </button>

            <button
              onClick={() => setActiveTab('international')}
              className={`pb-3 px-3 border-b-2 font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'international'
                  ? 'border-teal-700 text-teal-900'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <Globe2 className="w-4 h-4" />
              <span>International Collaborations</span>
            </button>
          </div>

          {/* TAB 1: ACHIEVEMENTS BY THEME */}
          {activeTab === 'achievements' && (
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded p-4 text-xs text-slate-600 mb-4">
                Detailed research breakthroughs achieved across seven core thematic areas over 20 years of ICAR and international investigations.
              </div>

              {achievementsByTheme.map((group) => {
                const isExpanded = expandedThemes[group.theme] ?? true;
                return (
                  <div key={group.theme} className="bg-white border border-slate-200 rounded overflow-hidden shadow-2xs">
                    <button
                      onClick={() => toggleTheme(group.theme)}
                      className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100/80 transition-colors text-left"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                        <h3 className="font-serif text-base font-bold text-slate-900">
                          {group.theme}
                        </h3>
                        <span className="text-xs text-slate-500 ml-2">
                          ({group.items.length} records)
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="p-4 sm:p-5 border-t border-slate-200 space-y-3 bg-white">
                        {group.items.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                            <p className="leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 2: CAREER TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="bg-white border border-slate-200 rounded p-6 shadow-xs">
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-6">
                Chronological Career Timeline
              </h3>

              <div className="relative border-l-2 border-teal-600/40 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-8">
                {careerTimeline.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline bullet */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-2 border-teal-700 group-hover:bg-teal-700 transition-colors"></div>

                    <div className="bg-slate-50 border border-slate-200 rounded p-4 hover:border-slate-300 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h4 className="font-serif font-bold text-sm sm:text-base text-slate-900">
                          {item.position}
                        </h4>
                        <span className="text-xs font-mono font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 w-fit">
                          {item.from} – {item.to}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600">
                        {item.organization}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: EDUCATION */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded p-6 shadow-xs">
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-4">
                  Academic Qualifications
                </h3>

                <div className="divide-y divide-slate-200">
                  {educationList.map((edu, idx) => (
                    <div key={idx} className="py-4 first:pt-0 last:pb-0 space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="font-serif font-bold text-sm sm:text-base text-slate-900">
                          {edu.degree}
                        </h4>
                        <span className="text-xs font-mono font-semibold text-slate-600">
                          {edu.year}
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm text-slate-700 font-medium">
                        {edu.institution}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed italic">
                        {edu.notes}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Post-Doc Projects */}
              <div className="bg-white border border-slate-200 rounded p-6 shadow-xs">
                <h3 className="font-serif text-base font-bold text-slate-900 mb-2">
                  Post-Doctoral Fellow Research Projects (Texas Tech University Health Sciences Center, USA)
                </h3>
                <p className="text-xs text-slate-600 mb-4">
                  Jun 2009 – Sep 2010 · Center of Excellence for Infectious Diseases, El Paso, Texas:
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {postDocProjects.map((p, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-teal-700 font-bold">•</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: HONORS & AWARDS */}
          {activeTab === 'honors' && (
            <div className="space-y-6">
              {/* Honors */}
              <div className="bg-white border border-slate-200 rounded p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-amber-600" />
                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    National &amp; International Honors
                  </h3>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {honorsList.map((honor, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200/80 p-3 rounded">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                      <p className="leading-relaxed">{honor}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards */}
              <div className="bg-white border border-slate-200 rounded p-6 shadow-xs">
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-4">
                  Research Paper &amp; Poster Awards
                </h3>

                <div className="divide-y divide-slate-200">
                  {awardsList.map((award, idx) => (
                    <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                          {award.title}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mt-1.5">
                        "{award.topic}"
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {award.event}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: RECOGNITIONS & MEMBERSHIPS */}
          {activeTab === 'recognitions' && (
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded p-6 shadow-xs">
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-4">
                  Government, National &amp; International Expert Committees
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  {professionalRecognitions.map((rec, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200 p-3 rounded flex items-start gap-2.5">
                      <span className="text-teal-700 font-bold">•</span>
                      <span className="leading-relaxed">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded p-6 shadow-xs">
                <h3 className="font-serif text-base font-bold text-slate-900 mb-3">
                  Professional Society Life Memberships
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {piProfile.memberships.map((m, idx) => (
                    <div key={idx} className="p-2.5 rounded bg-slate-50 border border-slate-200/80">
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: INTERNATIONAL COLLABORATIONS (DEDICATED SECTION) */}
          {activeTab === 'international' && (
            <div className="bg-white border border-slate-200 rounded p-6 shadow-xs space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Globe2 className="w-5 h-5 text-teal-800" />
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    International Collaborations and Assignments
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Formal multi-country research partnerships, biosecurity panels, and joint scientific investigations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {internationalCollaborations.map((collab) => (
                  <div
                    key={collab.id}
                    className="border border-slate-200 rounded p-4 bg-slate-50/70 hover:border-slate-300 transition-colors space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                        {collab.country}
                      </span>
                    </div>
                    <h4 className="font-serif text-sm font-bold text-slate-900">
                      {collab.partner}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {collab.topicOrRole}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
