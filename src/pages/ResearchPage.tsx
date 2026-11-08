import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PlaceholderFrame } from '../components/PlaceholderFrame';
import { DiagnosticsWorkflowDiagram } from '../components/ScientificDiagrams';
import { technologiesDeveloped, technologiesInDevelopment } from '../data/technologiesData';
import { projectsList, isProjectOngoing } from '../data/projectsData';
import { ShieldAlert, Dna, Activity, Layers, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';

interface ResearchPageProps {
  initialSubTab?: 'domains' | 'technologies' | 'facilities';
  onNavigate: (route: string) => void;
}

export const ResearchPage: React.FC<ResearchPageProps> = ({
  initialSubTab = 'domains',
  onNavigate
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'domains' | 'technologies' | 'facilities'>(initialSubTab);

  useEffect(() => {
    if (initialSubTab) {
      setActiveSubTab(initialSubTab);
    }
  }, [initialSubTab]);

  const domains = [
    {
      id: 'domain-1',
      code: 'Domain 01',
      title: 'Outbreak Investigation and Diagnostic Services',
      description:
        'Rapid referral diagnostics and emergency investigation of high-consequence viral outbreaks across India. Directly responsible for national diagnostic preparedness for Crimean-Congo Haemorrhagic Fever (CCHF), Nipah virus, MERS coronavirus, Ebola, Japanese encephalitis (JE), West Nile fever, and transboundary livestock diseases within NIHSAD’s certified high-containment infrastructure.',
      keyAspects: [
        'National referral testing for emerging and exotic viral pathogens',
        'Consensus PCR/RT-PCR assays covering 12 viral families and 8 viral genera (PREDICT USA standard)',
        'Investigation of India’s index CCHF outbreak (2011, Gujarat) and post-outbreak surveillance',
        'Direct diagnostics support during Kerala Nipah outbreaks (2018 & 2019)'
      ],
      filterDomain: 'Outbreak Investigation'
    },
    {
      id: 'domain-2',
      code: 'Domain 02',
      title: 'Disease Surveillance and Epidemiology',
      description:
        'Systematic nationwide sentinel surveillance monitoring viral emergence and spillover dynamics across the human-animal-environmental interface. Current multi-centric programs operate across high human-animal interaction settings in Indian zoos, migratory bird flyway wetlands, bat populations, and synanthropic rodent communities.',
      keyAspects: [
        'One Health Sentinel Surveillance across 18 collaborating institutes in Indian zoos (NOHM & ICMR)',
        'Avian influenza and viral ecology along migratory bird flyways and North-Eastern wetland interfaces',
        'Active bat surveillance for Henipaviruses (Nipah), MERS-CoV, and Ebolaviruses',
        'Antarctic wildlife viral metagenomics (Adélie penguins, South Polar skuas, Weddell seals)'
      ],
      filterDomain: 'Disease Surveillance'
    },
    {
      id: 'domain-3',
      code: 'Domain 03',
      title: 'Infection Genomics and MetaViromics',
      description:
        'High-throughput genomics and deep sequencing to unravel viral pathogenesis, quasispecies evolution, and differential host immune responses. Pioneering systems-level multi-omics (transcriptomics, proteomics, phosphoproteomics, and metabolomics) comparing susceptible chicken models against tolerant waterfowl hosts during lethal H5N1 avian influenza infection.',
      keyAspects: [
        'Genome-wide transcriptomic and proteomic dissection of avian influenza H5N1 resilience',
        'Discovery of regulatory non-coding RNAs (miR-485 and miR-324-5p) suppressing influenza virus PB1 gene',
        'Development of custom 60K chicken and duck microarray chips for expression profiling',
        'Nanopore and Illumina whole-genome sequencing protocols for Indian viral isolates'
      ],
      filterDomain: 'Infection Genomics'
    },
    {
      id: 'domain-4',
      code: 'Domain 04',
      title: 'Next Generation Diagnostics and Vaccine Development',
      description:
        'Engineering point-of-care diagnostics (POCT) and novel immunotherapeutics for rapid field deployment and pandemic readiness. Current translational pipelines include multiplex serological arrays, strip-based nucleic acid lateral flow immunoassays (NALFIA), neutralising monoclonal antibodies against rabies, and prioritized animal vaccines.',
      keyAspects: [
        'Triplex NALFIA lateral flow strip test for concurrent Nipah, Reston Ebola, and MERS detection',
        'Universal diagnostic real-time PCR arrays for 22 exotic and emerging viruses (patenting)',
        'Preclinical neutralizing human monoclonal antibodies for rabies post-exposure prophylaxis',
        'Thermoresistant rinderpest vaccine and canine parvovirus DNA vaccine candidates'
      ],
      filterDomain: 'Next Generation Diagnostics'
    }
  ];

  const facilities = [
    {
      id: 'bsl3',
      title: 'BSL-3 Laboratory',
      statement: 'Biosafety Level 3 laboratory for work with high-risk pathogens.',
      images: [
        { src: '/images/facilities/bsl3-01.jpg', alt: 'BSL-3 Biocontainment Laboratory Suite 1' },
        { src: '/images/facilities/bsl3-02.jpg', alt: 'BSL-3 Biocontainment Laboratory Suite 2' },
        { src: '/images/facilities/bsl3-03.jpg', alt: 'BSL-3 Air Handling & Biocontainment Systems' }
      ]
    },
    {
      id: 'absl3',
      title: 'Animal BSL-3 (ABSL-3) Facility',
      statement: 'Animal Biosafety Level 3 facility for controlled experimental animal infections.',
      images: [
        { src: '/images/facilities/abs3-01.jpg', alt: 'Animal BSL-3 Containment Isolation Suite 1' },
        { src: '/images/facilities/abs3-02.jpg', alt: 'Animal BSL-3 Containment Isolation Suite 2' },
        { src: '/images/facilities/abs3-03.jpg', alt: 'Animal BSL-3 Bio-waste & Air Decontamination' }
      ]
    },
    {
      id: 'spf',
      title: 'Specific Pathogen Free (SPF) Unit',
      statement: 'Specific Pathogen Free unit ensuring pathogen-free experimental biological models.',
      images: [
        { src: '/images/facilities/spf-01.jpg', alt: 'SPF Unit Sterile Barrier Environment 1' },
        { src: '/images/facilities/spf-02.jpg', alt: 'SPF Unit Sterile Barrier Environment 2' },
        { src: '/images/facilities/spf-03.jpg', alt: 'SPF Unit Quality Verification & Monitoring' }
      ]
    },
    {
      id: 'large-animal',
      title: 'Pig and Cattle Experimental Facilities',
      statement: 'Large-animal experimental facilities for pigs and cattle under containment isolation.',
      images: [
        { src: '/images/facilities/large-animal-01.jpg', alt: 'Large Animal Containment Pen 1' },
        { src: '/images/facilities/large-animal-02.jpg', alt: 'Large Animal Containment Pen 2' }
      ]
    }
  ];

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs
        items={[
          { label: 'Research' },
          {
            label:
              activeSubTab === 'domains'
                ? 'Research Domains'
                : activeSubTab === 'technologies'
                ? 'Technologies Developed'
                : 'Advanced Facilities (BSL-3 & SPF Unit)'
          }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Sub-section Header & Tab Navigation */}
        <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
              Scientific Mandate
            </span>
            <h1 className="font-serif text-3xl font-bold text-slate-900 mt-1">
              Research Portfolio &amp; Infrastructure
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              High-containment virology, One Health disease surveillance, host-pathogen infection genomics, and translational diagnostics at ICAR-NIHSAD.
            </p>
          </div>

          <div className="flex border border-slate-300 rounded p-1 bg-slate-50 text-xs">
            <button
              onClick={() => setActiveSubTab('domains')}
              className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                activeSubTab === 'domains'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Domains
            </button>
            <button
              onClick={() => setActiveSubTab('technologies')}
              className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                activeSubTab === 'technologies'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Technologies Developed
            </button>
            <button
              onClick={() => setActiveSubTab('facilities')}
              className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                activeSubTab === 'facilities'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Facilities (BSL-3 &amp; SPF)
            </button>
          </div>
        </div>

        {/* 1. DOMAINS SUB-SECTION */}
        {activeSubTab === 'domains' && (
          <div className="space-y-10">
            {domains.map((dom) => {
              const relatedProjects = projectsList.filter(
                (p) => p.domain === dom.filterDomain
              );

              return (
                <section
                  key={dom.id}
                  id={dom.id}
                  className="bg-white border border-slate-200 rounded p-6 sm:p-8 shadow-xs space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                        {dom.code}
                      </span>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                        {dom.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl font-sans">
                    {dom.description}
                  </p>

                  {/* Scientific Highlights */}
                  <div className="bg-slate-50 border border-slate-200 rounded p-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Key Scientific Deliverables &amp; Milestones
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700">
                      {dom.keyAspects.map((aspect, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-teal-700 font-bold">•</span>
                          <span>{aspect}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Related Projects from Project Table */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                        Related Projects in this Domain ({relatedProjects.length})
                      </h3>
                      <button
                        onClick={() => onNavigate('projects')}
                        className="text-xs font-semibold text-teal-800 hover:underline"
                      >
                        View all in Lab Projects table →
                      </button>
                    </div>

                    <div className="divide-y divide-slate-100 border border-slate-200 rounded overflow-hidden">
                      {relatedProjects.map((proj) => {
                        const ongoing = isProjectOngoing(proj);
                        return (
                          <div
                            key={proj.sn}
                            className={`p-3 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                              ongoing ? 'bg-emerald-50/40' : 'bg-slate-50/30'
                            }`}
                          >
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-[11px] text-slate-500">
                                  #{proj.sn}
                                </span>
                                <span className="font-semibold text-slate-900">
                                  {proj.title}
                                </span>
                              </div>
                              <div className="text-[11px] text-slate-500">
                                {proj.fundingAgency} · Role: {proj.position} · Funds: {proj.fundsInLakh} Lakh INR
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <span
                                className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${
                                  ongoing
                                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                                    : 'bg-rose-100 text-rose-800 border-rose-300'
                                }`}
                              >
                                {ongoing ? 'Ongoing' : 'Completed'}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* 2. TECHNOLOGIES DEVELOPED SUB-SECTION */}
        {activeSubTab === 'technologies' && (
          <div className="space-y-10">
            {/* Diagram of diagnostic platforms */}
            <DiagnosticsWorkflowDiagram />

            {/* Published / Validated Technologies */}
            <section className="space-y-4">
              <div className="border-b border-slate-200 pb-2 flex items-baseline justify-between">
                <div>
                  <h2 className="font-serif text-xl font-bold text-slate-900">
                    Validated Technologies &amp; Diagnostic Kits
                  </h2>
                  <p className="text-xs text-slate-600">
                    Documented diagnostic kits, microarrays, and vaccines developed through the PI's research programs.
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {technologiesDeveloped.length} Technologies
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {technologiesDeveloped.map((tech) => (
                  <div
                    key={tech.id}
                    className="bg-white border border-slate-200 rounded p-5 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="font-mono text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          TECH #{tech.id}
                        </span>
                        {tech.status === 'Under process for patenting' ? (
                          <span className="text-[11px] font-semibold bg-amber-50 text-amber-900 border border-amber-300 px-2 py-0.5 rounded">
                            Under process for patenting
                          </span>
                        ) : (
                          <span className="text-[11px] font-mono text-slate-500">
                            Year: {tech.year}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif font-bold text-sm text-slate-900 leading-snug">
                        {tech.name}
                      </h3>
                    </div>

                    <div className="pt-2 border-t border-slate-100 text-xs text-slate-600">
                      <span className="font-medium text-slate-500">Reference / Repository: </span>
                      <span className="font-mono text-[11px] text-teal-800 break-words">
                        {tech.referenceOrStatus}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies In Development */}
            <section className="space-y-4 pt-4">
              <div className="border-b border-slate-200 pb-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <h2 className="font-serif text-xl font-bold text-slate-900">
                    Technologies in Development
                  </h2>
                </div>
                <p className="text-xs text-slate-600 mt-0.5">
                  Translational diagnostics, therapeutics, and vaccine pipelines currently under active investigation across ongoing extramural grants.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {technologiesInDevelopment.map((tech) => (
                  <div
                    key={tech.id}
                    className="bg-amber-50/40 border border-amber-200/80 rounded p-5 shadow-2xs flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                          Pipeline Active
                        </span>
                        <span className="text-[11px] font-semibold text-slate-700">
                          In Development
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-sm text-slate-900 leading-snug">
                        {tech.name}
                      </h3>
                    </div>

                    <div className="pt-2 border-t border-amber-200/60 text-xs text-slate-700 space-y-1">
                      <div>
                        <span className="font-medium text-slate-500">Linked Project: </span>
                        <span>{tech.projectLinked}</span>
                      </div>
                      <div>
                        <span className="font-medium text-slate-500">Framework: </span>
                        <span>{tech.referenceOrStatus}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* 3. FACILITIES SUB-SECTION (Advanced BSL-3 & SPF Unit showpiece) */}
        {activeSubTab === 'facilities' && (
          <div className="space-y-12">
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded border border-slate-800 shadow-md">
              <div className="max-w-3xl space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                  Certified Containment Infrastructure
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  High-Security Biocontainment &amp; Specialized Animal Facilities
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  The Zoonotic Diseases Group conducts high-consequence viral investigations within the advanced containment facilities of ICAR-NIHSAD. Photographs will be updated by the laboratory; plain dummy placeholder image slots are provided in exact ratios per specification B10.
                </p>
              </div>
            </div>

            {facilities.map((fac) => (
              <section key={fac.id} className="bg-white border border-slate-200 rounded p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                    {fac.title}
                  </h3>
                  {/* Exactly one short plain sentence as per specification */}
                  <p className="text-sm text-slate-600 mt-1 font-sans">
                    {fac.statement}
                  </p>
                </div>

                {/* Small gallery of dummy images per B10 */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 ${fac.images.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2 max-w-3xl'} gap-4`}>
                  {fac.images.map((img, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <PlaceholderFrame
                        src={img.src}
                        alt={img.alt}
                        ratio="3:2"
                        caption={`${fac.title} (Slot ${idx + 1})`}
                      />
                      <div className="text-[11px] text-slate-500 text-center font-mono">
                        {img.src.replace('/images/', '')}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
