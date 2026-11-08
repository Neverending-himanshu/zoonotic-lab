import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { recentAchievements, openPositions } from '../data/newsData';
import { trainingPrograms, trainingSummary } from '../data/trainingsData';
import { Bell, Briefcase, GraduationCap, Mail, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

interface NewsPageProps {
  initialSubTab?: 'achievements' | 'trainings' | 'positions';
  onNavigate: (route: string) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({
  initialSubTab = 'achievements',
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<'achievements' | 'trainings' | 'positions'>(initialSubTab);

  useEffect(() => {
    if (initialSubTab) {
      setActiveTab(initialSubTab);
    }
  }, [initialSubTab]);

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs
        items={[
          { label: 'News & Announcements' },
          {
            label:
              activeTab === 'achievements'
                ? 'Recent Achievements'
                : activeTab === 'trainings'
                ? 'Lab Trainings'
                : 'Open Positions (Careers)'
          }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header & Sub-navigation */}
        <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
              Announcements &amp; Human Resources
            </span>
            <h1 className="font-serif text-3xl font-bold text-slate-900 mt-1">
              News, Trainings &amp; Open Positions
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Research achievements, national training workshops, and recruitment opportunities for researchers.
            </p>
          </div>

          <div className="flex border border-slate-300 rounded p-1 bg-slate-50 text-xs">
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                activeTab === 'achievements'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Recent Achievements
            </button>
            <button
              onClick={() => setActiveTab('trainings')}
              className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                activeTab === 'trainings'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Lab Trainings (17)
            </button>
            <button
              onClick={() => setActiveTab('positions')}
              className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                activeTab === 'positions'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-amber-900 bg-amber-50 hover:bg-amber-100'
              }`}
            >
              Open Positions (Careers)
            </button>
          </div>
        </div>

        {/* 1. RECENT ACHIEVEMENTS */}
        {activeTab === 'achievements' && (
          <div className="space-y-6">
            <div className="divide-y divide-slate-200 border border-slate-200 rounded bg-white overflow-hidden shadow-2xs">
              {recentAchievements.map((item) => (
                <article key={item.id} className="p-6 hover:bg-slate-50/80 transition-colors space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-teal-800 font-bold bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                        {item.category}
                      </span>
                      <span className="text-slate-500 font-medium">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  <h2 className="font-serif text-lg font-bold text-slate-900">
                    {item.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans max-w-4xl">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* 2. LAB TRAININGS (Table of 17 programmes + summary statistics) */}
        {activeTab === 'trainings' && (
          <div className="space-y-6">
            {/* Summary line as required by A5 & B4 */}
            <div className="bg-slate-900 text-white p-4 sm:p-5 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm shadow-md">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-teal-400 shrink-0" />
                <div>
                  <span className="font-semibold text-white">National &amp; International Training Portfolio: </span>
                  <span className="text-slate-300">
                    {trainingSummary.totalPrograms} specialized programmes conducted, training a cumulative total of{' '}
                    <strong className="text-teal-300 font-bold">{trainingSummary.totalBeneficiaries} trainees</strong>.
                  </span>
                </div>
              </div>
              <div className="text-xs font-mono text-slate-400">
                Course Coordinator: {trainingSummary.coordinatorCount} | Core Faculty: {trainingSummary.coreFacultyCount}
              </div>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded shadow-2xs bg-white">
              <table className="min-w-full divide-y divide-slate-200 text-left text-xs font-sans">
                <thead className="bg-slate-100 text-slate-700 font-semibold uppercase text-[11px]">
                  <tr>
                    <th scope="col" className="py-3 px-3 w-12 text-center">#</th>
                    <th scope="col" className="py-3 px-4 min-w-[340px]">Training Title</th>
                    <th scope="col" className="py-3 px-3 w-44">Duration / Year</th>
                    <th scope="col" className="py-3 px-3 w-28 text-center">Beneficiaries</th>
                    <th scope="col" className="py-3 px-3 w-36 text-center">PI Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {trainingPrograms.map((tr) => (
                    <tr key={tr.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-3 text-center font-mono font-semibold text-slate-500">
                        {tr.id}
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-900 leading-relaxed">
                        {tr.title}
                      </td>
                      <td className="py-3.5 px-3 text-slate-600 font-mono text-[11px]">
                        {tr.duration}
                      </td>
                      <td className="py-3.5 px-3 text-center font-mono font-semibold text-slate-800">
                        {tr.beneficiaries}
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <span
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${
                            tr.role === 'Course Coordinator'
                              ? 'bg-teal-50 text-teal-800 border-teal-200'
                              : 'bg-slate-100 text-slate-700 border-slate-300'
                          }`}
                        >
                          {tr.role}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. OPEN POSITIONS (Careers page of the website) */}
        {activeTab === 'positions' && (
          <div className="space-y-8">
            <div className="bg-amber-50 border border-amber-200 rounded p-5 space-y-2">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-amber-800" />
                <h2 className="font-serif text-base font-bold text-amber-950">
                  Career Opportunities &amp; Research Fellowships
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                We are actively seeking motivated researchers, doctoral scholars, and project scientists to join our high-containment One Health surveillance and diagnostic development teams.
              </p>
              <div className="text-xs text-amber-950 pt-1 font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-800" />
                <span>Applications must be submitted via email to: </span>
                <a href="mailto:ashwin.nihsad@gmail.com" className="underline text-teal-900 font-mono">
                  ashwin.nihsad@gmail.com
                </a>
              </div>
            </div>

            <div className="space-y-6">
              {openPositions.map((pos) => (
                <div
                  key={pos.id}
                  className="bg-white border-2 border-slate-200 rounded p-6 shadow-xs hover:border-teal-600 transition-colors space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-slate-100 pb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                          {pos.status}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">
                          {pos.openingsCount} Openings
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-slate-900">
                        {pos.title}
                      </h3>
                    </div>

                    <a
                      href={`mailto:${pos.contactEmail}?subject=Application: ${encodeURIComponent(pos.title)}`}
                      className="px-4 py-2 rounded bg-teal-800 hover:bg-teal-700 text-white text-xs font-semibold transition-colors shrink-0 text-center inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Apply via Email</span>
                    </a>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-semibold text-slate-900 block mb-0.5">Linked Research Project:</span>
                      <span className="text-slate-700 bg-slate-50 p-2 rounded border border-slate-200 block">
                        {pos.linkedProject}
                      </span>
                    </div>

                    <div>
                      <span className="font-semibold text-slate-900 block mb-0.5">Essential Qualifications:</span>
                      <p className="text-slate-700 leading-relaxed">
                        {pos.qualifications}
                      </p>
                    </div>

                    <div>
                      <span className="font-semibold text-slate-900 block mb-0.5">Application Procedure:</span>
                      <p className="text-slate-700 leading-relaxed">
                        {pos.howToApply}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
