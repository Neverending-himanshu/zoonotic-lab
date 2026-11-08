import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  publicationStats,
  featuredPublications,
  allArticlesList,
  bookChaptersList,
  patentsList
} from '../data/publicationsData';
import { PublicationArticle } from '../types';
import { Search, ExternalLink, BookOpen, FileText, Lightbulb, Star, Filter } from 'lucide-react';

interface PublicationsPageProps {
  initialSubTab?: 'articles' | 'chapters' | 'patents';
  onNavigate: (route: string) => void;
}

export const PublicationsPage: React.FC<PublicationsPageProps> = ({
  initialSubTab = 'articles',
  onNavigate
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'articles' | 'chapters' | 'patents'>(initialSubTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  // Highlight PI's name (Raut AA) in author lists as required by A9
  const renderFormattedAuthors = (authors: string) => {
    const parts = authors.split(/(Raut AA|Ashwin Ashok Raut)/gi);
    return (
      <span>
        {parts.map((part, index) => {
          if (part.toLowerCase() === 'raut aa' || part.toLowerCase() === 'ashwin ashok raut') {
            return (
              <strong key={index} className="font-bold text-slate-950 underline decoration-teal-600 decoration-1.5 underline-offset-2">
                {part}
              </strong>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </span>
    );
  };

  // Filter articles
  const filteredArticles = useMemo(() => {
    return allArticlesList.filter((article) => {
      const matchesSearch =
        searchQuery === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.doi && article.doi.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesYear =
        selectedYear === 'all' ||
        (selectedYear === 'earlier' ? article.year < 2015 : article.year.toString() === selectedYear);

      return matchesSearch && matchesYear;
    });
  }, [searchQuery, selectedYear]);

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs
        items={[
          { label: 'Publications' },
          {
            label:
              activeSubTab === 'articles'
                ? 'Research Articles'
                : activeSubTab === 'chapters'
                ? 'Book Chapters'
                : 'Patents'
          }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header & Sub-navigation */}
        <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
              Scholarly Output
            </span>
            <h1 className="font-serif text-3xl font-bold text-slate-900 mt-1">
              Publications, Chapters &amp; Patents
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Peer-reviewed virology research, book chapters, and diagnostic patent applications.
            </p>
          </div>

          <div className="flex border border-slate-300 rounded p-1 bg-slate-50 text-xs">
            <button
              onClick={() => setActiveSubTab('articles')}
              className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                activeSubTab === 'articles'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Research Articles
            </button>
            <button
              onClick={() => setActiveSubTab('chapters')}
              className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                activeSubTab === 'chapters'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Book Chapters
            </button>
            <button
              onClick={() => setActiveSubTab('patents')}
              className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                activeSubTab === 'patents'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Patents (Under Process)
            </button>
          </div>
        </div>

        {/* SUMMARY BANNER AT THE TOP (Required by A5 & B5) */}
        <div className="bg-slate-900 text-white rounded p-6 shadow-md border border-slate-800">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            <div className="p-2">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-teal-300">
                {publicationStats.totalArticles}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Research Articles</div>
            </div>
            <div className="p-2">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-teal-300">
                {publicationStats.cumulativeImpactFactor}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Cumulative IF</div>
            </div>
            <div className="p-2">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-teal-300">
                {publicationStats.citations}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Total Citations</div>
            </div>
            <div className="p-2">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-teal-300">
                {publicationStats.hIndex} / {publicationStats.i10Index}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">h-index / i10-index</div>
            </div>
            <div className="p-2">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-teal-300">
                {publicationStats.totalBookChapters}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Book Chapters</div>
            </div>
            <div className="p-2">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-400">
                {publicationStats.patentsUnderProcess}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Patents Under Process</div>
            </div>
          </div>
        </div>

        {/* SUBTAB 1: RESEARCH ARTICLES */}
        {activeSubTab === 'articles' && (
          <div className="space-y-8">
            {/* FEATURED PUBLICATIONS ROW (Top of page per A5 & B5) */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <h2 className="font-serif text-lg font-bold text-slate-900">
                  Featured Research Articles
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredPublications.map((article) => (
                  <div
                    key={article.id}
                    className="bg-white border-2 border-teal-600/30 rounded p-5 shadow-xs hover:border-teal-600 transition-colors flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono font-bold text-teal-900 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                          {article.journal} ({article.year})
                        </span>
                        <span className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                          Impact Factor: {article.impactFactor}
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-sm sm:text-base text-slate-900 leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        {renderFormattedAuthors(article.authors)}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-mono text-[11px]">
                        {article.volumePages}
                      </span>
                      {article.doi && (
                        <a
                          href={article.doi}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center text-teal-800 hover:text-teal-950 font-semibold text-xs"
                        >
                          <span>DOI Article</span>
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ALL ARTICLES: SEARCH & YEAR FILTER */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif text-xl font-bold text-slate-900">
                    All Research Articles
                  </h2>
                  <p className="text-xs text-slate-500">
                    Sorted newest first. Author name <strong className="text-slate-900">Raut AA</strong> highlighted in bold.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Search input */}
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search title, author, journal..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-300 rounded focus:outline-hidden focus:border-teal-700 focus:ring-1 focus:ring-teal-700"
                    />
                  </div>

                  {/* Year Filter */}
                  <div className="flex items-center gap-1.5 text-xs">
                    <Filter className="w-3.5 h-3.5 text-slate-500" />
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="bg-white border border-slate-300 rounded px-2.5 py-1.5 text-xs text-slate-700 focus:outline-hidden focus:border-teal-700"
                    >
                      <option value="all">All Years</option>
                      <option value="2026">2026</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="earlier">Before 2015</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Articles List */}
              <div className="divide-y divide-slate-200 border border-slate-200 rounded bg-white overflow-hidden shadow-2xs">
                {filteredArticles.length === 0 ? (
                  <div className="p-8 text-center text-xs text-slate-500">
                    No publications match your search query.
                  </div>
                ) : (
                  filteredArticles.map((article, idx) => (
                    <article key={article.id} className="p-5 hover:bg-slate-50/80 transition-colors space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                        <span className="font-mono text-teal-800 font-semibold">
                          #{idx + 1} · {article.journal} ({article.year})
                        </span>
                        {article.impactFactor && (
                          <span className="text-[11px] font-mono text-slate-500">
                            IF: {article.impactFactor}
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {renderFormattedAuthors(article.authors)}
                      </p>

                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-slate-500 font-mono text-[11px]">
                          {article.volumePages}
                        </span>
                        {article.doi && (
                          <a
                            href={article.doi}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center text-teal-800 hover:text-teal-950 font-semibold"
                          >
                            <span>DOI / Link</span>
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        )}
                      </div>
                    </article>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: BOOK CHAPTERS */}
        {activeSubTab === 'chapters' && (
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-2">
              <h2 className="font-serif text-xl font-bold text-slate-900">
                Book Chapters ({bookChaptersList.length})
              </h2>
              <p className="text-xs text-slate-600">
                Authoritative contributions to infectious diseases, transboundary animal viruses, and emergency disease management.
              </p>
            </div>

            <div className="divide-y divide-slate-200 border border-slate-200 rounded bg-white overflow-hidden shadow-2xs">
              {bookChaptersList.map((ch) => (
                <div key={ch.id} className="p-5 hover:bg-slate-50 transition-colors space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>Chapter #{ch.id}</span>
                    <span>Year: {ch.year}</span>
                  </div>

                  <h3 className="font-serif text-base font-bold text-slate-900">
                    {ch.title}
                  </h3>

                  <p className="text-xs text-slate-700">
                    {renderFormattedAuthors(ch.authors)}
                  </p>

                  <div className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded border border-slate-200">
                    <span className="font-medium text-slate-800">In: </span>
                    <span className="italic">{ch.bookTitle}</span>. {ch.editor ? `Edited by ${ch.editor}. ` : ''}
                    {ch.publisher}. pp {ch.pages}.
                  </div>

                  {ch.doi && (
                    <div className="pt-1">
                      <a
                        href={ch.doi}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-xs font-semibold text-teal-800 hover:underline"
                      >
                        <span>Chapter DOI / Publisher Link</span>
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUBTAB 3: PATENTS */}
        {activeSubTab === 'patents' && (
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-2">
              <h2 className="font-serif text-xl font-bold text-slate-900">
                Intellectual Property &amp; Patents
              </h2>
              <p className="text-xs text-slate-600">
                Diagnostic technologies and positive control constructs currently under process for patenting.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {patentsList.map((patent) => (
                <div
                  key={patent.id}
                  className="bg-white border border-slate-200 rounded p-6 shadow-2xs space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded border border-amber-300 w-fit">
                      {patent.status}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {patent.number || '[Patent Number under process]'}
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900">
                    {patent.title}
                  </h3>

                  <div className="text-xs text-slate-600">
                    <strong className="text-slate-800">Inventors: </strong>
                    {patent.inventors}
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Filing Jurisdiction: India (Patent Office, Govt of India)</span>
                    <span className="italic">Formal filing numbers will be updated upon final registry grant.</span>
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
