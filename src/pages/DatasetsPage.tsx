import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  datasetsIntroduction,
  proteomeDatasets,
  transcriptomeDatasets,
  viralMetagenomeDatasets
} from '../data/datasetsData';
import { Database, ExternalLink, Dna, Activity, Lock, CheckCircle2 } from 'lucide-react';

interface DatasetsPageProps {
  initialSubTab?: 'all' | 'proteome' | 'transcriptome' | 'metagenome';
  onNavigate: (route: string) => void;
}

export const DatasetsPage: React.FC<DatasetsPageProps> = ({
  initialSubTab = 'all',
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'proteome' | 'transcriptome' | 'metagenome'>(initialSubTab);

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs
        items={[
          { label: 'Datasets' },
          {
            label:
              activeTab === 'proteome'
                ? 'Proteome'
                : activeTab === 'transcriptome'
                ? 'Transcriptome'
                : activeTab === 'metagenome'
                ? 'Viral Metagenome'
                : 'All Public Datasets'
          }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header & Opening Statement */}
        <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
              Open Science &amp; Repositories
            </span>
            <h1 className="font-serif text-3xl font-bold text-slate-900 mt-1">
              High-Throughput Omics Datasets
            </h1>
            {/* Opening line as specified in A5 */}
            <p className="text-xs sm:text-sm text-slate-700 mt-2 max-w-3xl font-sans bg-emerald-50 border-l-3 border-emerald-700 p-3 rounded-r">
              {datasetsIntroduction}
            </p>
          </div>

          <div className="flex border border-slate-300 rounded p-1 bg-slate-50 text-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All (15)
            </button>
            <button
              onClick={() => setActiveTab('proteome')}
              className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                activeTab === 'proteome'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Proteome (1)
            </button>
            <button
              onClick={() => setActiveTab('transcriptome')}
              className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                activeTab === 'transcriptome'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Transcriptome (3)
            </button>
            <button
              onClick={() => setActiveTab('metagenome')}
              className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                activeTab === 'metagenome'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Viral Metagenome (11)
            </button>
          </div>
        </div>

        {/* 1. PROTEOME SECTION */}
        {(activeTab === 'all' || activeTab === 'proteome') && (
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              <Activity className="w-5 h-5 text-teal-700" />
              <h2 className="font-serif text-xl font-bold text-slate-900">
                1. Proteome Datasets
              </h2>
            </div>

            <div className="divide-y divide-slate-200 border border-slate-200 rounded bg-white overflow-hidden shadow-2xs">
              {proteomeDatasets.map((ds) => (
                <div key={ds.id} className="p-5 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-3xl">
                    <div className="flex items-center gap-2">
                      <a
                        href={ds.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs font-bold text-teal-800 hover:underline inline-flex items-center gap-1"
                      >
                        <span>{ds.accession}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        Database: {ds.database}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-sans">
                      {ds.description}
                    </p>
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-300">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{ds.status}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 2. TRANSCRIPTOME SECTION */}
        {(activeTab === 'all' || activeTab === 'transcriptome') && (
          <section className="space-y-4 pt-4">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              <Dna className="w-5 h-5 text-blue-800" />
              <h2 className="font-serif text-xl font-bold text-slate-900">
                2. Transcriptome Datasets
              </h2>
            </div>

            <div className="divide-y divide-slate-200 border border-slate-200 rounded bg-white overflow-hidden shadow-2xs">
              {transcriptomeDatasets.map((ds) => (
                <div key={ds.id} className="p-5 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-3xl">
                    <div className="flex items-center gap-2">
                      <a
                        href={ds.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs font-bold text-blue-900 hover:underline inline-flex items-center gap-1"
                      >
                        <span>{ds.accession}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        Database: {ds.database}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-sans">
                      {ds.description}
                    </p>
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-300">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{ds.status}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. VIRAL METAGENOME SECTION (Illumina Platform) */}
        {(activeTab === 'all' || activeTab === 'metagenome') && (
          <section className="space-y-4 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-2">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-indigo-800" />
                <h2 className="font-serif text-xl font-bold text-slate-900">
                  3. Viral Metagenome (Illumina Platform)
                </h2>
              </div>
              <span className="text-xs text-slate-500 italic">
                First record is public; subsequent records are submitted and scheduled for public release.
              </span>
            </div>

            <div className="divide-y divide-slate-200 border border-slate-200 rounded bg-white overflow-hidden shadow-2xs">
              {viralMetagenomeDatasets.map((ds) => {
                const isPending = ds.status.includes('pending');
                return (
                  <div key={ds.id} className="p-5 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <a
                          href={ds.url}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-xs font-bold text-indigo-900 hover:underline inline-flex items-center gap-1"
                        >
                          <span>{ds.accession}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          {ds.database}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 font-sans">
                        {ds.description}
                      </p>
                    </div>

                    <div className="shrink-0">
                      {isPending ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded bg-amber-50 text-amber-900 border border-amber-300">
                          <Lock className="w-3 h-3" />
                          <span>Submitted, public release pending</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-300">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Public</span>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
