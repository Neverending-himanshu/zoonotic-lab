import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { projectsList, isProjectOngoing } from '../data/projectsData';
import { Project } from '../types';
import { Search, Filter, Briefcase, ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (route: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [statusFilter, setStatusFilter] = useState<'all' | 'ongoing' | 'completed'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Summary statistics from B1 & B2
  const summaryStats = {
    totalProjects: 32,
    piProjects: 16,
    copiProjects: 16,
    multiInstProjects: 19,
    internationalProjects: 4,
    extramuralFunding: "> ₹20 Crore"
  };

  const filteredProjects = useMemo(() => {
    return projectsList.filter((project) => {
      const ongoing = isProjectOngoing(project);
      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'ongoing' && ongoing) ||
        (statusFilter === 'completed' && !ongoing);

      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.fundingAgency.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.duration.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesStatus && matchesSearch;
    });
  }, [statusFilter, searchQuery]);

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs items={[{ label: 'Lab Projects' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Grant Portfolio
          </span>
          <h1 className="font-serif text-3xl font-bold text-slate-900 mt-1">
            Research Projects &amp; Extramural Grants
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
            Comprehensive register of 32 research investigations funded by national and international granting agencies including NOHM-ICMR, DBT, ICAR, BBSRC (UK), and CGIAR-ILRI.
          </p>
        </div>

        {/* SUMMARY STATISTICS BANNER (Put above the table per A6) */}
        <div className="bg-slate-900 text-white rounded p-6 shadow-md border border-slate-800">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            <div className="p-2">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-400">
                {summaryStats.totalProjects}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Total Projects</div>
            </div>
            <div className="p-2">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-400">
                {summaryStats.piProjects}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">As Principal Inv.</div>
            </div>
            <div className="p-2">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-400">
                {summaryStats.copiProjects}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">As Co-PI / PC</div>
            </div>
            <div className="p-2">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-400">
                {summaryStats.multiInstProjects}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Multi-Institutional</div>
            </div>
            <div className="p-2">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-400">
                {summaryStats.internationalProjects}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">International Funds</div>
            </div>
            <div className="p-2">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-400">
                {summaryStats.extramuralFunding}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Total Extramural</div>
            </div>
          </div>
        </div>

        {/* CONTROLS & COLOR LEGEND (Required per A6) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50 border border-slate-200 p-4 rounded text-xs">
          {/* Status Color Legend */}
          <div className="flex items-center space-x-6">
            <span className="font-semibold text-slate-700">Project Status:</span>
            <div className="flex items-center space-x-2">
              <span className="w-3.5 h-3.5 rounded-xs bg-emerald-100 border border-emerald-400 inline-block"></span>
              <span className="text-slate-700 font-medium">Ongoing Project (Light Green)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3.5 h-3.5 rounded-xs bg-rose-100 border border-rose-300 inline-block"></span>
              <span className="text-slate-700 font-medium">Completed Project (Light Pink-Red)</span>
            </div>
          </div>

          {/* Filter & Search Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex border border-slate-300 rounded overflow-hidden bg-white">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-3 py-1 font-medium transition-colors cursor-pointer ${
                  statusFilter === 'all'
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All (32)
              </button>
              <button
                onClick={() => setStatusFilter('ongoing')}
                className={`px-3 py-1 font-medium transition-colors cursor-pointer border-l border-slate-200 ${
                  statusFilter === 'ongoing'
                    ? 'bg-emerald-800 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Ongoing
              </button>
              <button
                onClick={() => setStatusFilter('completed')}
                className={`px-3 py-1 font-medium transition-colors cursor-pointer border-l border-slate-200 ${
                  statusFilter === 'completed'
                    ? 'bg-rose-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Completed
              </button>
            </div>

            <div className="relative w-full sm:w-56">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects, agencies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1 text-xs bg-white border border-slate-300 rounded focus:outline-hidden focus:border-teal-700"
              />
            </div>
          </div>
        </div>

        {/* DESKTOP / TABLET INTERACTIVE TABLE
            Exact requested columns:
            SN, Title of the project, Duration, Position, Funding Agency, Collaborating Institutions (number), Funds (in lakh INR).
            No extra columns added.
            Row color: ongoing = light green, completed = light pink-red.
            "Positions open" link in bottom right corner of project-title cell.
        */}
        <div className="hidden md:block overflow-x-auto border border-slate-200 rounded shadow-xs bg-white">
          <table className="min-w-full divide-y divide-slate-200 text-left text-xs font-sans">
            <thead className="bg-slate-100 text-slate-700 font-semibold tracking-wide uppercase text-[11px]">
              <tr>
                <th scope="col" className="py-3 px-3 w-12 text-center">SN</th>
                <th scope="col" className="py-3 px-4 min-w-[340px]">Title of the project</th>
                <th scope="col" className="py-3 px-3 w-28 whitespace-nowrap">Duration</th>
                <th scope="col" className="py-3 px-3 w-20 text-center">Position</th>
                <th scope="col" className="py-3 px-4 min-w-[200px]">Funding Agency</th>
                <th scope="col" className="py-3 px-3 w-28 text-center">Collab. Inst.</th>
                <th scope="col" className="py-3 px-3 w-28 text-right">Funds (Lakh INR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredProjects.map((project) => {
                const ongoing = isProjectOngoing(project);

                return (
                  <tr
                    key={project.sn}
                    className={`transition-colors ${
                      ongoing
                        ? 'bg-emerald-50/70 hover:bg-emerald-100/60 text-emerald-950'
                        : 'bg-rose-50/50 hover:bg-rose-100/50 text-rose-950'
                    }`}
                  >
                    {/* 1. SN */}
                    <td className="py-3.5 px-3 text-center font-mono font-semibold text-slate-600">
                      {project.sn}
                    </td>

                    {/* 2. Title of the project with Positions open link at bottom right */}
                    <td className="py-3.5 px-4 relative pr-4">
                      <div className="font-medium leading-relaxed pb-4 text-slate-900">
                        {project.title}
                      </div>

                      {/* Open positions marker in small font at bottom right corner */}
                      {ongoing && (
                        <div className="absolute right-3 bottom-1.5 text-right">
                          <button
                            onClick={() => onNavigate('news-positions')}
                            title="Click to view Open Positions for this project"
                            className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-teal-800 hover:text-teal-950 bg-teal-100/90 hover:bg-teal-200/90 px-1.5 py-0.5 rounded border border-teal-300 transition-colors cursor-pointer"
                          >
                            <span className="w-1 h-1 rounded-full bg-teal-600 mr-1 animate-pulse"></span>
                            <span>Positions open →</span>
                          </button>
                        </div>
                      )}
                    </td>

                    {/* 3. Duration */}
                    <td className="py-3.5 px-3 font-mono text-[11px] whitespace-nowrap text-slate-700">
                      {project.duration}
                    </td>

                    {/* 4. Position */}
                    <td className="py-3.5 px-3 text-center font-semibold text-slate-800">
                      {project.position}
                    </td>

                    {/* 5. Funding Agency */}
                    <td className="py-3.5 px-4 text-slate-700">
                      {project.fundingAgency}
                    </td>

                    {/* 6. Collaborating Institutions (number) */}
                    <td className="py-3.5 px-3 text-center font-mono text-slate-700">
                      {project.collabInst}
                    </td>

                    {/* 7. Funds (in lakh INR) */}
                    <td className="py-3.5 px-3 text-right font-mono font-medium text-slate-900 whitespace-nowrap">
                      {project.fundsInLakh}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* MOBILE RESPONSIVE STACKED CARDS (Phones per A6 & A7) */}
        <div className="block md:hidden space-y-4">
          {filteredProjects.map((project) => {
            const ongoing = isProjectOngoing(project);

            return (
              <div
                key={project.sn}
                className={`p-4 rounded border text-xs shadow-2xs space-y-3 ${
                  ongoing
                    ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                    : 'bg-rose-50/60 border-rose-300 text-rose-950'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[11px] text-slate-500">
                  <span className="font-bold">Project #{project.sn}</span>
                  <span>{project.duration}</span>
                </div>

                <h3 className="font-serif font-bold text-sm text-slate-900 leading-snug">
                  {project.title}
                </h3>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200/70 text-[11px]">
                  <div>
                    <span className="text-slate-500 block">Position:</span>
                    <span className="font-semibold text-slate-800">{project.position}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Funding:</span>
                    <span className="font-mono font-medium text-slate-800">{project.fundsInLakh} Lakh INR</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-500 block">Agency:</span>
                    <span className="text-slate-700">{project.fundingAgency}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Collaborating:</span>
                    <span className="font-mono text-slate-700">{project.collabInst} Institutes</span>
                  </div>
                </div>

                {ongoing && (
                  <div className="pt-2 text-right">
                    <button
                      onClick={() => onNavigate('news-positions')}
                      className="inline-flex items-center text-xs font-bold text-teal-800 hover:text-teal-950 bg-teal-100 px-2 py-1 rounded border border-teal-300"
                    >
                      <span>Positions open →</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
