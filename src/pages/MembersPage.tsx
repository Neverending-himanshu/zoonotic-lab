import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PlaceholderFrame } from '../components/PlaceholderFrame';
import { researchTeam, technicalStaff, alumniScholars } from '../data/membersData';
import { TeamMember } from '../types';
import { Users, GraduationCap, Wrench, Mail, BookOpen, ChevronDown, ChevronUp, X } from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';

interface MembersPageProps {
  initialSubTab?: 'current' | 'alumni';
  onNavigate: (route: string) => void;
}

export const MembersPage: React.FC<MembersPageProps> = ({
  initialSubTab = 'current',
  onNavigate
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'current' | 'alumni'>(initialSubTab);
  const [expandedMemberIds, setExpandedMemberIds] = useState<Record<string, boolean>>({});
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const toggleExpand = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setExpandedMemberIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs
        items={[
          { label: 'Lab Members' },
          { label: activeSubTab === 'current' ? 'Current Team' : 'Alumni Scholars' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header & Sub-navigation */}
        <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
              Laboratory Personnel
            </span>
            <h1 className="font-serif text-3xl font-bold text-slate-900 mt-1">
              Research Team, Technical Staff &amp; Alumni
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Scientists, doctoral fellows, technical specialists, and graduated postgraduate scholars.
            </p>
          </div>

          <div className="flex border border-slate-300 rounded p-1 bg-slate-50 text-xs">
            <button
              onClick={() => setActiveSubTab('current')}
              className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                activeSubTab === 'current'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Current Team ({researchTeam.length + technicalStaff.length})
            </button>
            <button
              onClick={() => setActiveSubTab('alumni')}
              className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                activeSubTab === 'alumni'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Alumni Scholars ({alumniScholars.length})
            </button>
          </div>
        </div>

        {/* 1. CURRENT TEAM */}
        {activeSubTab === 'current' && (
          <div className="space-y-12">
            {/* Research Team Grid: 4 per row as strictly requested in A5 & B7 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <Users className="w-5 h-5 text-teal-800" />
                <h2 className="font-serif text-xl font-bold text-slate-900">
                  Research Team ({researchTeam.length})
                </h2>
              </div>
              <p className="text-xs text-slate-500">
                Principal scientists, project research scientists, doctoral researchers, and project fellows.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-2">
                {researchTeam.map((member) => {
                  const isExpanded = !!expandedMemberIds[member.id];
                  const hasLongDescription = (member.description || '').length > 90 || (member.description || '').includes('\n');

                  return (
                    <div
                      key={member.id}
                      className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-2xs hover:shadow-md hover:border-teal-700/40 transition-all duration-200 flex flex-col group"
                    >
                      {/* Interactive photo area: clicking triggers description expand or details modal */}
                      <div
                        onClick={() => {
                          if (member.description) {
                            toggleExpand(member.id);
                          } else {
                            setSelectedMember(member);
                          }
                        }}
                        className="p-4 bg-slate-50/70 pb-0 cursor-pointer relative"
                        title={member.description ? "Click photo to show full description" : "Click to view profile"}
                      >
                        <PlaceholderFrame
                          src={member.photo}
                          alt={member.name}
                          ratio="1:1"
                          caption="Team Member Photo"
                          className="rounded-md max-w-[200px] mx-auto transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                        {member.description && (
                          <div className="mt-2 text-center">
                            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-teal-700 hover:text-teal-900 bg-teal-50 hover:bg-teal-100/80 px-2 py-0.5 rounded-full border border-teal-200/60 transition-colors">
                              {isExpanded ? (
                                <><span>Collapse bio</span> <ChevronUp className="w-3 h-3" /></>
                              ) : (
                                <><span>Read bio</span> <ChevronDown className="w-3 h-3" /></>
                              )}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Member details: Name, designation, dynamic description */}
                      <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                        <div className="space-y-1">
                          <h3 className="font-serif font-bold text-sm sm:text-base text-slate-900 leading-snug">
                            {member.name}
                          </h3>
                          <div className="text-xs font-medium text-teal-800">
                            {member.designation}
                          </div>
                          {member.description && (
                            <div className="pt-1">
                              <p
                                className={`text-xs text-slate-600 leading-relaxed whitespace-pre-line transition-all ${
                                  !isExpanded ? 'line-clamp-3' : ''
                                }`}
                              >
                                {member.description}
                              </p>
                              {hasLongDescription && (
                                <button
                                  type="button"
                                  onClick={(e) => toggleExpand(member.id, e)}
                                  className="text-[11px] font-semibold text-teal-700 hover:text-teal-900 mt-1 inline-flex items-center gap-0.5 cursor-pointer underline"
                                >
                                  {isExpanded ? 'Show less' : 'Read more...'}
                                </button>
                              )}
                            </div>
                          )}
                        </div>

                        {member.email && (
                          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400 truncate flex items-center gap-1">
                            <Mail className="w-3 h-3 text-slate-400 shrink-0" />
                            <span className="truncate">{member.email}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Technical Staff Grid */}
            <section className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <Wrench className="w-5 h-5 text-slate-700" />
                <h2 className="font-serif text-xl font-bold text-slate-900">
                  Technical Staff ({technicalStaff.length})
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-2">
                {technicalStaff.map((staff) => (
                  <div
                    key={staff.id}
                    className="bg-white border border-slate-200 rounded p-5 shadow-2xs space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 shrink-0">
                        <PlaceholderFrame
                          src={staff.photo}
                          alt={staff.name}
                          ratio="1:1"
                          caption=""
                          className="rounded-full overflow-hidden"
                        />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-sm text-slate-900">
                          {staff.name}
                        </h3>
                        <div className="text-xs text-slate-500">
                          {staff.designation}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {staff.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* 2. ALUMNI SCHOLARS (Supervised & Co-Supervised) */}
        {activeSubTab === 'alumni' && (
          <div className="space-y-8">
            <div className="bg-slate-50 border border-slate-200 rounded p-4 text-xs text-slate-600">
              Postgraduate scholars supervised and co-supervised by Dr. Ashwin Ashok Raut across IVRI Izatnagar and GJUST Hisar. Co-supervised scholars are explicitly designated.
            </div>

            <div className="divide-y divide-slate-200 border border-slate-200 rounded bg-white overflow-hidden shadow-2xs">
              {alumniScholars.map((alum) => {
                const isCoSupervised = alum.supervisionType === 'co-supervised';

                return (
                  <div key={alum.id} className="p-5 hover:bg-slate-50/80 transition-colors space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-slate-500 font-semibold">
                          #{alum.id}
                        </span>
                        <h3 className="font-serif font-bold text-base text-slate-900">
                          {alum.name}
                        </h3>
                        <span className="text-xs text-slate-500">
                          ({alum.institution})
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                          {alum.degree} · {alum.year}
                        </span>
                        {isCoSupervised ? (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-300">
                            Co-Supervised
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            Supervised
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-xs sm:text-sm text-slate-700 bg-slate-50/80 p-3 rounded border border-slate-200/80">
                      <span className="font-semibold text-slate-900">Dissertation: </span>
                      <span className="italic font-serif">"{alum.title}"</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Member Details Modal / Popover */}
      {selectedMember && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-lg w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
              <h3 className="font-serif font-bold text-lg text-slate-900">
                {selectedMember.name}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="w-28 h-28 shrink-0 rounded-md overflow-hidden border border-slate-200 shadow-2xs">
                  <img
                    src={getAssetUrl(selectedMember.photo)}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1 text-center sm:text-left flex-1">
                  <h4 className="font-serif font-bold text-base text-slate-900">
                    {selectedMember.name}
                  </h4>
                  <p className="text-xs font-semibold text-teal-800">
                    {selectedMember.designation}
                  </p>
                  {selectedMember.email && (
                    <p className="text-xs text-slate-500 pt-1 flex items-center justify-center sm:justify-start gap-1">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <a href={`mailto:${selectedMember.email}`} className="hover:underline text-teal-700">
                        {selectedMember.email}
                      </a>
                    </p>
                  )}
                </div>
              </div>

              {selectedMember.description ? (
                <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Profile &amp; Research Focus
                  </h5>
                  <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-line">
                    {selectedMember.description}
                  </p>
                </div>
              ) : (
                <div className="bg-slate-50 p-4 rounded-md border border-slate-200 text-xs text-slate-500 italic">
                  Research group member at PathoGenomics Lab, ICAR-NIHSAD Bhopal.
                </div>
              )}
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="px-4 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
