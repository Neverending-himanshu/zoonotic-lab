import React, { useState } from 'react';
import { Dna, ShieldCheck, Activity, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export const OneHealthDiagram: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<'animal' | 'human' | 'environment' | 'nexus'>('nexus');

  return (
    <div className="bg-white rounded border border-slate-200 p-6 md:p-8 shadow-xs">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Three-Circle Venn Diagram SVG */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <svg
            viewBox="0 0 440 400"
            className="w-full max-w-[380px] h-auto select-none drop-shadow-xs"
            aria-label="One Health Three-Circle Venn Diagram"
          >
            {/* Top Circle: Ecosystem & Wildlife (Teal Palette) */}
            <circle
              cx="220"
              cy="145"
              r="115"
              fill={activeSegment === 'environment' || activeSegment === 'nexus' ? 'rgba(13, 148, 136, 0.16)' : 'rgba(13, 148, 136, 0.07)'}
              stroke="#0d9488"
              strokeWidth={activeSegment === 'environment' ? '2.5' : '1.8'}
              strokeDasharray={activeSegment === 'environment' ? 'none' : '4 2'}
              className="cursor-pointer transition-all duration-200 hover:fill-teal-100/70"
              onClick={() => setActiveSegment('environment')}
            />

            {/* Bottom-Left Circle: Animal Health (Blue Palette) */}
            <circle
              cx="150"
              cy="250"
              r="115"
              fill={activeSegment === 'animal' || activeSegment === 'nexus' ? 'rgba(30, 58, 138, 0.15)' : 'rgba(30, 58, 138, 0.07)'}
              stroke="#1e3a8a"
              strokeWidth={activeSegment === 'animal' ? '2.5' : '1.8'}
              className="cursor-pointer transition-all duration-200 hover:fill-blue-100/70"
              onClick={() => setActiveSegment('animal')}
            />

            {/* Bottom-Right Circle: Human Health (Amber/Rust Palette) */}
            <circle
              cx="290"
              cy="250"
              r="115"
              fill={activeSegment === 'human' || activeSegment === 'nexus' ? 'rgba(180, 83, 9, 0.15)' : 'rgba(180, 83, 9, 0.07)'}
              stroke="#b45309"
              strokeWidth={activeSegment === 'human' ? '2.5' : '1.8'}
              className="cursor-pointer transition-all duration-200 hover:fill-amber-100/70"
              onClick={() => setActiveSegment('human')}
            />



            {/* Top Circle Labels: Ecosystem & Wildlife (Multi-line formatted inside circle) */}
            <g className="cursor-pointer" onClick={() => setActiveSegment('environment')}>
              <text
                x="220"
                y="76"
                textAnchor="middle"
                className="text-[13.5px] font-bold fill-teal-950 font-sans tracking-wide"
              >
                Ecosystem &amp; Wildlife
              </text>
              <text
                x="220"
                y="96"
                textAnchor="middle"
                className="text-[10.5px] font-medium fill-teal-800 font-sans"
              >
                Flyways · Habitats
              </text>
              <text
                x="220"
                y="112"
                textAnchor="middle"
                className="text-[10px] fill-teal-700 font-sans"
              >
                Antarctica Reservoirs
              </text>
            </g>

            {/* Bottom-Left Circle Labels: Animal Health (Multi-line formatted inside circle) */}
            <g className="cursor-pointer" onClick={() => setActiveSegment('animal')}>
              <text
                x="112"
                y="280"
                textAnchor="middle"
                className="text-[13.5px] font-bold fill-blue-950 font-sans tracking-wide"
              >
                Animal Health
              </text>
              <text
                x="112"
                y="300"
                textAnchor="middle"
                className="text-[10.5px] font-medium fill-blue-800 font-sans"
              >
                Livestock &amp; Poultry
              </text>
              <text
                x="112"
                y="316"
                textAnchor="middle"
                className="text-[10px] fill-blue-700 font-sans"
              >
                Vectors &amp; Reservoirs
              </text>
            </g>

            {/* Bottom-Right Circle Labels: Human Health (Multi-line formatted inside circle) */}
            <g className="cursor-pointer" onClick={() => setActiveSegment('human')}>
              <text
                x="328"
                y="280"
                textAnchor="middle"
                className="text-[13.5px] font-bold fill-amber-950 font-sans tracking-wide"
              >
                Human Health
              </text>
              <text
                x="328"
                y="300"
                textAnchor="middle"
                className="text-[10.5px] font-medium fill-amber-900 font-sans"
              >
                Zoonotic Spillover
              </text>
              <text
                x="328"
                y="316"
                textAnchor="middle"
                className="text-[10px] fill-amber-800 font-sans"
              >
                Clinics &amp; Outbreaks
              </text>
            </g>

            {/* Center Intersection: Two-line ONE HEALTH text in bold black with no background, badge, box, or decorative shapes */}
            <g className="cursor-pointer select-none" onClick={() => setActiveSegment('nexus')}>
              <text
                x="220"
                y="209"
                textAnchor="middle"
                style={{ fill: '#000000', fontWeight: 800 }}
                className="text-[15px] font-bold tracking-wider font-sans select-none"
              >
                ONE
              </text>
              <text
                x="220"
                y="227"
                textAnchor="middle"
                style={{ fill: '#000000', fontWeight: 800 }}
                className="text-[15px] font-bold tracking-wider font-sans select-none"
              >
                HEALTH
              </text>
            </g>
          </svg>
        </div>

        {/* Narrative & Deep Context */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-widest mb-1.5">
            <Activity className="w-4 h-4 text-teal-700" />
            Core Framework
          </div>
          <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
            The One Health Paradigm in Zoonotic Surveillance
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Pathogens do not respect species barriers. Over 70% of emerging infectious diseases in humans originate in animals. Our laboratory investigates viral evolution across the shared interface of domestic animals, wildlife, and natural ecosystems.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded p-3.5 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-900">
                {activeSegment === 'nexus' && "Integrated Surveillance Nexus"}
                {activeSegment === 'animal' && "Animal & Livestock Reservoir Pillar"}
                {activeSegment === 'human' && "Human Health & Spillover Interface"}
                {activeSegment === 'environment' && "Ecosystem, Flyway & Polar Reservoirs"}
              </span>
              <span className="text-[11px] text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 font-medium">
                Interactive Focus
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {activeSegment === 'nexus' &&
                "Multi-institutional sentinel surveillance across 18 partner institutes, establishing early-warning alerts for Nipah, CCHF, Avian Influenza, and Kyasanur Forest Disease."}
              {activeSegment === 'animal' &&
                "Systematic molecular and serological profiling of poultry, buffaloes, cattle, camels, and swine within high-containment ABSL-3 suites."}
              {activeSegment === 'human' &&
                "Diagnostic preparedness and rapid referral testing for fatal outbreaks, including Gujarat CCHF and Kerala Nipah outbreak investigations."}
              {activeSegment === 'environment' &&
                "Metaviromic tracking across migratory waterfowl flyways in Assam wetlands and polar fauna sampled during the Indian Scientific Expedition to Antarctica."}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {(['nexus', 'animal', 'human', 'environment'] as const).map(seg => (
              <button
                key={seg}
                onClick={() => setActiveSegment(seg)}
                className={`text-[11px] px-3 py-1.5 rounded transition-all font-medium capitalize cursor-pointer ${
                  activeSegment === seg
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {seg === 'nexus' ? 'Tri-Nexus' : seg === 'animal' ? 'Animal Health' : seg === 'human' ? 'Human Health' : 'Ecosystem & Wildlife'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const MetaviromicsPipelineDiagram: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Sampling & Enrichment",
      desc: "Oral, cloacal, and tissue biospecimens from migratory waterfowl, bats, and Antarctic fauna; filter filtration & nuclease digest."
    },
    {
      num: "02",
      title: "High-Throughput NGS",
      desc: "Illumina & Oxford Nanopore deep sequencing platforms yielding millions of paired-end metagenomic reads."
    },
    {
      num: "03",
      title: "Bioinformatic Pipeline",
      desc: "Quality trimming, host genomic subtraction (Agilent 60K arrays), and de novo viral contig assembly."
    },
    {
      num: "04",
      title: "Taxonomic & Phylogenetics",
      desc: "Pan-viral BLAST classification, quasispecies identification, and phylogeographical molecular dating."
    }
  ];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded p-6">
      <div className="flex items-center gap-2 mb-3">
        <Dna className="w-5 h-5 text-teal-700" />
        <h4 className="font-serif text-base font-bold text-slate-900">
          In-House Viral Metagenomics & Pathogen Discovery Workflow
        </h4>
      </div>
      <p className="text-xs text-slate-600 mb-6 max-w-2xl">
        Standardized computational and molecular pipeline validated for pan-viral discovery across 12 viral families and 8 viral genera (PREDICT USA and ICAR-NIHSAD benchmarks).
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((st, idx) => (
          <div key={st.num} className="bg-white border border-slate-200 rounded p-4 relative group hover:border-teal-400 transition-colors shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                STEP {st.num}
              </span>
              {idx < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-slate-300 hidden lg:block" />
              )}
            </div>
            <h5 className="text-sm font-semibold text-slate-900 mb-1.5">{st.title}</h5>
            <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const DiagnosticsWorkflowDiagram: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded p-6 shadow-xs">
      <div className="flex items-center gap-2 mb-2">
        <ShieldCheck className="w-5 h-5 text-blue-900" />
        <h4 className="font-serif text-base font-bold text-slate-900">
          Multiplex & POCT Diagnostic Architectures
        </h4>
      </div>
      <p className="text-xs text-slate-600 mb-5">
        From high-throughput real-time PCR arrays in BSL-3 biocontainment to field-ready paper-strip lateral flow immunoassays.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-slate-200 bg-slate-50/70 rounded p-4">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-teal-700" />
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Triplex NALFIA Dipstick Test (2024)
            </h5>
          </div>
          <div className="h-10 bg-white border border-slate-300 rounded flex items-center px-4 justify-between text-[11px] font-mono text-slate-700 mb-3">
            <span className="text-slate-400">Sample Pad</span>
            <span className="text-amber-800 font-bold border-l pl-2">MERS Line</span>
            <span className="text-rose-700 font-bold border-l pl-2">Nipah Line</span>
            <span className="text-indigo-800 font-bold border-l pl-2">Ebola Line</span>
            <span className="text-emerald-700 font-bold border-l pl-2">Control (C)</span>
          </div>
          <p className="text-xs text-slate-600 leading-normal">
            Strip-based point-of-care nucleic acid lateral flow immunoassay enabling simultaneous visual differentiation of Nipah, Reston Ebola, and MERS coronaviruses in 30 minutes without thermal cyclers.
          </p>
        </div>

        <div className="border border-slate-200 bg-slate-50/70 rounded p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-blue-800" />
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Universal Diagnostic PCR Array (Patenting)
            </h5>
          </div>
          <div className="grid grid-cols-4 gap-1 mb-3 text-[10px] text-center font-mono">
            {['CCHFV', 'Nipah', 'MERS', 'Ebola', 'JEV', 'WNFV', 'RVFV', 'ASFV'].map((v, i) => (
              <div key={v} className={`py-1 rounded border ${i % 2 === 0 ? 'bg-teal-50 border-teal-200 text-teal-900 font-semibold' : 'bg-blue-50 border-blue-200 text-blue-900'}`}>
                {v}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-600 leading-normal">
            Dual platforms utilizing SYBR Green and Molecular Beacon chemistries for simultaneous screening of up to 22 exotic, tick-borne, and porcine viral pathogens under strict biocontainment conditions.
          </p>
        </div>
      </div>
    </div>
  );
};
